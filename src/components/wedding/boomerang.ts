export interface BoomerangFile {
  blob: Blob;
  extension: 'mp4' | 'webm';
  mimeType: string;
}

const VIDEO_MIME_CANDIDATES = [
  'video/mp4;codecs=avc1.42E01E',
  'video/mp4',
  'video/webm;codecs=vp9',
  'video/webm;codecs=vp8',
  'video/webm',
];

function supportedMimeTypes() {
  if (typeof MediaRecorder === 'undefined') return [];
  if (typeof MediaRecorder.isTypeSupported !== 'function') return VIDEO_MIME_CANDIDATES;
  return VIDEO_MIME_CANDIDATES.filter((type) => {
    try {
      return MediaRecorder.isTypeSupported(type);
    } catch {
      return false;
    }
  });
}

export function supportsBoomerangRecording() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (typeof MediaRecorder === 'undefined') return false;
  if (typeof HTMLCanvasElement.prototype.captureStream !== 'function') return false;
  return supportedMimeTypes().length > 0;
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Frame boomerang gagal dimuat. Coba foto ulang.'));
    image.src = source;
    if (image.complete && image.naturalWidth > 0) resolve(image);
  });
}

/**
 * Turns the last few framed viewfinder frames into a short forward/reverse
 * looping video. The wedding frame is already baked into each frame, so the
 * boomerang matches the saved photo.
 */
export async function createBoomerangBlob(
  frames: string[],
  options: { durationSeconds?: number; width?: number; height?: number; fps?: number } = {},
): Promise<BoomerangFile> {
  if (!supportsBoomerangRecording()) {
    throw new Error('Browser ini belum mendukung boomerang. Kamu tetap bisa mengunduh JPG.');
  }

  const sourceFrames = frames.slice(-14);
  if (sourceFrames.length < 2) {
    throw new Error('Boomerang belum punya cukup frame. Coba foto ulang.');
  }

  const width = options.width ?? 720;
  const height = options.height ?? 1280;
  const fps = options.fps ?? 24;
  const durationSeconds = options.durationSeconds ?? 3;
  const images = await Promise.all(sourceFrames.map(loadImage));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Boomerang belum bisa dibuat di browser ini.');

  const mimeTypes = supportedMimeTypes();
  const mimeType = mimeTypes[0];
  const stream = canvas.captureStream(fps);
  let recorder: MediaRecorder;
  try {
    recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  } catch {
    recorder = new MediaRecorder(stream);
  }

  const chunks: BlobPart[] = [];
  const finished = new Promise<Blob>((resolve, reject) => {
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    recorder.onerror = () => reject(new Error('Boomerang gagal direkam. Coba lagi.'));
    recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || mimeType || 'video/webm' }));
  });

  const drawFrame = (image: HTMLImageElement) => {
    context.fillStyle = '#12110f';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
  };

  // Seed the stream before recording so the first video frame is never blank.
  drawFrame(images[0]);
  recorder.start(100);

  try {
    const sourceCount = images.length;
    const cycleLength = sourceCount * 2 - 2;
    const cycles = Math.max(1, Math.round((durationSeconds * fps) / cycleLength));
    const frameCount = cycleLength * cycles;

    for (let frame = 0; frame < frameCount; frame += 1) {
      const position = frame % cycleLength;
      const imageIndex = position < sourceCount ? position : cycleLength - position;
      drawFrame(images[imageIndex]);
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1000 / fps);
      });
    }

    recorder.stop();
    const blob = await finished;
    const resolvedType = blob.type || mimeType || 'video/webm';
    return {
      blob,
      mimeType: resolvedType,
      extension: resolvedType.includes('mp4') ? 'mp4' : 'webm',
    };
  } catch (cause) {
    if (recorder.state !== 'inactive') recorder.stop();
    throw cause;
  } finally {
    stream.getTracks().forEach((track) => track.stop());
  }
}
