import { expect, test } from '@playwright/test';

const viewports = [
  { width: 390, height: 844 },
  { width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`undangan hub has no horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/undangan/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test(`invitation page has no horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/undangan/dimas-nabila/');
    await page.getByRole('button', { name: /Buka undangan/i }).click();
    await expect(page.locator('#undangan-content')).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
