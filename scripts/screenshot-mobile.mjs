// Dev helper: mobile screenshots of key routes using the installed Chrome via
// playwright-core (no browser download). Captures viewport-sized chunks down
// the page (full-page captures are too tall to review) and reports any
// elements that overflow the viewport horizontally.
// Usage: node scripts/screenshot-mobile.mjs <outDir> [route ...]
import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const [outDir = "./screenshots", ...routes] = process.argv.slice(2);
const pages = routes.length ? routes : ["/", "/services", "/apply", "/contact", "/care-packages"];
const base = process.env.SITE_URL ?? "http://localhost:3000";
const maxChunks = Number(process.env.CHUNKS ?? 6);

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({ ...devices["iPhone 14"], reducedMotion: "reduce" });
const page = await context.newPage();

for (const route of pages) {
  const name = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
  await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const { viewportH, scrollH, overflow, offenders } = await page.evaluate(() => {
    const doc = document.documentElement;
    const w = doc.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.right > w + 1) {
        offenders.push(
          `<${el.tagName.toLowerCase()} class="${[...el.classList].slice(0, 5).join(" ")}"> right=${Math.round(r.right)}`,
        );
      }
    }
    return {
      viewportH: window.innerHeight,
      scrollH: doc.scrollHeight,
      overflow: doc.scrollWidth - w,
      offenders: offenders.slice(0, 8),
    };
  });

  const chunks = Math.min(maxChunks, Math.ceil(scrollH / viewportH));
  for (let i = 0; i < chunks; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * viewportH);
    await page.waitForTimeout(250);
    await page.screenshot({ path: join(outDir, `${name}-${i + 1}.png`) });
  }
  // Always capture the page bottom (footer) too.
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(outDir, `${name}-bottom.png`) });
  // And the open mobile menu, once.
  if (route === pages[0]) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.click('button[aria-controls="mobile-nav"]');
    await page.waitForTimeout(300);
    await page.screenshot({ path: join(outDir, `${name}-menu.png`) });
  }
  console.log(`${route}: ${chunks} chunk(s), overflow ${overflow}px`);
  for (const o of offenders) console.log(`   ${o}`);
}

await browser.close();
