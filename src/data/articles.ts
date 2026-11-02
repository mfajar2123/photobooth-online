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
    slug: 'checklist-persiapan-photobooth-event', title: 'Checklist Persiapan Photobooth untuk Acara', description: 'Dari desain bingkai sampai uji perangkat, siapkan pengalaman foto yang lancar untuk tamu.', category: 'Photobooth', image: '/images/articles/article-1531058020387.jpg', imageAlt: 'Suasana acara yang menjadi inspirasi persiapan photobooth',
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
    slug: 'susunan-acara-pernikahan-untuk-tamu', title: 'Cara Menulis Susunan Acara Pernikahan di Undangan Digital', description: 'Buat jadwal akad dan resepsi yang ringkas agar tamu tahu kapan harus datang dan ke mana menuju.', category: 'Undangan digital', image: '/images/articles/article-1519741497674.jpg', imageAlt: 'Dekorasi pernikahan dengan bunga dan cahaya hangat',
    sections: [
      { heading: 'Tampilkan informasi yang paling dibutuhkan', paragraphs: ['Tuliskan nama acara, tanggal, jam mulai, dan lokasi secara jelas. Jika akad dan resepsi berlangsung di waktu atau tempat berbeda, tampilkan sebagai dua bagian agar tamu tidak keliru.', 'Sertakan tautan peta dan petunjuk singkat seperti nama gedung atau pintu masuk. Pastikan tautan dibuka dengan titik lokasi yang benar sebelum undangan dikirim.'] },
      { heading: 'Buat jadwal mudah dipindai', paragraphs: ['Gunakan urutan waktu yang konsisten dan hindari paragraf panjang. Sisakan hanya informasi yang membantu tamu merencanakan kedatangan, lalu periksa tampilannya di layar ponsel.', 'Minta keluarga mengecek nama, tanggal, zona waktu, dan alamat. Kesalahan kecil pada jadwal bisa membuat tamu datang pada waktu yang keliru.'] },
    ],
  },
  {
    slug: 'cara-membuat-qr-photobooth-acara', title: 'Cara Membagikan Photobooth Acara lewat QR Code', description: 'Panduan singkat menyiapkan QR photobooth yang mudah dipindai tamu di lokasi acara.', category: 'Photobooth', image: '/images/articles/article-1511795409834.jpg', imageAlt: 'Para tamu berkumpul di sebuah acara',
    sections: [
      { heading: 'Uji QR dari tautan sampai kamera', paragraphs: ['Buka tautan photobooth dari beberapa jenis ponsel sebelum mencetak QR. Pastikan halaman terbuka, petunjuknya jelas, dan tamu dapat menemukan tombol mulai tanpa perlu mencari-cari.', 'Cetak QR dengan kontras yang kuat dan sisakan ruang putih di sekelilingnya. QR yang terlalu kecil, berkilau, atau ditempatkan pada permukaan melengkung bisa sulit dipindai.'] },
      { heading: 'Tempatkan di titik yang mudah terlihat', paragraphs: ['Letakkan QR di area registrasi, meja foto, atau meja makan dengan pesan singkat tentang cara pakainya. Hindari menaruhnya tepat di atas tombol atau informasi penting acara.', 'Minta petugas mencoba memindai QR saat acara mulai. Siapkan juga tautan tertulis sebagai pilihan jika kamera pemindai tamu bermasalah.'] },
    ],
  },
  {
    slug: 'ide-tema-photobooth-ulang-tahun', title: 'Ide Tema Photobooth Ulang Tahun yang Seru dan Personal', description: 'Dari warna favorit sampai gaya retro, temukan ide tema bingkai yang cocok untuk pesta ulang tahun.', category: 'Inspirasi', image: '/images/articles/article-1530103862676.jpg', imageAlt: 'Suasana pesta ulang tahun dengan balon warna-warni',
    sections: [
      { heading: 'Pilih tema yang mencerminkan pemilik acara', paragraphs: ['Coba palet warna favorit, tema tahun kelahiran, film yang disukai, atau gaya piknik sederhana. Tema retro dengan warna hangat juga cocok untuk hasil photostrip bergaya nostalgia.', 'Tambahkan nama dan umur secara kecil sebagai kenang-kenangan, lalu sisakan ruang foto yang lapang. Hindari memenuhi bingkai dengan ornamen yang menutupi ekspresi.'] },
      { heading: 'Buat pengalaman mudah diikuti', paragraphs: ['Sertakan petunjuk singkat untuk tamu dan uji frame dengan satu atau beberapa orang. Buat beberapa contoh pose di dekat area foto agar tamu yang malu punya inspirasi.', 'Pilih tema yang terlihat baik dalam foto dengan pencahayaan venue. Jika lampu pesta berwarna kuat, tes hasil kamera terlebih dahulu.'] },
    ],
  },
  {
    slug: 'tips-foto-keluarga-saat-acara', title: 'Tips Mengambil Foto Keluarga yang Natural di Acara', description: 'Bantu keluarga merasa nyaman di depan kamera dengan arahan sederhana dan suasana santai.', category: 'Tips foto', image: '/images/articles/article-1527529482837.jpg', imageAlt: 'Keluarga dan teman merayakan acara bersama',
    sections: [
      { heading: 'Atur kelompok tanpa terburu-buru', paragraphs: ['Mulai dengan kelompok inti, lalu undang anggota keluarga lain bergabung. Tempatkan anak-anak dan orang yang lebih pendek di depan, dan pastikan wajah tidak tertutup.', 'Pilih area yang cukup terang dan minta semua orang mendekat. Jarak yang rapat membuat foto kelompok terlihat akrab dan membantu semuanya masuk ke dalam frame.'] },
      { heading: 'Ambil beberapa ekspresi', paragraphs: ['Ambil satu foto formal, kemudian ajak keluarga tertawa atau saling melihat. Hitung mundur pendek memberi waktu untuk bersiap tanpa membuat pose terasa kaku.', 'Berikan arahan yang ramah dan jangan memaksa seseorang ikut difoto. Momen yang menyenangkan lebih berkesan daripada pose yang harus sempurna.'] },
    ],
  },
  {
    slug: 'undangan-digital-hemat-kertas', title: 'Undangan Digital dan Cetak: Menentukan Pilihan yang Tepat', description: 'Pertimbangkan kebiasaan tamu, kebutuhan acara, dan cara membagikan undangan sebelum memilih format.', category: 'Undangan digital', image: '/images/articles/article-1511285560929.jpg', imageAlt: 'Pasangan berjalan bersama di hari pernikahan',
    sections: [
      { heading: 'Sesuaikan format dengan tamu', paragraphs: ['Undangan digital praktis untuk dibagikan melalui pesan dan mudah diperbarui jika detail acara berubah. Format cetak dapat membantu tamu yang jarang membuka tautan atau menjadi kenang-kenangan bagi keluarga.', 'Keduanya dapat dipakai bersama. Misalnya, bagikan undangan digital secara luas dan siapkan sejumlah undangan cetak untuk keluarga atau tamu tertentu.'] },
      { heading: 'Jaga informasi tetap konsisten', paragraphs: ['Jika memakai dua format, pastikan tanggal, jam, alamat, dan nama acara sama. Tentukan satu sumber informasi terbaru agar tamu tidak menemukan detail yang berbeda.', 'Pilih pendekatan yang sesuai anggaran dan kebutuhan keluarga. Tidak ada satu format yang paling tepat untuk semua acara.'] },
    ],
  },
  {
    slug: 'memilih-foto-untuk-undangan-digital', title: 'Cara Memilih Foto untuk Undangan Pernikahan Digital', description: 'Pilih foto yang sesuai cerita kalian sekaligus tampil tajam dan nyaman dilihat di layar ponsel.', category: 'Undangan digital', image: '/images/articles/article-1464366400600.jpg', imageAlt: 'Dekorasi meja pernikahan dengan rangkaian bunga',
    sections: [
      { heading: 'Utamakan foto yang terasa seperti kalian', paragraphs: ['Pilih foto dengan ekspresi alami dan pencahayaan baik. Tidak harus foto studio; momen sehari-hari yang bercerita tentang pasangan sering terasa lebih personal.', 'Periksa izin penggunaan foto dari fotografer, terutama jika foto berasal dari sesi profesional. Pastikan kalian berdua setuju dengan foto yang akan dibagikan kepada tamu.'] },
      { heading: 'Periksa potongan dan ukuran layar', paragraphs: ['Buka pratinjau undangan di ponsel dan komputer. Wajah penting sebaiknya tidak terlalu dekat tepi karena komposisi dapat terpotong pada ukuran layar yang berbeda.', 'Gunakan beberapa foto yang saling melengkapi. Terlalu banyak foto besar dapat membuat halaman lambat dibuka dan informasi acara lebih sulit ditemukan.'] },
    ],
  },
  {
    slug: 'rsvp-undangan-digital-yang-efektif', title: 'Cara Membuat RSVP Undangan Digital yang Mudah Diisi', description: 'Minta konfirmasi kehadiran dengan pertanyaan singkat yang membantu perencanaan acara.', category: 'Undangan digital', image: '/images/articles/article-1519167758481.jpg', imageAlt: 'Ruang acara pernikahan siap menyambut tamu',
    sections: [
      { heading: 'Tanyakan hal yang benar-benar dibutuhkan', paragraphs: ['Mulai dengan nama dan konfirmasi hadir atau tidak. Jika jumlah pendamping penting, tanyakan jumlah orang yang akan datang dengan pilihan jawaban yang jelas.', 'Hindari meminta informasi pribadi yang tidak diperlukan. Jelaskan kapan konfirmasi dibutuhkan dan siapa yang bisa dihubungi bila tamu mengalami kendala.'] },
      { heading: 'Buat pengisian nyaman di ponsel', paragraphs: ['Gunakan label kolom yang mudah dipahami, tombol yang mudah disentuh, dan konfirmasi bahwa jawaban sudah terkirim. Uji formulir sebelum tautan dibagikan.', 'Sediakan cara alternatif seperti kontak keluarga bagi tamu yang tidak nyaman mengisi formulir digital. Catat jawaban dengan aman dan batasi akses hanya untuk orang yang mengurus acara.'] },
    ],
  },
  {
    slug: 'contoh-kata-kata-undangan-pernikahan-digital', title: 'Contoh Kata-Kata Pembuka Undangan Pernikahan Digital', description: 'Inspirasi kalimat pembuka yang sopan dan hangat untuk dibagikan kepada keluarga serta sahabat.', category: 'Undangan digital', image: '/images/articles/article-1507504031003.jpg', imageAlt: 'Pasangan merayakan hari pernikahan bersama tamu',
    sections: [
      { heading: 'Pesan formal dan hangat', paragraphs: ['Contoh: “Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami. Detail acara dapat dilihat melalui tautan berikut.” Sesuaikan sapaan dengan hubungan dan kebiasaan keluarga.', 'Sebut nama penerima bila memungkinkan. Pesan personal membantu undangan terasa ditujukan langsung, terutama saat tautan dibagikan lewat aplikasi pesan.'] },
      { heading: 'Pesan santai untuk teman', paragraphs: ['Contoh: “Kami akan menikah! Senang sekali kalau kamu bisa hadir dan merayakan hari ini bersama kami. Informasi lengkapnya ada di tautan ini.”', 'Tambahkan tanggal ringkas dan cara konfirmasi bila diperlukan. Baca ulang pesan dan buka tautannya sebelum mengirim ke daftar tamu.'] },
    ],
  },
  {
    slug: 'rencana-anggaran-photobooth-pernikahan', title: 'Cara Merencanakan Anggaran Photobooth Pernikahan', description: 'Tentukan kebutuhan, kapasitas, dan pengalaman tamu sebelum memilih layanan photobooth.', category: 'Photobooth', image: '/images/articles/article-1492684223066.jpg', imageAlt: 'Panggung acara dengan pencahayaan dan penonton',
    sections: [
      { heading: 'Tentukan pengalaman yang ingin diberikan', paragraphs: ['Pikirkan apakah tamu memerlukan foto cetak, file digital, bingkai khusus, atau akses dari ponsel masing-masing. Kebutuhan ini memengaruhi perangkat, staf, dan persiapan yang diperlukan.', 'Bandingkan penawaran berdasarkan apa yang termasuk di dalamnya, seperti durasi layanan, desain frame, jumlah cetakan, pengiriman file, dan biaya tambahan.'] },
      { heading: 'Sesuaikan dengan alur acara', paragraphs: ['Perkirakan jumlah tamu dan waktu ramai agar area foto tidak menghambat jalur masuk atau antrean makanan. Untuk photobooth virtual, pertimbangkan akses internet, kode QR, serta petunjuk penggunaan.', 'Sisakan anggaran untuk uji teknis dan koordinasi dengan vendor. Minta rincian tertulis agar biaya dan layanan yang disepakati mudah diperiksa.'] },
    ],
  },
  {
    slug: 'photobooth-online-tanpa-aplikasi', title: 'Photobooth Online Tanpa Aplikasi: Cara Kerja di Browser', description: 'Kenali cara mengakses kamera melalui browser dan hal yang perlu disiapkan sebelum mengambil foto.', category: 'Photobooth', image: '/images/articles/article-1502635385003.jpg', imageAlt: 'Kamera dan perlengkapan untuk mengambil foto',
    sections: [
      { heading: 'Akses melalui browser', paragraphs: ['Photobooth berbasis web dibuka melalui tautan di browser yang mendukung kamera. Saat halaman meminta izin, browser akan menampilkan pilihan untuk mengizinkan atau menolak akses kamera.', 'Gunakan koneksi HTTPS dan browser yang diperbarui. Jika kamera sebelumnya ditolak, ubah izin situs melalui pengaturan browser lalu muat ulang halaman.'] },
      { heading: 'Perhatikan izin dan keamanan', paragraphs: ['Pastikan tautan berasal dari penyelenggara atau layanan yang kamu percaya. Tutup tab atau hentikan sesi setelah selesai, dan jangan memberikan izin kamera pada halaman yang tidak kamu kenali.', 'Pengolahan foto dapat berbeda di setiap layanan. Periksa kebijakan privasinya untuk memahami apakah foto tetap di perangkat atau dikirim ke server.'] },
    ],
  },
  {
    slug: 'pose-photobooth-berdua', title: 'Ide Pose Photobooth Berdua untuk Pasangan', description: 'Ide pose sederhana untuk foto pasangan yang terlihat santai, romantis, dan tidak monoton.', category: 'Inspirasi', image: '/images/articles/article-1529636798458.jpg', imageAlt: 'Pasangan berjalan berdampingan di luar ruangan',
    sections: [
      { heading: 'Pose manis yang mudah dicoba', paragraphs: ['Mulai dengan berdiri berdampingan, saling menggenggam tangan, atau bersandar ringan. Coba melihat kamera pada satu foto lalu saling melihat pada foto berikutnya.', 'Tambahkan variasi seperti membuat bentuk hati bersama, memberi kecupan di pipi jika nyaman, atau menunjukkan benda kecil yang punya cerita bagi kalian.'] },
      { heading: 'Buat hasil tetap terasa alami', paragraphs: ['Gunakan hitung mundur untuk mengambil beberapa pose tanpa terburu-buru. Bergerak sedikit di antara jepretan agar rangkaian foto punya ekspresi yang berbeda.', 'Tidak ada pose wajib. Pilih yang terasa nyaman untuk kalian dan berhenti kapan saja jika merasa tidak nyaman.'] },
    ],
  },
  {
    slug: 'pencahayaan-acara-malam-untuk-foto', title: 'Tips Foto Photobooth di Acara Malam Hari', description: 'Atur posisi, cahaya, dan latar agar foto pesta malam tidak terlalu gelap atau penuh bayangan.', category: 'Tips foto', image: '/images/articles/article-1517457373958.jpg', imageAlt: 'Pesta malam dengan lampu dekoratif',
    sections: [
      { heading: 'Cari cahaya wajah yang cukup', paragraphs: ['Dekatkan area foto ke sumber cahaya lembut dan arahkan wajah ke sana. Hindari lampu kuat tepat di belakang subjek karena kamera ponsel dapat membuat wajah tampak gelap.', 'Jika memakai lampu tambahan, letakkan di depan dengan jarak aman. Coba foto uji untuk melihat apakah kulit tampak wajar dan latar masih terlihat.'] },
      { heading: 'Atur latar dan gerakan', paragraphs: ['Pilih latar yang tidak terlalu ramai dan hindari lampu langsung di belakang kepala. Minta subjek diam sejenak saat kamera mengambil gambar untuk mengurangi foto buram.', 'Perangkat berbeda menangkap cahaya dengan cara berbeda. Periksa hasil percobaan menggunakan kamera yang benar-benar akan dipakai di acara.'] },
    ],
  },
  {
    slug: 'ide-aktivitas-tamu-sebelum-resepsi', title: 'Aktivitas Ringan untuk Menghibur Tamu Sebelum Resepsi', description: 'Isi waktu tunggu dengan aktivitas singkat yang ramah untuk berbagai usia dan tidak mengganggu alur acara.', category: 'Inspirasi', image: '/images/articles/article-1511578314322.jpg', imageAlt: 'Para tamu berbincang di sebuah acara',
    sections: [
      { heading: 'Pilih kegiatan yang mudah diikuti', paragraphs: ['Sediakan buku ucapan, area foto sederhana, atau photobooth dengan instruksi singkat. Aktivitas yang bisa dilakukan kapan saja cocok untuk tamu yang datang pada waktu berbeda.', 'Pastikan kegiatan tidak menutup jalur masuk dan tersedia tempat duduk bagi tamu yang membutuhkan. Tawarkan bantuan tanpa mewajibkan semua orang ikut.'] },
      { heading: 'Jaga alur dan kenyamanan tamu', paragraphs: ['Koordinasikan waktu aktivitas dengan pembawa acara dan petugas venue supaya tidak bertabrakan dengan prosesi. Beri tanda yang jelas tentang lokasi dan cara berpartisipasi.', 'Untuk buku ucapan atau foto yang dibagikan, beri tahu tamu bagaimana hasilnya akan digunakan dan minta izin sebelum mengunggah foto ke akun publik.'] },
    ],
  },
  {
    slug: 'checklist-sebelum-mengirim-undangan-digital', title: 'Checklist Sebelum Mengirim Undangan Digital', description: 'Periksa detail acara, tautan, tampilan ponsel, dan ejaan sebelum undangan dibagikan.', category: 'Undangan digital', image: '/images/articles/article-1511988617509.jpg', imageAlt: 'Teman-teman merayakan momen bersama',
    sections: [
      { heading: 'Periksa detail utama', paragraphs: ['Pastikan nama pasangan, nama keluarga, tanggal, jam, alamat, dan kontak sudah benar. Jika ada beberapa rangkaian acara, bedakan waktu dan lokasi masing-masing.', 'Uji tombol peta, konfirmasi kehadiran, musik, dan tautan lain. Pastikan tautan terbuka di perangkat yang umum digunakan tamu.'] },
      { heading: 'Minta orang lain melakukan pengecekan', paragraphs: ['Buka halaman melalui ponsel dan koneksi internet biasa. Periksa apakah informasi penting mudah ditemukan, foto dimuat dengan baik, dan tulisan nyaman dibaca.', 'Minta satu orang yang belum melihat desain membaca undangan dan mencoba tautannya. Sudut pandang baru sering menemukan detail yang terlewat oleh pembuatnya.'] },
    ],
  },
  {
    slug: 'buat-album-foto-bersama-tamu', title: 'Cara Mengumpulkan Kenangan Foto dari Tamu Acara', description: 'Rencanakan cara berbagi foto yang praktis sekaligus menghormati pilihan dan privasi para tamu.', category: 'Photobooth', image: '/images/articles/article-1507504031003.jpg', imageAlt: 'Tamu menikmati perayaan bersama',
    sections: [
      { heading: 'Pilih cara berbagi yang sederhana', paragraphs: ['Tentukan apakah tamu akan menyimpan foto sendiri, mengirimkannya ke album bersama, atau mengunggah ke galeri privat. Berikan instruksi dan tautan di satu tempat yang mudah diakses.', 'Cek batas akses dan masa aktif tautan bila menggunakan layanan pihak ketiga. Hindari meminta tamu mengunggah informasi yang tidak diperlukan.'] },
      { heading: 'Minta izin sebelum membagikan', paragraphs: ['Jelaskan siapa yang dapat melihat album dan apakah foto akan digunakan di media sosial atau materi promosi. Beri pilihan kepada tamu untuk tidak mengirim atau meminta fotonya dihapus.', 'Tunjuk satu orang untuk mengelola album dan menghapus unggahan yang tidak sesuai. Kebiasaan ini membuat kenangan bersama terasa lebih aman bagi semua orang.'] },
    ],
  },
  {
    slug: 'desain-undangan-digital-mobile-friendly', title: 'Ciri Undangan Digital yang Nyaman Dibuka di HP', description: 'Kenali ukuran teks, navigasi, dan susunan informasi yang membuat undangan mudah digunakan di ponsel.', category: 'Undangan digital', image: '/images/articles/article-1502635385003.jpg', imageAlt: 'Perangkat dan kamera untuk membuat kenangan',
    sections: [
      { heading: 'Utamakan keterbacaan', paragraphs: ['Gunakan ukuran tulisan yang nyaman tanpa harus memperbesar layar, kontras warna yang cukup, dan jarak antarbagiannya. Batasi jenis huruf dekoratif pada judul atau aksen.', 'Informasi tanggal dan lokasi sebaiknya mudah ditemukan. Tombol peta dan RSVP perlu cukup besar untuk disentuh dengan jari.'] },
      { heading: 'Perhatikan waktu muat dan navigasi', paragraphs: ['Kompres foto sebelum digunakan dan hindari elemen bergerak berlebihan yang memperlambat halaman. Tamu sebaiknya bisa memahami cara menggulir dan kembali ke informasi acara.', 'Uji undangan pada ponsel dengan ukuran layar berbeda dan koneksi yang tidak selalu cepat. Minta masukan dari pengguna yang tidak terlibat dalam pembuatannya.'] },
    ],
  },
  {
    slug: 'buat-frame-photobooth-yang-mudah-dibaca', title: 'Cara Membuat Frame Photobooth yang Jelas dan Estetik', description: 'Atur komposisi, ukuran teks, dan warna agar bingkai acara terlihat rapi pada setiap hasil foto.', category: 'Photobooth', image: '/images/articles/article-1531058020387.jpg', imageAlt: 'Dekorasi dan suasana sebuah acara',
    sections: [
      { heading: 'Sisakan ruang untuk subjek', paragraphs: ['Letakkan nama acara, tanggal, dan ornamen pada area tepi agar tidak menutupi wajah. Gunakan satu fokus visual utama dan jaga komposisi tetap seimbang.', 'Uji bingkai dalam format portrait dan landscape bila keduanya mungkin digunakan. Pastikan foto tetap dominan dan teks tidak terlalu kecil untuk layar ponsel.'] },
      { heading: 'Periksa warna dan keterbacaan', paragraphs: ['Pilih warna teks yang kontras dengan latar. Coba tampilan di layar yang berbeda dan lihat hasil unduhan, bukan hanya pratinjau desain.', 'Minta orang lain membaca bingkai tanpa konteks acara untuk memastikan nama dan detailnya mudah dipahami. Koreksi ejaan sebelum frame dibagikan ke tamu.'] },
    ],
  },
  {
    slug: 'rundown-foto-keluarga-pernikahan', title: 'Rundown Foto Keluarga Pernikahan agar Tidak Terlewat', description: 'Susun daftar kelompok foto dan waktu singkat untuk membantu dokumentasi keluarga berjalan lancar.', category: 'Tips foto', image: '/images/articles/article-1519167758481.jpg', imageAlt: 'Ruang pernikahan disiapkan untuk para tamu',
    sections: [
      { heading: 'Susun daftar kelompok prioritas', paragraphs: ['Catat kelompok yang ingin difoto, misalnya keluarga inti, saudara, dan teman dekat. Tentukan satu anggota keluarga yang membantu memanggil orang agar pasangan tidak perlu mencari semua orang sendiri.', 'Urutkan sesi berdasarkan lokasi dan ketersediaan keluarga. Siapkan tempat yang tidak menghalangi jalur tamu dan cukup terang untuk foto kelompok.'] },
      { heading: 'Sisihkan waktu dan ruang fleksibel', paragraphs: ['Jadwalkan foto keluarga dalam jeda yang realistis dan beri tahu fotografer serta pembawa acara. Siapkan daftar singkat agar kelompok berikutnya tahu kapan harus berkumpul.', 'Perubahan rundown bisa terjadi. Fokus pada foto yang paling penting terlebih dahulu dan nikmati momen bersama keluarga tanpa mengejar setiap pose.'] },
    ],
  },
  {
    slug: 'privasi-foto-di-acara-digital', title: 'Menjaga Privasi Foto Saat Berbagi di Acara Digital', description: 'Langkah sederhana meminta izin, mengatur akses, dan membagikan foto acara dengan rasa hormat.', category: 'Tips foto', image: '/images/articles/article-1517457373958.jpg', imageAlt: 'Suasana acara malam dengan pencahayaan dekoratif',
    sections: [
      { heading: 'Jelaskan penggunaan foto', paragraphs: ['Sampaikan apakah foto hanya untuk kenangan pribadi, album bersama, atau akan dipublikasikan. Minta persetujuan sebelum menggunakan foto tamu dalam materi promosi atau unggahan publik.', 'Hormati tamu yang memilih tidak difoto. Petunjuk sederhana di area foto dan bantuan petugas dapat membuat pilihan ini lebih mudah disampaikan.'] },
      { heading: 'Batasi akses dan simpan seperlunya', paragraphs: ['Jika berbagi album, gunakan pengaturan akses yang sesuai dan jangan sebarkan tautannya ke publik tanpa alasan. Tinjau siapa yang dapat melihat atau mengunduh foto.', 'Hapus foto yang dibagikan tanpa izin setelah menerima permintaan yang wajar. Kebiasaan transparan membantu semua orang merasa lebih nyaman.'] },
    ],
  },
  {
    slug: 'panduan-memilih-lokasi-photobooth', title: 'Panduan Memilih Lokasi Photobooth di Venue Acara', description: 'Temukan posisi yang mudah dijangkau, terang, dan tidak menghambat alur tamu saat membuat area foto.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman berfoto bersama di area photobooth',
    sections: [
      { heading: 'Cari area yang terlihat dan tidak mengganggu', paragraphs: ['Pilih tempat yang mudah ditemukan dari pintu masuk atau area berkumpul. Hindari jalur keluar, akses katering, dan titik yang membuat antrean memotong jalan tamu.', 'Sisakan ruang untuk orang yang menunggu dan kelompok yang sedang berfoto. Jika ruang terbatas, gunakan petunjuk sederhana agar tamu memahami urutan tanpa perlu berdesakan.'] },
      { heading: 'Periksa cahaya dan akses teknis', paragraphs: ['Lakukan uji foto pada jam acara berlangsung karena kondisi cahaya dapat berubah. Perhatikan pantulan dari jendela, lampu panggung, dan latar yang terlalu ramai.', 'Untuk photobooth berbasis web, cek sinyal internet di titik tersebut. Siapkan lokasi alternatif jika jaringan atau pencahayaan utama kurang mendukung.'] },
    ],
  },
  {
    slug: 'ukuran-foto-untuk-undangan-digital', title: 'Ukuran Foto untuk Undangan Digital agar Tetap Tajam', description: 'Siapkan foto dengan rasio, resolusi, dan ukuran berkas yang seimbang untuk layar ponsel.', category: 'Undangan digital', image: '/images/invitations/inv-12.jpg', imageAlt: 'Inspirasi foto untuk undangan digital',
    sections: [
      { heading: 'Pilih foto sesuai ruang tampil', paragraphs: ['Tentukan lebih dulu apakah foto akan menjadi gambar sampul, galeri, atau latar. Foto portrait cocok untuk tampilan tegak, sedangkan foto landscape memberi ruang lebih lebar untuk komposisi berdua.', 'Simpan berkas asli sebelum mengubah ukuran. Periksa titik potong pada pratinjau ponsel karena bagian tepi gambar bisa tidak terlihat pada layar yang berbeda.'] },
      { heading: 'Jaga kualitas tanpa memperlambat halaman', paragraphs: ['Gunakan salinan foto yang ukurannya sesuai kebutuhan tampilan dan kompres seperlunya. Hindari memperbesar foto kecil secara berlebihan karena detailnya tidak akan kembali.', 'Buka undangan dengan koneksi seluler untuk melihat apakah foto terasa cepat dimuat. Pastikan wajah dan informasi penting tetap terlihat setelah gambar tampil.'] },
    ],
  },
  {
    slug: 'cara-menulis-alamat-undangan-pernikahan', title: 'Cara Menulis Alamat Acara di Undangan Digital', description: 'Bantu tamu tiba dengan informasi lokasi yang lengkap, tautan peta yang tepat, dan petunjuk singkat.', category: 'Undangan digital', image: '/images/invitations/inv-11.jpg', imageAlt: 'Suasana pernikahan sebagai inspirasi undangan',
    sections: [
      { heading: 'Cantumkan alamat yang mudah dikenali', paragraphs: ['Tuliskan nama gedung atau tempat, jalan, kelurahan atau kawasan, kota, dan patokan yang membantu. Jika acara memakai ruang tertentu, sebutkan nama aula atau lantainya.', 'Pisahkan alamat untuk setiap rangkaian acara bila akad dan resepsi berlangsung di tempat berbeda. Jangan mengandalkan nama venue saja jika ada beberapa cabang dengan nama serupa.'] },
      { heading: 'Uji tautan peta dari ponsel', paragraphs: ['Buka tombol peta dari perangkat seluler dan pastikan pin jatuh di pintu masuk yang benar. Periksa juga apakah rute menuju area parkir atau gerbang yang dapat digunakan tamu.', 'Tambahkan nomor kontak panitia untuk keadaan darurat. Minta orang lain mencoba mencari lokasi hanya dari undangan untuk mengetahui apakah petunjuknya cukup jelas.'] },
    ],
  },
  {
    slug: 'panduan-membuat-daftar-tamu-pernikahan', title: 'Menyusun Daftar Tamu Pernikahan dengan Rapi', description: 'Kelola nama, kelompok undangan, dan konfirmasi kehadiran agar koordinasi keluarga lebih mudah.', category: 'Persiapan acara', image: '/images/invitations/inv-08.jpg', imageAlt: 'Perayaan bersama keluarga dan sahabat',
    sections: [
      { heading: 'Kelompokkan daftar sejak awal', paragraphs: ['Buat daftar terpisah untuk keluarga, teman, rekan kerja, dan undangan dari masing-masing pihak. Catat satu nama kontak utama per rumah tangga agar pengiriman tidak berulang.', 'Sepakati kapasitas acara sebelum memperluas daftar. Sisakan kolom untuk jumlah tamu, cara menghubungi, dan catatan kebutuhan akses atau konsumsi.'] },
      { heading: 'Catat konfirmasi seperlunya', paragraphs: ['Tentukan batas konfirmasi yang realistis dan catat jawabannya di satu dokumen yang hanya dapat diakses panitia terkait. Perbarui status saat ada perubahan.', 'Gunakan informasi kontak hanya untuk urusan acara. Hindari membagikan daftar lengkap di grup terbuka karena data tersebut berisi informasi pribadi.'] },
    ],
  },
  {
    slug: 'ide-buku-tamu-pernikahan-digital', title: 'Ide Buku Tamu Digital untuk Menyimpan Ucapan', description: 'Pilih cara sederhana mengumpulkan pesan tamu dan menjaga kenangan acara tetap mudah ditemukan.', category: 'Inspirasi', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Dekorasi pernikahan yang hangat',
    sections: [
      { heading: 'Tentukan bentuk pesan yang diinginkan', paragraphs: ['Tamu dapat menulis ucapan singkat, memilih satu pertanyaan pemantik, atau merekam pesan suara jika fasilitasnya tersedia. Instruksi yang singkat membuat orang lebih mudah berpartisipasi.', 'Sediakan pilihan buku fisik bagi tamu yang tidak ingin memakai ponsel. Tempatkan petunjuk di lokasi yang tidak menghalangi penerimaan tamu.'] },
      { heading: 'Atur akses dan penyimpanan', paragraphs: ['Beri tahu siapa yang dapat membaca pesan dan berapa lama data akan disimpan. Hindari meminta informasi yang tidak dibutuhkan untuk kenangan acara.', 'Setelah acara, simpan salinan untuk pasangan dan keluarga sesuai kesepakatan. Minta izin sebelum mengutip pesan atau menampilkan nama penulis di media sosial.'] },
    ],
  },
  {
    slug: 'tips-memilih-musik-undangan-digital', title: 'Tips Memilih Musik untuk Undangan Pernikahan Digital', description: 'Pilih musik yang mendukung suasana tanpa mengganggu tamu saat membaca informasi acara.', category: 'Undangan digital', image: '/images/invitations/inv-13.jpg', imageAlt: 'Detail dekorasi pernikahan',
    sections: [
      { heading: 'Sesuaikan pilihan dengan suasana', paragraphs: ['Pilih lagu yang punya makna bagi pasangan atau mendukung tema acara. Pertimbangkan versi instrumental jika liriknya membuat teks atau pesan undangan terasa kurang selaras.', 'Pastikan musik tidak menjadi satu-satunya cara menyampaikan informasi. Tamu tetap perlu dapat membaca undangan dengan suara perangkat dimatikan.'] },
      { heading: 'Beri kendali kepada pengunjung', paragraphs: ['Sediakan tombol putar dan jeda yang mudah ditemukan, lalu biarkan musik mulai setelah pengunjung memilihnya. Pemutaran otomatis dapat mengejutkan orang yang membuka tautan di tempat umum.', 'Periksa hak penggunaan audio yang dipilih dan uji kontrolnya pada ponsel. Pastikan musik tidak menghalangi tombol peta atau RSVP.'] },
    ],
  },
  {
    slug: 'cara-membuat-undangan-digital-aksesibel', title: 'Membuat Undangan Digital yang Nyaman untuk Berbagai Tamu', description: 'Perhatikan kontras, ukuran teks, navigasi, dan alternatif akses agar informasi mudah dipahami.', category: 'Undangan digital', image: '/images/invitations/inv-14.jpg', imageAlt: 'Inspirasi tata visual undangan pernikahan',
    sections: [
      { heading: 'Buat konten mudah dibaca', paragraphs: ['Gunakan kontras yang cukup antara teks dan latar serta ukuran huruf yang nyaman di layar kecil. Batasi huruf dekoratif untuk aksen dan pilih kalimat yang jelas.', 'Jangan menaruh informasi penting hanya di dalam gambar. Tulis nama acara, tanggal, alamat, dan petunjuk dalam teks yang bisa dibaca langsung.'] },
      { heading: 'Permudah navigasi', paragraphs: ['Gunakan tombol dengan label yang menjelaskan tujuannya, misalnya “Buka peta” atau “Konfirmasi kehadiran”. Pastikan area tombol cukup mudah disentuh.', 'Uji halaman dengan pembesaran layar dan tanpa suara. Minta tamu dari kelompok usia berbeda mencoba menemukan jadwal dan lokasi.'] },
    ],
  },
  {
    slug: 'persiapan-photobooth-ulang-tahun-anak', title: 'Persiapan Photobooth untuk Pesta Ulang Tahun Anak', description: 'Rancang area foto yang menyenangkan, sederhana, dan nyaman untuk anak serta pendampingnya.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman-teman berfoto bersama',
    sections: [
      { heading: 'Buat area foto aman dan mudah dijangkau', paragraphs: ['Gunakan dekorasi yang kokoh dan jauhkan kabel dari jalur bermain. Sesuaikan tinggi properti dengan anak, tetapi pastikan tidak ada benda kecil atau tajam yang mudah terlepas.', 'Tempatkan area foto dekat pengawasan orang dewasa dan sisakan ruang untuk pendamping. Beri anak kesempatan memilih apakah ingin ikut berfoto.'] },
      { heading: 'Pilih tema yang tidak terlalu ramai', paragraphs: ['Gunakan warna atau karakter yang disukai anak pada bingkai, lalu sisakan ruang cukup luas untuk wajah. Properti sederhana seperti topi ringan atau papan ucapan bisa menjadi pilihan.', 'Uji pencahayaan sebelum tamu datang dan hindari lampu yang menyilaukan. Siapkan cara menyimpan foto yang mudah dipahami orang tua.'] },
    ],
  },
  {
    slug: 'panduan-foto-grup-banyak-orang', title: 'Cara Mengatur Foto Grup agar Semua Wajah Terlihat', description: 'Atur posisi, jarak kamera, dan arahan singkat untuk foto kelompok yang rapi di acara.', category: 'Tips foto', image: '/images/friends-photo-booth.jpg', imageAlt: 'Sekelompok teman berpose untuk foto',
    sections: [
      { heading: 'Atur susunan berdasarkan tinggi', paragraphs: ['Tempatkan orang dalam beberapa baris atau gunakan kursi untuk membuat susunan bertingkat. Pastikan orang di belakang tidak tertutup dan tidak berdiri terlalu jauh dari kelompok.', 'Minta semua orang mendekat sedikit ke tengah tanpa menutupi wajah. Periksa pratinjau dari tepi ke tepi sebelum hitung mundur dimulai.'] },
      { heading: 'Gunakan arahan yang singkat', paragraphs: ['Tentukan satu orang untuk memberi instruksi agar kelompok tidak menerima banyak arahan sekaligus. Minta semua melihat kamera dan tahan posisi sejenak.', 'Ambil satu foto percobaan, cek apakah wajah di pinggir masuk bingkai, lalu sesuaikan jarak perangkat. Untuk kelompok besar, beberapa foto berturut-turut membantu menangkap ekspresi terbaik.'] },
    ],
  },
  {
    slug: 'memilih-latar-belakang-photobooth', title: 'Memilih Latar Belakang Photobooth yang Tepat', description: 'Gunakan latar yang mendukung tema acara dan menjaga subjek tetap menjadi fokus foto.', category: 'Tips foto', image: '/images/referensi-kamera.jpeg', imageAlt: 'Perlengkapan fotografi untuk acara',
    sections: [
      { heading: 'Sesuaikan dengan ruang dan pakaian', paragraphs: ['Pilih latar yang tidak bertabrakan dengan warna pakaian atau dekorasi utama. Warna netral sering membantu wajah dan busana tetap menonjol.', 'Perhatikan ukuran area dan jarak kamera. Latar yang terlalu sempit dapat membuat kelompok besar sulit masuk, sementara pola ramai bisa mengalihkan perhatian.'] },
      { heading: 'Cek pantulan dan pencahayaan', paragraphs: ['Bahan mengilap dapat memantulkan lampu atau menampilkan bayangan kamera. Ambil foto uji dari posisi tamu berdiri untuk menemukan pantulan yang mengganggu.', 'Pastikan latar terpasang stabil dan tidak menghalangi akses. Jika memakai dekorasi venue, tanyakan kepada pengelola sebelum memindahkan atau menempelkannya.'] },
    ],
  },
  {
    slug: 'cara-membagikan-foto-acara-dengan-tamu', title: 'Cara Membagikan Foto Acara kepada Tamu', description: 'Pilih kanal berbagi yang praktis, jelaskan aksesnya, dan hormati privasi orang dalam foto.', category: 'Photobooth', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Kenangan dari acara pernikahan',
    sections: [
      { heading: 'Pilih cara akses yang mudah', paragraphs: ['Tentukan apakah foto diunduh langsung, dibagikan melalui tautan, atau dikirim ke album bersama. Berikan instruksi ringkas dan uji tautan dari ponsel yang berbeda.', 'Jika menggunakan album, atur siapa yang boleh melihat dan mengunggah. Beri tahu tamu bila tautan memiliki batas waktu atau membutuhkan akun tertentu.'] },
      { heading: 'Minta persetujuan untuk publikasi', paragraphs: ['Foto untuk kenangan pribadi belum tentu boleh digunakan untuk promosi. Minta izin sebelum mengunggah foto tamu ke akun publik atau materi pemasaran.', 'Sediakan cara menghubungi pengelola bila seseorang ingin fotonya dihapus. Tinjau isi album secara berkala dan hapus unggahan yang tidak sesuai.'] },
    ],
  },
  {
    slug: 'rencana-cadangan-teknis-photobooth', title: 'Rencana Cadangan Teknis untuk Photobooth Acara', description: 'Siapkan langkah sederhana saat kamera, jaringan, atau perangkat tidak bekerja sesuai rencana.', category: 'Photobooth', image: '/images/referensi-kamera.jpeg', imageAlt: 'Kamera yang digunakan untuk mengambil foto',
    sections: [
      { heading: 'Uji perangkat dan koneksi lebih awal', paragraphs: ['Coba kamera, browser, tombol unduh, dan jaringan di lokasi acara. Catat langkah pemulihan dasar seperti memuat ulang halaman atau mengganti perangkat.', 'Pastikan perangkat terisi daya dan tersedia stopkontak yang aman bila diperlukan. Simpan tautan akses dan petunjuk di tempat yang mudah ditemukan panitia.'] },
      { heading: 'Tentukan alternatif yang masuk akal', paragraphs: ['Jika koneksi melemah, siapkan opsi berbagi tautan melalui jaringan seluler atau jalur akses lain yang disetujui venue. Hindari menjanjikan fitur yang belum diuji.', 'Tunjuk satu petugas untuk menangani kendala dan memberi kabar kepada tamu. Jika photobooth tidak bisa digunakan sementara, arahkan tamu ke area foto alternatif.'] },
    ],
  },
  {
    slug: 'panduan-mengatur-rsvp-keluarga', title: 'Mengatur Konfirmasi Kehadiran Keluarga dengan Sopan', description: 'Susun pertanyaan RSVP dan tindak lanjut yang jelas tanpa membuat tamu merasa tertekan.', category: 'Undangan digital', image: '/images/invitations/inv-15.jpg', imageAlt: 'Suasana perayaan pernikahan',
    sections: [
      { heading: 'Tanyakan informasi yang diperlukan', paragraphs: ['Cukup minta nama, jumlah orang yang hadir, dan jawaban kehadiran bila itu membantu perencanaan. Jelaskan batas waktu dan siapa yang dapat dihubungi jika tamu perlu mengubah jawaban.', 'Untuk keluarga yang tidak nyaman mengisi formulir, sediakan pilihan menjawab melalui telepon atau pesan. Pastikan semua jawaban masuk ke catatan yang sama.'] },
      { heading: 'Lakukan tindak lanjut dengan ramah', paragraphs: ['Kirim pengingat singkat hanya kepada orang yang belum menjawab dan beri waktu untuk merespons. Hindari menambahkan penerima ke grup tanpa persetujuan.', 'Gunakan data RSVP untuk kebutuhan acara saja. Batasi akses daftar kepada panitia yang perlu mengatur tempat duduk atau konsumsi.'] },
    ],
  },
  {
    slug: 'ide-souvenir-foto-untuk-tamu', title: 'Ide Kenang-Kenangan Foto untuk Tamu Acara', description: 'Jadikan foto sebagai kenangan sederhana yang mudah dibawa pulang dan dibagikan secara sukarela.', category: 'Inspirasi', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman merayakan momen bersama',
    sections: [
      { heading: 'Pilih bentuk kenangan sesuai acara', paragraphs: ['Foto digital berbingkai dapat langsung disimpan, sedangkan cetakan kecil cocok dibawa pulang jika tersedia fasilitas cetak. Sesuaikan pilihan dengan durasi, jumlah tamu, dan anggaran.', 'Sertakan nama atau tanggal secara proporsional agar foto tetap menjadi pusat perhatian. Pastikan teks terbaca tetapi tidak menutupi wajah.'] },
      { heading: 'Beri pilihan kepada tamu', paragraphs: ['Tidak semua orang ingin difoto atau menerima cetakan. Sampaikan bahwa partisipasi bersifat sukarela dan tunjukkan cara mengambil hasil tanpa harus membagikannya di media sosial.', 'Untuk foto kelompok, minta persetujuan sebelum mengirim salinan ke anggota lain. Pilihan yang jelas membuat kenang-kenangan terasa lebih nyaman.'] },
    ],
  },
  {
    slug: 'menyusun-timeline-persiapan-undangan', title: 'Timeline Menyiapkan Undangan Digital Pernikahan', description: 'Bagi pekerjaan mengumpulkan materi, memeriksa isi, dan mengirim undangan dalam beberapa tahap.', category: 'Persiapan acara', image: '/images/invitations/inv-10.jpg', imageAlt: 'Detail suasana pernikahan',
    sections: [
      { heading: 'Kumpulkan materi dan informasi', paragraphs: ['Mulai dengan nama, jadwal, alamat, kontak, foto, dan daftar tautan yang akan dipakai. Konfirmasi detail acara dengan keluarga serta venue sebelum memasukkannya ke undangan.', 'Tentukan siapa yang mengumpulkan foto dan siapa yang memeriksa teks. Simpan versi final pada satu tempat agar tidak ada beberapa salinan yang berbeda.'] },
      { heading: 'Sisihkan waktu untuk uji coba', paragraphs: ['Buka pratinjau dari ponsel dan komputer, lalu uji peta, RSVP, dan tombol lainnya. Minta satu orang yang belum melihat naskah memeriksa informasi penting.', 'Kirim undangan dengan jeda yang cukup sebelum hari acara. Jika ada perubahan, perbarui halaman dan beri tahu tamu melalui kanal yang sama.'] },
    ],
  },
  {
    slug: 'tips-mengambil-foto-candid-acara', title: 'Tips Mengambil Foto Candid yang Natural di Acara', description: 'Tangkap momen spontan dengan tetap menghormati ruang pribadi dan kenyamanan orang yang difoto.', category: 'Tips foto', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman menikmati suasana acara',
    sections: [
      { heading: 'Amati momen tanpa mengganggu', paragraphs: ['Perhatikan percakapan, tawa, dan interaksi yang berlangsung alami. Gunakan jarak yang tidak membuat orang merasa diawasi dan hindari menghalangi kegiatan acara.', 'Ambil beberapa foto dengan tenang, lalu pilih hasil yang menunjukkan suasana tanpa mempermalukan siapa pun. Tidak semua momen perlu direkam.'] },
      { heading: 'Hormati izin dan konteks', paragraphs: ['Tanyakan sebelum membagikan foto candid ke akun publik, terutama jika orang terlihat jelas atau foto diambil pada momen pribadi.', 'Jika seseorang tidak nyaman difoto, hormati permintaannya dan jangan meneruskan gambar. Tuan rumah dapat menyampaikan aturan dokumentasi kepada fotografer dan tamu.'] },
    ],
  },
  {
    slug: 'cara-membuat-brief-desain-undangan', title: 'Cara Membuat Brief Desain Undangan Digital', description: 'Sampaikan kebutuhan, suasana, dan materi dengan jelas agar desain undangan sesuai acara.', category: 'Undangan digital', image: '/images/invitations/inv-09.jpg', imageAlt: 'Inspirasi desain undangan pernikahan',
    sections: [
      { heading: 'Jelaskan kebutuhan utama', paragraphs: ['Tulis jenis acara, siapa tamunya, informasi yang wajib tampil, serta fitur yang dibutuhkan seperti peta atau RSVP. Sertakan contoh desain sebagai referensi suasana, bukan untuk disalin persis.', 'Tentukan warna, gaya visual, dan hal yang perlu dihindari. Prioritaskan keterbacaan dan kemudahan penggunaan di ponsel.'] },
      { heading: 'Siapkan materi dalam satu paket', paragraphs: ['Kirim ejaan nama yang sudah disetujui, jadwal, alamat, foto berkualitas, serta tautan resmi. Tandai foto mana yang boleh digunakan dan siapa pemiliknya.', 'Minta waktu untuk memeriksa draf di beberapa ukuran layar. Kumpulkan koreksi dalam satu daftar agar revisi tidak terpecah di banyak percakapan.'] },
    ],
  },
  {
    slug: 'panduan-menggunakan-properti-photobooth', title: 'Menggunakan Properti Photobooth agar Foto Tetap Rapi', description: 'Pilih aksesori yang nyaman, aman, dan tidak menutupi wajah atau detail penting pada foto.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman berpose di photobooth',
    sections: [
      { heading: 'Pilih properti yang sesuai tema', paragraphs: ['Batasi pilihan pada beberapa aksesori yang mudah dikenali seperti papan ucapan atau topi ringan. Warna dan bentuknya dapat mengikuti tema tanpa membuat latar terlalu ramai.', 'Pastikan properti bersih, tidak tajam, dan nyaman digunakan. Hindari aksesori yang menghalangi pandangan atau berpotensi mengganggu pakaian tamu.'] },
      { heading: 'Atur dan rawat selama acara', paragraphs: ['Tempatkan properti pada wadah yang mudah dijangkau dan tidak menghambat antrean. Tunjuk petugas untuk merapikan serta membersihkannya secara berkala.', 'Beri pilihan untuk berfoto tanpa properti. Cek hasil pratinjau agar aksesori tidak menutupi wajah atau teks bingkai.'] },
    ],
  },
  {
    slug: 'menyiapkan-area-foto-di-rumah', title: 'Menyiapkan Area Foto Sederhana di Rumah', description: 'Manfaatkan ruang, cahaya, dan latar yang ada untuk membuat sudut foto keluarga yang nyaman.', category: 'Tips foto', image: '/images/referensi-kamera.jpeg', imageAlt: 'Kamera untuk mengambil foto di rumah',
    sections: [
      { heading: 'Pilih titik dengan cahaya lembut', paragraphs: ['Cari area dekat jendela pada waktu cahaya tidak terlalu keras. Arahkan wajah ke sumber cahaya dan hindari jendela terang tepat di belakang subjek.', 'Rapikan latar secukupnya dan pindahkan benda yang mengganggu. Tidak perlu dekorasi berlebihan jika ruang sudah memiliki warna atau tekstur yang menarik.'] },
      { heading: 'Atur kamera dan ruang gerak', paragraphs: ['Letakkan ponsel pada penyangga yang stabil setinggi mata. Beri ruang agar seluruh anggota keluarga dapat masuk dan pastikan jalur di sekitar kamera aman.', 'Ambil foto uji untuk memeriksa fokus serta komposisi. Beri anak atau anggota keluarga waktu untuk menyesuaikan diri sebelum mulai memotret.'] },
    ],
  },
  {
    slug: 'membuat-undangan-digital-untuk-acara-keluarga', title: 'Membuat Undangan Digital untuk Acara Keluarga', description: 'Sesuaikan informasi dan gaya undangan untuk ulang tahun, syukuran, reuni, atau pertemuan keluarga.', category: 'Undangan digital', image: '/images/invitations/inv-07.jpg', imageAlt: 'Keluarga berkumpul dalam sebuah perayaan',
    sections: [
      { heading: 'Tampilkan detail yang dibutuhkan', paragraphs: ['Cantumkan nama acara, tanggal, waktu, alamat, kontak, dan petunjuk khusus seperti akses masuk atau pakaian. Untuk acara informal, bahasa yang hangat dan langsung biasanya mudah dipahami.', 'Jika acara berlangsung beberapa sesi, tulis jadwal setiap bagian secara terpisah. Gunakan peta yang sudah diuji untuk membantu tamu dari luar daerah.'] },
      { heading: 'Pilih cara berbagi yang sesuai', paragraphs: ['Kirim tautan dengan pesan personal dan ringkasan informasi utama. Pastikan penerima dapat membuka halaman tanpa membuat akun atau memasang aplikasi tambahan.', 'Periksa kembali perubahan jadwal sebelum hari acara. Sampaikan pembaruan langsung kepada tamu yang sudah menerima undangan sebelumnya.'] },
    ],
  },
  {
    slug: 'mengelola-foto-setelah-acara', title: 'Mengelola dan Memilih Foto Setelah Acara', description: 'Rapikan hasil foto, buat salinan cadangan, dan bagikan pilihan terbaik dengan persetujuan.', category: 'Tips foto', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Momen perayaan yang diabadikan',
    sections: [
      { heading: 'Pilih dan simpan salinan', paragraphs: ['Pindahkan foto ke folder khusus dan buat salinan cadangan sebelum menghapus berkas dari perangkat kamera. Kelompokkan berdasarkan sesi atau waktu agar lebih mudah dicari.', 'Pilih foto yang fokus dan memiliki ekspresi baik, tetapi simpan beberapa momen spontan yang bermakna. Hindari mengedit berlebihan hingga warna kulit atau suasana berubah jauh.'] },
      { heading: 'Bagikan dengan konteks yang jelas', paragraphs: ['Pilih kanal berbagi yang sesuai dengan audiens dan jelaskan siapa yang dapat mengaksesnya. Hindari mengunggah foto anak atau tamu ke ruang publik tanpa persetujuan yang diperlukan.', 'Hapus foto yang salah kirim atau tidak disetujui. Jika membagikan tautan album, tinjau kembali pengaturan aksesnya setelah kebutuhan acara selesai.'] },
    ],
  },
  {
    slug: 'tips-memilih-warna-frame-photobooth', title: 'Memilih Warna Frame Photobooth yang Serasi', description: 'Padukan warna bingkai dengan tema acara sambil menjaga teks dan wajah tetap terlihat jelas.', category: 'Inspirasi', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Inspirasi warna untuk bingkai foto acara',
    sections: [
      { heading: 'Tentukan warna utama dan aksen', paragraphs: ['Ambil satu atau dua warna dari undangan atau dekorasi sebagai dasar. Warna aksen dapat dipakai untuk nama dan tanggal tanpa membuat bingkai terasa penuh.', 'Pertimbangkan variasi warna pakaian tamu. Latar yang terlalu dekat dengan warna busana dapat membuat subjek kurang menonjol.'] },
      { heading: 'Uji kontras pada hasil foto', paragraphs: ['Periksa keterbacaan teks pada layar ponsel dan foto yang sudah diunduh. Pastikan elemen bingkai tidak menutupi wajah pada posisi foto yang berbeda.', 'Coba desain dengan beberapa foto uji, termasuk foto kelompok. Minta masukan dari orang lain sebelum membagikan frame ke tamu.'] },
    ],
  },
  {
    slug: 'panduan-foto-pernikahan-untuk-tamu', title: 'Panduan Sederhana untuk Tamu yang Ingin Memotret Pernikahan', description: 'Abadikan momen penting dengan sopan tanpa menghalangi prosesi atau fotografer resmi.', category: 'Tips foto', image: '/images/invitations/inv-11.jpg', imageAlt: 'Prosesi pernikahan bersama keluarga',
    sections: [
      { heading: 'Perhatikan jalannya acara', paragraphs: ['Ikuti arahan panitia dan hindari berdiri di lorong atau di depan fotografer saat prosesi berlangsung. Simpan ponsel ketika pasangan atau pembawa acara meminta perhatian penuh.', 'Gunakan mode senyap agar suara kamera tidak mengganggu. Ambil foto dari tempat yang tidak menghalangi pandangan tamu lain.'] },
      { heading: 'Minta izin sebelum mengunggah', paragraphs: ['Tanyakan kepada pasangan atau tuan rumah sebelum membagikan foto yang belum diumumkan. Pertimbangkan juga privasi anak dan tamu lain yang terlihat di latar.', 'Jika pasangan meminta tamu menikmati acara tanpa merekam, hormati permintaan tersebut. Foto yang baik tetap perlu mempertimbangkan kenyamanan semua orang.'] },
    ],
  },
  {
    slug: 'cara-mengatur-antrean-photobooth', title: 'Mengatur Antrean Photobooth agar Tamu Nyaman', description: 'Kurangi penumpukan dengan alur yang jelas, sesi singkat, dan bantuan petugas acara.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman menunggu giliran berfoto',
    sections: [
      { heading: 'Buat alur yang mudah dipahami', paragraphs: ['Letakkan petunjuk mulai dari titik antre, cara berfoto, hingga cara mengambil hasil. Sisakan jalur masuk dan keluar yang berbeda jika ruang memungkinkan.', 'Sediakan perkiraan durasi singkat per kelompok dan minta satu orang membantu mengarahkan giliran. Hindari sistem yang memerlukan terlalu banyak langkah.'] },
      { heading: 'Sesuaikan dengan jumlah tamu', paragraphs: ['Pada acara ramai, sediakan beberapa jam operasional atau ajak tamu datang pada waktu yang lebih lengang. Beri tahu bahwa mereka dapat kembali setelah prosesi utama.', 'Pantau antrean dan kenyamanan orang yang menunggu. Pastikan area tidak menutup akses kursi roda, pintu keluar, atau layanan venue.'] },
    ],
  },
  {
    slug: 'mengirim-undangan-digital-ke-tamu-luar-kota', title: 'Mengirim Undangan Digital kepada Tamu Luar Kota', description: 'Bantu kerabat merencanakan perjalanan dengan jadwal, alamat, dan informasi praktis yang lengkap.', category: 'Undangan digital', image: '/images/invitations/inv-10.jpg', imageAlt: 'Persiapan perayaan pernikahan',
    sections: [
      { heading: 'Sertakan informasi perjalanan', paragraphs: ['Cantumkan alamat lengkap, tautan peta, waktu acara, serta patokan atau gerbang masuk. Jika ada beberapa lokasi, jelaskan jarak dan urutannya.', 'Bagikan informasi penginapan atau transportasi hanya jika sudah dikonfirmasi. Hindari memberi rekomendasi yang belum diperiksa atau mengesankan bahwa tamu wajib mengikutinya.'] },
      { heading: 'Kirim lebih awal dan beri jalur bertanya', paragraphs: ['Kirim undangan dengan waktu yang membantu tamu mengatur perjalanan. Sertakan kontak keluarga atau panitia yang dapat menjawab pertanyaan praktis.', 'Bila ada perubahan jadwal atau lokasi, beri tahu tamu luar kota secara langsung. Pastikan informasi terbaru mudah ditemukan di halaman undangan.'] },
    ],
  },
  {
    slug: 'ide-foto-reuni-sekolah', title: 'Ide Foto Reuni Sekolah yang Seru dan Teratur', description: 'Gabungkan foto kelompok, kenangan kelas, dan potret spontan agar reuni punya dokumentasi yang beragam.', category: 'Inspirasi', image: '/images/friends-photo-booth.jpg', imageAlt: 'Sekelompok teman berkumpul untuk foto',
    sections: [
      { heading: 'Rencanakan kelompok foto', paragraphs: ['Mulai dari foto semua peserta, lalu lanjutkan per kelas, angkatan, atau kelompok kecil. Tunjuk satu orang yang membantu memanggil peserta supaya waktu tidak habis untuk mencari teman.', 'Pilih latar yang cukup luas dan terang. Siapkan daftar urutan sederhana dan sampaikan jadwal foto melalui kanal reuni.'] },
      { heading: 'Tambahkan momen yang spontan', paragraphs: ['Sediakan waktu untuk foto bebas atau photobooth dengan properti bertema sekolah. Biarkan peserta memilih pose yang nyaman dan tidak memaksa siapa pun tampil.', 'Sebelum membagikan album, sepakati siapa yang dapat mengaksesnya. Minta izin sebelum mengunggah foto peserta ke akun publik atau grup di luar acara.'] },
    ],
  },
  {
    slug: 'daftar-periksa-hari-acara-photobooth', title: 'Daftar Periksa Photobooth pada Hari Acara', description: 'Gunakan pemeriksaan singkat untuk memastikan area, perangkat, dan petunjuk siap sebelum tamu datang.', category: 'Photobooth', image: '/images/referensi-kamera.jpeg', imageAlt: 'Peralatan kamera sebelum acara',
    sections: [
      { heading: 'Periksa area dan perangkat', paragraphs: ['Pastikan lokasi tidak menghalangi jalur, cahaya cukup, dan dekorasi stabil. Uji kamera, tautan, QR, hasil foto, serta proses penyimpanan menggunakan perangkat yang tersedia.', 'Periksa ejaan nama dan tanggal di frame. Isi daya perangkat dan pastikan kabel tidak melintang pada jalur tamu.'] },
      { heading: 'Pastikan petugas tahu alurnya', paragraphs: ['Tunjuk orang yang dapat membantu tamu serta memahami langkah dasar saat kamera atau koneksi bermasalah. Simpan kontak penanggung jawab venue.', 'Letakkan instruksi dan tautan cadangan di tempat yang mudah ditemukan. Lakukan satu sesi uji terakhir sebelum area dibuka untuk tamu.'] },
    ],
  },
  {
    slug: 'menentukan-jam-pengiriman-undangan', title: 'Kapan Waktu yang Tepat Mengirim Undangan Digital?', description: 'Tentukan jadwal pengiriman berdasarkan kebutuhan tamu, rangkaian acara, dan waktu persiapan.', category: 'Persiapan acara', image: '/images/invitations/inv-12.jpg', imageAlt: 'Detail undangan pernikahan digital',
    sections: [
      { heading: 'Berikan waktu untuk membuat rencana', paragraphs: ['Pertimbangkan jarak perjalanan, kebutuhan cuti, dan kebiasaan keluarga saat menentukan waktu pengiriman. Tamu dari luar kota biasanya perlu informasi lebih awal untuk menyusun perjalanan.', 'Pastikan detail penting sudah dikonfirmasi sebelum tautan dibagikan. Undangan yang dikirim terlalu dini dengan informasi sementara dapat menimbulkan kebingungan.'] },
      { heading: 'Kirim pengingat dengan bijak', paragraphs: ['Jika perlu, kirim pengingat singkat menjelang batas RSVP atau hari acara. Sertakan tautan yang sama dan informasi inti agar tamu tidak perlu mencari pesan lama.', 'Jangan mengirim pesan berulang dalam waktu dekat. Untuk perubahan mendadak, hubungi tamu yang terdampak secara langsung dan jelaskan detail terbaru.'] },
    ],
  },
].filter((_, index) => index < 25 || index >= 32);
