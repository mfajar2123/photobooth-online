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
    slug: 'checklist-persiapan-photobooth-event', title: 'Checklist Persiapan Photobooth untuk Acara', description: 'Dari desain bingkai sampai uji perangkat, siapkan pengalaman foto yang lancar untuk tamu.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Suasana acara yang menjadi inspirasi persiapan photobooth',
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
  {
    slug: 'susunan-acara-pernikahan-untuk-tamu', title: 'Cara Menulis Susunan Acara Pernikahan di Undangan Digital', description: 'Buat jadwal akad dan resepsi yang ringkas agar tamu tahu kapan harus datang dan ke mana menuju.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Dekorasi pernikahan dengan bunga dan cahaya hangat',
    sections: [
      { heading: 'Tampilkan informasi yang paling dibutuhkan', paragraphs: ['Tuliskan nama acara, tanggal, jam mulai, dan lokasi secara jelas. Jika akad dan resepsi berlangsung di waktu atau tempat berbeda, tampilkan sebagai dua bagian agar tamu tidak keliru.', 'Sertakan tautan peta dan petunjuk singkat seperti nama gedung atau pintu masuk. Pastikan tautan dibuka dengan titik lokasi yang benar sebelum undangan dikirim.'] },
      { heading: 'Buat jadwal mudah dipindai', paragraphs: ['Gunakan urutan waktu yang konsisten dan hindari paragraf panjang. Sisakan hanya informasi yang membantu tamu merencanakan kedatangan, lalu periksa tampilannya di layar ponsel.', 'Minta keluarga mengecek nama, tanggal, zona waktu, dan alamat. Kesalahan kecil pada jadwal bisa membuat tamu datang pada waktu yang keliru.'] },
    ],
  },
  {
    slug: 'cara-membuat-qr-photobooth-acara', title: 'Cara Membagikan Photobooth Acara lewat QR Code', description: 'Panduan singkat menyiapkan QR photobooth yang mudah dipindai tamu di lokasi acara.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Para tamu berkumpul di sebuah acara',
    sections: [
      { heading: 'Uji QR dari tautan sampai kamera', paragraphs: ['Buka tautan photobooth dari beberapa jenis ponsel sebelum mencetak QR. Pastikan halaman terbuka, petunjuknya jelas, dan tamu dapat menemukan tombol mulai tanpa perlu mencari-cari.', 'Cetak QR dengan kontras yang kuat dan sisakan ruang putih di sekelilingnya. QR yang terlalu kecil, berkilau, atau ditempatkan pada permukaan melengkung bisa sulit dipindai.'] },
      { heading: 'Tempatkan di titik yang mudah terlihat', paragraphs: ['Letakkan QR di area registrasi, meja foto, atau meja makan dengan pesan singkat tentang cara pakainya. Hindari menaruhnya tepat di atas tombol atau informasi penting acara.', 'Minta petugas mencoba memindai QR saat acara mulai. Siapkan juga tautan tertulis sebagai pilihan jika kamera pemindai tamu bermasalah.'] },
    ],
  },
  {
    slug: 'ide-tema-photobooth-ulang-tahun', title: 'Ide Tema Photobooth Ulang Tahun yang Seru dan Personal', description: 'Dari warna favorit sampai gaya retro, temukan ide tema bingkai yang cocok untuk pesta ulang tahun.', category: 'Inspirasi', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Suasana pesta ulang tahun dengan balon warna-warni',
    sections: [
      { heading: 'Pilih tema yang mencerminkan pemilik acara', paragraphs: ['Coba palet warna favorit, tema tahun kelahiran, film yang disukai, atau gaya piknik sederhana. Tema retro dengan warna hangat juga cocok untuk hasil photostrip bergaya nostalgia.', 'Tambahkan nama dan umur secara kecil sebagai kenang-kenangan, lalu sisakan ruang foto yang lapang. Hindari memenuhi bingkai dengan ornamen yang menutupi ekspresi.'] },
      { heading: 'Buat pengalaman mudah diikuti', paragraphs: ['Sertakan petunjuk singkat untuk tamu dan uji frame dengan satu atau beberapa orang. Buat beberapa contoh pose di dekat area foto agar tamu yang malu punya inspirasi.', 'Pilih tema yang terlihat baik dalam foto dengan pencahayaan venue. Jika lampu pesta berwarna kuat, tes hasil kamera terlebih dahulu.'] },
    ],
  },
  {
    slug: 'tips-foto-keluarga-saat-acara', title: 'Tips Mengambil Foto Keluarga yang Natural di Acara', description: 'Bantu keluarga merasa nyaman di depan kamera dengan arahan sederhana dan suasana santai.', category: 'Tips foto', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Keluarga dan teman merayakan acara bersama',
    sections: [
      { heading: 'Atur kelompok tanpa terburu-buru', paragraphs: ['Mulai dengan kelompok inti, lalu undang anggota keluarga lain bergabung. Tempatkan anak-anak dan orang yang lebih pendek di depan, dan pastikan wajah tidak tertutup.', 'Pilih area yang cukup terang dan minta semua orang mendekat. Jarak yang rapat membuat foto kelompok terlihat akrab dan membantu semuanya masuk ke dalam frame.'] },
      { heading: 'Ambil beberapa ekspresi', paragraphs: ['Ambil satu foto formal, kemudian ajak keluarga tertawa atau saling melihat. Hitung mundur pendek memberi waktu untuk bersiap tanpa membuat pose terasa kaku.', 'Berikan arahan yang ramah dan jangan memaksa seseorang ikut difoto. Momen yang menyenangkan lebih berkesan daripada pose yang harus sempurna.'] },
    ],
  },
  {
    slug: 'undangan-digital-hemat-kertas', title: 'Undangan Digital dan Cetak: Menentukan Pilihan yang Tepat', description: 'Pertimbangkan kebiasaan tamu, kebutuhan acara, dan cara membagikan undangan sebelum memilih format.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Pasangan berjalan bersama di hari pernikahan',
    sections: [
      { heading: 'Sesuaikan format dengan tamu', paragraphs: ['Undangan digital praktis untuk dibagikan melalui pesan dan mudah diperbarui jika detail acara berubah. Format cetak dapat membantu tamu yang jarang membuka tautan atau menjadi kenang-kenangan bagi keluarga.', 'Keduanya dapat dipakai bersama. Misalnya, bagikan undangan digital secara luas dan siapkan sejumlah undangan cetak untuk keluarga atau tamu tertentu.'] },
      { heading: 'Jaga informasi tetap konsisten', paragraphs: ['Jika memakai dua format, pastikan tanggal, jam, alamat, dan nama acara sama. Tentukan satu sumber informasi terbaru agar tamu tidak menemukan detail yang berbeda.', 'Pilih pendekatan yang sesuai anggaran dan kebutuhan keluarga. Tidak ada satu format yang paling tepat untuk semua acara.'] },
    ],
  },
  {
    slug: 'memilih-foto-untuk-undangan-digital', title: 'Cara Memilih Foto untuk Undangan Pernikahan Digital', description: 'Pilih foto yang sesuai cerita kalian sekaligus tampil tajam dan nyaman dilihat di layar ponsel.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Dekorasi meja pernikahan dengan rangkaian bunga',
    sections: [
      { heading: 'Utamakan foto yang terasa seperti kalian', paragraphs: ['Pilih foto dengan ekspresi alami dan pencahayaan baik. Tidak harus foto studio; momen sehari-hari yang bercerita tentang pasangan sering terasa lebih personal.', 'Periksa izin penggunaan foto dari fotografer, terutama jika foto berasal dari sesi profesional. Pastikan kalian berdua setuju dengan foto yang akan dibagikan kepada tamu.'] },
      { heading: 'Periksa potongan dan ukuran layar', paragraphs: ['Buka pratinjau undangan di ponsel dan komputer. Wajah penting sebaiknya tidak terlalu dekat tepi karena komposisi dapat terpotong pada ukuran layar yang berbeda.', 'Gunakan beberapa foto yang saling melengkapi. Terlalu banyak foto besar dapat membuat halaman lambat dibuka dan informasi acara lebih sulit ditemukan.'] },
    ],
  },
  {
    slug: 'rsvp-undangan-digital-yang-efektif', title: 'Cara Membuat RSVP Undangan Digital yang Mudah Diisi', description: 'Minta konfirmasi kehadiran dengan pertanyaan singkat yang membantu perencanaan acara.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Ruang acara pernikahan siap menyambut tamu',
    sections: [
      { heading: 'Tanyakan hal yang benar-benar dibutuhkan', paragraphs: ['Mulai dengan nama dan konfirmasi hadir atau tidak. Jika jumlah pendamping penting, tanyakan jumlah orang yang akan datang dengan pilihan jawaban yang jelas.', 'Hindari meminta informasi pribadi yang tidak diperlukan. Jelaskan kapan konfirmasi dibutuhkan dan siapa yang bisa dihubungi bila tamu mengalami kendala.'] },
      { heading: 'Buat pengisian nyaman di ponsel', paragraphs: ['Gunakan label kolom yang mudah dipahami, tombol yang mudah disentuh, dan konfirmasi bahwa jawaban sudah terkirim. Uji formulir sebelum tautan dibagikan.', 'Sediakan cara alternatif seperti kontak keluarga bagi tamu yang tidak nyaman mengisi formulir digital. Catat jawaban dengan aman dan batasi akses hanya untuk orang yang mengurus acara.'] },
    ],
  },
  {
    slug: 'contoh-kata-kata-undangan-pernikahan-digital', title: 'Contoh Kata-Kata Pembuka Undangan Pernikahan Digital', description: 'Inspirasi kalimat pembuka yang sopan dan hangat untuk dibagikan kepada keluarga serta sahabat.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Pasangan merayakan hari pernikahan bersama tamu',
    sections: [
      { heading: 'Pesan formal dan hangat', paragraphs: ['Contoh: “Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami. Detail acara dapat dilihat melalui tautan berikut.” Sesuaikan sapaan dengan hubungan dan kebiasaan keluarga.', 'Sebut nama penerima bila memungkinkan. Pesan personal membantu undangan terasa ditujukan langsung, terutama saat tautan dibagikan lewat aplikasi pesan.'] },
      { heading: 'Pesan santai untuk teman', paragraphs: ['Contoh: “Kami akan menikah! Senang sekali kalau kamu bisa hadir dan merayakan hari ini bersama kami. Informasi lengkapnya ada di tautan ini.”', 'Tambahkan tanggal ringkas dan cara konfirmasi bila diperlukan. Baca ulang pesan dan buka tautannya sebelum mengirim ke daftar tamu.'] },
    ],
  },
  {
    slug: 'rencana-anggaran-photobooth-pernikahan', title: 'Cara Merencanakan Anggaran Photobooth Pernikahan', description: 'Tentukan kebutuhan, kapasitas, dan pengalaman tamu sebelum memilih layanan photobooth.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Panggung acara dengan pencahayaan dan penonton',
    sections: [
      { heading: 'Tentukan pengalaman yang ingin diberikan', paragraphs: ['Pikirkan apakah tamu memerlukan foto cetak, file digital, bingkai khusus, atau akses dari ponsel masing-masing. Kebutuhan ini memengaruhi perangkat, staf, dan persiapan yang diperlukan.', 'Bandingkan penawaran berdasarkan apa yang termasuk di dalamnya, seperti durasi layanan, desain frame, jumlah cetakan, pengiriman file, dan biaya tambahan.'] },
      { heading: 'Sesuaikan dengan alur acara', paragraphs: ['Perkirakan jumlah tamu dan waktu ramai agar area foto tidak menghambat jalur masuk atau antrean makanan. Untuk photobooth virtual, pertimbangkan akses internet, kode QR, serta petunjuk penggunaan.', 'Sisakan anggaran untuk uji teknis dan koordinasi dengan vendor. Minta rincian tertulis agar biaya dan layanan yang disepakati mudah diperiksa.'] },
    ],
  },
  {
    slug: 'photobooth-online-tanpa-aplikasi', title: 'Photobooth Online Tanpa Aplikasi: Cara Kerja di Browser', description: 'Kenali cara mengakses kamera melalui browser dan hal yang perlu disiapkan sebelum mengambil foto.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Kamera dan perlengkapan untuk mengambil foto',
    sections: [
      { heading: 'Akses melalui browser', paragraphs: ['Photobooth berbasis web dibuka melalui tautan di browser yang mendukung kamera. Saat halaman meminta izin, browser akan menampilkan pilihan untuk mengizinkan atau menolak akses kamera.', 'Gunakan koneksi HTTPS dan browser yang diperbarui. Jika kamera sebelumnya ditolak, ubah izin situs melalui pengaturan browser lalu muat ulang halaman.'] },
      { heading: 'Perhatikan izin dan keamanan', paragraphs: ['Pastikan tautan berasal dari penyelenggara atau layanan yang kamu percaya. Tutup tab atau hentikan sesi setelah selesai, dan jangan memberikan izin kamera pada halaman yang tidak kamu kenali.', 'Pengolahan foto dapat berbeda di setiap layanan. Periksa kebijakan privasinya untuk memahami apakah foto tetap di perangkat atau dikirim ke server.'] },
    ],
  },
  {
    slug: 'pose-photobooth-berdua', title: 'Ide Pose Photobooth Berdua untuk Pasangan', description: 'Ide pose sederhana untuk foto pasangan yang terlihat santai, romantis, dan tidak monoton.', category: 'Inspirasi', image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Pasangan berjalan berdampingan di luar ruangan',
    sections: [
      { heading: 'Pose manis yang mudah dicoba', paragraphs: ['Mulai dengan berdiri berdampingan, saling menggenggam tangan, atau bersandar ringan. Coba melihat kamera pada satu foto lalu saling melihat pada foto berikutnya.', 'Tambahkan variasi seperti membuat bentuk hati bersama, memberi kecupan di pipi jika nyaman, atau menunjukkan benda kecil yang punya cerita bagi kalian.'] },
      { heading: 'Buat hasil tetap terasa alami', paragraphs: ['Gunakan hitung mundur untuk mengambil beberapa pose tanpa terburu-buru. Bergerak sedikit di antara jepretan agar rangkaian foto punya ekspresi yang berbeda.', 'Tidak ada pose wajib. Pilih yang terasa nyaman untuk kalian dan berhenti kapan saja jika merasa tidak nyaman.'] },
    ],
  },
  {
    slug: 'pencahayaan-acara-malam-untuk-foto', title: 'Tips Foto Photobooth di Acara Malam Hari', description: 'Atur posisi, cahaya, dan latar agar foto pesta malam tidak terlalu gelap atau penuh bayangan.', category: 'Tips foto', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Pesta malam dengan lampu dekoratif',
    sections: [
      { heading: 'Cari cahaya wajah yang cukup', paragraphs: ['Dekatkan area foto ke sumber cahaya lembut dan arahkan wajah ke sana. Hindari lampu kuat tepat di belakang subjek karena kamera ponsel dapat membuat wajah tampak gelap.', 'Jika memakai lampu tambahan, letakkan di depan dengan jarak aman. Coba foto uji untuk melihat apakah kulit tampak wajar dan latar masih terlihat.'] },
      { heading: 'Atur latar dan gerakan', paragraphs: ['Pilih latar yang tidak terlalu ramai dan hindari lampu langsung di belakang kepala. Minta subjek diam sejenak saat kamera mengambil gambar untuk mengurangi foto buram.', 'Perangkat berbeda menangkap cahaya dengan cara berbeda. Periksa hasil percobaan menggunakan kamera yang benar-benar akan dipakai di acara.'] },
    ],
  },
  {
    slug: 'ide-aktivitas-tamu-sebelum-resepsi', title: 'Aktivitas Ringan untuk Menghibur Tamu Sebelum Resepsi', description: 'Isi waktu tunggu dengan aktivitas singkat yang ramah untuk berbagai usia dan tidak mengganggu alur acara.', category: 'Inspirasi', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Para tamu berbincang di sebuah acara',
    sections: [
      { heading: 'Pilih kegiatan yang mudah diikuti', paragraphs: ['Sediakan buku ucapan, area foto sederhana, atau photobooth dengan instruksi singkat. Aktivitas yang bisa dilakukan kapan saja cocok untuk tamu yang datang pada waktu berbeda.', 'Pastikan kegiatan tidak menutup jalur masuk dan tersedia tempat duduk bagi tamu yang membutuhkan. Tawarkan bantuan tanpa mewajibkan semua orang ikut.'] },
      { heading: 'Jaga alur dan kenyamanan tamu', paragraphs: ['Koordinasikan waktu aktivitas dengan pembawa acara dan petugas venue supaya tidak bertabrakan dengan prosesi. Beri tanda yang jelas tentang lokasi dan cara berpartisipasi.', 'Untuk buku ucapan atau foto yang dibagikan, beri tahu tamu bagaimana hasilnya akan digunakan dan minta izin sebelum mengunggah foto ke akun publik.'] },
    ],
  },
  {
    slug: 'checklist-sebelum-mengirim-undangan-digital', title: 'Checklist Sebelum Mengirim Undangan Digital', description: 'Periksa detail acara, tautan, tampilan ponsel, dan ejaan sebelum undangan dibagikan.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Teman-teman merayakan momen bersama',
    sections: [
      { heading: 'Periksa detail utama', paragraphs: ['Pastikan nama pasangan, nama keluarga, tanggal, jam, alamat, dan kontak sudah benar. Jika ada beberapa rangkaian acara, bedakan waktu dan lokasi masing-masing.', 'Uji tombol peta, konfirmasi kehadiran, musik, dan tautan lain. Pastikan tautan terbuka di perangkat yang umum digunakan tamu.'] },
      { heading: 'Minta orang lain melakukan pengecekan', paragraphs: ['Buka halaman melalui ponsel dan koneksi internet biasa. Periksa apakah informasi penting mudah ditemukan, foto dimuat dengan baik, dan tulisan nyaman dibaca.', 'Minta satu orang yang belum melihat desain membaca undangan dan mencoba tautannya. Sudut pandang baru sering menemukan detail yang terlewat oleh pembuatnya.'] },
    ],
  },
  {
    slug: 'buat-album-foto-bersama-tamu', title: 'Cara Mengumpulkan Kenangan Foto dari Tamu Acara', description: 'Rencanakan cara berbagi foto yang praktis sekaligus menghormati pilihan dan privasi para tamu.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Tamu menikmati perayaan bersama',
    sections: [
      { heading: 'Pilih cara berbagi yang sederhana', paragraphs: ['Tentukan apakah tamu akan menyimpan foto sendiri, mengirimkannya ke album bersama, atau mengunggah ke galeri privat. Berikan instruksi dan tautan di satu tempat yang mudah diakses.', 'Cek batas akses dan masa aktif tautan bila menggunakan layanan pihak ketiga. Hindari meminta tamu mengunggah informasi yang tidak diperlukan.'] },
      { heading: 'Minta izin sebelum membagikan', paragraphs: ['Jelaskan siapa yang dapat melihat album dan apakah foto akan digunakan di media sosial atau materi promosi. Beri pilihan kepada tamu untuk tidak mengirim atau meminta fotonya dihapus.', 'Tunjuk satu orang untuk mengelola album dan menghapus unggahan yang tidak sesuai. Kebiasaan ini membuat kenangan bersama terasa lebih aman bagi semua orang.'] },
    ],
  },
  {
    slug: 'desain-undangan-digital-mobile-friendly', title: 'Ciri Undangan Digital yang Nyaman Dibuka di HP', description: 'Kenali ukuran teks, navigasi, dan susunan informasi yang membuat undangan mudah digunakan di ponsel.', category: 'Undangan digital', image: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Perangkat dan kamera untuk membuat kenangan',
    sections: [
      { heading: 'Utamakan keterbacaan', paragraphs: ['Gunakan ukuran tulisan yang nyaman tanpa harus memperbesar layar, kontras warna yang cukup, dan jarak antarbagiannya. Batasi jenis huruf dekoratif pada judul atau aksen.', 'Informasi tanggal dan lokasi sebaiknya mudah ditemukan. Tombol peta dan RSVP perlu cukup besar untuk disentuh dengan jari.'] },
      { heading: 'Perhatikan waktu muat dan navigasi', paragraphs: ['Kompres foto sebelum digunakan dan hindari elemen bergerak berlebihan yang memperlambat halaman. Tamu sebaiknya bisa memahami cara menggulir dan kembali ke informasi acara.', 'Uji undangan pada ponsel dengan ukuran layar berbeda dan koneksi yang tidak selalu cepat. Minta masukan dari pengguna yang tidak terlibat dalam pembuatannya.'] },
    ],
  },
  {
    slug: 'buat-frame-photobooth-yang-mudah-dibaca', title: 'Cara Membuat Frame Photobooth yang Jelas dan Estetik', description: 'Atur komposisi, ukuran teks, dan warna agar bingkai acara terlihat rapi pada setiap hasil foto.', category: 'Photobooth', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Dekorasi dan suasana sebuah acara',
    sections: [
      { heading: 'Sisakan ruang untuk subjek', paragraphs: ['Letakkan nama acara, tanggal, dan ornamen pada area tepi agar tidak menutupi wajah. Gunakan satu fokus visual utama dan jaga komposisi tetap seimbang.', 'Uji bingkai dalam format portrait dan landscape bila keduanya mungkin digunakan. Pastikan foto tetap dominan dan teks tidak terlalu kecil untuk layar ponsel.'] },
      { heading: 'Periksa warna dan keterbacaan', paragraphs: ['Pilih warna teks yang kontras dengan latar. Coba tampilan di layar yang berbeda dan lihat hasil unduhan, bukan hanya pratinjau desain.', 'Minta orang lain membaca bingkai tanpa konteks acara untuk memastikan nama dan detailnya mudah dipahami. Koreksi ejaan sebelum frame dibagikan ke tamu.'] },
    ],
  },
  {
    slug: 'rundown-foto-keluarga-pernikahan', title: 'Rundown Foto Keluarga Pernikahan agar Tidak Terlewat', description: 'Susun daftar kelompok foto dan waktu singkat untuk membantu dokumentasi keluarga berjalan lancar.', category: 'Tips foto', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Ruang pernikahan disiapkan untuk para tamu',
    sections: [
      { heading: 'Susun daftar kelompok prioritas', paragraphs: ['Catat kelompok yang ingin difoto, misalnya keluarga inti, saudara, dan teman dekat. Tentukan satu anggota keluarga yang membantu memanggil orang agar pasangan tidak perlu mencari semua orang sendiri.', 'Urutkan sesi berdasarkan lokasi dan ketersediaan keluarga. Siapkan tempat yang tidak menghalangi jalur tamu dan cukup terang untuk foto kelompok.'] },
      { heading: 'Sisihkan waktu dan ruang fleksibel', paragraphs: ['Jadwalkan foto keluarga dalam jeda yang realistis dan beri tahu fotografer serta pembawa acara. Siapkan daftar singkat agar kelompok berikutnya tahu kapan harus berkumpul.', 'Perubahan rundown bisa terjadi. Fokus pada foto yang paling penting terlebih dahulu dan nikmati momen bersama keluarga tanpa mengejar setiap pose.'] },
    ],
  },
  {
    slug: 'privasi-foto-di-acara-digital', title: 'Menjaga Privasi Foto Saat Berbagi di Acara Digital', description: 'Langkah sederhana meminta izin, mengatur akses, dan membagikan foto acara dengan rasa hormat.', category: 'Tips foto', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=82', imageAlt: 'Suasana acara malam dengan pencahayaan dekoratif',
    sections: [
      { heading: 'Jelaskan penggunaan foto', paragraphs: ['Sampaikan apakah foto hanya untuk kenangan pribadi, album bersama, atau akan dipublikasikan. Minta persetujuan sebelum menggunakan foto tamu dalam materi promosi atau unggahan publik.', 'Hormati tamu yang memilih tidak difoto. Petunjuk sederhana di area foto dan bantuan petugas dapat membuat pilihan ini lebih mudah disampaikan.'] },
      { heading: 'Batasi akses dan simpan seperlunya', paragraphs: ['Jika berbagi album, gunakan pengaturan akses yang sesuai dan jangan sebarkan tautannya ke publik tanpa alasan. Tinjau siapa yang dapat melihat atau mengunduh foto.', 'Hapus foto yang dibagikan tanpa izin setelah menerima permintaan yang wajar. Kebiasaan transparan membantu semua orang merasa lebih nyaman.'] },
    ],
  },
].slice(0, 25);
