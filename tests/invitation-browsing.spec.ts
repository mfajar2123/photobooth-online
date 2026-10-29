import { test, expect } from '@playwright/test';

test('homepage balances two product photos without covering the hero text', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-mini-photo')).toHaveCount(2);
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate(() => document.fonts.ready);
    const overlaps = await page.evaluate(() => {
      const text = document.querySelector('.hero-copy')!.getBoundingClientRect();
      return Array.from(document.querySelectorAll('.hero-mini-photo')).some(node => {
        const box = node.getBoundingClientRect();
        return box.left < text.right && box.right > text.left && box.top < text.bottom && box.bottom > text.top;
      });
    });
    expect(overlaps).toBe(false);
    await expect(page.locator('.photo-left-top')).toBeVisible();
    await expect(page.locator('.photo-right-top')).toBeVisible();
    await page.locator('.hero-section').screenshot({ path: `.impeccable/review/hero-products-${width}.png` });
  }
});

for (const route of ['undangan', 'undangan/katalog', 'undangan/portofolio']) {
  for (const width of [390, 1440]) {
    test(`${route} is readable and has no clipped cards at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${route}/`);
      await expect(page.locator('.site-footer').getByRole('link', { name: 'Request Custom Frame' })).toHaveCount(0);
      if (route === 'undangan') {
        await page.evaluate(() => document.fonts.ready);
        const gaps = await page.locator('.und-heading').evaluateAll(headings => headings.map(heading => {
          const grid = heading.nextElementSibling!;
          return grid.getBoundingClientRect().top - heading.getBoundingClientRect().bottom;
        }));
        expect(gaps).toHaveLength(2);
        for (const gap of gaps) expect(gap).toBeGreaterThanOrEqual(28);
      }
      for (const img of await page.locator('.und-card img').all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveJSProperty('complete', true);
        expect(await img.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      const clipped = await page.locator('.und-card').evaluateAll(nodes => nodes.some(node => node.scrollWidth > node.clientWidth + 1));
      expect(clipped).toBe(false);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `.impeccable/review/${route.replaceAll('/', '-')}-${width}.png`, fullPage: true });
    });
  }
}

test('template filtering announces results and preserves the selected template in the request', async ({ page }) => {
  await page.goto('/undangan/katalog/');
  await page.getByRole('button', { name: 'Garden', exact: true }).click();
  await expect(page.locator('#template-count')).toHaveText('1 template ditampilkan');
  await expect(page.locator('.und-template:visible')).toHaveCount(1);
  await page.getByRole('link', { name: 'Pakai template ini' }).click();
  await expect(page.locator('select[name="template"]')).toHaveValue('Garden');
});
