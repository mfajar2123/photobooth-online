import { chromium, devices } from '@playwright/test';

const base = process.argv[2] ?? 'http://127.0.0.1:4325';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ...devices['iPhone 13'] });
await context.addInitScript(() => {
  window.__loadAudit = { lcp: 0, cls: 0 };
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) window.__loadAudit.lcp = entry.startTime;
  }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__loadAudit.cls += entry.value;
  }).observe({ type: 'layout-shift', buffered: true });
});
for (const route of ['/', '/artikel/', '/panduan/', '/studio/']) {
  const page = await context.newPage();
  const failed = [];
  page.on('requestfailed', (request) => failed.push(`${request.url()}: ${request.failure()?.errorText}`));
  const response = await page.goto(new URL(route, base).href, { waitUntil: 'load', timeout: 60_000 });
  await page.waitForTimeout(1500);
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    return { loadMs: Math.round(navigation.loadEventEnd), fcpMs: Math.round(fcp?.startTime ?? 0), lcpMs: Math.round(window.__loadAudit.lcp), cls: Number(window.__loadAudit.cls.toFixed(3)), requests: performance.getEntriesByType('resource').length };
  });
  console.log(JSON.stringify({ route, status: response?.status(), ...metrics, failed }));
  await page.close();
}
await browser.close();
