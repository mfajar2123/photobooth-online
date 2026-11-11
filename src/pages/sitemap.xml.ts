import type { APIRoute } from 'astro';
import { articleDate, articles } from '../data/articles';

export const prerender = true;

const site = 'https://ruangkilas.my.id';

const staticPages = [
  '/',
  '/studio/',
  '/panduan/',
  '/undangan/',
  '/undangan/katalog/',
  '/undangan/custom/',
  '/request-event/',
  '/artikel/',
  '/brand/',
  '/kontak/',
  '/terms/',
];

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

function urlEntry(path: string, lastmod?: string): string {
  const location = new URL(path, site).toString();
  const lastModified = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  return `  <url>\n    <loc>${escapeXml(location)}</loc>${lastModified}\n  </url>`;
}

export const GET: APIRoute = () => {
  const articleEntries = articles.map((article) => urlEntry(
    `/artikel/${article.slug}/`,
    article.updated ?? articleDate,
  ));

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticPages.map((path) => urlEntry(path, articleDate)),
    ...articleEntries,
    '</urlset>',
  ].join('\n');

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
