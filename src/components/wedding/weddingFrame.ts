const INK = '#2A1712';
const CREAM = '#FFF9F0';

export const WEDDING_FRAME_SIZE = { width: 1080, height: 1920 } as const;

/* Coordinate space of the supplied frame artwork (public/images/frame-ripki2.png). */
const FRAME_ART = { width: 939, height: 1675 } as const;
const CARD = { left: 66, top: 139, right: 882, bottom: 1406, photoBottom: 1312, radius: 29, inset: 5 } as const;
const MENU_DOTS = { x: 833.5, ys: [185, 200, 215] as const, radius: 3.8 } as const;

const frameCache = new Map<string, HTMLImageElement>();
const frameRequests = new Map<string, Promise<HTMLImageElement>>();

/** Browsers may already have the frame decoded by the time the camera opens. */
export function getWeddingFrame(src: string) {
  return frameCache.get(src) ?? null;
}

export function loadWeddingFrame(src: string): Promise<HTMLImageElement> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Bingkai belum bisa dimuat.'));
  }

  const cached = frameCache.get(src);
  if (cached) return Promise.resolve(cached);

  const pending = frameRequests.get(src);
  if (pending) return pending;

  const request = new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      if (image.naturalWidth > 0) {
        frameCache.set(src, image);
        resolve(image);
        return;
      }
      reject(new Error('Bingkai belum bisa dimuat.'));
    };
    image.onerror = () => reject(new Error('Bingkai belum bisa dimuat.'));
    image.src = src;
  });

  frameRequests.set(src, request);
  void request.catch(() => {
    frameRequests.delete(src);
  });
  return request;
}

function roundedTopPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + width - r, y);
  context.quadraticCurveTo(x + width, y, x + width, y + r);
  context.lineTo(x + width, y + height);
  context.lineTo(x, y + height);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function roundedRectPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + width - r, y);
  context.quadraticCurveTo(x + width, y, x + width, y + r);
  context.lineTo(x + width, y + height - r);
  context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  context.lineTo(x + r, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function drawPhotoCover(
  context: CanvasRenderingContext2D,
  source: CanvasImageSource & { videoWidth?: number; videoHeight?: number },
  x: number,
  y: number,
  width: number,
  height: number,
  mirror: boolean,
  clipPath: (context: CanvasRenderingContext2D) => void,
) {
  const sourceWidth = source.videoWidth ?? 0;
  const sourceHeight = source.videoHeight ?? 0;
  if (!sourceWidth || !sourceHeight) return false;

  const scale = Math.max(width / sourceWidth, height / sourceHeight);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;

  context.save();
  clipPath(context);
  context.clip();
  // Mirror inside the aperture only, so the saved photo matches the preview.
  if (mirror) {
    context.translate(x * 2 + width, 0);
    context.scale(-1, 1);
  }
  context.drawImage(source, drawX, drawY, drawWidth, drawHeight);
  context.restore();
  return true;
}

function drawMenuDots(context: CanvasRenderingContext2D, sx: number, sy: number) {
  const x = MENU_DOTS.x * sx;
  const dotRadius = MENU_DOTS.radius * sx;

  context.save();
  context.fillStyle = INK;
  MENU_DOTS.ys.forEach((referenceY) => {
    context.beginPath();
    context.arc(x, referenceY * sy, dotRadius, 0, Math.PI * 2);
    context.fill();
  });
  context.restore();
}

/**
 * Draws the complete 9:16 wedding keepsake around the supplied frame artwork.
 * The live preview and the final JPG use the same function so the result is
 * exactly what the guest sees before shooting.
 */
export function drawWeddingComposition(
  context: CanvasRenderingContext2D,
  video: HTMLVideoElement | null,
  width: number,
  height: number,
  mirror: boolean,
  frameImage: HTMLImageElement | null,
) {
  const sx = width / FRAME_ART.width;
  const sy = height / FRAME_ART.height;

  context.save();
  context.clearRect(0, 0, width, height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';

  const cardX = CARD.left * sx;
  const cardY = CARD.top * sy;
  const cardWidth = (CARD.right - CARD.left + 1) * sx;
  const cardHeight = (CARD.bottom - CARD.top + 1) * sy;
  const cardRadius = CARD.radius * sx;

  if (frameImage) {
    context.drawImage(frameImage, 0, 0, width, height);
  } else {
    // Warm fallback while the HD frame is decoding.
    context.fillStyle = '#8B4424';
    context.fillRect(0, 0, width, height);
    roundedRectPath(context, cardX, cardY, cardWidth, cardHeight, cardRadius);
    context.fillStyle = CREAM;
    context.fill();
  }

  const inset = CARD.inset * sx;
  const photoX = cardX + inset;
  const photoY = cardY + inset;
  const photoWidth = cardWidth - inset * 2;
  const photoBottom = CARD.photoBottom * sy;
  const photoHeight = photoBottom - photoY;

  if (video) {
    drawPhotoCover(
      context,
      video,
      photoX,
      photoY,
      photoWidth,
      photoHeight,
      mirror,
      (ctx) => roundedTopPath(ctx, photoX, photoY, photoWidth, photoHeight, 24 * sx),
    );
  }

  // The HD frame has its own menu dots, but the photo now covers them.
  drawMenuDots(context, sx, sy);

  context.restore();
}

export async function composeWeddingPhoto(video: HTMLVideoElement, mirror: boolean, frameSrc: string) {
  const frameImage = await loadWeddingFrame(frameSrc);
  const canvas = document.createElement('canvas');
  canvas.width = WEDDING_FRAME_SIZE.width;
  canvas.height = WEDDING_FRAME_SIZE.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Perangkat ini belum mendukung pengolahan foto.');
  drawWeddingComposition(context, video, canvas.width, canvas.height, mirror, frameImage);
  return canvas;
}

export function canvasToJpegBlob(canvas: HTMLCanvasElement, quality = 0.92) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Foto belum bisa dibuat. Coba ambil ulang.'));
      },
      'image/jpeg',
      quality,
    );
  });
}
