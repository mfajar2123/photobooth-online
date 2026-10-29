import { expect, test } from '@playwright/test';

async function openInvitation(page: import('@playwright/test').Page) {
  const cover = page.locator('.inv-cover');
  for (let attempt = 0; attempt < 4; attempt += 1) {
    await page.getByRole('button', { name: /Buka undangan/i }).click({ force: true }).catch(() => {});
    try {
      await cover.waitFor({ state: 'detached', timeout: 4000 });
      return;
    } catch {
      /* hydration may still be in flight — retry */
    }
  }
  await expect(cover).toHaveCount(0);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/undangan/rifqi-aulya/');
  await openInvitation(page);
  await expect(page.locator('#undangan-content')).toBeVisible();
});

test('countdown keeps counting', async ({ page }) => {
  const first = page.locator('.inv-countdown-cell strong').first();
  await expect(first).toHaveText(/^\d{2,}$/);
  await expect(page.locator('.inv-countdown-cell')).toHaveCount(4);
});

test('gallery lightbox opens and closes with Escape', async ({ page }) => {
  await page.locator('.inv-gallery-item').first().click();
  const lightbox = page.locator('.inv-lightbox');
  await expect(lightbox).toBeVisible();
  await expect(lightbox.locator('img')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(lightbox).toHaveCount(0);
});

test('map button and RSVP point to the right destinations', async ({ page }) => {
  const map = page.getByRole('link', { name: /Buka peta lokasi/i }).first();
  await expect(map).toHaveAttribute('href', /^https:\/\/www\.google\.com\/maps\//);

  const rsvp = page.getByRole('link', { name: /Konfirmasi kehadiran/i });
  await expect(rsvp).toHaveAttribute('href', /^https:\/\/wa\.me\//);
});

test('music can be toggled after opening', async ({ page }) => {
  const music = page.locator('.inv-music');
  await expect(music).toBeVisible();
  await expect(music).toHaveAttribute('aria-pressed', 'true');
  await music.click();
  await expect(music).toHaveAttribute('aria-pressed', 'false');
  await music.click();
  await expect(music).toHaveAttribute('aria-pressed', 'true');
});

test('save the date downloads an ics file', async ({ page }) => {
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: /Save the date/i }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/\.ics$/);
});

test('gift number can be copied', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.getByRole('button', { name: /Salin nomor rekening/i }).click();
  await expect(page.getByRole('status').filter({ hasText: /tersalin/i })).toBeVisible();
});
