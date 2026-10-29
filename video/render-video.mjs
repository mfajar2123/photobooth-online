import http from 'node:http';
import { createReadStream, mkdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve(process.cwd());
const port = 4330;
const DURATION = 15;
const FPS = Number(process.argv[2] || 60);
const BATCH = 5;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = normalize(join(root, pathname));
  if (!file.startsWith(root)) {
    response.writeHead(403).end('forbidden');
    return;
  }
  try {
    const stat = statSync(file);
    if (!stat.isFile()) throw new Error('not a file');
    response.writeHead(200, {
      'Content-Type': MIME[extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stat.size,
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end('not found');
  }
});

await new Promise((done) => server.listen(port, '127.0.0.1', done));
console.log(`server http://127.0.0.1:${port}`);

const browser = await chromium.launch({ args: ['--disable-background-timer-throttling', '--disable-renderer-backgrounding'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.setDefaultTimeout(180_000);

const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});

await page.goto(`http://127.0.0.1:${port}/video/ruangkilas-motion.html`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 90_000 });

console.log('rendering audio…');
const audio = await page.evaluate(() => window.renderAudio());
writeFileSync('video/audio.wav', Buffer.from(audio, 'base64'));
console.log('audio.wav written');

rmSync('video/frames', { recursive: true, force: true });
mkdirSync('video/frames', { recursive: true });

const total = Math.round(DURATION * FPS);
const started = Date.now();

for (let start = 0; start < total; start += BATCH) {
  const times = [];
  for (let index = start; index < Math.min(start + BATCH, total); index += 1) {
    times.push(index / FPS);
  }
  const urls = await page.evaluate((list) => window.renderFrames(list), times);
  urls.forEach((url, offset) => {
    const frame = start + offset;
    writeFileSync(`video/frames/f${String(frame).padStart(5, '0')}.jpg`, Buffer.from(url.split(',')[1], 'base64'));
  });
  if (start % 120 === 0) {
    console.log(`frame ${start}/${total}`);
  }
}

console.log(JSON.stringify({
  fps: FPS,
  frames: total,
  seconds: Math.round((Date.now() - started) / 100) / 10,
  errors,
}, null, 2));

await browser.close();
server.close();
