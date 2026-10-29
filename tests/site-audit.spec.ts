import { test, expect } from '@playwright/test';

const routes = ['/', '/studio/', '/panduan/', '/request-event/', '/brand/', '/terms/', '/share/', '/undangan/', '/undangan/katalog/', '/undangan/portofolio/', '/undangan/custom/', '/undangan/rifqi-aulya/', '/undangan/dimas-nabila/', '/undangan/andi-salsa/', '/undangan/demo-monokrom/', '/undangan/demo-kertas/', '/undangan/demo-senja/', '/wedding-ripki/', '/wedding-ripki-aura/'];

test('all pages have usable layouts, valid metadata and loaded images', async ({ page }) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of routes) {
    await page.goto(route);
    expect(await page.title(), route).toBeTruthy();
    expect(await page.locator('meta[name="description"]').getAttribute('content'), route).toBeTruthy();
    expect(await page.locator('link[rel="canonical"]').getAttribute('href'), route).toContain('https://ruangkilas.my.id/');
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    schemas.forEach(value => expect(() => JSON.parse(value)).not.toThrow());
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      expect(overflow, `${route} at ${width}px`).toBe(false);
    }
    const missing = await page.locator('img[src]').evaluateAll(images => images.filter(img => img instanceof HTMLImageElement && img.complete && img.naturalWidth === 0).map(img => img.getAttribute('src')));
    expect(missing, route).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test('navigation aligns and mobile exposes all primary destinations', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 1440, height: 900 });
  const centers = await page.locator('.nav-trigger, .site-nav > .nav-link').evaluateAll(nodes => nodes.map(node => { const box = node.getBoundingClientRect(); return box.y + box.height / 2; }));
  expect(Math.max(...centers) - Math.min(...centers)).toBeLessThan(1);
  await expect(page.locator('.nav-menu')).not.toContainText('Wedding Booth');
  await page.locator('.nav-trigger').hover();
  await expect(page.locator('.nav-menu')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('.nav-menu')).toBeHidden();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('.nav-toggle').click();
  for (const label of ['Portofolio', 'Panduan', 'Tentang']) await expect(page.locator('.site-nav').getByRole('link', { name: label, exact: true })).toBeVisible();
  await page.screenshot({ path: '.impeccable/review/navbar-mobile.png' });
});

test('invitation section follows live photo and precedes event services', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('main > section').evaluateAll(nodes => nodes.map(node => node.className))).toEqual(expect.arrayContaining(['home-invitation section-pad']));
  await expect(page.locator('.live-section + .home-invitation + .celebration-section + .event-section')).toHaveCount(1);
  await expect(page.locator('.home-invitation .section-kicker')).toHaveCount(0);
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const image of await page.locator('.home-invitation img, .celebration-section img, .event-portfolio img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty('complete', true);
    expect(await image.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: '.impeccable/review/landing-refined.png', fullPage: true });
});
