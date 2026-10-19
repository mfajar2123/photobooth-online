export const brand = {
  name: 'Mivora Photo',
  domain: 'mivoraphoto.id',
  email: 'hello@mivoraphoto.id',
  partnershipEmail: 'partnership@mivoraphoto.id',
  phone: '+62 812-8899-4021',
  instagram: 'https://instagram.com/mivora.photo',
  tiktok: 'https://tiktok.com/@mivora.photo',
  address: 'Gedung Kemang Point Lt. 3, Jl. Kemang Raya No. 3, Bangka, Kec. Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12730',
} as const;

export const faqs = [
  {
    question: 'Apakah foto saya disimpan di server?',
    answer: 'Nggak. Mivora Photo nggak punya database foto. Kamera, filter, dan hasil jepretan diproses langsung di memori browser kamu. Tutup tab untuk mengakhiri sesi.',
  },
  {
    question: 'Bisa dipakai dari HP?',
    answer: 'Bisa, buka dari browser terbaru dan izinkan akses kamera. HTTPS diperlukan supaya browser bisa menyalakan kamera. Pakai kamera belakang untuk hasil yang lebih leluasa.',
  },
  {
    question: 'Gimana cara kirim hasil ke HP lain?',
    answer: 'Unduh langsung, gunakan tombol bagikan kalau browser mendukungnya, atau tampilkan QR hasil sesi. QR menyimpan pratinjau di perangkat ini; ia bukan tautan unggah atau penyimpanan cloud.',
  },
  {
    question: 'Kenapa kamera belum bisa dinyalakan?',
    answer: 'Cek izin kamera di pengaturan browser, pastikan nggak ada aplikasi lain yang sedang memakainya, lalu coba lagi lewat halaman HTTPS.',
  },
] as const;
