const INK = '#2A1712';
const CREAM = '#FFF9F0';
const GOLD = '#E8C78F';
const MONO = '"JetBrains Mono", "Courier New", monospace';

export const WEDDING = {
  couple: 'Ripki & Aura',
  venue: 'SUKABUMI',
  date: '28 NOVEMBER 2026',
} as const;

export const WEDDING_FRAME_SIZE = { width: 1080, height: 1920 } as const;

/* Coordinate space of the supplied frame artwork (public/images/frame-ripki.jpeg). */
const FRAME_ART = { width: 402, height: 717 } as const;
const CARD = { left: 29, top: 60, right: 378, bottom: 600, photoBottom: 560, radius: 12, inset: 2 } as const;
const MENU_DOTS = { x: 357, ys: [79, 85, 92] as const };
const WATERMARK = { baseline: 43, left: 18 } as const;

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

function drawStar4(
  context: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  color: string,
) {
  context.save();
  context.fillStyle = color;
  context.beginPath();
  for (let index = 0; index < 8; index += 1) {
    const angle = (index * Math.PI) / 4 - Math.PI / 2;
    const radius = index % 2 === 0 ? outer : inner;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.fill();
  context.restore();
}

function measureTracked(context: CanvasRenderingContext2D, text: string, tracking: number) {
  const characters = Array.from(text);
  const glyphWidths = characters.map((character) => context.measureText(character).width);
  const total = glyphWidths.reduce((sum, width) => sum + width, 0);
  return { characters, glyphWidths, width: total + Math.max(0, characters.length - 1) * tracking };
}

function drawTrackedText(
  context: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  baseline: number,
  tracking: number,
  font: string,
  color: string,
) {
  context.save();
  context.font = font;
  context.fillStyle = color;
  context.textAlign = 'left';
  context.textBaseline = 'alphabetic';
  const { characters, glyphWidths, width } = measureTracked(context, text, tracking);
  let x = centerX - width / 2;
  characters.forEach((character, index) => {
    context.fillText(character, x, baseline);
    x += glyphWidths[index] + tracking;
  });
  context.restore();
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
  const dotRadius = 1.5 * sx;
  const haloRadius = 3 * sx;

  context.save();
  MENU_DOTS.ys.forEach((referenceY) => {
    const y = referenceY * sy;
    context.beginPath();
    context.fillStyle = 'rgba(255, 249, 240, 0.35)';
    context.arc(x, y, haloRadius, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.fillStyle = INK;
    context.arc(x, y, dotRadius, 0, Math.PI * 2);
    context.fill();
  });
  context.restore();
}

function drawFrameWatermark(context: CanvasRenderingContext2D, width: number, height: number) {
  const sx = width / FRAME_ART.width;
  const sy = height / FRAME_ART.height;
  const size = 5.4 * sx;
  const tracking = 1.4 * sx;
  const font = `500 ${size}px ${MONO}`;
  const baseline = WATERMARK.baseline * sy;
  const left = WATERMARK.left * sx;
  const starOuter = 3.2 * sx;
  const starInner = 1.2 * sx;
  const starGap = 2.4 * sx;

  context.save();
  context.font = font;
  const domainWidth = measureTracked(context, 'ruangkilas.my.id', tracking).width;
  const domainCenter = left + starOuter * 2 + starGap + domainWidth / 2;

  context.shadowColor = 'rgba(44, 20, 12, 0.55)';
  context.shadowBlur = 2.5 * sx;
  context.shadowOffsetY = 0.8 * sx;

  drawStar4(
    context,
    left + starOuter,
    baseline - size * 0.34,
    starOuter,
    starInner,
    GOLD,
  );

  drawTrackedText(
    context,
    'ruangkilas.my.id',
    domainCenter,
    baseline,
    tracking,
    font,
    'rgba(255, 249, 240, 0.88)',
  );
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
    // Warm fallback while the small frame JPEG is decoding.
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
      (ctx) => roundedTopPath(ctx, photoX, photoY, photoWidth, photoHeight, 10 * sx),
    );
  }

  // The frame JPEG has its own menu dots, but the photo now covers them.
  drawMenuDots(context, sx, sy);

  // The reference already carries the hashtag, names, and date. Keep only a
  // small Ruang Kilas mark in the clear top-left corner of the artwork.
  drawFrameWatermark(context, width, height);

  context.restore();
}

export async function composeWeddingPhoto(video: HTMLVideoElement, mirror: boolean, frameSrc: string) {
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await Promise.all([
        document.fonts.load('500 20px "JetBrains Mono"'),
        document.fonts.ready,
      ]);
    } catch {
      // The JPG still renders with the closest available fallback font.
    }
  }

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
