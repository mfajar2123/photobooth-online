export type InvitationTheme = 'serat' | 'linen' | 'garden' | 'monokrom' | 'kertas' | 'senja';

export interface InvitationPerson {
  name: string;
  short: string;
  photo: string;
  parents?: string;
  instagram?: string;
}

export interface InvitationEvent {
  time: string;
  venue: string;
  address: string;
}

export interface InvitationStory {
  date: string;
  title: string;
  text: string;
  image: string;
}

export interface InvitationGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Invitation {
  slug: string;
  theme: InvitationTheme;
  label: string;
  cover: string;
  couplePhoto: string;
  quote: { text: string; source?: string };
  couple: {
    bride: InvitationPerson;
    groom: InvitationPerson;
  };
  event: {
    date: string;
    dateLabel: string;
    dayLabel: string;
    ceremony: InvitationEvent;
    reception: InvitationEvent;
    mapsUrl: string;
    rsvpUrl: string;
    dressCode?: string;
  };
  story: InvitationStory[];
  gallery: InvitationGalleryItem[];
  music: { title: string; artist: string; src: string };
  extras?: {
    livestreamUrl?: string;
    gift?: { bank: string; number: string; holder: string };
    hashtag?: string;
  };
}

const MUSIC = { title: 'A Quiet Vow', artist: 'Ruang Kilas Studio', src: '/audio/undangan-theme.mp3' };

export const invitations: Invitation[] = [
  {
    slug: 'rifqi-aulya',
    theme: 'serat',
    label: 'Serat',
    cover: '/images/invitations/inv-11.jpg',
    couplePhoto: '/images/invitations/inv-05.jpg',
    quote: {
      text: 'Dan di antara tanda-tanda kebesaran-Nya, Dia menciptakan pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram.',
      source: 'QS. Ar-Rum: 21',
    },
    couple: {
      bride: {
        name: 'Aulya Rahmadani',
        short: 'Aulya',
        photo: '/images/invitations/inv-13.jpg',
        parents: 'Putri dari Bapak Rahmad Hidayat & Ibu Siti Nurhaliza',
        instagram: 'https://instagram.com/',
      },
      groom: {
        name: 'Rifqi Aditya Pratama',
        short: 'Rifqi',
        photo: '/images/invitations/inv-06.jpg',
        parents: 'Putra dari Bapak Aditya Wijaya & Ibu Retno Wulandari',
        instagram: 'https://instagram.com/',
      },
    },
    event: {
      date: '2027-02-14T08:00:00+07:00',
      dateLabel: '14 Februari 2027',
      dayLabel: 'Minggu',
      ceremony: {
        time: '08.00 – 10.00 WIB',
        venue: 'Masjid Agung Al-Azhar',
        address: 'Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan',
      },
      reception: {
        time: '11.00 – 14.00 WIB',
        venue: 'Balai Kartini',
        address: 'Jl. Gatot Subroto Kav. 37, Jakarta Selatan',
      },
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Balai+Kartini+Jakarta',
      rsvpUrl: 'https://wa.me/6281288994021?text=Halo%2C%20saya%20ingin%20konfirmasi%20kehadiran%20di%20pernikahan%20Rifqi%20%26%20Aulya',
      dressCode: 'Sage, ivory, dan earth tone',
    },
    story: [
      {
        date: '2019',
        title: 'Pertemuan pertama',
        text: 'Dua orang yang tidak saling kenal duduk di satu meja diskusi kampus. Percakapan itu berjalan sampai perpustakaan tutup.',
        image: '/images/invitations/inv-04.jpg',
      },
      {
        date: '2022',
        title: 'Mulai menapaki jalan yang sama',
        text: 'Setelah tiga tahun saling mengenal, kami memutuskan untuk berjalan bersama — dengan doa yang sama.',
        image: '/images/invitations/inv-11.jpg',
      },
      {
        date: '2026',
        title: 'Lamaran',
        text: 'Di depan keluarga, Rifqi meminta Aulya untuk menghabiskan sisa hidup bersama. Jawabannya satu kata.',
        image: '/images/invitations/inv-01.jpg',
      },
    ],
    gallery: [
      { src: '/images/invitations/inv-01.jpg', alt: 'Tangan mempelai saling menggenggam', caption: 'Janji yang dipegang' },
      { src: '/images/invitations/inv-06.jpg', alt: 'Detail buket pengantin', caption: 'Buket' },
      { src: '/images/invitations/inv-05.jpg', alt: 'Detail busana pengantin', caption: 'Detail' },
      { src: '/images/invitations/inv-08.jpg', alt: 'Mempelai berjalan bersama', caption: 'Langkah pertama' },
      { src: '/images/invitations/inv-10.jpg', alt: 'Potret close up mempelai', caption: 'Tenang' },
      { src: '/images/invitations/inv-12.jpg', alt: 'Momen tertawa bersama', caption: 'Tawa' },
      { src: '/images/invitations/inv-15.jpg', alt: 'Mempelai di depan bangunan', caption: 'Hari itu' },
      { src: '/images/invitations/inv-17.jpg', alt: 'Mempelai berpelukan', caption: 'Rumah' },
    ],
    music: MUSIC,
    extras: {
      gift: { bank: 'BCA', number: '1234567890', holder: 'Aulya Rahmadani' },
      hashtag: '#RifqiAulyaForever',
    },
  },
  {
    slug: 'dimas-nabila',
    theme: 'linen',
    label: 'Linen',
    cover: '/images/invitations/inv-02.jpg',
    couplePhoto: '/images/invitations/inv-07.jpg',
    quote: {
      text: 'Cinta yang tenang tidak butuh banyak kata. Ia cukup hadir, setiap hari.',
      source: 'Catatan kami',
    },
    couple: {
      bride: {
        name: 'Nabila Putri Larasati',
        short: 'Nabila',
        photo: '/images/invitations/inv-07.jpg',
        parents: 'Putri dari Bapak Hendra Larasati & Ibu Dewi Anggraini',
      },
      groom: {
        name: 'Dimas Aryo Nugroho',
        short: 'Dimas',
        photo: '/images/invitations/inv-09.jpg',
        parents: 'Putra dari Bapak Nugroho Santoso & Ibu Wahyuni',
      },
    },
    event: {
      date: '2027-03-28T09:00:00+07:00',
      dateLabel: '28 Maret 2027',
      dayLabel: 'Minggu',
      ceremony: {
        time: '09.00 – 11.00 WIB',
        venue: 'Masjid Salman ITB',
        address: 'Jl. Ganesha No. 7, Lebak Siliwangi, Bandung',
      },
      reception: {
        time: '12.00 – 15.00 WIB',
        venue: 'The Trans Luxury Hotel',
        address: 'Jl. Gatot Subroto No. 289, Bandung',
      },
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Trans+Luxury+Hotel+Bandung',
      rsvpUrl: 'https://wa.me/6281288994021?text=Halo%2C%20saya%20ingin%20konfirmasi%20kehadiran%20di%20pernikahan%20Dimas%20%26%20Nabila',
      dressCode: 'Sand, cream, dan sage',
    },
    story: [
      {
        date: '2020',
        title: 'Satu proyek, satu frekuensi',
        text: 'Kami dipertemukan oleh proyek kampus yang penuh revisi. Ternyata cara kami bekerja mirip.',
        image: '/images/invitations/inv-02.jpg',
      },
      {
        date: '2023',
        title: 'Perjalanan pertama',
        text: 'Kereta pagi ke Bandung, dua tiket, dan rencana yang tidak pernah selesai dibicarakan.',
        image: '/images/invitations/inv-14.jpg',
      },
      {
        date: '2026',
        title: 'Keputusan',
        text: 'Setelah enam tahun, kami memilih untuk pulang ke rumah yang sama.',
        image: '/images/invitations/inv-08.jpg',
      },
    ],
    gallery: [
      { src: '/images/invitations/inv-02.jpg', alt: 'Potret mempelai wanita', caption: 'Nabila' },
      { src: '/images/invitations/inv-06.jpg', alt: 'Potret mempelai pria', caption: 'Dimas' },
      { src: '/images/invitations/inv-10.jpg', alt: 'Momen berdua', caption: 'Berdua' },
      { src: '/images/invitations/inv-14.jpg', alt: 'Mempelai di luar ruangan', caption: 'Sore' },
      { src: '/images/invitations/inv-17.jpg', alt: 'Mempelai berpelukan', caption: 'Dekat' },
      { src: '/images/invitations/inv-18.jpg', alt: 'Mempelai tersenyum', caption: 'Bahagia' },
      { src: '/images/invitations/inv-01.jpg', alt: 'Detail cincin', caption: 'Cincin' },
      { src: '/images/invitations/inv-04.jpg', alt: 'Mempelai berjalan di lorong', caption: 'Lorong' },
    ],
    music: MUSIC,
    extras: {
      gift: { bank: 'Mandiri', number: '9876543210', holder: 'Nabila Putri Larasati' },
      hashtag: '#DimasNabila',
    },
  },
  {
    slug: 'andi-salsa',
    theme: 'garden',
    label: 'Garden',
    cover: '/images/invitations/inv-15.jpg',
    couplePhoto: '/images/invitations/inv-13.jpg',
    quote: {
      text: 'Rumah bukan tempat. Rumah adalah orang yang menunggumu pulang.',
      source: 'Catatan kami',
    },
    couple: {
      bride: {
        name: 'Salsabila Ayu Kirana',
        short: 'Salsa',
        photo: '/images/invitations/inv-12.jpg',
        parents: 'Putri dari Bapak Kirana Wijaya & Ibu Ayu Lestari',
      },
      groom: {
        name: 'Andi Prasetyo',
        short: 'Andi',
        photo: '/images/invitations/inv-08.jpg',
        parents: 'Putra dari Bapak Prasetyo Utomo & Ibu Sri Handayani',
      },
    },
    event: {
      date: '2026-12-12T08:30:00+07:00',
      dateLabel: '12 Desember 2026',
      dayLabel: 'Sabtu',
      ceremony: {
        time: '08.30 – 10.30 WIB',
        venue: 'Masjid Kampus UGM',
        address: 'Jl. Pancasila, Bulaksumur, Yogyakarta',
      },
      reception: {
        time: '11.00 – 14.00 WIB',
        venue: 'Royal Ambarrukmo',
        address: 'Jl. Laksda Adisucipto No. 81, Yogyakarta',
      },
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Ambarrukmo+Yogyakarta',
      rsvpUrl: 'https://wa.me/6281288994021?text=Halo%2C%20saya%20ingin%20konfirmasi%20kehadiran%20di%20pernikahan%20Andi%20%26%20Salsa',
      dressCode: 'Sage, putih, dan sentuhan emas',
    },
    story: [
      {
        date: '2018',
        title: 'Teman satu lingkaran',
        text: 'Kami bertemu di acara komunitas fotografi. Andi meminjamkan lensa, Salsa lupa mengembalikannya.',
        image: '/images/invitations/inv-05.jpg',
      },
      {
        date: '2021',
        title: 'Jarak yang menguatkan',
        text: 'Dua kota, dua zona waktu, satu panggilan setiap malam sebelum tidur.',
        image: '/images/invitations/inv-13.jpg',
      },
      {
        date: '2026',
        title: 'Lamaran di Yogyakarta',
        text: 'Di halaman rumah keluarga, Andi melamar dengan cincin yang sudah disimpan dua tahun.',
        image: '/images/invitations/inv-05.jpg',
      },
    ],
    gallery: [
      { src: '/images/invitations/inv-05.jpg', alt: 'Detail busana', caption: 'Detail' },
      { src: '/images/invitations/inv-12.jpg', alt: 'Potret mempelai', caption: 'Andi & Salsa' },
      { src: '/images/invitations/inv-11.jpg', alt: 'Mempelai di depan bangunan', caption: 'Kastil' },
      { src: '/images/invitations/inv-13.jpg', alt: 'Mempelai di taman', caption: 'Taman' },
      { src: '/images/invitations/inv-14.jpg', alt: 'Momen berdua', caption: 'Berdua' },
      { src: '/images/invitations/inv-18.jpg', alt: 'Mempelai tersenyum', caption: 'Senyum' },
      { src: '/images/invitations/inv-02.jpg', alt: 'Potret close up', caption: 'Salsa' },
      { src: '/images/invitations/inv-07.jpg', alt: 'Potret mempelai wanita', caption: 'Tenang' },
    ],
    music: MUSIC,
    extras: {
      livestreamUrl: 'https://www.youtube.com/',
      gift: { bank: 'BNI', number: '1122334455', holder: 'Salsabila Ayu Kirana' },
      hashtag: '#AndiSalsa',
    },
  },
];

// Contoh tambahan menggunakan data demonstrasi yang sama agar setiap desain dapat dicoba.
for (const [theme, label, base] of [
  ['monokrom', 'Monokrom', 0], ['kertas', 'Kertas', 1], ['senja', 'Senja', 2],
] as const) {
  invitations.push({ ...invitations[base], slug: 'demo-' + theme, theme, label });
}

export function getInvitation(slug: string): Invitation | undefined {
  return invitations.find((item) => item.slug === slug);
}
