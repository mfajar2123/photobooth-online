import http from 'node:http';
import { createReadStream, existsSync, mkdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { chromium } from '@playwright/test';

const root = resolve(process.cwd());
const port = 4337;
const ids = ['canon', 'bridal', 'air', 'clair', 'ave'];
const titles = {
  canon: 'Canon in D',
  bridal: 'Bridal Chorus',
  air: 'Air on the G String',
  clair: 'Clair de Lune',
  ave: 'Ave Maria',
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
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

const browser = await chromium.launch();
const page = await browser.newPage();
page.setDefaultTimeout(180_000);
await page.goto(`http://127.0.0.1:${port}/video/invitation-audio.html`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 60_000 });

mkdirSync('public/audio', { recursive: true });

const localFfmpeg = join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Links', 'ffmpeg.exe');
const ffmpeg = existsSync(localFfmpeg) ? localFfmpeg : 'ffmpeg';

for (const id of ids) {
  console.log(`rendering ${id}…`);
  const base64 = await page.evaluate((track) => window.renderTrack(track), id);
  const wavPath = `video/audio-${id}.wav`;
  writeFileSync(wavPath, Buffer.from(base64, 'base64'));

  const mp3Path = `public/audio/undangan-${id}.mp3`;
  const result = spawnSync(ffmpeg, [
    '-y',
    '-i', wavPath,
    '-ar', '48000',
    '-ac', '2',
    '-codec:a', 'libmp3lame',
    '-b:a', '160k',
    '-metadata', `title=${titles[id]}`,
    '-metadata', 'artist=Ruang Kilas Studio',
    '-metadata', 'album=Undangan Digital',
    mp3Path,
  ], { stdio: 'inherit' });

  if (result.status !== 0) throw new Error(`ffmpeg failed for ${id}`);
  rmSync(wavPath, { force: true });
  console.log(`wrote ${mp3Path}`);
}

await browser.close();
server.close();
