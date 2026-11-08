// Dev helper: verify the motion system works against a given server
// (use the production server to mirror Vercel), on Chrome or on WebKit
// (Safari's engine, i.e. what every iPhone browser uses).
// Usage: SITE_URL=http://localhost:3001 BROWSER=webkit node scripts/animation-check.mjs
import { chromium, webkit, devices } from "playwright";

const base = process.env.SITE_URL ?? "http://localhost:3000";
const engine = process.env.BROWSER === "webkit" ? webkit : chromium;
const launchOptions = engine === chromium ? { channel: "chrome", headless: true } : { headless: true };
const browser = await engine.launch(launchOptions);
console.log(`engine: ${engine.name()}  url: ${base}`);

for (const reduced of ["no-preference", "reduce"]) {
  const context = await browser.newContext({ ...devices["iPhone 14"], reducedMotion: reduced });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  const before = await page.evaluate(() => {
    const h1 = document.querySelector(".hero-in h1");
    const ring = document.querySelector(".animate-breathe");
    const cs = (el) => (el ? getComputedStyle(el) : null);
    return {
      h1Animation: cs(h1)?.animationName,
      h1Duration: cs(h1)?.animationDuration,
      ringAnimation: cs(ring)?.animationName,
      ringDuration: cs(ring)?.animationDuration,
      revealTotal: document.querySelectorAll(".reveal").length,
      revealVisible: document.querySelectorAll(".reveal.is-visible").length,
      firstRevealOpacityBefore: getComputedStyle(document.querySelector(".reveal")).opacity,
      hydrated: Boolean(document.querySelector("header button[aria-controls]")),
      jsClass: document.documentElement.classList.contains("js"),
    };
  });

  // Scroll through the page so IntersectionObserver fires.
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
  });
  await page.waitForTimeout(800);
  const after = await page.evaluate(() => ({
    revealVisible: document.querySelectorAll(".reveal.is-visible").length,
    firstRevealOpacity: getComputedStyle(document.querySelector(".reveal")).opacity,
  }));

  console.log(`prefers-reduced-motion: ${reduced}`);
  console.log(`  hero h1 animation: ${before.h1Animation} (${before.h1Duration})`);
  console.log(`  breathing ring animation: ${before.ringAnimation} (${before.ringDuration})`);
  console.log(
    `  reveal: ${before.revealTotal} total · visible before scroll ${before.revealVisible} (opacity ${before.firstRevealOpacityBefore}) · after scroll ${after.revealVisible} (opacity ${after.firstRevealOpacity})`,
  );
  console.log(`  hydrated: ${before.hydrated} · html.js: ${before.jsClass} · errors: ${errors.length ? errors.join(" | ") : "none"}`);
  await context.close();
}

await browser.close();
