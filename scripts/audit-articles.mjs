import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist/artikel');
const entries = await readdir(root, { withFileTypes: true });
const counts = [];
for (const entry of entries) {
  if (!entry.isDirectory() || entry.name === 'page') continue;
  const html = await readFile(path.join(root, entry.name, 'index.html'), 'utf8');
  const article = html.match(/<article(?:\s[^>]*)?>([\s\S]*?)<\/article>/i)?.[1];
  if (!article) continue;
  const text = article.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, ' ');
  counts.push({ slug: entry.name, words: (text.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) ?? []).length });
}
counts.sort((a, b) => b.words - a.words);
console.log(`Artikel: ${counts.length}; di atas 1.000 kata: ${counts.filter((item) => item.words > 1000).length}`);
for (const item of counts.slice(0, 20)) console.log(`${item.words}\t${item.slug}`);
