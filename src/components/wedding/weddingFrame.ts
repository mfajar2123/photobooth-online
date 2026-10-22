const INK = '#171512';
const INK_SOFT = 'rgba(23, 21, 18, 0.66)';
const INK_FAINT = 'rgba(23, 21, 18, 0.38)';
const CREAM = '#FFFDF5';
const POPPY = '#E63946';
const MONO = '"JetBrains Mono", "Courier New", monospace';
const SCRIPT = '"Great Vibes", "Brush Script MT", cursive';

export const WEDDING = {
  couple: 'Ripki & Siti',
  venue: 'GOALPARA',
  date: '28 NOVEMBER 2026',
} as const;

export const WEDDING_FRAME_SIZE = { width: 1080, height: 1920 } as const;

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

function drawPhotoCover(
  context: CanvasRenderingContext2D,
  source: CanvasImageSource & { videoWidth?: number; videoHeight?: number },
  x: number,
  y: number,
  width: number,
  height: number,
  mirror: boolean,
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
  context.beginPath();
  context.rect(x, y, width, height);
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

/**
 * Draws the complete 9:16 wedding keepsake. Used for both the live preview and
 * the final JPG, so the result is exactly what the guest sees before shooting.
 */
export function drawWeddingComposition(
  context: CanvasRenderingContext2D,
  video: HTMLVideoElement | null,
  width: number,
  height: number,
  mirror: boolean,
) {
  const unit = width / WEDDING_FRAME_SIZE.width;

  context.save();
  context.clearRect(0, 0, width, height);

  // Warm paper mat
  context.fillStyle = CREAM;
  context.fillRect(0, 0, width, height);

  const butterGlow = context.createRadialGradient(
    width * 0.5,
    height * 0.02,
    0,
    width * 0.5,
    height * 0.16,
    height * 0.62,
  );
  butterGlow.addColorStop(0, 'rgba(255, 243, 176, 0.72)');
  butterGlow.addColorStop(0.46, 'rgba(255, 243, 176, 0.24)');
  butterGlow.addColorStop(1, 'rgba(255, 253, 245, 0)');
  context.fillStyle = butterGlow;
  context.fillRect(0, 0, width, height);

  // Top label
  drawStar4(context, width / 2, 70 * unit, 9 * unit, 3.2 * unit, POPPY);
  drawTrackedText(
    context,
    WEDDING.venue,
    width / 2,
    120 * unit,
    8 * unit,
    `500 ${21 * unit}px ${MONO}`,
    INK_SOFT,
  );

  // Photo aperture
  const photoX = 90 * unit;
  const photoY = 150 * unit;
  const photoWidth = 900 * unit;
  const photoHeight = 1200 * unit;
  context.fillStyle = '#1A1916';
  context.fillRect(photoX, photoY, photoWidth, photoHeight);
  if (video) drawPhotoCover(context, video, photoX, photoY, photoWidth, photoHeight, mirror);

  context.strokeStyle = INK;
  context.lineWidth = 2.5 * unit;
  context.strokeRect(
    photoX - 1.25 * unit,
    photoY - 1.25 * unit,
    photoWidth + 2.5 * unit,
    photoHeight + 2.5 * unit,
  );

  // Gentle inset highlight over the photo edge
  context.strokeStyle = 'rgba(255, 253, 245, 0.52)';
  context.lineWidth = 1.5 * unit;
  context.strokeRect(
    photoX + 11 * unit,
    photoY + 11 * unit,
    photoWidth - 22 * unit,
    photoHeight - 22 * unit,
  );

  // Double mat rule
  context.strokeStyle = 'rgba(23, 21, 18, 0.56)';
  context.lineWidth = 1.5 * unit;
  context.strokeRect(34 * unit, 34 * unit, 1012 * unit, 1852 * unit);
  context.strokeStyle = 'rgba(23, 21, 18, 0.2)';
  context.lineWidth = 1 * unit;
  context.strokeRect(46 * unit, 46 * unit, 988 * unit, 1828 * unit);

  // Caption block
  drawTrackedText(
    context,
    'WEDDING OF',
    width / 2,
    1489 * unit,
    10 * unit,
    `500 ${23 * unit}px ${MONO}`,
    INK_SOFT,
  );

  const nameParts: { text: string; color: string }[] = [
    { text: 'Ripki ', color: INK },
    { text: '&', color: POPPY },
    { text: ' Siti', color: INK },
  ];
  let nameSize = 134 * unit;
  const measureNameParts = (size: number) => {
    context.font = `400 ${size}px ${SCRIPT}`;
    return nameParts.reduce((sum, part) => sum + context.measureText(part.text).width, 0);
  };
  while (measureNameParts(nameSize) > 828 * unit && nameSize > 64 * unit) {
    nameSize -= 4 * unit;
  }
  context.font = `400 ${nameSize}px ${SCRIPT}`;
  context.textAlign = 'left';
  context.textBaseline = 'alphabetic';
  let nameX = width / 2 - measureNameParts(nameSize) / 2;
  nameParts.forEach((part) => {
    context.fillStyle = part.color;
    context.fillText(part.text, nameX, 1614 * unit);
    nameX += context.measureText(part.text).width;
  });

  // Divider with a small poppy star
  const dividerY = 1686 * unit;
  context.strokeStyle = 'rgba(23, 21, 18, 0.38)';
  context.lineWidth = 1 * unit;
  context.beginPath();
  context.moveTo(392 * unit, dividerY);
  context.lineTo(508 * unit, dividerY);
  context.moveTo(572 * unit, dividerY);
  context.lineTo(688 * unit, dividerY);
  context.stroke();
  drawStar4(context, width / 2, dividerY, 9.5 * unit, 3.1 * unit, POPPY);

  drawTrackedText(
    context,
    WEDDING.date,
    width / 2,
    1762 * unit,
    7 * unit,
    `500 ${22 * unit}px ${MONO}`,
    INK_SOFT,
  );

  // Footer: Ruang Kilas mark + domain on the left, booth label on the right.
  const footerBaseline = 1842 * unit;
  const footerFont = `500 ${12 * unit}px ${MONO}`;
  const domainTracking = 2.2 * unit;
  const boothTracking = 2.6 * unit;
  const domainX = 114 * unit;
  const boothRight = 990 * unit;

  drawStar4(context, 100 * unit, footerBaseline - 4 * unit, 8 * unit, 2.8 * unit, POPPY);

  context.save();
  context.font = footerFont;
  const domainWidth = measureTracked(context, 'ruangkilas.my.id', domainTracking).width;
  const boothWidth = measureTracked(context, 'VIRTUAL PHOTOBOOTH', boothTracking).width;
  context.restore();

  drawTrackedText(
    context,
    'ruangkilas.my.id',
    domainX + domainWidth / 2,
    footerBaseline,
    domainTracking,
    footerFont,
    INK_FAINT,
  );

  drawTrackedText(
    context,
    'VIRTUAL PHOTOBOOTH',
    boothRight - boothWidth / 2,
    footerBaseline,
    boothTracking,
    footerFont,
    INK_FAINT,
  );

  context.restore();
}

export async function composeWeddingPhoto(video: HTMLVideoElement, mirror: boolean) {
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await Promise.all([
        document.fonts.load('400 134px "Great Vibes"'),
        document.fonts.load('500 23px "JetBrains Mono"'),
        document.fonts.load('500 13px "JetBrains Mono"'),
        document.fonts.ready,
      ]);
    } catch {
      // The JPG still renders with the closest available fallback font.
    }
  }

  const canvas = document.createElement('canvas');
  canvas.width = WEDDING_FRAME_SIZE.width;
  canvas.height = WEDDING_FRAME_SIZE.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Perangkat ini belum mendukung pengolahan foto.');
  drawWeddingComposition(context, video, canvas.width, canvas.height, mirror);
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
