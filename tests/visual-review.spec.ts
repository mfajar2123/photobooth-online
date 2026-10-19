import { expect, test } from '@playwright/test';

test('capture desktop and mobile visual review', async ({ page, context }) => {
  await context.grantPermissions(['camera']);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.hero-section h1')).toBeVisible();
  await page.screenshot({ path: '.impeccable/review/desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '.impeccable/review/mobile.png', fullPage: true });

  // Studio Visual Reviews
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/studio');
  await page.screenshot({ path: '.impeccable/review/studio-step1-camera.png', fullPage: true });

  await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
  await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
  await page.getByRole('button', { name: /Big Solo Polaroid/i }).click();
  await page.getByRole('button', { name: /Ambil foto/i }).click();
  await expect(page.getByRole('img', { name: 'Hasil foto 1' })).toBeVisible({ timeout: 10_000 });

  await page.getByRole('button', { name: /Lanjut ke Bingkai/i }).click();
  await page.screenshot({ path: '.impeccable/review/studio-step2-frame.png', fullPage: true });

  await page.getByRole('button', { name: /Lanjut ke Filter & Stiker/i }).click();
  await page.getByLabel(/Tulis nama geng atau caption/).fill('Bestie Selamanya');
  await page.getByRole('button', { name: /Tambah stiker ✦/ }).click();
  await page.screenshot({ path: '.impeccable/review/studio-step3-stickers.png', fullPage: true });

  await page.getByRole('button', { name: /Lanjut ke Simpan & Cetak/i }).click();
  await page.screenshot({ path: '.impeccable/review/studio-step4-export.png', fullPage: true });

  // Panduan Guide Page Visual Review
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/panduan');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.guide-hero h1')).toBeVisible();
  await page.screenshot({ path: '.impeccable/review/panduan-desktop.png', fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '.impeccable/review/panduan-mobile.png', fullPage: true });
});

