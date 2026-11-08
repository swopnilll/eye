// Dev helper: WebKit (Safari engine) iPhone SE screenshots of a URL —
// mid-entrance-animation, settled, and after scrolling.
// Usage: node scripts/live-shots.mjs <outDir> [url]
import { webkit, devices } from "playwright";
const [outDir, url = "https://ira-website-blush.vercel.app/"] = process.argv.slice(2);
const browser = await webkit.launch();
const ctx = await browser.newContext({ ...devices["iPhone SE"], reducedMotion: "no-preference" });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.screenshot({ path: `${outDir}/se-t0.png` });
await page.waitForTimeout(1200);
await page.screenshot({ path: `${outDir}/se-t1.png` });
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(900);
await page.screenshot({ path: `${outDir}/se-scrolled.png` });
console.log("viewport", page.viewportSize());
await browser.close();
