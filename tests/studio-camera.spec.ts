import { expect, test } from '@playwright/test';

async function readCameraState(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    const video = document.querySelector('video') as HTMLVideoElement;
    const canvas = document.querySelector('.camera-preview') as HTMLCanvasElement;
    const track = (video.srcObject as MediaStream | null)?.getVideoTracks?.()[0];
    const settings = track?.getSettings() as (MediaTrackSettings & { resizeMode?: string }) | undefined;
    return {
      videoWidth: video.videoWidth,
      videoHeight: video.videoHeight,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      resizeMode: settings?.resizeMode,
      overflow: document.documentElement.scrollWidth - window.innerWidth,
    };
  });
}

test.describe('studio camera shows the full sensor frame', () => {
  test.beforeEach(async ({ context }) => {
    await context.grantPermissions(['camera']);
  });

  test('portrait preview is not cropped or digitally zoomed', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/studio');
    await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
    await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
    await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
    await expect.poll(async () => (await readCameraState(page)).canvasWidth).toBeGreaterThan(0);
    await expect.poll(async () => {
      const sample = await readCameraState(page);
      if (!sample.videoWidth || !sample.canvasHeight) return 99;
      return Math.abs(sample.canvasWidth / sample.canvasHeight - sample.videoWidth / sample.videoHeight);
    }, { timeout: 15_000 }).toBeLessThan(0.02);

    const state = await readCameraState(page);
    expect(state.videoWidth).toBeGreaterThan(0);
    expect(state.canvasWidth / state.canvasHeight).toBeCloseTo(state.videoWidth / state.videoHeight, 2);
    expect(state.overflow).toBeLessThanOrEqual(0);
  });

  test('landscape preview keeps the camera aspect ratio', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/studio');
    await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
    await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
    await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });

    await page.getByRole('button', { name: 'Landscape', exact: true }).click();
    await expect(page.locator('.viewfinder-landscape')).toBeVisible();
    await expect.poll(async () => {
      const sample = await readCameraState(page);
      if (!sample.videoWidth || !sample.canvasHeight) return 99;
      return Math.abs(sample.canvasWidth / sample.canvasHeight - sample.videoWidth / sample.videoHeight);
    }, { timeout: 15_000 }).toBeLessThan(0.02);

    const state = await readCameraState(page);
    expect(state.canvasWidth / state.canvasHeight).toBeCloseTo(state.videoWidth / state.videoHeight, 2);
    expect(state.overflow).toBeLessThanOrEqual(0);
  });

  test('capture still works after the preview change', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/studio');
    await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
    await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
    await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
    await expect.poll(async () => page.evaluate(() => {
      const video = document.querySelector('video') as HTMLVideoElement;
      return video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.videoWidth > 0;
    }), { timeout: 15_000 }).toBe(true);
    await page.getByLabel('Timer').selectOption('1');
    await page.getByRole('button', { name: /Ambil foto/i }).click();
    await expect(page.getByRole('img', { name: 'Hasil foto 1' })).toBeVisible({ timeout: 20_000 });
    await expect(page.getByRole('button', { name: /Lanjut ke Bingkai/i })).toBeEnabled();
  });
});
