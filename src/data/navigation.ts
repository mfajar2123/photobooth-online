export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const productLinks: NavItem[] = [
  {
    label: 'Photobooth Online',
    href: '/studio/',
    description: 'Foto & photostrip langsung di browser, tanpa aplikasi.',
  },
  {
    label: 'Undangan Digital',
    href: '/undangan/',
    description: 'Undangan wedding interaktif dengan galeri, musik, dan peta.',
  },
  {
    label: 'Photobooth Event',
    href: '/request-event/',
    description: 'Bingkai custom untuk wedding, gathering, dan festival.',
  },
];

export const primaryLinks: NavItem[] = [
  { label: 'Portofolio', href: '/undangan/portofolio/' },
  { label: 'Panduan', href: '/panduan/' },
  { label: 'Tentang', href: '/brand/' },
];

export const footerLinks = {
  produk: [
    { label: 'Photobooth Online', href: '/studio/' },
    { label: 'Undangan Digital', href: '/undangan/' },
    { label: 'Katalog Template', href: '/undangan/katalog/' },
    { label: 'Request Event', href: '/request-event/' },
  ],
  informasi: [
    { label: 'Portofolio', href: '/undangan/portofolio/' },
    { label: 'Panduan Studio', href: '/panduan/' },
    { label: 'Ketentuan Layanan', href: '/terms/' },
    { label: 'Panduan Brand', href: '/brand/' },
  ],
};
