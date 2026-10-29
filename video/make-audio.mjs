import http from 'node:http';
import { createReadStream, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve(process.cwd());
const port = 4334;
const MIME = { '.html': 'text/html; charset=utf-8' };

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = normalize(join(root, pathname));
  try {
    const stat = statSync(file);
    response.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream', 'Content-Length': stat.size });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end('not found');
  }
});
await new Promise((done) => server.listen(port, '127.0.0.1', done));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${port}/video/audio-gen.html`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 30_000 });
const base64 = await page.evaluate(() => window.renderAudio());

mkdirSync('public/audio', { recursive: true });
writeFileSync('public/audio/undangan-theme.wav', Buffer.from(base64, 'base64'));
console.log('wav written');

await browser.close();
server.close();
