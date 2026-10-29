import { expect, test } from '@playwright/test';

const productLinks = [
  ['Photobooth Online', '/studio/'],
  ['Undangan Digital', '/undangan/'],
  ['Photobooth Event', '/request-event/'],
];

test('navbar dropdown exposes every product page', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const trigger = page.getByRole('button', { name: /Produk/i });
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');

  await trigger.hover();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');

  const menu = page.locator('.nav-menu');
  await expect(menu).toBeVisible();

  for (const [label, href] of productLinks) {
    await expect(menu.getByRole('link', { name: new RegExp(label, 'i') })).toHaveAttribute('href', href);
  }

  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('every navbar destination responds', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page.locator('.nav-menu a, .nav-link').evaluateAll((nodes) =>
    Array.from(new Set(nodes.map((node) => node.getAttribute('href')).filter(Boolean))),
  );
  expect(hrefs.length).toBeGreaterThanOrEqual(6);
  for (const href of hrefs) {
    const response = await page.request.get(href as string);
    expect(response.status(), `${href} should respond`).toBe(200);
  }
});

test('mobile menu opens and links are reachable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const toggle = page.locator('.nav-toggle');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.site-nav')).toBeVisible();
  const product = page.locator('.nav-trigger');
  await expect(product).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('.nav-menu')).toBeHidden();
  await product.click();
  await expect(product).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.site-nav a', { hasText: 'Undangan Digital' })).toBeVisible();
  await toggle.click();
  await expect(product).toHaveAttribute('aria-expanded', 'false');
});
