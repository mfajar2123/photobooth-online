import { expect, test } from '@playwright/test';

const pages = ['/undangan/', '/undangan/katalog/', '/undangan/portofolio/', '/undangan/custom/'];

test('undangan marketing pages render without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));

  for (const path of pages) {
    const response = await page.goto(path);
    expect(response?.status(), `${path} should load`).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  }

  expect(errors).toEqual([]);
});

test('katalog filters templates', async ({ page }) => {
  await page.goto('/undangan/katalog/');
  await expect(page.locator('.und-template')).toHaveCount(6);
  await page.getByRole('button', { name: 'Garden', exact: true }).click();
  await expect(page.locator('.und-template:visible')).toHaveCount(1);
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await expect(page.locator('.und-template:visible')).toHaveCount(6);
});

test('invitation demo shows couple, date, venue, gallery and map', async ({ page }) => {
  await page.goto('/undangan/rifqi-aulya/');
  await page.getByRole('button', { name: /Buka undangan/i }).click();

  await expect(page.getByRole('heading', { name: 'Rifqi Aditya Pratama' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Aulya Rahmadani' })).toBeVisible();
  await expect(page.getByText('14 Februari 2027').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Balai Kartini' })).toBeVisible();
  await expect(page.locator('.inv-gallery-item')).toHaveCount(8);
  await expect(page.getByRole('link', { name: /Buka peta lokasi/i })).toHaveAttribute('href', /google\.com\/maps/);
});

test('all three invitation demos load', async ({ page }) => {
  for (const slug of ['rifqi-aulya', 'dimas-nabila', 'andi-salsa']) {
    const response = await page.goto(`/undangan/${slug}/`);
    expect(response?.status(), `${slug} should load`).toBe(200);
    await expect(page.getByRole('button', { name: /Buka undangan/i })).toBeVisible();
  }
});
