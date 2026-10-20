import type { FramePreset, LayoutId, LensPreset, PhotoFilterId } from './types';

export const lenses: LensPreset[] = [
  { id: 'studio', name: 'Standard Studio HD', shortName: 'Studio HD', description: 'Terang, tajam, warna kulit tetap natural.' },
  { id: 'fisheye', name: '360° Fisheye Pro', shortName: 'Fisheye 360°', description: 'Distorsi cembung ala kamera aksi 8mm.' },
  { id: 'digicam', name: 'Vintage 90s Digicam', shortName: 'Digicam 2004', description: 'Flash digital, warna Y2K, tanggal oranye.' },
  { id: 'leica', name: 'Analog 35mm Leica', shortName: 'Leica 35mm', description: 'Warna hangat dengan tekstur film.' },
  { id: 'bw', name: 'B&W Ilford High-Contrast', shortName: 'Ilford B&W', description: 'Monokrom dramatis, kontras tegas.' },
  { id: 'vhs', name: 'VHS Camcorder Glitch', shortName: 'VHS Camcorder', description: 'Garis scan dan pergeseran warna.' },
  { id: 'thermal', name: 'Thermal / Cyber Pop', shortName: 'Thermal Pop', description: 'Peta warna poppy, butter, dan biru.' },
  { id: 'dreamy', name: 'Soft Dreamy Glow', shortName: 'Dreamy Glow', description: 'Kilau lembut dengan highlight glow.' },
];

export const layouts: { id: LayoutId; name: string; detail: string; count: number; columns: number; ratio: number; photoRatio: number }[] = [
  { id: 'story-1', name: '1 foto', detail: 'Satu foto', count: 1, columns: 1, ratio: 9 / 16, photoRatio: 9 / 16 },
  { id: 'landscape-1', name: '1 foto', detail: 'Satu foto', count: 1, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
  { id: 'landscape-2', name: '2 foto', detail: 'Dua foto', count: 2, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
  { id: 'landscape-3', name: '3 foto', detail: 'Tiga foto', count: 3, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
];

export const photoFilters: { id: PhotoFilterId; name: string; detail: string; css: string }[] = [
  { id: 'classic', name: 'Classic', detail: 'Warna natural', css: 'none' },
  { id: 'film', name: 'Film', detail: 'Nuansa analog', css: 'sepia(.18) contrast(1.08) saturate(.9)' },
  { id: 'bw', name: 'B&W', detail: 'Hitam putih', css: 'grayscale(1) contrast(1.08)' },
  { id: 'warm', name: 'Warm', detail: 'Hangat lembut', css: 'sepia(.22) saturate(1.15)' },
  { id: 'vivid', name: 'Vivid', detail: 'Warna lebih hidup', css: 'saturate(1.35) contrast(1.04)' },
];

export const frames: FramePreset[] = [
  // --- SIGNATURE ---
  { id: 'signature', name: 'Mivora Butter', category: 'Signature', background: '#FFF3B0', foreground: '#121212', accent: '#E63946', motif: 'star', caption: 'CORE MEMORY' },
  { id: 'atelier', name: 'Atelier Noir', category: 'Signature', background: '#121212', foreground: '#F5EBE1', accent: '#D4AF37', motif: 'atelier', caption: 'HAUTE PHOTOGRAPHIE' },
  { id: 'swiss', name: 'Swiss Modernist', category: 'Signature', background: '#FAFAFA', foreground: '#0D0D0D', accent: '#E63946', motif: 'swiss', caption: 'ARCHIVE · 1968' },

  // --- RETRO ---
  { id: 'receipt', name: 'Struk Belanja', category: 'Retro', background: '#F5F0E2', foreground: '#20211D', accent: '#CB322C', motif: 'receipt', caption: 'KETAWA NGAKAK · RP 0' },
  { id: 'film', name: '35mm Film Roll', category: 'Retro', background: '#181818', foreground: '#F8F1DB', accent: '#EAAE35', motif: 'film', caption: '24A · 25A · 26A' },
  { id: 'gigs', name: 'Festival Pass', category: 'Retro', background: '#F3B94D', foreground: '#241C19', accent: '#D74B34', motif: 'ticket', caption: 'ALL ACCESS' },

  // --- CUTE & POP ---
  { id: 'purikura', name: 'Tokyo Purikura', category: 'Cute & Pop', background: '#FFE0EC', foreground: '#5A2341', accent: '#FF73AA', motif: 'sparkle', caption: 'KAWAII BESTIE' },
  { id: 'y2k', name: 'Y2K Cyber', category: 'Cute & Pop', background: '#B7E9FA', foreground: '#121212', accent: '#E63946', motif: 'chrome', caption: 'BESTIES.EXE' },
  { id: 'coquette', name: 'Coquette Ribbon', category: 'Cute & Pop', background: '#F8DDE5', foreground: '#7B3047', accent: '#A9D9EC', motif: 'ribbon', caption: 'XOXO BESTIE' },

  // --- CUSTOM ---
  { id: 'custom', name: 'Custom Warna', category: 'Custom', background: '#FFF3B0', foreground: '#121212', accent: '#E63946', motif: 'custom', caption: 'MADE BY US' },
];

export const frameCategories = [
  'Semua',
  'Signature',
  'Retro',
  'Cute & Pop',
  'Custom',
];
