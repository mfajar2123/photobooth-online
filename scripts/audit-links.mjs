import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const missing = new Map();
let htmlCount = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) await inspect(file);
  }
}
async function inspect(file) {
  htmlCount++;
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"#?]*)/g)) {
    const target = decodeURIComponent(match[1]);
    if (target.startsWith('//')) continue;
    let destination = path.join(root, target);
    try {
      const info = await stat(destination);
      if (info.isDirectory()) destination = path.join(destination, 'index.html');
      await stat(destination);
    } catch {
      const sources = missing.get(target) ?? new Set();
      sources.add(path.relative(root, file));
      missing.set(target, sources);
    }
  }
}
await walk(root);
console.log(`${htmlCount} halaman diperiksa; ${missing.size} tujuan lokal tidak ditemukan.`);
for (const [target, sources] of missing) console.log(`${target}: ${[...sources].slice(0, 3).join(', ')}`);
if (missing.size) process.exitCode = 1;
