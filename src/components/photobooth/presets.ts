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
  // --- SIGNATURE & CLASSIC ---
  { id: 'signature', name: 'Mivora Signature Butter', category: 'Signature', background: '#FFF3B0', foreground: '#121212', accent: '#E63946', motif: 'star', caption: 'CORE MEMORY' },
  { id: 'atelier', name: 'Monokrom Atelier Noir', category: 'Signature', background: '#121212', foreground: '#F5EBE1', accent: '#D4AF37', motif: 'atelier', caption: 'HAUTE PHOTOGRAPHIE' },
  { id: 'swiss', name: 'Swiss Modernist Grid', category: 'Signature', background: '#FAFAFA', foreground: '#0D0D0D', accent: '#E63946', motif: 'swiss', caption: 'ZÜRICH ARCHIVE · 1968' },

  // --- Y2K CYBER & POP ---
  { id: 'y2k', name: 'Y2K Cyber Pop', category: 'Y2K Cyber', background: '#B7E9FA', foreground: '#121212', accent: '#E63946', motif: 'chrome', caption: 'BESTIES.EXE' },
  { id: 'purikura', name: 'Tokyo Purikura Arcade', category: 'Y2K Cyber', background: '#FFE0EC', foreground: '#5A2341', accent: '#FF73AA', motif: 'sparkle', caption: 'KAWAII BESTIE' },
  { id: 'paint', name: 'Windows 98 Paint Canvas', category: 'Y2K Cyber', background: '#C4C4C4', foreground: '#111111', accent: '#2447B0', motif: 'paint', caption: 'UNTITLED — PAINT' },
  { id: 'matrix', name: 'Neo Terminal Matrix', category: 'Y2K Cyber', background: '#0A0F0D', foreground: '#00FF66', accent: '#00CC44', motif: 'matrix', caption: 'SYSTEM ACCESS GRANTED' },
  { id: 'gameboy', name: '8-Bit Retro Handheld', category: 'Y2K Cyber', background: '#9BBC0F', foreground: '#0F380F', accent: '#306230', motif: 'gameboy', caption: 'PLAYER 1 · LEVEL 99' },
  { id: 'acid', name: 'Acid Rave Smiley', category: 'Y2K Cyber', background: '#E0FF00', foreground: '#111111', accent: '#FF007F', motif: 'acid', caption: 'EUPHORIA SOUNDSYSTEM' },

  // --- RETRO RECEIPT & PAPER ---
  { id: 'receipt', name: 'Struk Belanja Minimarket', category: 'Retro Receipt', background: '#F5F0E2', foreground: '#20211D', accent: '#CB322C', motif: 'receipt', caption: 'KETAWA NGAKAK · RP 0' },
  { id: 'film', name: 'Kodachrome 35mm Film Roll', category: 'Retro Receipt', background: '#181818', foreground: '#F8F1DB', accent: '#EAAE35', motif: 'film', caption: '24A   ·   25A   ·   26A' },
  { id: 'airmail', name: 'Vintage Airmail Par Avion', category: 'Retro Receipt', background: '#FAF6EE', foreground: '#1A2C42', accent: '#D9383A', motif: 'airmail', caption: 'PAR AVION · AIR MAIL' },
  { id: 'kraft', name: 'Brown Kraft & Washi Tape', category: 'Retro Receipt', background: '#D9C2A7', foreground: '#2C1E14', accent: '#8B5A2B', motif: 'kraft', caption: 'SCRAPBOOK EDITION' },
  { id: 'polaroid-retro', name: '70s Sunburst Polaroid', category: 'Retro Receipt', background: '#F4ECE1', foreground: '#35251C', accent: '#E07A5F', motif: 'polaroid-retro', caption: 'SUMMER OF 1979' },

  // --- MUSEUM ART & BOTANICAL ---
  { id: 'museum', name: 'Museum Louvre Art Frame', category: 'Museum Art', background: '#D9C8A5', foreground: '#35291D', accent: '#A27B42', motif: 'museum', caption: 'MUSÉE DES BESTIES · 2026' },
  { id: 'tarot', name: 'Cosmic Tarot Card', category: 'Museum Art', background: '#282C4F', foreground: '#F5E1A0', accent: '#E6B74D', motif: 'tarot', caption: 'THE BESTIE · XVII' },
  { id: 'botanical', name: 'Herbarium Botanical Flora', category: 'Museum Art', background: '#ECE4D8', foreground: '#263829', accent: '#5E7D42', motif: 'botanical', caption: 'HERBARIUM SP. 104' },
  { id: 'monet', name: 'Giverny Monet Impressionism', category: 'Museum Art', background: '#DCE4DD', foreground: '#273C33', accent: '#7A9A8B', motif: 'monet', caption: 'CLAUDE ET LES AMIS' },
  { id: 'filigree', name: 'Baroque Gilded Gold Gallery', category: 'Museum Art', background: '#1D2536', foreground: '#E2BD82', accent: '#F0D4A3', motif: 'filigree', caption: 'GALERIE ROYALE' },

  // --- GIGS & MUSIC ---
  { id: 'gigs', name: 'Indie Music Festival Pass', category: 'Gigs & Music', background: '#F3B94D', foreground: '#241C19', accent: '#D74B34', motif: 'ticket', caption: 'ALL ACCESS · GOOD TIMES' },
  { id: 'checker', name: 'Poppy Red Checkerboard', category: 'Gigs & Music', background: '#F4E5D5', foreground: '#201A18', accent: '#E63946', motif: 'checker', caption: 'GOOD TIMES ONLY' },
  { id: 'vinyl', name: '12" Vinyl Record Grooves', category: 'Gigs & Music', background: '#171717', foreground: '#F6EED8', accent: '#E89038', motif: 'vinyl', caption: '33⅓ RPM · STEREO' },
  { id: 'cassette', name: 'Mixtape C-90 Cassette', category: 'Gigs & Music', background: '#E8E4DD', foreground: '#202020', accent: '#F25F4C', motif: 'cassette', caption: 'SIDE A: BESTIE ANTHEMS' },
  { id: 'punk', name: 'Underground Punk DIY Zine', category: 'Gigs & Music', background: '#F5F5F5', foreground: '#0A0A0A', accent: '#E63946', motif: 'punk', caption: 'DIY ZINE · ISSUE 04' },

  // --- COQUETTE RIBBON & SWEET ---
  { id: 'coquette', name: 'Coquette Pastel Ribbon', category: 'Coquette Ribbon', background: '#F8DDE5', foreground: '#7B3047', accent: '#A9D9EC', motif: 'ribbon', caption: 'XOXO, YOUR BESTIE' },
  { id: 'strawberry', name: 'Strawberry Milk Gingham', category: 'Coquette Ribbon', background: '#FFF0F3', foreground: '#800F2F', accent: '#FF4D6D', motif: 'strawberry', caption: 'SWEET AS STRAWBERRY' },
  { id: 'clouds', name: 'Dreamy Lavender & Clouds', category: 'Coquette Ribbon', background: '#ECE8F7', foreground: '#3C3358', accent: '#9B8BE8', motif: 'clouds', caption: 'HEAD IN THE CLOUDS' },
  { id: 'cherry', name: 'Tokyo Sakura Blossom', category: 'Coquette Ribbon', background: '#FFEBEA', foreground: '#612534', accent: '#F27D72', motif: 'cherry', caption: 'SPRINGTIME HANAMI' },

  // --- CINEMA TICKET & TRAVEL ---
  { id: 'cinema', name: 'Cinema Ticket Duo', category: 'Cinema Ticket', background: '#F1C879', foreground: '#201A18', accent: '#E63946', motif: 'cinema', caption: 'ADMIT TWO · BESTIE SCREENING' },
  { id: 'boarding', name: 'Airline Flight Boarding Pass', category: 'Cinema Ticket', background: '#F2F6FA', foreground: '#102A43', accent: '#0B69A3', motif: 'boarding', caption: 'GATE 04 · FIRST CLASS' },
  { id: 'passport', name: 'Vintage Passport Stamps', category: 'Cinema Ticket', background: '#1B3B36', foreground: '#E2C08D', accent: '#D4AF37', motif: 'passport', caption: 'CUSTOMS INSPECTED' },
  { id: 'motel', name: 'Palm Springs Retro Motel', category: 'Cinema Ticket', background: '#FCE7E8', foreground: '#1C4E4F', accent: '#F28482', motif: 'motel', caption: 'ROOM 204 · VACANCY' },

  // --- 90S YEARBOOK & COLLAGE ---
  { id: 'yearbook', name: '90s High School Yearbook', category: '90s Yearbook', background: '#E9E3D5', foreground: '#292929', accent: '#7A322A', motif: 'yearbook', caption: 'MOST LIKELY TO BE FAMOUS' },
  { id: 'notebook', name: 'Doodled Math Notebook', category: '90s Yearbook', background: '#FAFAFA', foreground: '#1D2A44', accent: '#FF6B6B', motif: 'notebook', caption: 'CLASS OF 2026' },
  { id: 'comic', name: 'Pop Art Halftone Comic', category: '90s Yearbook', background: '#FFF44F', foreground: '#111111', accent: '#FF0055', motif: 'comic', caption: 'KAPOW! BEST DUO EVER' },

  // --- MINIMALIST EDITORIAL ---
  { id: 'newspaper', name: 'Koran Pagi Editorial', category: 'Minimalist Editorial', background: '#F5F1E8', foreground: '#171717', accent: '#D8322D', motif: 'news', caption: 'THE DAILY CHRONICLE' },
  { id: 'matcha', name: 'Matcha Cafe Aesthetic', category: 'Minimalist Editorial', background: '#E5E9D8', foreground: '#324434', accent: '#A9B975', motif: 'matcha', caption: 'SLOW DAY, GOOD COMPANY' },
  { id: 'beach', name: 'Summer Beach Postcard', category: 'Minimalist Editorial', background: '#F5D39E', foreground: '#254C67', accent: '#4B9BB2', motif: 'beach', caption: 'SALAM DARI SUMMER KITA' },
  { id: 'gallery', name: 'Brutalist Art Exhibition', category: 'Minimalist Editorial', background: '#EFEFEA', foreground: '#141414', accent: '#000000', motif: 'gallery', caption: 'CONTEMPORARY ARCHIVE' },

  // --- CUSTOM ---
  { id: 'custom', name: 'Custom Color & Pattern', category: 'Custom', background: '#FFF3B0', foreground: '#121212', accent: '#E63946', motif: 'custom', caption: 'MADE BY US' },
];

export const frameCategories = [
  'Semua',
  'Signature',
  'Y2K Cyber',
  'Retro Receipt',
  'Museum Art',
  'Gigs & Music',
  'Coquette Ribbon',
  'Cinema Ticket',
  '90s Yearbook',
  'Minimalist Editorial',
  'Custom',
];
