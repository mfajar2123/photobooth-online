export const brand = {
  name: 'Ruang Kilas',
  domain: 'ruangkilas.my.id',
  phone: '0821 4386 3318',
  whatsapp: '6282143863318',
  email: 'ruangkilas2123@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/ruangkilas.my.id/',
    threads: 'https://www.threads.net/@ruangkilas.my.id',
    tiktok: 'https://www.tiktok.com/@ruangkilas.my.id',
    handle: '@ruangkilas.my.id',
  },
} as const;

export const faqs = [
  {
    question: 'Apakah foto saya disimpan di server?',
    answer: 'Tidak. Ruang Kilas memproses seluruh foto, efek filter, dan video langsung di memori browser perangkat Anda secara lokal. Tidak ada file gambar yang diunggah atau disimpan ke server kami, sehingga privasi Anda terjamin 100%.',
  },
  {
    question: 'Apakah bisa digunakan di smartphone (HP)?',
    answer: 'Bisa. Buka ruangkilas.my.id melalui browser modern (seperti Chrome, Safari, atau Firefox) dan berikan izin akses kamera. Layanan berjalan sepenuhnya di browser tanpa perlu mengunduh aplikasi tambahan.',
  },
  {
    question: 'Bagaimana cara menyimpan dan membagikan hasil foto?',
    answer: 'Setelah sesi foto selesai, Anda dapat langsung mengunduh file foto berkualitas tinggi (JPG) atau rekaman Boomerang (WebM/MP4), serta menggunakan menu bagikan untuk mengirimkannya ke media sosial.',
  },
  {
    question: 'Mengapa kamera tidak dapat dinyalakan?',
    answer: 'Pastikan izin kamera sudah diaktifkan di pengaturan browser Anda, halaman diakses melalui koneksi aman HTTPS, dan kamera tidak sedang digunakan oleh aplikasi lain.',
  },
] as const;
