import { expect, test } from '@playwright/test';

test.describe('homepage event photobooth section', () => {
  test('sits directly before the FAQ with no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => consoleErrors.push(error.message));

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('#event-title')).toBeVisible();

    const placement = await page.evaluate(() => {
      const section = document.querySelector('.event-section');
      const faq = document.querySelector('#faq');
      return {
        hasSection: Boolean(section),
        isDirectlyBeforeFaq: Boolean(section && faq && section.nextElementSibling === faq),
        sectionBackground: section ? getComputedStyle(section).backgroundColor : '',
      };
    });

    expect(placement.hasSection).toBe(true);
    expect(placement.isDirectlyBeforeFaq).toBe(true);
    expect(placement.sectionBackground).toBe('rgb(255, 243, 176)');
    await expect(page.locator('.event-copy h2')).toHaveText(/Bikin photobooth virtual\s*untuk acaramu\./);
    await expect(page.locator('.event-copy .section-kicker')).toHaveCount(0);
    await expect(page.locator('.event-portfolio')).toHaveAttribute('href', '/wedding-ripki-aura/');
    await expect(page.locator('.event-actions .button-primary')).toHaveAttribute('href', '/request-event/');
    const preExistingMetaWarnings = [
      /frame-ancestors.*delivered via a <meta> element/i,
      /X-Frame-Options may only be set via an HTTP header/i,
    ];
    const relevantErrors = consoleErrors.filter(
      (text) => !preExistingMetaWarnings.some((pattern) => pattern.test(text)),
    );
    expect(relevantErrors).toEqual([]);
  });

  test('portfolio card opens the live wedding booth', async ({ page }) => {
    await page.goto('/');
    await page.locator('.event-portfolio').click();
    await expect(page).toHaveURL(/\/wedding-ripki-aura\/?$/);
    await expect(page.getByRole('heading', { name: 'Ripki & Aura' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Open Camera/i })).toBeVisible();
  });

  test('primary CTA opens the event request page', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.locator('.event-actions .button-primary').click();
    await expect(page).toHaveURL(/\/request-event\/?$/);
    await expect(page.getByRole('heading', { name: /Bikin photobooth virtual/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Ceritakan acaramu/i })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: '.impeccable/review/request-event-desktop.png', fullPage: true });
  });

  test('request form composes a WhatsApp and email request', async ({ page }) => {
    await page.goto('/request-event/');
    await page.getByLabel('Nama kamu').fill('Fajar');
    await page.getByLabel('Jenis acara').selectOption('Wedding');
    await page.getByLabel('Lokasi acara').fill('Bandung');

    const whatsappHref = await page.locator('#request-submit').getAttribute('href');
    expect(whatsappHref).toContain('https://wa.me/6281288994021?text=');
    expect(decodeURIComponent(whatsappHref ?? '')).toContain('Nama: Fajar');
    expect(decodeURIComponent(whatsappHref ?? '')).toContain('Jenis acara: Wedding');
    expect(decodeURIComponent(whatsappHref ?? '')).toContain('Lokasi: Bandung');

    const emailHref = await page.locator('#request-email').getAttribute('href');
    expect(emailHref).toContain('mailto:partnership@ruangkilas.my.id');
    expect(decodeURIComponent(emailHref ?? '')).toContain('Lokasi: Bandung');
  });
});

test.describe('event section responsive layout', () => {
  test('desktop layout stays on one row and within the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('.event-section')).toBeVisible();

    const metrics = await page.evaluate(() => {
      const section = document.querySelector('.event-section')!;
      const copy = document.querySelector('.event-copy')!.getBoundingClientRect();
      const card = document.querySelector('.event-portfolio')!.getBoundingClientRect();
      const sectionBox = section.getBoundingClientRect();
      return {
        sideBySide: card.left > copy.right - 1,
        cardInsideSection: card.right <= sectionBox.right + 1,
        overflow: document.documentElement.scrollWidth - window.innerWidth,
      };
    });

    expect(metrics.sideBySide).toBe(true);
    expect(metrics.cardInsideSection).toBe(true);
    expect(metrics.overflow).toBeLessThanOrEqual(0);
    await page.locator('.event-section').screenshot({ path: '.impeccable/review/event-desktop.png' });
  });

  test('mobile layout stacks cleanly without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('#event-title')).toBeVisible();
    await expect(page.locator('.event-portfolio')).toBeVisible();
    await page.locator('.event-section').scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator('.event-portfolio-media img').evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);

    const metrics = await page.evaluate(() => {
      const copy = document.querySelector('.event-copy')!.getBoundingClientRect();
      const card = document.querySelector('.event-portfolio')!.getBoundingClientRect();
      return {
        stacked: card.top >= copy.bottom - 1,
        cardWidth: Math.round(card.width),
        overflow: document.documentElement.scrollWidth - window.innerWidth,
      };
    });

    expect(metrics.stacked).toBe(true);
    expect(metrics.cardWidth).toBeLessThanOrEqual(390);
    expect(metrics.overflow).toBeLessThanOrEqual(0);
    await page.locator('.event-section').screenshot({ path: '.impeccable/review/event-mobile.png' });

    await page.goto('/request-event/');
    await expect(page.getByRole('heading', { name: /Ceritakan acaramu/i })).toBeVisible();
    const requestOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(requestOverflow).toBeLessThanOrEqual(0);
    await page.screenshot({ path: '.impeccable/review/request-event-mobile.png', fullPage: true });
  });
});
