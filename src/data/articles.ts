export interface Article {
  slug: string; title: string; description: string; category: string; image: string; imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[]; source?: { label: string; url: string };
}
export const articleDate = '2026-11-02';
export const articles: Article[] = [
  {
    slug: 'cara-menggunakan-photobooth-online', title: 'Cara Menggunakan Photobooth Online Langsung dari HP', description: 'Buat photostrip sendiri lewat browser, dari menyiapkan cahaya hingga menyimpan hasil foto.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman-teman berpose bersama di photobooth',
    sections: [
      { heading: 'Siapkan kamera dan pencahayaan', paragraphs: ['Photobooth online memungkinkan kamu mengambil foto berbingkai lewat browser. Siapkan HP atau laptop dengan kamera, lalu cari tempat yang cukup terang. Cahaya dari jendela yang menghadap wajah biasanya membuat wajah terlihat lebih jelas.', 'Bersihkan lensa dan letakkan perangkat pada permukaan yang stabil. Jika berfoto bersama, sisakan ruang di tepi layar agar semua orang masuk ke dalam bingkai.'] },
      { heading: 'Pilih frame dan mulai berfoto', paragraphs: ['Buka studio Ruang Kilas, pilih bingkai dan efek yang kamu suka, lalu izinkan akses kamera ketika browser memintanya. Periksa pratinjau, atur posisi, dan ikuti hitung mundur untuk setiap jepretan.', 'Coba variasikan pose di setiap foto: mulai dari senyum biasa, ekspresi spontan, sampai pose bersama teman. Perhatikan petunjuk di layar karena jumlah jepretan dapat mengikuti bingkai yang dipilih.'] },
      { heading: 'Simpan dan bagikan hasilnya', paragraphs: ['Setelah selesai, periksa hasilnya dan unduh ke perangkat. Sebelum mengunggah foto bersama, pastikan semua orang di dalamnya nyaman dengan foto tersebut.', 'Jika kamera tidak muncul, periksa izin kamera di pengaturan browser dan pastikan aplikasi lain tidak sedang memakai kamera. Coba muat ulang halaman setelah izin diberikan.'] },
    ],
  },
  {
    slug: 'panduan-undangan-pernikahan-digital', title: 'Panduan Undangan Pernikahan Digital: Isi, Desain, dan Cara Mengirim', description: 'Susun undangan digital yang mudah dibaca dan membantu tamu menemukan informasi penting.', category: 'Undangan digital', image: '/images/invitations/inv-11.jpg', imageAlt: 'Pasangan pengantin dalam suasana pernikahan',
    sections: [
      { heading: 'Informasi yang perlu disiapkan', paragraphs: ['Mulai dengan nama pasangan, nama keluarga jika diperlukan, tanggal, waktu, dan alamat lengkap setiap acara. Bedakan jadwal akad dan resepsi dengan jelas, lalu tambahkan tautan peta yang sudah diperiksa titik lokasinya.', 'Nomor kontak yang bisa dihubungi dan konfirmasi kehadiran membantu tamu bertanya atau memberi kabar. Bila ada ketentuan pakaian atau akses lokasi, sampaikan dengan singkat.'] },
      { heading: 'Pilih desain yang nyaman dibaca', paragraphs: ['Sesuaikan warna dan foto dengan suasana acara, tetapi utamakan kontras teks dan ukuran huruf yang nyaman di layar HP. Gunakan foto secukupnya agar informasi acara tetap mudah ditemukan.', 'Sebelum dibagikan, buka undangan di beberapa perangkat. Periksa ejaan nama, jadwal, tautan peta, dan cara kerja RSVP bersama pasangan atau keluarga.'] },
      { heading: 'Kirim dengan pesan personal', paragraphs: ['Sertakan nama penerima dan pesan singkat yang hangat saat mengirim tautan. Beri waktu yang cukup agar tamu dapat mengatur perjalanan, dan tindak lanjuti secara sopan jika kamu membutuhkan kepastian kehadiran.', 'Tidak semua tamu nyaman menggunakan undangan digital. Untuk keluarga atau tamu yang membutuhkan bantuan, pertimbangkan telepon atau undangan cetak sebagai pelengkap.'] },
    ], source: { label: 'RRI: Undangan Pernikahan Digital, Cinta Tak Lagi Dicetak', url: 'https://rri.co.id/pekanbaru/berita-lain/1559373/undangan-pernikahan-digital-cinta-tak-lagi-dicetak' },
  },
  {
    slug: 'ide-pose-photobooth-bersama-teman', title: '10 Ide Pose Photobooth Bersama Teman yang Mudah Ditiru', description: 'Kehabisan gaya di depan kamera? Coba inspirasi pose sederhana untuk photostrip yang lebih hidup.', category: 'Inspirasi', image: '/images/friends-photo-booth.jpg', imageAlt: 'Sekelompok teman berpose di depan kamera',
    sections: [
      { heading: 'Mulai dengan pose yang santai', paragraphs: ['Coba tersenyum ke kamera, saling bersandar, membuat tanda hati, atau mengangkat tangan bersama. Empat pose ini mudah dilakukan dan cocok sebagai pembuka sebelum mencoba ekspresi yang lebih spontan.', 'Untuk kelompok besar, atur posisi bertingkat dan pastikan wajah di bagian belakang tetap terlihat. Dekatkan diri agar semua orang masuk ke bingkai.'] },
      { heading: 'Buat setiap jepretan berbeda', paragraphs: ['Lanjutkan dengan pose peace, saling menunjuk, tertawa bersama, atau melihat ke arah teman di sebelahmu. Dua ide lainnya adalah meniru sampul album dan membuat ekspresi terkejut saat hitung mundur berakhir.', 'Tidak perlu semua pose sempurna. Kombinasi foto rapi dan momen spontan sering membuat photostrip terasa lebih personal. Coba beberapa kali dan pilih hasil yang paling kalian suka.'] },
    ],
  },
  {
    slug: 'photobooth-virtual-untuk-pernikahan', title: 'Photobooth Virtual untuk Pernikahan: Cara Menyiapkan Pengalaman Tamu', description: 'Rencanakan bingkai, akses, dan penempatan tautan agar tamu mudah ikut mengabadikan momen.', category: 'Photobooth', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Contoh photobooth virtual pernikahan',
    sections: [
      { heading: 'Sesuaikan bingkai dengan acara', paragraphs: ['Photobooth virtual memberi tamu kesempatan membuat foto berbingkai melalui perangkat mereka sendiri. Mulai dari memilih warna, nama pasangan, dan tanggal yang selaras dengan undangan atau dekorasi.', 'Pastikan teks pada bingkai tetap terbaca dan tidak menutupi wajah. Uji tampilannya dengan foto satu orang maupun beberapa orang sebelum acara.'] },
      { heading: 'Permudah tamu menemukan tautan', paragraphs: ['Letakkan kode QR atau tautan pendek di meja penerima tamu, meja makan, atau area foto. Sertakan instruksi sederhana seperti “Pindai, izinkan kamera, lalu foto”. Petugas acara juga dapat membantu tamu yang membutuhkan.', 'Cek koneksi internet di lokasi dan coba akses dari beberapa HP. Siapkan pencahayaan yang baik di area yang dianjurkan agar hasil foto lebih nyaman dilihat.'] },
      { heading: 'Hormati pilihan tamu', paragraphs: ['Beri tahu tamu cara menyimpan hasilnya dan hindari mengunggah foto orang lain tanpa persetujuan. Photobooth virtual dapat melengkapi dokumentasi acara sekaligus memberi tamu kenangan yang bisa langsung dibawa pulang.'] },
    ],
  },
  {
    slug: 'tips-foto-photobooth-pencahayaan', title: 'Tips Pencahayaan Photobooth agar Foto Lebih Jelas', description: 'Kenali arah cahaya, posisi kamera, dan latar sederhana untuk hasil foto yang nyaman dilihat.', category: 'Tips foto', image: '/images/referensi-kamera.jpeg', imageAlt: 'Kamera sebagai inspirasi fotografi',
    sections: [
      { heading: 'Hadap ke sumber cahaya', paragraphs: ['Cahaya lembut dari jendela dapat menerangi wajah secara merata. Duduklah menghadap atau sedikit menyamping ke arah jendela, dan hindari sumber cahaya sangat terang tepat di belakangmu agar wajah tidak terlalu gelap.', 'Pada malam hari, gunakan lampu di depan wajah dengan jarak yang nyaman. Hindari menyorot langsung terlalu dekat karena dapat menghasilkan bayangan keras.'] },
      { heading: 'Periksa latar dan pratinjau', paragraphs: ['Pilih latar yang rapi dan beri jarak antara tubuh dan dinding bila memungkinkan. Letakkan kamera setinggi mata, bersihkan lensa, lalu gunakan pratinjau untuk memeriksa apakah wajah semua orang terlihat.', 'Ambil satu percobaan dan sesuaikan posisi jika foto terlalu gelap atau terang. Kondisi tiap perangkat berbeda, jadi perubahan kecil sering lebih berguna daripada menambah banyak dekorasi.'] },
    ],
  },
  {
    slug: 'ide-frame-photobooth-acara', title: 'Ide Frame Photobooth untuk Wedding, Ulang Tahun, dan Gathering', description: 'Pilih bingkai foto yang sesuai suasana acara tanpa mengorbankan ruang untuk wajah tamu.', category: 'Inspirasi', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Inspirasi bingkai photobooth untuk acara pernikahan',
    sections: [
      { heading: 'Mulai dari identitas acara', paragraphs: ['Untuk pernikahan, gunakan nama pasangan dan tanggal dengan warna yang selaras dengan undangan. Acara ulang tahun bisa memakai warna favorit dan pesan singkat, sementara gathering kantor dapat menampilkan nama acara atau logo dengan ukuran yang proporsional.', 'Pilih satu atau dua elemen utama agar bingkai tidak terasa penuh. Foto dan ekspresi tamu tetap menjadi pusat perhatian.'] },
      { heading: 'Uji sebelum dibagikan', paragraphs: ['Periksa keterbacaan teks di layar HP dan pastikan ornamen tidak menutupi wajah. Coba dengan foto portrait, foto berdua, dan kelompok kecil untuk melihat apakah ruang foto cukup luas.', 'Siapkan versi final lebih awal agar ada waktu memperbaiki nama, tanggal, atau warna sebelum tautan photobooth dibagikan.'] },
    ],
  },
  {
    slug: 'etika-mengirim-undangan-digital', title: 'Etika Mengirim Undangan Digital lewat WhatsApp', description: 'Tips menyampaikan undangan dengan hangat, jelas, dan tetap menghargai kenyamanan penerima.', category: 'Undangan digital', image: '/images/invitations/inv-08.jpg', imageAlt: 'Pasangan merayakan momen pernikahan',
    sections: [
      { heading: 'Tulis pesan yang personal', paragraphs: ['Sapa penerima dengan nama dan sampaikan maksud undangan sebelum membagikan tautan. Pesan singkat yang jelas terasa lebih hangat daripada mengirim tautan tanpa penjelasan.', 'Cantumkan ringkasan tanggal dan lokasi dalam pesan agar penerima dapat memahami informasi dasar meskipun belum membuka halaman undangan. Periksa kembali nama dan tautan sebelum mengirim.'] },
      { heading: 'Perhatikan waktu dan kebutuhan tamu', paragraphs: ['Kirim dengan waktu yang cukup untuk membantu tamu menyusun rencana. Jika membutuhkan konfirmasi, tuliskan cara dan batas waktunya dengan sopan tanpa menekan penerima.', 'Untuk orang tua atau kerabat yang kurang terbiasa membuka tautan, telepon atau kunjungan dapat menjadi pelengkap. Pilih cara yang sesuai dengan hubungan dan kebiasaan keluarga masing-masing.'] },
    ], source: { label: 'RRI: Undangan Pernikahan Digital, Cinta Tak Lagi Dicetak', url: 'https://rri.co.id/pekanbaru/berita-lain/1559373/undangan-pernikahan-digital-cinta-tak-lagi-dicetak' },
  },
  {
    slug: 'memilih-template-undangan-digital', title: 'Cara Memilih Template Undangan Digital yang Tepat', description: 'Bandingkan tampilan, keterbacaan, dan fitur sebelum menentukan desain undangan pernikahan.', category: 'Undangan digital', image: '/images/invitations/inv-12.jpg', imageAlt: 'Inspirasi visual undangan pernikahan digital',
    sections: [
      { heading: 'Mulai dari kebutuhan tamu', paragraphs: ['Daftar informasi yang harus ditemukan tamu: waktu, lokasi, peta, dan cara menghubungi keluarga. Pilih template yang menampilkan informasi tersebut dengan jelas, terutama pada layar HP.', 'Perhatikan kontras warna, ukuran tulisan, dan kemudahan menggulir halaman. Desain yang indah tetap perlu nyaman dibaca oleh berbagai usia.'] },
      { heading: 'Coba demo dan sesuaikan isi', paragraphs: ['Lihat demo beberapa template untuk membandingkan suasana, susunan foto, dan fitur yang tersedia. Periksa apakah galeri, peta, musik, atau RSVP sesuai kebutuhan acara, bukan sekadar dipilih karena terlihat ramai.', 'Setelah memilih, siapkan foto dan teks berkualitas baik. Minta orang lain memeriksa hasil akhir untuk menemukan kesalahan yang mungkin terlewat.'] },
    ],
  },
  {
    slug: 'checklist-persiapan-photobooth-event', title: 'Checklist Persiapan Photobooth untuk Acara', description: 'Dari desain bingkai sampai uji perangkat, siapkan pengalaman foto yang lancar untuk tamu.', category: 'Photobooth', image: '/images/referensi-poster.jpeg', imageAlt: 'Inspirasi materi untuk photobooth acara',
    sections: [
      { heading: 'Sebelum hari acara', paragraphs: ['Tentukan tujuan photobooth, perkiraan jumlah tamu, dan apakah tamu akan menggunakan perangkat sendiri atau perangkat yang disediakan. Siapkan desain bingkai, tautan, dan petunjuk akses yang mudah dipahami.', 'Uji kamera, hasil unduhan, dan koneksi internet dari lokasi bila memungkinkan. Periksa ejaan nama serta tanggal pada bingkai, lalu siapkan kontak penanggung jawab jika tamu membutuhkan bantuan.'] },
      { heading: 'Saat acara berlangsung', paragraphs: ['Tempatkan petunjuk di area yang mudah terlihat dan pastikan pencahayaan cukup. Jika menggunakan kode QR, cetak dengan ukuran yang mudah dipindai dan uji hasil cetaknya dari beberapa jarak.', 'Luangkan waktu untuk mencoba kembali sebelum tamu datang. Beri tahu tamu bahwa mereka dapat menyimpan hasil foto, dan minta persetujuan sebelum membagikan foto mereka secara publik.'] },
    ],
  },
  {
    slug: 'ide-merayakan-momen-jarak-jauh', title: 'Ide Merayakan Momen Jarak Jauh dengan Photobooth Online', description: 'Tetap berbagi kenangan bersama teman dan keluarga meski berada di kota yang berbeda.', category: 'Inspirasi', image: '/images/friends-photo-booth.jpg', imageAlt: 'Momen kebersamaan teman di photobooth',
    sections: [
      { heading: 'Tentukan tema bersama', paragraphs: ['Pilih waktu yang nyaman dan sepakati tema sederhana, misalnya warna pakaian, ekspresi lucu, atau bingkai dengan suasana retro. Masing-masing peserta dapat mengambil foto dari tempatnya sendiri dan membagikan hasilnya ke grup pribadi.', 'Untuk ulang tahun atau reuni, kumpulkan pesan singkat dari teman dan padukan dengan foto pilihan. Tidak perlu perlengkapan khusus: kamera perangkat dan cahaya yang cukup sudah menjadi awal yang baik.'] },
      { heading: 'Simpan kenangan dengan nyaman', paragraphs: ['Sepakati terlebih dahulu di mana foto akan dibagikan dan siapa yang boleh melihatnya. Minta persetujuan sebelum mengunggah foto teman ke media sosial.', 'Simpan salinan foto yang disukai di perangkat atau album bersama. Dengan sedikit koordinasi, jarak tidak menghalangi kalian untuk membuat kenangan baru.'] },
    ],
  },
];
