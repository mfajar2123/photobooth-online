import type { InvitationTheme } from './invitations';

export interface InvitationTemplate {
  slug: InvitationTheme;
  name: string;
  tagline: string;
  description: string;
  surface: string;
  accent: string;
  cover: string;
  demoSlug: string;
  features: string[];
  bestFor: string;
}

/**
 * Setiap tema membawa warna permukaan dan aksen sendiri; warna isi/teks tetap
 * mengikuti kontras utama design system Ruang Kilas.
 */
export const invitationTemplates: InvitationTemplate[] = [
  {
    slug: 'serat',
    name: 'Serat',
    tagline: 'Majalah editorial',
    description:
      'Tipografi serif editorial, tekstur kawung yang halus, dan dedaunan simetris dalam palet sage-sogan. Cocok untuk akad yang tenang dan formal.',
    surface: '#F6F1E8',
    accent: '#65745A',
    cover: '/images/invitations/inv-11.jpg',
    demoSlug: 'rifqi-aulya',
    features: ['Tipografi serif editorial', 'Countdown & rundown acara', 'Galeri + lightbox', 'Save the date (.ics)'],
    bestFor: 'Akad dan resepsi formal',
  },
  {
    slug: 'linen',
    name: 'Linen',
    tagline: 'Surat cinta',
    description:
      'Serat kain, jahitan tipis, dan panel seperti surat yang disimpan lama. Terasa hangat tanpa kehilangan ruang kosong.',
    surface: '#F3EBDD',
    accent: '#9B6845',
    cover: '/images/invitations/inv-04.jpg',
    demoSlug: 'dimas-nabila',
    features: ['Latar butter hangat', 'Cerita perjalanan cinta', 'Musik latar lembut', 'Tombol peta & RSVP'],
    bestFor: 'Pernikahan intim',
  },
  {
    slug: 'garden',
    name: 'Garden',
    tagline: 'Pesta taman',
    description:
      'Ranting berbunga dan lengkung taman membingkai foto dengan warna sage lembut. Pas untuk acara outdoor dan resepsi siang.',
    surface: '#EFF3E8',
    accent: '#5F7855',
    cover: '/images/invitations/inv-13.jpg',
    demoSlug: 'andi-salsa',
    features: ['Ornamen bunga taman', 'Galeri lebar', 'Countdown interaktif', 'Livestream opsional'],
    bestFor: 'Acara outdoor',
  },
  {
    slug: 'monokrom',
    name: 'Monokrom',
    tagline: 'Sinema monokrom',
    description:
      'Grid galeri hitam-putih, bidang tegas, dan garis geometris. Untuk pasangan yang menyukai tampilan modern yang bersih.',
    surface: '#F1F0EC',
    accent: '#252525',
    cover: '/images/invitations/inv-01.jpg',
    demoSlug: 'demo-monokrom',
    features: ['Kontras tinggi', 'Tanpa ornamen', 'Galeri minimalis', 'Amplop digital'],
    bestFor: 'Gaya minimalis',
  },
  { slug: 'kertas', name: 'Kertas', tagline: 'Scrapbook perjalanan', description: 'Kertas bergaris, potongan foto, dan tempelan seperti album kenangan yang dirangkai berdua.', surface: '#FBF3E2', accent: '#A85E42', cover: '/images/invitations/inv-02.jpg', demoSlug: 'demo-kertas', features: ['Cerita bergaya album', 'Galeri interaktif', 'Musik dan RSVP', 'Simpan tanggal'], bestFor: 'Perayaan intim' },
  { slug: 'senja', name: 'Senja', tagline: 'Panorama foto', description: 'Langit hangat, garis cakrawala, dan bidang lebar untuk foto prewedding yang dramatis.', surface: '#F7E5D8', accent: '#A85646', cover: '/images/invitations/inv-15.jpg', demoSlug: 'demo-senja', features: ['Potret lebar', 'Detail acara', 'Galeri interaktif', 'Musik dan RSVP'], bestFor: 'Resepsi modern' },
  { slug: 'pita', name: 'Pita', tagline: 'Coquette pastel', description: 'Lace halus, pita besar, dan bingkai blush pink untuk suasana romantis yang manis.', surface: '#FFF0F3', accent: '#A64E6A', cover: '/images/invitations/inv-10.jpg', demoSlug: 'demo-pita', features: ['Aksen pita & pastel', 'Galeri lembut', 'Countdown interaktif', 'Musik & RSVP'], bestFor: 'Perayaan intim dan manis' },
  { slug: 'rimba', name: 'Rimba', tagline: 'Tropis Nusantara', description: 'Daun tropis, hijau hutan, dan aksen tanah untuk perayaan di kebun atau ruang terbuka.', surface: '#E8EBDD', accent: '#365B49', cover: '/images/invitations/inv-14.jpg', demoSlug: 'demo-rimba', features: ['Motif daun tropis', 'Galeri foto outdoor', 'Peta & RSVP', 'Musik latar'], bestFor: 'Acara outdoor' },
  { slug: 'marmer', name: 'Marmer', tagline: 'Galeri klasik', description: 'Urat batu lembut dengan aksen emas dan komposisi seperti galeri untuk perayaan formal.', surface: '#F0ECE4', accent: '#92713F', cover: '/images/invitations/inv-17.jpg', demoSlug: 'demo-marmer', features: ['Aksen batu & emas', 'Tipografi klasik', 'Galeri + lightbox', 'Save the date'], bestFor: 'Resepsi formal' },
];
