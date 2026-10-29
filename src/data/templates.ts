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
 * Template memakai token yang sudah ada di design system
 * (butter, cream, sky, poppy, ink, paper) — bukan palet baru.
 */
export const invitationTemplates: InvitationTemplate[] = [
  {
    slug: 'serat',
    name: 'Serat',
    tagline: 'Majalah editorial',
    description:
      'Tipografi serif besar, ruang kosong lega, dan detail garis tipis. Cocok untuk pernikahan dengan suasana tenang dan formal.',
    surface: '#FFFDF5',
    accent: '#E63946',
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
      'Latar butter hangat dengan komposisi foto besar. Terasa seperti undangan cetak yang dibuka perlahan.',
    surface: '#FFF3B0',
    accent: '#E63946',
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
      'Aksen sky blue dan foto lanskap yang lapang. Pas untuk acara outdoor, garden party, atau resepsi siang.',
    surface: '#8ECAE6',
    accent: '#121212',
    cover: '/images/invitations/inv-13.jpg',
    demoSlug: 'andi-salsa',
    features: ['Aksen sky blue', 'Galeri lebar', 'Countdown interaktif', 'Livestream opsional'],
    bestFor: 'Acara outdoor',
  },
  {
    slug: 'monokrom',
    name: 'Monokrom',
    tagline: 'Sinema monokrom',
    description:
      'Hitam-putih dengan kontras tinggi dan garis tebal. Untuk pasangan yang ingin undangan paling bersih.',
    surface: '#F1EAD9',
    accent: '#121212',
    cover: '/images/invitations/inv-01.jpg',
    demoSlug: 'demo-monokrom',
    features: ['Kontras tinggi', 'Tanpa ornamen', 'Galeri minimalis', 'Amplop digital'],
    bestFor: 'Gaya minimalis',
  },
  { slug: 'kertas', name: 'Kertas', tagline: 'Scrapbook perjalanan', description: 'Komposisi seperti album foto dengan cerita berjajar dan suasana hangat.', surface: '#FFF3B0', accent: '#121212', cover: '/images/invitations/inv-02.jpg', demoSlug: 'demo-kertas', features: ['Cerita bergaya album', 'Galeri interaktif', 'Musik dan RSVP', 'Simpan tanggal'], bestFor: 'Perayaan intim' },
  { slug: 'senja', name: 'Senja', tagline: 'Panorama foto', description: 'Komposisi berani dengan foto lebar dan detail kontras untuk perayaan modern.', surface: '#8ECAE6', accent: '#121212', cover: '/images/invitations/inv-15.jpg', demoSlug: 'demo-senja', features: ['Potret lebar', 'Detail acara', 'Galeri interaktif', 'Musik dan RSVP'], bestFor: 'Resepsi modern' },
];
