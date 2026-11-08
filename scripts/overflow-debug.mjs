// Dev helper: find what widens the document on mobile, across viewport widths.
// Usage: SITE_URL=http://localhost:3001 WIDTHS=320,375,393,430,440 BROWSER=webkit node scripts/overflow-debug.mjs [route]
import { chromium, webkit, devices } from "playwright";

const route = process.argv[2] ?? "/";
const base = process.env.SITE_URL ?? "http://localhost:3000";
const widths = (process.env.WIDTHS ?? "320,375,393,430,440").split(",").map(Number);
const engine = process.env.BROWSER === "webkit" ? webkit : chromium;

const browser = await engine.launch(engine === chromium ? { channel: "chrome", headless: true } : { headless: true });
console.log(`engine: ${engine.name()}  url: ${base}${route}`);

// DEVICE="iPhone SE" uses Playwright's exact device profile instead of plain widths.
const device = process.env.DEVICE ? devices[process.env.DEVICE] : null;
if (process.env.DEVICE && !device) throw new Error(`Unknown device: ${process.env.DEVICE}`);

for (const width of device ? [device.viewport.width] : widths) {
  const context = await browser.newContext(
    device ?? {
      viewport: { width, height: 800 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    },
  );
  const page = await context.newPage();
  await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  const report = await page.evaluate(() => {
    const doc = document.documentElement;
    const w = doc.clientWidth;
    // Content inside a horizontal scroll container (chip rows) is allowed past
    // the viewport. Everything else that carries text and is in normal flow
    // is a layout bug even when an ancestor's overflow:hidden masks it —
    // the user still sees cut-off text.
    const inScroller = (el) => {
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if (o === "auto" || o === "scroll") return true;
      }
      return false;
    };
    const offenders = [];
    let maxRight = 0;
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      const cs = getComputedStyle(el);
      const decorative = cs.position === "absolute" || cs.position === "fixed" || el.getAttribute("aria-hidden") === "true";
      const hasText = (el.textContent ?? "").trim().length > 0;
      // Text that overflows its own box (e.g. one long word wider than the
      // column) doesn't change the box's rect — catch it via scrollWidth.
      const textSpills = hasText && cs.overflowX === "visible" && el.scrollWidth > el.clientWidth + 1 && r.left + el.scrollWidth > w + 1;
      if (textSpills) {
        maxRight = Math.max(maxRight, r.left + el.scrollWidth);
        offenders.push(
          `<${el.tagName.toLowerCase()} class="${[...el.classList].slice(0, 6).join(" ")}"> text spills to ${Math.round(r.left + el.scrollWidth)} "${(el.textContent ?? "").trim().slice(0, 30)}"`,
        );
        continue;
      }
      if (r.right > w + 1 && hasText && !decorative && !inScroller(el)) {
        maxRight = Math.max(maxRight, r.right);
        offenders.push(
          `<${el.tagName.toLowerCase()} class="${[...el.classList].slice(0, 6).join(" ")}"> right=${Math.round(r.right)} "${(el.textContent ?? "").trim().slice(0, 30)}"`,
        );
      }
    }
    // body { overflow-x: clip } hides overflow from scrollWidth, so also report
    // how far content actually extends past the viewport.
    return { overflow: doc.scrollWidth - w, beyond: Math.max(0, Math.round(maxRight - w)), offenders: offenders.slice(0, 6) };
  });

  console.log(`${width}px  scroll-overflow=${report.overflow}px  content-beyond-viewport=${report.beyond}px`);
  for (const o of report.offenders) console.log(`   ${o}`);
  await context.close();
}

await browser.close();
