import { expect, test } from '@playwright/test';

test('landing page keeps its editorial alignment and address-free contact details', async ({ page }) => {
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
  await expect(page.locator('footer')).not.toContainText('Gedung Kemang Point');
  await expect(page.locator('footer')).toContainText('halo@ruangkilas.my.id');
  await expect(page.locator('footer')).toContainText('+62 812-8899-4021');
});

test('all static routes respond successfully', async ({ page }) => {
  for (const route of ['/', '/brand', '/panduan', '/share', '/studio', '/terms']) {
    const response = await page.goto(route);
    expect(response?.status(), `${route} should load`).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  }
});

test('mobile landing and studio layouts have no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Abadikan momen seru/i })).toBeVisible();
  let dimensions = await page.evaluate(() => ({ body: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
  await page.getByRole('link', { name: /Mulai photobooth sekarang/i }).click();
  await expect(page).toHaveURL(/\/studio\/?$/);
  await expect(page.getByRole('heading', { name: /Senyum dulu/i })).toBeVisible();
  dimensions = await page.evaluate(() => ({ body: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
});

test('studio layout options enforce portrait and landscape rules', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/studio');
  await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
  await expect(page.locator('.layout-option')).toHaveCount(1);
  await expect(page.locator('.viewfinder')).toHaveCSS('aspect-ratio', '0.5625 / 1');
  await page.getByRole('button', { name: 'Landscape', exact: true }).click();
  await expect(page.locator('.layout-option')).toHaveCount(3);
  await expect(page.locator('.viewfinder')).toHaveCSS('aspect-ratio', '1.77778 / 1');
  await page.locator('.layout-option').nth(1).click();
  await expect(page.locator('.layout-option.is-selected')).toContainText('Dua foto');
  await page.getByRole('button', { name: 'Potret · Story' }).click();
  await expect(page.locator('.layout-option')).toHaveCount(1);
});

test('camera preview on mobile maintains device camera aspect ratio without zooming or cropping', async ({ page, context }) => {
  await context.grantPermissions(['camera']);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/studio');
  await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
  await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
  await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
  const previewCanvas = page.getByLabel('Pratinjau filter kamera');
  await expect.poll(() => previewCanvas.evaluate((element) => (element as HTMLCanvasElement).width)).toBeGreaterThan(0);

  const metrics = await page.evaluate(() => {
    const vf = document.querySelector('.viewfinder')!;
    const cv = document.querySelector('.camera-preview')!;
    const vfr = vf.getBoundingClientRect();
    const cvr = cv.getBoundingClientRect();
    return {
      vfWidth: vfr.width,
      vfHeight: vfr.height,
      cvWidth: cvr.width,
      cvHeight: cvr.height,
      ratio: vfr.width / vfr.height,
      isCutOff: cvr.width > vfr.width + 1 || cvr.height > vfr.height + 1,
    };
  });

  expect(metrics.isCutOff).toBe(false);
  expect(metrics.ratio).toBeCloseTo(9 / 16, 2);
});

test('camera capture, portrait output, JPG download, filters and Boomerang sharing work', async ({ page, context }) => {
  await context.grantPermissions(['camera']);
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'canShare', { configurable: true, value: () => true });
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: async ({ files }: { files: File[] }) => {
        (window as unknown as { __sharedFile?: { name: string; type: string } }).__sharedFile = { name: files[0].name, type: files[0].type };
      },
    });
  });
  await page.goto('/studio');
  await expect(page.locator('astro-island')).not.toHaveAttribute('ssr');
  await page.getByRole('button', { name: /Nyalakan kamera/i }).click();
  await expect(page.getByRole('button', { name: /Ambil foto/i })).toBeVisible({ timeout: 15_000 });
  const previewCanvas = page.getByLabel('Pratinjau filter kamera');
  await expect.poll(() => previewCanvas.evaluate((element) => (element as HTMLCanvasElement).width)).toBeGreaterThan(0);
  await page.getByRole('button', { name: 'Landscape', exact: true }).click();
  await page.locator('.layout-option').nth(2).click();
  await page.getByLabel('Timer').selectOption('1');
  await expect.poll(() => page.evaluate(() => {
    const vid = document.querySelector('video');
    return vid ? vid.readyState >= 2 && vid.videoWidth > 0 : false;
  })).toBe(true);
  for (let index = 1; index <= 3; index++) {
    await page.getByRole('button', { name: /Ambil foto/i }).click();
    await expect(page.getByRole('img', { name: `Hasil foto ${index}` })).toBeVisible({ timeout: 15_000 });
  }
  await page.getByRole('button', { name: /Lanjut ke Bingkai/i }).click();
  await page.getByRole('button', { name: /Lanjut pilih filter/i }).click();
  const filmFilter = page.getByRole('button', { name: /Film Nuansa analog/i });
  await filmFilter.click();
  await expect(filmFilter).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: /Lanjut ke Simpan & Cetak/i }).click();

  const outputCanvas = page.getByLabel('Pratinjau photostrip akhir');
  await expect.poll(() => outputCanvas.evaluate((element) => {
    const canvas = element as HTMLCanvasElement;
    return canvas.width && canvas.height ? canvas.width / canvas.height : 0;
  })).toBeCloseTo(9 / 16, 2);
  const photoDownload = page.waitForEvent('download');
  await page.getByRole('button', { name: /Unduh foto JPG/i }).click();
  expect((await photoDownload).suggestedFilename()).toMatch(/\.jpg$/);

  await page.getByRole('button', { name: 'Boomerang', exact: true }).click();
  await page.getByLabel(/Durasi Boomerang/i).selectOption('4');
  const shareButton = page.getByRole('button', { name: /Bagikan Boomerang dari perangkat/i });
  await expect(shareButton).toBeEnabled({ timeout: 30_000 });
  await shareButton.click();
  await expect.poll(() => page.evaluate(() => (window as unknown as { __sharedFile?: { name: string; type: string } }).__sharedFile?.name)).toMatch(/ruangkilas-boomerang\.(mp4|webm)$/);
  await expect.poll(() => page.evaluate(() => (window as unknown as { __sharedFile?: { name: string; type: string } }).__sharedFile?.type)).toMatch(/^video\/(mp4|webm)(;|$)/);
  const dimensions = await page.evaluate(() => ({ body: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
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
