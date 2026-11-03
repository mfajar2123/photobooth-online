import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const localFfmpeg = join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Links', 'ffmpeg.exe');
const ffmpeg = existsSync(localFfmpeg) ? localFfmpeg : 'ffmpeg';

const args = [
  '-y',
  '-framerate', '60',
  '-i', 'video/frames-v2/f%05d.jpg',
  '-i', 'video/audio-v2.wav',
  '-c:v', 'libx264',
  '-preset', 'slow',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-r', '60',
  '-movflags', '+faststart',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-shortest',
  'video/ruangkilas-16x9-20s-v2.mp4',
];

console.log(`${ffmpeg} ${args.join(' ')}`);
const child = spawn(ffmpeg, args, { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 1));
