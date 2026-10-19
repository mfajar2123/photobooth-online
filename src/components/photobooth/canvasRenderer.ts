import type { CustomPattern, FramePreset, LayoutId, LensId, PhotoSlot } from './types';
import { layouts } from './presets';

const clamp = (value: number, min = 0, max = 255) => Math.max(min, Math.min(max, value));
const fisheyeSources = new WeakMap<HTMLCanvasElement, HTMLCanvasElement>();

function fisheye(source: HTMLCanvasElement, target: HTMLCanvasElement) {
  const w = source.width;
  const h = source.height;
  const srcContext = source.getContext('2d', { willReadFrequently: true });
  const dstContext = target.getContext('2d', { willReadFrequently: true });
  if (!srcContext || !dstContext) return;
  const src = srcContext.getImageData(0, 0, w, h);
  const dst = dstContext.createImageData(w, h);
  const cx = (w - 1) / 2;
  const cy = (h - 1) / 2;
  const radius = Math.min(cx, cy);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = (x - cx) / radius;
      const ny = (y - cy) / radius;
      const r2 = nx * nx + ny * ny;
      const index = (y * w + x) * 4;
      if (r2 <= 1) {
        const factor = 1 + r2 * 0.28;
        const sx = Math.round(cx + (nx / factor) * radius);
        const sy = Math.round(cy + (ny / factor) * radius);
        const sample = (sy * w + sx) * 4;
        dst.data[index] = src.data[sample];
        dst.data[index + 1] = src.data[sample + 1];
        dst.data[index + 2] = src.data[sample + 2];
        dst.data[index + 3] = 255;
      }
    }
  }
  dstContext.putImageData(dst, 0, 0);
}

export function drawLensFrame(video: HTMLVideoElement, canvas: HTMLCanvasElement, lens: LensId, mirror = true) {
  if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || video.videoWidth === 0) return false;
  const width = 640;
  const height = Math.round((width * video.videoHeight) / video.videoWidth) || 480;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const context = canvas.getContext('2d', { willReadFrequently: lens !== 'studio' });
  if (!context) return false;
  context.save();
  if (mirror) {
    context.translate(width, 0);
    context.scale(-1, 1);
  }
  const crop = Math.max(width / video.videoWidth, height / video.videoHeight);
  const sw = width / crop;
  const sh = height / crop;
  context.drawImage(video, (video.videoWidth - sw) / 2, (video.videoHeight - sh) / 2, sw, sh, 0, 0, width, height);
  context.restore();

  if (lens === 'fisheye') {
    let source = fisheyeSources.get(canvas);
    if (!source) {
      source = document.createElement('canvas');
      source.width = width;
      source.height = height;
      fisheyeSources.set(canvas, source);
    }
    source.getContext('2d')?.drawImage(canvas, 0, 0);
    fisheye(source, canvas);
    context.beginPath();
    context.ellipse(width / 2, height / 2, width * 0.49, height * 0.49, 0, 0, Math.PI * 2);
    const vignette = context.createRadialGradient(width / 2, height / 2, width * 0.32, width / 2, height / 2, width * 0.72);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,.8)');
    context.fillStyle = vignette;
    context.fill();
  } else if (lens !== 'studio' && lens !== 'dreamy') {
    const image = context.getImageData(0, 0, width, height);
    const data = image.data;
    for (let i = 0; i < data.length; i += 4) {
      let [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      if (lens === 'bw') {
        const gray = clamp((r * 0.2126 + g * 0.7152 + b * 0.0722 - 128) * 1.45 + 128);
        r = g = b = gray;
      } else if (lens === 'thermal') {
        const v = (r + g + b) / 3;
        r = clamp((v - 70) * 1.9 + 34);
        g = clamp(220 - Math.abs(v - 140) * 2);
        b = clamp(250 - v * 1.35);
      } else if (lens === 'leica') {
        r = clamp(r * 1.12 + 14);
        g = clamp(g * 1.02 + 5);
        b = clamp(b * 0.86 - 4);
      } else if (lens === 'digicam') {
        r = clamp(Math.round(r / 28) * 28 * 1.12 + 6);
        g = clamp(Math.round(g / 28) * 28 * 1.04 + 4);
        b = clamp(Math.round(b / 32) * 32 * 0.94);
      } else if (lens === 'vhs') {
        r = clamp(r * 1.16 + 8);
        b = clamp(b * 1.22 + 12);
      }
      const grain = lens === 'leica' ? (Math.random() - 0.5) * 15 : 0;
      data[i] = clamp(r + grain);
      data[i + 1] = clamp(g + grain);
      data[i + 2] = clamp(b + grain);
    }
    context.putImageData(image, 0, 0);
    if (lens === 'vhs') {
      context.globalAlpha = 0.2;
      context.fillStyle = '#ff1744';
      context.fillRect(3, 0, width, height);
      context.globalAlpha = 0.16;
      context.fillStyle = '#168fff';
      context.fillRect(-3, 0, width, height);
      context.globalAlpha = 0.15;
      context.fillStyle = '#121212';
      for (let y = 4; y < height; y += 5) context.fillRect(0, y, width, 1);
      context.globalAlpha = 1;
      context.font = '500 13px monospace';
      context.fillStyle = '#fff';
      context.fillText('PLAY ▷  SP 00:04:12', 18, 28);
    }
    if (lens === 'digicam') {
      context.font = '500 16px monospace';
      context.fillStyle = '#FF7700';
      context.fillText(new Date().toLocaleDateString('en-CA'), width - 124, height - 20);
    }
    if (lens === 'leica') {
      const leak = context.createLinearGradient(0, 0, width, height);
      leak.addColorStop(0, 'rgba(233,85,36,.24)');
      leak.addColorStop(0.18, 'rgba(233,85,36,0)');
      leak.addColorStop(0.82, 'rgba(255,189,68,0)');
      leak.addColorStop(1, 'rgba(255,133,53,.24)');
      context.fillStyle = leak;
      context.fillRect(0, 0, width, height);
    }
  } else if (lens === 'dreamy') {
    context.globalCompositeOperation = 'screen';
    context.globalAlpha = 0.28;
    context.filter = 'blur(12px) brightness(1.4)';
    context.drawImage(canvas, 0, 0);
    context.filter = 'none';
    context.globalAlpha = 1;
    context.globalCompositeOperation = 'source-over';
  }
  return true;
}

export interface FrameGeometry {
  photoTop: number;
  photoBottom: number;
  inset: number;
  cellW: number;
  cellH: number;
  cols: number;
  rows: number;
  gap: number;
  footer: number;
  photoRects: { x: number; y: number; w: number; h: number }[];
}

export async function composePhotostrip(options: {
  slots: PhotoSlot[];
  frame: FramePreset;
  layoutId: LayoutId;
  caption: string;
  stickers: string[];
  stickerPositions: { x: number; y: number }[];
  customColor?: string;
  customPattern?: CustomPattern;
  outputWidth?: number;
}): Promise<HTMLCanvasElement> {
  const layout = layouts.find((item) => item.id === options.layoutId) ?? layouts[0];
  const width = options.outputWidth ?? (layout.columns === 2 ? 2400 : 1800);
  const height = Math.round(width / layout.ratio);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) return canvas;

  const images = await Promise.all(
    options.slots.map(async (slot) => {
      const image = new Image();
      image.src = slot.image;
      try {
        await image.decode();
      } catch {
        /* A failed slot is left blank and can be retaken */
      }
      return image;
    }),
  );

  const frame = options.frame;
  const paper = frame.id === 'custom' ? options.customColor ?? frame.background : frame.background;
  context.fillStyle = paper;
  context.fillRect(0, 0, width, height);

  // Background motifs
  drawFrameBackground(context, width, height, frame, options.customPattern);

  const footer = layout.id === 'polaroid' ? Math.round(height * 0.19) : Math.round(height * 0.11);
  const isWideMargin = ['film', 'airmail', 'ticket', 'boarding', 'passport', 'cinema'].includes(frame.motif);
  const inset = Math.round(Math.min(width, height) * (isWideMargin ? 0.095 : 0.065));
  const cols = layout.columns;
  const rows = Math.ceil(layout.count / cols);
  const gap = Math.round(Math.min(width, height) * 0.032);
  const photoTop = inset;
  const photoBottom = height - footer - inset * 0.28;
  const cellW = (width - inset * 2 - gap * (cols - 1)) / cols;
  const cellH = (photoBottom - photoTop - gap * (rows - 1)) / rows;

  const photoRects: { x: number; y: number; w: number; h: number }[] = [];
  options.slots.slice(0, layout.count).forEach((_slot, index) => {
    const image = images[index];
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = inset + col * (cellW + gap);
    const y = photoTop + row * (cellH + gap);
    photoRects.push({ x, y, w: cellW, h: cellH });
    context.fillStyle = '#121212';
    context.fillRect(x - 3, y - 3, cellW + 6, cellH + 6);
    drawCover(context, image, x, y, cellW, cellH);
  });

  const geometry: FrameGeometry = { photoTop, photoBottom, inset, cellW, cellH, cols, rows, gap, footer, photoRects };

  // Foreground decorations & overlays (washi tape, stamps, notches, corner ornaments)
  drawFrameOverlay(context, width, height, frame, geometry);

  // Caption
  const captionY = height - footer * 0.64;
  context.textAlign = 'center';
  context.fillStyle = frame.foreground;
  context.font = `800 ${Math.max(16, Math.round(width * 0.034))}px Arial, sans-serif`;
  const rawLabel = options.caption.trim() || frame.caption;
  const label = rawLabel.replace(/[<>\u0000-\u001F\u007F-\u009F]/g, '').slice(0, 48);
  context.fillText(label.toUpperCase(), width / 2, captionY, width - inset * 1.4);

  // Stickers
  const stickerFont = Math.max(24, Math.round(width * 0.046));
  context.font = `${stickerFont}px Arial`;
  context.textAlign = 'left';
  options.stickers.forEach((sticker, i) => {
    const position = options.stickerPositions[i] ?? { x: 50, y: 50 };
    context.fillText(sticker, (width * position.x) / 100, (height * position.y) / 100);
  });

  // Footer Watermark
  context.textAlign = 'center';
  context.font = `600 ${Math.max(12, Math.round(width * 0.013))}px monospace`;
  context.fillStyle = frame.foreground;
  context.fillText(
    `✦ MIVORA PHOTO STUDIO  ·  mivoraphoto.id  ·  ${new Date().toLocaleDateString('id-ID')}`,
    width / 2,
    height - Math.max(14, footer * 0.2),
    width - 32,
  );

  return canvas;
}

function drawCover(context: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, w: number, h: number) {
  if (!image.complete || !image.naturalWidth) return;
  const scale = Math.max(w / image.width, h / image.height);
  const sw = w / scale;
  const sh = h / scale;
  context.drawImage(image, (image.width - sw) / 2, (image.height - sh) / 2, sw, sh, x, y, w, h);
}

// ---------------------------------------------------------------------------
// Helper: 4-Point Star
// ---------------------------------------------------------------------------
function draw4PointStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, rOuter: number, rInner: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// ---------------------------------------------------------------------------
// Helper: Barcode Generator
// ---------------------------------------------------------------------------
function drawBarcode(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string, bars = 28) {
  ctx.save();
  ctx.fillStyle = color;
  const pattern = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2, 3, 1, 2, 1, 4, 2, 1, 2];
  let curX = x;
  const unit = w / (pattern.slice(0, bars).reduce((a, b) => a + b, 0) + bars);
  for (let i = 0; i < bars; i++) {
    const bw = pattern[i % pattern.length] * unit;
    ctx.fillRect(curX, y, bw, h);
    curX += bw + unit;
  }
  ctx.restore();
}

// ---------------------------------------------------------------------------
// BACKGROUND MOTIFS (Rendered before photos)
// ---------------------------------------------------------------------------
export function drawFrameBackground(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  frame: FramePreset,
  customPattern: CustomPattern = 'solid',
) {
  context.save();
  const s = width / 1000;

  // CHECKERBOARD
  if (frame.motif === 'checker') {
    const size = Math.round(36 * s);
    context.fillStyle = frame.accent;
    for (let y = 0; y < height; y += size * 2) {
      for (let x = 0; x < width; x += size * 2) {
        context.fillRect(x, y, size, size);
        context.fillRect(x + size, y + size, size, size);
      }
    }
    context.globalAlpha = 0.94;
    context.fillStyle = frame.background;
    context.fillRect(width * 0.065, height * 0.05, width * 0.87, height * 0.9);
    context.globalAlpha = 1;
  }

  // 35MM FILM SPROCKETS
  if (frame.motif === 'film') {
    context.fillStyle = '#0a0a0a';
    context.fillRect(0, 0, width * 0.08, height);
    context.fillRect(width * 0.92, 0, width * 0.08, height);
    context.fillStyle = frame.accent;
    const holeW = Math.round(28 * s);
    const holeH = Math.round(18 * s);
    const holeR = Math.round(4 * s);
    for (let y = Math.round(30 * s); y < height - Math.round(30 * s); y += Math.round(42 * s)) {
      // Left sprocket
      context.beginPath();
      context.roundRect(Math.round(18 * s), y, holeW, holeH, holeR);
      context.fill();
      // Right sprocket
      context.beginPath();
      context.roundRect(width - Math.round(18 * s) - holeW, y, holeW, holeH, holeR);
      context.fill();
    }
  }

  // AIRMAIL PAR AVION CHEVRONS
  if (frame.motif === 'airmail') {
    const stripSize = Math.round(24 * s);
    const red = frame.accent;
    const blue = '#1A4B82';
    // Top & bottom borders
    for (let x = -stripSize; x < width + stripSize; x += stripSize * 2) {
      context.fillStyle = red;
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + stripSize, 0);
      context.lineTo(x + stripSize * 1.5, stripSize);
      context.lineTo(x + stripSize * 0.5, stripSize);
      context.closePath();
      context.fill();

      context.fillStyle = blue;
      context.beginPath();
      context.moveTo(x + stripSize, 0);
      context.lineTo(x + stripSize * 2, 0);
      context.lineTo(x + stripSize * 2.5, stripSize);
      context.lineTo(x + stripSize * 1.5, stripSize);
      context.closePath();
      context.fill();

      // Bottom
      context.fillStyle = red;
      context.beginPath();
      context.moveTo(x, height);
      context.lineTo(x + stripSize, height);
      context.lineTo(x + stripSize * 0.5, height - stripSize);
      context.lineTo(x - stripSize * 0.5, height - stripSize);
      context.closePath();
      context.fill();

      context.fillStyle = blue;
      context.beginPath();
      context.moveTo(x + stripSize, height);
      context.lineTo(x + stripSize * 2, height);
      context.lineTo(x + stripSize * 1.5, height - stripSize);
      context.lineTo(x + stripSize * 0.5, height - stripSize);
      context.closePath();
      context.fill();
    }
  }

  // GINGHAM STRAWBERRY PATTERN
  if (frame.motif === 'strawberry') {
    const box = Math.round(22 * s);
    context.fillStyle = frame.accent;
    context.globalAlpha = 0.18;
    for (let y = 0; y < height; y += box * 2) {
      for (let x = 0; x < width; x += box * 2) {
        context.fillRect(x, y, box, box);
        context.fillRect(x + box, y + box, box, box);
      }
    }
    context.globalAlpha = 1;
  }

  // NOTEBOOK GRID
  if (frame.motif === 'notebook') {
    context.strokeStyle = '#D6E2E9';
    context.lineWidth = 1;
    const grid = Math.round(20 * s);
    for (let x = 0; x < width; x += grid) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y < height; y += grid) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
    // Pink notebook margin line
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2.5 * s);
    context.beginPath();
    context.moveTo(Math.round(44 * s), 0);
    context.lineTo(Math.round(44 * s), height);
    context.stroke();
  }

  // MATRIX TERMINAL
  if (frame.motif === 'matrix') {
    context.fillStyle = frame.foreground;
    context.font = `${Math.round(14 * s)}px monospace`;
    context.globalAlpha = 0.45;
    const chars = ['0', '1', '0', '1', '8', '9', 'X', 'Z'];
    for (let x = Math.round(16 * s); x < width; x += Math.round(26 * s)) {
      if (x > width * 0.12 && x < width * 0.88) continue;
      for (let y = Math.round(20 * s); y < height; y += Math.round(28 * s)) {
        const char = chars[(x + y) % chars.length];
        context.fillText(char, x, y);
      }
    }
    context.globalAlpha = 1;
  }

  // VINYL GROOVES
  if (frame.motif === 'vinyl') {
    context.strokeStyle = '#282828';
    context.lineWidth = 1;
    const cx = width / 2;
    const cy = height * 0.44;
    for (let r = Math.round(80 * s); r < width * 0.9; r += Math.round(14 * s)) {
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.stroke();
    }
  }

  // COMIC HALFTONE DOTS
  if (frame.motif === 'comic') {
    context.fillStyle = frame.accent;
    context.globalAlpha = 0.22;
    const dotGap = Math.round(18 * s);
    const dotR = Math.round(3.5 * s);
    for (let y = Math.round(10 * s); y < height; y += dotGap) {
      for (let x = Math.round(10 * s); x < width; x += dotGap) {
        context.beginPath();
        context.arc(x, y, dotR, 0, Math.PI * 2);
        context.fill();
      }
    }
    context.globalAlpha = 1;
  }

  // CUSTOM PATTERN
  if (frame.motif === 'custom' && customPattern !== 'solid') {
    context.fillStyle = frame.accent;
    context.strokeStyle = frame.accent;
    context.globalAlpha = 0.22;
    if (customPattern === 'dots') {
      const step = Math.round(24 * s);
      for (let y = step; y < height; y += step) {
        for (let x = step; x < width; x += step) {
          context.beginPath();
          context.arc(x, y, Math.round(3 * s), 0, Math.PI * 2);
          context.fill();
        }
      }
    } else if (customPattern === 'lines' || customPattern === 'grid') {
      context.lineWidth = Math.round(2 * s);
      const step = Math.round(26 * s);
      for (let x = step; x < width; x += step) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      if (customPattern === 'grid') {
        for (let y = step; y < height; y += step) {
          context.beginPath();
          context.moveTo(0, y);
          context.lineTo(width, y);
          context.stroke();
        }
      }
    }
    context.globalAlpha = 1;
  }

  context.restore();
}

// ---------------------------------------------------------------------------
// FOREGROUND & OVERLAY DECORATIONS (Rendered after photos)
// ---------------------------------------------------------------------------
export function drawFrameOverlay(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  frame: FramePreset,
  geo: FrameGeometry,
) {
  context.save();
  const s = width / 1000;

  // 1. STAR (Mivora Signature Butter)
  if (frame.motif === 'star') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2.5 * s);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    const starR = Math.round(18 * s);
    draw4PointStar(context, Math.round(32 * s), Math.round(32 * s), starR, starR * 0.35, frame.accent);
    draw4PointStar(context, width - Math.round(32 * s), Math.round(32 * s), starR, starR * 0.35, frame.accent);
    draw4PointStar(context, Math.round(32 * s), height - Math.round(geo.footer * 0.7), starR, starR * 0.35, frame.accent);
    draw4PointStar(context, width - Math.round(32 * s), height - Math.round(geo.footer * 0.7), starR, starR * 0.35, frame.accent);
  }

  // 2. ATELIER (Monokrom Noir)
  if (frame.motif === 'atelier') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(3 * s);
    context.strokeRect(Math.round(16 * s), Math.round(16 * s), width - Math.round(32 * s), height - Math.round(32 * s));
    context.lineWidth = Math.round(1 * s);
    context.strokeRect(Math.round(24 * s), Math.round(24 * s), width - Math.round(48 * s), height - Math.round(48 * s));
    // Art Deco Corner Brackets
    const br = Math.round(36 * s);
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    // Top-left
    context.beginPath();
    context.moveTo(Math.round(24 * s), Math.round(24 * s) + br);
    context.lineTo(Math.round(24 * s), Math.round(24 * s));
    context.lineTo(Math.round(24 * s) + br, Math.round(24 * s));
    context.stroke();
    // Top-right
    context.beginPath();
    context.moveTo(width - Math.round(24 * s) - br, Math.round(24 * s));
    context.lineTo(width - Math.round(24 * s), Math.round(24 * s));
    context.lineTo(width - Math.round(24 * s), Math.round(24 * s) + br);
    context.stroke();
    // Bottom-left
    context.beginPath();
    context.moveTo(Math.round(24 * s), height - Math.round(24 * s) - br);
    context.lineTo(Math.round(24 * s), height - Math.round(24 * s));
    context.lineTo(Math.round(24 * s) + br, height - Math.round(24 * s));
    context.stroke();
    // Bottom-right
    context.beginPath();
    context.moveTo(width - Math.round(24 * s) - br, height - Math.round(24 * s));
    context.lineTo(width - Math.round(24 * s), height - Math.round(24 * s));
    context.lineTo(width - Math.round(24 * s), height - Math.round(24 * s) - br);
    context.stroke();
    // Dot centers
    const corners = [
      [Math.round(24 * s), Math.round(24 * s)],
      [width - Math.round(24 * s), Math.round(24 * s)],
      [Math.round(24 * s), height - Math.round(24 * s)],
      [width - Math.round(24 * s), height - Math.round(24 * s)],
    ];
    context.fillStyle = frame.accent;
    corners.forEach(([cx, cy]) => {
      context.beginPath();
      context.arc(cx, cy, Math.round(4 * s), 0, Math.PI * 2);
      context.fill();
    });
  }

  // 3. SWISS MODERNIST GRID
  if (frame.motif === 'swiss') {
    context.strokeStyle = frame.foreground;
    context.lineWidth = Math.round(1.5 * s);
    // Registration Marks in 4 corners
    const marks = [
      [Math.round(28 * s), Math.round(28 * s)],
      [width - Math.round(28 * s), Math.round(28 * s)],
      [Math.round(28 * s), height - Math.round(28 * s)],
      [width - Math.round(28 * s), height - Math.round(28 * s)],
    ];
    marks.forEach(([cx, cy]) => {
      context.beginPath();
      context.arc(cx, cy, Math.round(8 * s), 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.moveTo(cx - Math.round(14 * s), cy);
      context.lineTo(cx + Math.round(14 * s), cy);
      context.moveTo(cx, cy - Math.round(14 * s));
      context.lineTo(cx, cy + Math.round(14 * s));
      context.stroke();
    });
    // Red Accent Box Top Right
    context.fillStyle = frame.accent;
    context.fillRect(width - Math.round(85 * s), Math.round(44 * s), Math.round(60 * s), Math.round(28 * s));
    context.fillStyle = '#FFFFFF';
    context.font = `bold ${Math.round(12 * s)}px Helvetica, Arial, sans-serif`;
    context.fillText('M-68', width - Math.round(55 * s), Math.round(63 * s));
  }

  // 4. CHROME (Y2K Cyber Pop)
  if (frame.motif === 'chrome') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    context.strokeRect(Math.round(12 * s), Math.round(12 * s), width - Math.round(24 * s), height - Math.round(24 * s));
    // Metallic 3D stars
    const starR = Math.round(24 * s);
    draw4PointStar(context, Math.round(34 * s), Math.round(34 * s), starR, starR * 0.28, frame.accent);
    draw4PointStar(context, width - Math.round(34 * s), Math.round(34 * s), starR, starR * 0.28, frame.accent);
    // Cyber Orbit Ring
    context.strokeStyle = frame.accent;
    context.beginPath();
    context.ellipse(width - Math.round(45 * s), height - Math.round(geo.footer * 0.8), Math.round(30 * s), Math.round(10 * s), 0.35, 0, Math.PI * 2);
    context.stroke();
    context.font = `700 ${Math.round(10 * s)}px monospace`;
    context.fillStyle = frame.foreground;
    context.fillText('SYS_REV.26', Math.round(48 * s), height - Math.round(geo.footer * 0.8));
  }

  // 5. SPARKLE (Purikura)
  if (frame.motif === 'sparkle') {
    context.fillStyle = frame.accent;
    context.font = `${Math.round(24 * s)}px Arial`;
    context.fillText('✦', Math.round(24 * s), Math.round(36 * s));
    context.fillText('♡', width - Math.round(44 * s), Math.round(36 * s));
    context.fillText('★', Math.round(28 * s), height - Math.round(geo.footer * 0.7));
    context.fillText('✦', width - Math.round(40 * s), height - Math.round(geo.footer * 0.7));
    // Soft scalloped lace border
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    context.setLineDash([Math.round(6 * s), Math.round(6 * s)]);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    context.setLineDash([]);
  }

  // 6. PAINT (Win 98)
  if (frame.motif === 'paint') {
    // Win98 Blue Title Bar
    context.fillStyle = '#000080';
    context.fillRect(0, 0, width, Math.round(34 * s));
    context.fillStyle = '#FFFFFF';
    context.font = `bold ${Math.round(13 * s)}px sans-serif`;
    context.textAlign = 'left';
    context.fillText('🎨  untitled - Paint', Math.round(12 * s), Math.round(23 * s));
    // Buttons _ [] X
    const bw = Math.round(20 * s);
    const bh = Math.round(18 * s);
    const bx = width - Math.round(72 * s);
    context.fillStyle = '#C0C0C0';
    context.fillRect(bx, Math.round(8 * s), bw * 3 + Math.round(6 * s), bh);
    context.fillStyle = '#000000';
    context.font = `bold ${Math.round(10 * s)}px monospace`;
    context.fillText('_  □  ✕', bx + Math.round(6 * s), Math.round(21 * s));
    // Bottom 16 Color Palette
    const barY = height - Math.round(32 * s);
    context.fillStyle = '#D4D0C8';
    context.fillRect(0, barY, width, Math.round(32 * s));
    const colors = ['#000', '#fff', '#808080', '#c0c0c0', '#800000', '#f00', '#808000', '#ff0', '#008000', '#0f0', '#008080', '#0ff', '#000080', '#00f', '#800080', '#f0f'];
    colors.forEach((col, i) => {
      context.fillStyle = col;
      context.fillRect(Math.round(16 * s + i * 22 * s), barY + Math.round(6 * s), Math.round(18 * s), Math.round(18 * s));
      context.strokeStyle = '#808080';
      context.strokeRect(Math.round(16 * s + i * 22 * s), barY + Math.round(6 * s), Math.round(18 * s), Math.round(18 * s));
    });
  }

  // 7. RECEIPT (Struk Minimarket)
  if (frame.motif === 'receipt') {
    // Top & Bottom Serrated Sawtooth Paper Cut
    const toothW = Math.round(14 * s);
    const toothH = Math.round(8 * s);
    context.fillStyle = '#FFFFFF';
    for (let x = 0; x < width; x += toothW * 2) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + toothW, toothH);
      context.lineTo(x + toothW * 2, 0);
      context.closePath();
      context.fill();

      context.beginPath();
      context.moveTo(x, height);
      context.lineTo(x + toothW, height - toothH);
      context.lineTo(x + toothW * 2, height);
      context.closePath();
      context.fill();
    }
    // Dotted separator line
    context.strokeStyle = '#B5AE9D';
    context.lineWidth = Math.round(1.5 * s);
    context.setLineDash([Math.round(5 * s), Math.round(5 * s)]);
    context.beginPath();
    context.moveTo(Math.round(geo.inset), height - Math.round(geo.footer * 0.95));
    context.lineTo(width - Math.round(geo.inset), height - Math.round(geo.footer * 0.95));
    context.stroke();
    context.setLineDash([]);
    // Barcode on receipt
    drawBarcode(context, width / 2 - Math.round(120 * s), height - Math.round(geo.footer * 0.38), Math.round(240 * s), Math.round(28 * s), frame.foreground);
    // Stamp LUNAS
    context.save();
    context.translate(width - Math.round(140 * s), height - Math.round(geo.footer * 0.8));
    context.rotate(-0.16);
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2.5 * s);
    context.strokeRect(0, 0, Math.round(110 * s), Math.round(34 * s));
    context.fillStyle = frame.accent;
    context.font = `bold ${Math.round(14 * s)}px monospace`;
    context.fillText('PAID · LUNAS', Math.round(10 * s), Math.round(22 * s));
    context.restore();
  }

  // 8. FILM (Kodachrome 35mm Frame Markers)
  if (frame.motif === 'film') {
    context.fillStyle = frame.accent;
    context.font = `bold ${Math.round(15 * s)}px monospace`;
    context.textAlign = 'left';
    context.fillText('KODAK 400 SAFETY FILM · DX 0184', Math.round(24 * s), Math.round(24 * s));
    // Frame numbers along left edge
    const markers = ['24', '24A', '25', '25A', '26', '26A'];
    markers.forEach((m, idx) => {
      const my = geo.photoTop + idx * Math.round(80 * s);
      if (my < height - geo.footer) {
        context.fillText(`▶ ${m}`, width - Math.round(75 * s), my);
      }
    });
  }

  // 9. AIRMAIL (Round Postal Stamp & Airmail Badge)
  if (frame.motif === 'airmail') {
    // Blue Round Postal Stamp
    context.save();
    context.translate(width - Math.round(90 * s), Math.round(70 * s));
    context.rotate(-0.12);
    context.strokeStyle = '#1A4B82';
    context.lineWidth = Math.round(2.5 * s);
    context.beginPath();
    context.arc(0, 0, Math.round(44 * s), 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, Math.round(38 * s), 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = '#1A4B82';
    context.font = `bold ${Math.round(8 * s)}px monospace`;
    context.textAlign = 'center';
    context.fillText('POSTE AÉRIENNE', 0, -Math.round(14 * s));
    context.font = `bold ${Math.round(11 * s)}px monospace`;
    context.fillText('AIR MAIL', 0, Math.round(4 * s));
    context.font = `bold ${Math.round(8 * s)}px monospace`;
    context.fillText('JAKARTA · 2026', 0, Math.round(18 * s));
    context.restore();
  }

  // 10. KRAFT & WASHI TAPE
  if (frame.motif === 'kraft') {
    // Washi tape strips on photo corners
    geo.photoRects.forEach((rect) => {
      // Top-left tape
      context.save();
      context.translate(rect.x - Math.round(8 * s), rect.y - Math.round(8 * s));
      context.rotate(-0.28);
      context.fillStyle = 'rgba(235, 120, 100, 0.72)';
      context.fillRect(0, 0, Math.round(48 * s), Math.round(18 * s));
      context.restore();
      // Bottom-right tape
      context.save();
      context.translate(rect.x + rect.w - Math.round(36 * s), rect.y + rect.h - Math.round(8 * s));
      context.rotate(-0.25);
      context.fillStyle = 'rgba(100, 180, 220, 0.72)';
      context.fillRect(0, 0, Math.round(48 * s), Math.round(18 * s));
      context.restore();
    });
  }

  // 11. POLAROID RETRO (70s Rainbow Stripe)
  if (frame.motif === 'polaroid-retro') {
    const rainbowColors = ['#E63946', '#F4A261', '#E9C46A', '#2A9D8F', '#264653'];
    const rx = Math.round(geo.inset);
    const ry = height - Math.round(geo.footer * 0.9);
    const rw = Math.round(14 * s);
    const rh = Math.round(28 * s);
    rainbowColors.forEach((color, idx) => {
      context.fillStyle = color;
      context.fillRect(rx + idx * rw, ry, rw, rh);
    });
    // Vintage Red Date Stamp
    context.fillStyle = '#C83228';
    context.font = `bold ${Math.round(14 * s)}px monospace`;
    context.textAlign = 'right';
    context.fillText("AUG '79", width - Math.round(geo.inset), ry + Math.round(18 * s));
  }

  // 12. MUSEUM LOUVRE ART FRAME
  if (frame.motif === 'museum') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(12 * s);
    context.strokeRect(Math.round(8 * s), Math.round(8 * s), width - Math.round(16 * s), height - Math.round(16 * s));
    context.lineWidth = Math.round(2 * s);
    context.strokeRect(Math.round(22 * s), Math.round(22 * s), width - Math.round(44 * s), height - Math.round(44 * s));
    // Brass Museum Plaque at Bottom
    const plW = Math.round(280 * s);
    const plH = Math.round(42 * s);
    const plX = (width - plW) / 2;
    const plY = height - Math.round(geo.footer * 0.88);
    context.fillStyle = '#C8A452';
    context.fillRect(plX, plY, plW, plH);
    context.strokeStyle = '#6E521C';
    context.lineWidth = Math.round(1.5 * s);
    context.strokeRect(plX, plY, plW, plH);
    // 4 Corner Screws
    context.fillStyle = '#4A3712';
    [[plX + 6 * s, plY + 6 * s], [plX + plW - 6 * s, plY + 6 * s], [plX + 6 * s, plY + plH - 6 * s], [plX + plW - 6 * s, plY + plH - 6 * s]].forEach(([sx, sy]) => {
      context.beginPath();
      context.arc(sx, sy, Math.round(2.5 * s), 0, Math.PI * 2);
      context.fill();
    });
    context.fillStyle = '#1D1408';
    context.font = `bold ${Math.round(11 * s)}px serif`;
    context.textAlign = 'center';
    context.fillText('MUSÉE DES BEAUX-ARTS · 2026', width / 2, plY + Math.round(25 * s));
  }

  // 13. TAROT (Cosmic Celestial Symbols)
  if (frame.motif === 'tarot') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(3 * s);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    // Sun / Moon icon top center
    context.fillStyle = frame.accent;
    context.font = `${Math.round(22 * s)}px serif`;
    context.textAlign = 'center';
    context.fillText('☽  ☉  ☾', width / 2, Math.round(32 * s));
    context.fillText('XVII', width / 2, height - Math.round(geo.footer * 0.86));
  }

  // 14. BOTANICAL HERBARIUM
  if (frame.motif === 'botanical') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    // Botanical Stamp
    context.font = `italic ${Math.round(11 * s)}px serif`;
    context.fillStyle = frame.foreground;
    context.textAlign = 'left';
    context.fillText('Herbarium Specimen — Coll. 2026', Math.round(geo.inset), Math.round(30 * s));
    context.textAlign = 'right';
    context.fillText('🌿 Folia Selecta', width - Math.round(geo.inset), Math.round(30 * s));
  }

  // 15. FILIGREE (Baroque Gold)
  if (frame.motif === 'filigree') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(3 * s);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    // Corner scrollwork flourish
    const flR = Math.round(32 * s);
    const fCorners = [
      [Math.round(28 * s), Math.round(28 * s)],
      [width - Math.round(28 * s), Math.round(28 * s)],
      [Math.round(28 * s), height - Math.round(28 * s)],
      [width - Math.round(28 * s), height - Math.round(28 * s)],
    ];
    context.fillStyle = frame.accent;
    fCorners.forEach(([fx, fy]) => {
      draw4PointStar(context, fx, fy, flR * 0.7, flR * 0.25, frame.accent);
    });
  }

  // 16. GIGS / MUSIC FESTIVAL PASS
  if (frame.motif === 'ticket') {
    // Tear notch on right
    context.strokeStyle = frame.foreground;
    context.lineWidth = Math.round(2 * s);
    context.setLineDash([Math.round(6 * s), Math.round(8 * s)]);
    context.beginPath();
    context.moveTo(width * 0.88, 0);
    context.lineTo(width * 0.88, height);
    context.stroke();
    context.setLineDash([]);
    // Half-circle notch
    context.fillStyle = '#FFFFFF';
    context.beginPath();
    context.arc(width * 0.88, height * 0.35, Math.round(16 * s), 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(width * 0.88, height * 0.65, Math.round(16 * s), 0, Math.PI * 2);
    context.fill();
    // Vertical Barcode on Right Edge
    drawBarcode(context, width * 0.9, height * 0.15, Math.round(45 * s), height * 0.5, frame.foreground);
  }

  // 17. COQUETTE RIBBON
  if (frame.motif === 'ribbon') {
    // Bow Ribbons at photo corners
    context.font = `${Math.round(28 * s)}px Arial`;
    context.textAlign = 'center';
    geo.photoRects.forEach((rect) => {
      context.fillText('🎀', rect.x + Math.round(12 * s), rect.y + Math.round(16 * s));
      context.fillText('🎀', rect.x + rect.w - Math.round(12 * s), rect.y + Math.round(16 * s));
    });
    // Scalloped Lace Edge
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    context.setLineDash([Math.round(5 * s), Math.round(5 * s)]);
    context.strokeRect(Math.round(12 * s), Math.round(12 * s), width - Math.round(24 * s), height - Math.round(24 * s));
    context.setLineDash([]);
  }

  // 18. CINEMA TICKET DUO
  if (frame.motif === 'cinema') {
    context.strokeStyle = frame.foreground;
    context.lineWidth = Math.round(2 * s);
    context.setLineDash([Math.round(5 * s), Math.round(7 * s)]);
    context.beginPath();
    context.moveTo(width * 0.86, 0);
    context.lineTo(width * 0.86, height);
    context.stroke();
    context.setLineDash([]);
    // Film Ticket Stub
    context.fillStyle = frame.accent;
    for (let y = Math.round(30 * s); y < height - Math.round(30 * s); y += Math.round(44 * s)) {
      context.fillRect(width * 0.88, y, width * 0.08, Math.round(14 * s));
    }
  }

  // 19. BOARDING PASS
  if (frame.motif === 'boarding') {
    // Top Airline Banner
    context.fillStyle = '#0B69A3';
    context.fillRect(0, 0, width, Math.round(32 * s));
    context.fillStyle = '#FFFFFF';
    context.font = `bold ${Math.round(13 * s)}px sans-serif`;
    context.textAlign = 'left';
    context.fillText('✈  FIRST CLASS BOARDING PASS', Math.round(16 * s), Math.round(22 * s));
    context.textAlign = 'right';
    context.fillText('FLIGHT MV-2026', width - Math.round(16 * s), Math.round(22 * s));
    // Gate / Seat detail
    context.fillStyle = frame.foreground;
    context.font = `bold ${Math.round(11 * s)}px monospace`;
    context.textAlign = 'left';
    context.fillText('CGK ➔ NRT  ·  GATE 04  ·  SEAT 12A', Math.round(geo.inset), height - Math.round(geo.footer * 0.88));
  }

  // 20. PASSPORT VISA STAMPS
  if (frame.motif === 'passport') {
    // Top Visa Stamp (Blue Box)
    context.save();
    context.translate(width - Math.round(140 * s), Math.round(60 * s));
    context.rotate(0.08);
    context.strokeStyle = '#2B6CB0';
    context.lineWidth = Math.round(2 * s);
    context.strokeRect(0, 0, Math.round(110 * s), Math.round(45 * s));
    context.fillStyle = '#2B6CB0';
    context.font = `bold ${Math.round(9 * s)}px sans-serif`;
    context.fillText('IMMIGRATION', Math.round(10 * s), Math.round(16 * s));
    context.fillText('ENTRY PERMIT', Math.round(10 * s), Math.round(30 * s));
    context.restore();
    // Bottom Visa Stamp (Red Oval)
    context.save();
    context.translate(Math.round(100 * s), height - Math.round(geo.footer * 0.75));
    context.rotate(-0.1);
    context.strokeStyle = '#C53030';
    context.lineWidth = Math.round(2 * s);
    context.beginPath();
    context.ellipse(0, 0, Math.round(55 * s), Math.round(24 * s), 0, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = '#C53030';
    context.font = `bold ${Math.round(8 * s)}px monospace`;
    context.textAlign = 'center';
    context.fillText('DEPARTED · 2026', 0, Math.round(3 * s));
    context.restore();
  }

  // 21. YEARBOOK (90s High School Yearbook)
  if (frame.motif === 'yearbook') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(3 * s);
    context.strokeRect(Math.round(12 * s), Math.round(12 * s), width - Math.round(24 * s), height - Math.round(24 * s));
    context.lineWidth = Math.round(1 * s);
    context.strokeRect(Math.round(18 * s), Math.round(18 * s), width - Math.round(36 * s), height - Math.round(36 * s));
    context.font = `bold ${Math.round(12 * s)}px serif`;
    context.fillStyle = frame.foreground;
    context.textAlign = 'center';
    context.fillText('✦ CLASS OF 1996 ✦', width / 2, Math.round(34 * s));
  }

  // 22. COMIC (Pop Art Pow Balloon)
  if (frame.motif === 'comic') {
    context.strokeStyle = frame.foreground;
    context.lineWidth = Math.round(4 * s);
    context.strokeRect(Math.round(8 * s), Math.round(8 * s), width - Math.round(16 * s), height - Math.round(16 * s));
    // POW badge top right
    context.save();
    context.translate(width - Math.round(75 * s), Math.round(55 * s));
    context.rotate(0.2);
    context.fillStyle = '#FF0055';
    context.beginPath();
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const r = i % 2 === 0 ? Math.round(36 * s) : Math.round(20 * s);
      const px = Math.cos(angle) * r;
      const py = Math.sin(angle) * r;
      if (i === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.closePath();
    context.fill();
    context.strokeStyle = '#000000';
    context.lineWidth = Math.round(2 * s);
    context.stroke();
    context.fillStyle = '#FFFFFF';
    context.font = `900 ${Math.round(14 * s)}px sans-serif`;
    context.textAlign = 'center';
    context.fillText('POW!', 0, Math.round(5 * s));
    context.restore();
  }

  // 23. NEWSPAPER EDITORIAL
  if (frame.motif === 'news') {
    context.fillStyle = frame.foreground;
    context.fillRect(Math.round(geo.inset), Math.round(18 * s), width - Math.round(geo.inset * 2), Math.round(3 * s));
    context.font = `bold ${Math.round(14 * s)}px serif`;
    context.textAlign = 'center';
    context.fillText('THE DAILY CHRONICLE · EST. 1924', width / 2, Math.round(38 * s));
    context.fillRect(Math.round(geo.inset), Math.round(44 * s), width - Math.round(geo.inset * 2), Math.round(1.5 * s));
  }

  // 24. MATCHA CAFE (Zen Ensō circle & Hanko)
  if (frame.motif === 'matcha') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(2 * s);
    context.strokeRect(Math.round(14 * s), Math.round(14 * s), width - Math.round(28 * s), height - Math.round(28 * s));
    // Red Hanko Stamp
    context.fillStyle = '#C83228';
    context.fillRect(width - Math.round(65 * s), Math.round(30 * s), Math.round(32 * s), Math.round(32 * s));
    context.fillStyle = '#FFFFFF';
    context.font = `bold ${Math.round(18 * s)}px serif`;
    context.textAlign = 'center';
    context.fillText('友', width - Math.round(49 * s), Math.round(53 * s));
  }

  // 25. BEACH SUMMER POSTCARD
  if (frame.motif === 'beach') {
    context.strokeStyle = frame.accent;
    context.lineWidth = Math.round(3 * s);
    for (let i = 0; i < 3; i++) {
      context.beginPath();
      context.ellipse(width * (0.12 + i * 0.05), height * 0.94, width * 0.1, height * 0.02, -0.15, 0, Math.PI * 2);
      context.stroke();
    }
  }

  // 26. BRUTALIST ART EXHIBITION (Gallery)
  if (frame.motif === 'gallery') {
    context.strokeStyle = '#000000';
    context.lineWidth = Math.round(5 * s);
    context.strokeRect(Math.round(12 * s), Math.round(12 * s), width - Math.round(24 * s), height - Math.round(24 * s));
    context.font = `800 ${Math.round(12 * s)}px monospace`;
    context.fillStyle = '#000000';
    context.textAlign = 'left';
    context.fillText('EXHIBIT [01/01] — MIVORA ARCHIVE', Math.round(geo.inset), Math.round(32 * s));
  }

  context.restore();
}

// Backward compatibility export
export function drawFramePattern(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  frame: FramePreset,
  customPattern: CustomPattern = 'solid',
) {
  drawFrameBackground(context, width, height, frame, customPattern);
}
