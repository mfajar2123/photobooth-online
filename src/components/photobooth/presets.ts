import type { FramePreset, LayoutId, LensPreset, PhotoFilterId } from './types';

export const lenses: LensPreset[] = [
  { id: 'original', name: 'Original', shortName: 'Original', description: 'Tanpa efek, tampilan natural webcam asli.' },
  { id: 'fisheye', name: '01 FISHEYE 360 ULTRA-WIDE', shortName: '01 Fisheye 360°', description: 'Efek distorsi cembung ekstrem ala kamera aksi 90an.' },
  { id: 'leica', name: '02 LEICA 35MM FILM GRAIN', shortName: '02 Leica 35mm', description: 'Tone warna hangat, tekstur film grain, dan aksen light leak tipis.' },
  { id: 'digicam', name: '03 DIGICAM CYBERSHOT 2004', shortName: '03 Digicam 2004', description: 'Efek kontras digital flash dan timestamp tanggal warna oranye di sudut foto.' },
  { id: 'vhs', name: '04 VHS CAMCORDER GLITCH', shortName: '04 VHS Camcorder', description: 'Efek garis scanline kaset pita dan RGB shift (chromatic aberration).' },
  { id: 'dreamy', name: '05 DREAMY SOFT PRISM', shortName: '05 Dreamy Soft Prism', description: 'Efek soft blur/glow pada highlight yang lembut ala editorial Korea.' },
];

export const layouts: { id: LayoutId; name: string; detail: string; count: number; columns: number; ratio: number; photoRatio: number }[] = [
  { id: 'story-1', name: '1 foto', detail: 'Satu foto', count: 1, columns: 1, ratio: 9 / 16, photoRatio: 9 / 16 },
  { id: 'landscape-1', name: '1 foto', detail: 'Satu foto', count: 1, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
  { id: 'landscape-2', name: '2 foto', detail: 'Dua foto', count: 2, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
  { id: 'landscape-3', name: '3 foto', detail: 'Tiga foto', count: 3, columns: 1, ratio: 9 / 16, photoRatio: 16 / 9 },
];

export const photoFilters: { id: PhotoFilterId; name: string; detail: string; css: string }[] = [
  { id: 'none', name: 'No Filter', detail: 'Tanpa filter tambahan', css: 'none' },
  { id: 'classic', name: 'Classic', detail: 'Kontras natural', css: 'contrast(1.05) brightness(1.02)' },
  { id: 'film', name: 'Film', detail: 'Nuansa analog', css: 'sepia(.18) contrast(1.08) saturate(.9)' },
  { id: 'bw', name: 'B&W', detail: 'Hitam putih', css: 'grayscale(1) contrast(1.08)' },
  { id: 'warm', name: 'Warm', detail: 'Hangat lembut', css: 'sepia(.22) saturate(1.15)' },
  { id: 'vivid', name: 'Vivid', detail: 'Warna lebih hidup', css: 'saturate(1.35) contrast(1.04)' },
];

export const frames: FramePreset[] = [
  // --- SIGNATURE ---
  { id: 'signature', name: 'Kilas Butter', category: 'Signature', background: '#FFF3B0', foreground: '#121212', accent: '#E63946', motif: 'star', caption: 'CORE MEMORY' },
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
