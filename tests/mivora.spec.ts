import { expect, test } from '@playwright/test';

test('landing page keeps its editorial alignment and complete contact details', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Abadikan momen seru/i })).toBeVisible();
  await expect(page.locator('astro-island')).toHaveCount(0);
  await expect(page.locator('#lenses .lens-copy')).toBeVisible();
  await expect(page.locator('#frames .frames-copy')).toBeVisible();
  const left = await page.locator('#lenses .lens-copy').evaluate((element) => getComputedStyle(element).textAlign);
  const right = await page.locator('#frames .frames-copy').evaluate((element) => getComputedStyle(element).textAlign);
  expect(['left', 'start']).toContain(left);
  expect(right).toBe('right');
  await expect(page.locator('footer')).toContainText('Gedung Kemang Point');
  await expect(page.locator('footer')).toContainText('hello@mivoraphoto.id');
  await expect(page.locator('footer')).toContainText('+62 812-8899-4021');
});

test('mobile layout has no horizontal overflow and its primary actions work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Abadikan momen seru/i })).toBeVisible();
  const dimensions = await page.evaluate(() => ({ body: document.body.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
  await page.getByRole('link', { name: /Mulai photobooth sekarang/i }).click();
  await expect(page).toHaveURL(/\/studio\/?$/);
  await expect(page.getByRole('heading', { name: /Senyum dulu/i })).toBeVisible();
});

test('camera preview renders canvas and lens controls switch modes', async ({ page, context }) => {
  await context.grantPermissions(['camera']);
  await page.goto('/studio');
  await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
  await expect(page.getByRole('button', { name: /Nyalakan kamera/i })).toBeVisible();
  await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
  await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
  await page.getByRole('button', { name: /Fisheye 360°/i }).click();
  const canvas = page.getByLabel('Pratinjau filter kamera');
  await expect.poll(() => canvas.evaluate((element) => (element as HTMLCanvasElement).width)).toBeGreaterThan(0);
  await page.getByRole('button', { name: /Digicam 2004/i }).click();
  await expect(canvas).toBeVisible();
});

test('capture, frame styling, sticker, watermark and QR flow work in the browser', async ({ page, context }) => {
  await context.grantPermissions(['camera']);
  await page.goto('/studio');
  await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
  await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
  await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
  const previewCanvas = page.getByLabel('Pratinjau filter kamera');
  await expect.poll(() => previewCanvas.evaluate((element) => (element as HTMLCanvasElement).width)).toBeGreaterThan(0);
  await page.getByRole('button', { name: /Big Solo Polaroid/i }).click();
  await page.getByRole('button', { name: /Ambil foto/i }).click();
  await expect(page.getByRole('img', { name: 'Hasil foto 1' })).toBeVisible({ timeout: 15_000 });
  await page.getByRole('button', { name: /Lanjut ke Bingkai/i }).click();
  await page.getByRole('button', { name: /Y2K Cyber Pop/i }).click();
  await page.getByRole('button', { name: /Lanjut ke Filter & Stiker/i }).click();
  await page.getByLabel(/Tulis nama geng atau caption/).fill('Bestie Selamanya');
  await page.getByRole('button', { name: /Tambah stiker ✦/ }).click();
  await expect(page.getByRole('button', { name: /Kembali ke Bingkai/i })).toBeVisible();
  await page.getByRole('button', { name: /Lanjut ke Simpan & Cetak/i }).click();
  const motionDownload = page.waitForEvent('download');
  await page.getByRole('button', { name: /Simpan Boomerang WebM/i }).click();
  expect((await motionDownload).suggestedFilename()).toBe('mivora-boomerang.webm');
  await page.getByRole('button', { name: /Tampilkan QR hasil foto/i }).click();
  await expect(page.getByRole('dialog', { name: /Bawa memorinya/i })).toBeVisible();
  await expect(page.getByRole('dialog').locator('svg')).toBeVisible();
  await page.getByRole('button', { name: /Tutup QR/i }).click();
  await page.getByRole('button', { name: /Unduh photostrip PNG/i }).click();
  const canvas = page.getByLabel('Pratinjau photostrip akhir');
  await expect.poll(() => canvas.evaluate((element) => (element as HTMLCanvasElement).width)).toBeGreaterThan(0);
});

test('panduan tutorial page renders 4 stages, tips, and navigates to studio', async ({ page }) => {
  await page.goto('/panduan');
  await expect(page.getByRole('heading', { name: /Panduan studio/i })).toBeVisible();
  await expect(page.locator('#step-1')).toContainText('01 / KAMERA');
  await expect(page.locator('#step-2')).toContainText('02 / BINGKAI');
  await expect(page.locator('#step-3')).toContainText('03 / STIKER');
  await expect(page.locator('#step-4')).toContainText('04 / SIMPAN');
  await expect(page.locator('.guide-tips-grid')).toBeVisible();
  await expect(page.locator('.guide-faq-section')).toHaveCount(0);
  await expect(page.locator('.guide-cta-section')).toHaveCount(0);
  await page.getByRole('link', { name: /Buka Studio Photobooth Sekarang/i }).click();
  await expect(page).toHaveURL(/\/studio\/?$/);
});
