import { expect, test } from '@playwright/test';

test.describe('article listing', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/artikel/');
  });

  test('keeps every card the same height in a stable three-column grid', async ({ page }) => {
    const cards = page.locator('.article-result-item:not([hidden]) .article-card');
    await expect(cards).toHaveCount(12);

    const heights = await cards.evaluateAll((nodes) => nodes.map((node) => Math.round(node.getBoundingClientRect().height * 100) / 100));
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);

    const columns = await page.locator('#article-grid').evaluate((grid) => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length);
    expect(columns).toBe(3);
  });

  test('searches titles and topics and paginates the matches', async ({ page }) => {
    const search = page.getByLabel('Cari artikel');
    const searchWidth = (await search.boundingBox())?.width ?? 0;
    await search.fill('cara');

    const matches = page.locator('.article-result-item:not([hidden])');
    await expect(page.locator('.article-results')).toContainText('artikel yang cocok');
    await expect(matches).toHaveCount(12);

    const filteredWidth = (await search.boundingBox())?.width ?? 0;
    expect(Math.abs(filteredWidth - searchWidth)).toBeLessThan(1);

    for (const item of await matches.all()) {
      expect((await item.getAttribute('data-search'))?.toLowerCase()).toContain('cara');
    }

    const pagination = page.locator('.article-pagination');
    await expect(pagination).toBeVisible();
    await pagination.getByRole('link', { name: 'Halaman 2' }).click();

    await expect(page).toHaveURL(/[?&]page=2/);
    await expect(page.locator('.article-page-previous')).toBeVisible();
    const pageTwoMatches = page.locator('.article-result-item:not([hidden])');
    expect(await pageTwoMatches.count()).toBeGreaterThan(0);
    for (const item of await pageTwoMatches.all()) {
      expect((await item.getAttribute('data-search'))?.toLowerCase()).toContain('cara');
    }

    const columns = await page.locator('#article-grid').evaluate((grid) => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length);
    expect(columns).toBe(3);
  });

  test('loads every visible card image from the same origin', async ({ page }) => {
    const cards = page.locator('.article-result-item:not([hidden]) .article-card');
    await expect(cards).toHaveCount(12);

    for (const card of await cards.all()) {
      await card.scrollIntoViewIfNeeded();
      const image = card.locator('img');
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      expect(await image.getAttribute('src')).toMatch(/^\/images\//);
    }
  });

  test('filters by category and clears the filter back to the first page', async ({ page }) => {
    const category = page.getByLabel('Topik');
    await category.selectOption('Photobooth');

    const items = page.locator('.article-result-item:not([hidden])');
    expect(await items.count()).toBeGreaterThan(0);
    for (const item of await items.all()) {
      expect(await item.getAttribute('data-category')).toBe('Photobooth');
    }
    await expect(page.locator('.article-results')).toContainText('artikel yang cocok');

    const clear = page.locator('.article-filters .article-clear-filters');
    await expect(clear).toBeVisible();
    await clear.click();

    await expect(category).toHaveValue('');
    await expect(page.locator('.article-results')).toHaveText('Menampilkan 1–12 dari 65 artikel');
    await expect(page.locator('.article-result-item:not([hidden])')).toHaveCount(12);
    await expect(page.locator('.article-pagination')).toBeVisible();
  });

  test('shows a recoverable empty state for unmatched searches', async ({ page }) => {
    await page.getByLabel('Cari artikel').fill('zzzz-not-found');

    const empty = page.locator('.article-empty-state');
    await expect(empty).toBeVisible();
    await expect(empty).toContainText('Tidak ada artikel yang cocok');
    await expect(page.locator('#article-grid')).toBeHidden();
    await expect(page.locator('.article-results')).toHaveText('0 artikel ditemukan.');

    await empty.getByRole('button', { name: 'Hapus filter' }).click();
    await expect(empty).toBeHidden();
    await expect(page.locator('#article-grid')).toBeVisible();
    await expect(page.locator('.article-result-item:not([hidden])')).toHaveCount(12);
  });

  test('keeps the server-rendered page when opening a numbered page directly', async ({ page }) => {
    await page.goto('/artikel/page/3/');
    await expect(page.locator('.article-pagination a[aria-current="page"]')).toHaveText('3');
    await expect(page.locator('.article-result-item:not([hidden])')).toHaveCount(12);

    await page.locator('.article-pagination').getByRole('link', { name: /Berikutnya/ }).click();
    await expect(page).toHaveURL(/\/artikel\/page\/4\/$/);
    await expect(page.locator('.article-pagination a[aria-current="page"]')).toHaveText('4');
  });

  test('runs search, filter and pagination without page errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.getByLabel('Cari artikel').fill('undangan');
    await expect(page.locator('.article-results')).toContainText('artikel yang cocok');
    await page.getByLabel('Topik').selectOption('Undangan digital');
    await expect(page.locator('.article-result-item:not([hidden])')).toHaveCount(12);
    await page.locator('.article-pagination').getByRole('link', { name: 'Halaman 2' }).click();
    await expect(page).toHaveURL(/[?&]page=2/);
    await page.goBack();
    await expect(page).not.toHaveURL(/[?&]page=2/);
    await page.locator('.article-filters .article-clear-filters').click();
    await expect(page.locator('.article-results')).toHaveText('Menampilkan 1–12 dari 65 artikel');

    expect(errors).toEqual([]);
  });

  test('stacks into one column without horizontal overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const columns = await page.locator('#article-grid').evaluate((grid) => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length);
    expect(columns).toBe(1);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow).toBe(false);

    const heights = await page.locator('.article-result-item:not([hidden]) .article-card').evaluateAll((nodes) => nodes.map((node) => Math.round(node.getBoundingClientRect().height * 100) / 100));
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);
  });
});
