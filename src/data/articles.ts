export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  image?: ArticleImage;
  tip?: string;
}

export interface ArticleDeviceNote {
  platform: string;
  notes: string[];
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface Article {
  slug: string; title: string; description: string; category: string; image: string; imageAlt: string;
  sections: ArticleSection[];
  takeaways?: string[];
  devices?: ArticleDeviceNote[];
  faq?: ArticleFaq[];
  author?: string;
  reviewer?: string;
  updated?: string;
  source?: { label: string; url: string };
}
export const articleDate = '2026-11-06';
const allArticles: Article[] = [
  {
    slug: 'panduan-photobooth-digital-untuk-acara-2026', title: 'Panduan Photobooth Digital untuk Acara di 2026', description: 'Rencanakan photobooth digital yang mudah diakses, nyaman dipakai, dan menghargai privasi tamu.', category: 'Photobooth', image: '/images/articles/article-1531058020387.jpg', imageAlt: 'Suasana acara dengan area foto untuk tamu', author: 'Tim Ruang Kilas', updated: '2026-11-06',
    takeaways: ['Pilih alur yang mudah dibuka dari ponsel.', 'Uji QR, kamera, dan bingkai di lokasi acara.', 'Jelaskan cara menyimpan foto dan aturan berbagi.'],
    sections: [
      { heading: 'Tentukan pengalaman yang dibutuhkan', paragraphs: ['Mulai dari jenis acara, jumlah tamu, dan perangkat yang tersedia. Photobooth digital lewat ponsel cocok untuk tamu yang ingin membuat foto sendiri, sementara area foto dengan perangkat khusus dapat membantu tamu yang tidak membawa ponsel.', 'Tentukan apakah foto hanya disimpan oleh masing-masing tamu atau akan dikumpulkan untuk album bersama. Keputusan ini memengaruhi petunjuk, alur akses, dan persetujuan yang perlu disampaikan.'] },
      { heading: 'Siapkan akses dan tampilan', paragraphs: ['Gunakan tautan yang mudah dibuka dan kode QR yang cukup besar. Pastikan nama acara, tanggal, dan elemen desain pada bingkai benar serta tidak menutupi wajah.', 'Coba seluruh alur dari beberapa ponsel: pindai QR, izinkan kamera, ambil foto, lalu simpan hasilnya. Letakkan petunjuk singkat dekat area foto dan sediakan panitia untuk membantu.'] },
      { heading: 'Jaga kenyamanan dan privasi', paragraphs: ['Jelaskan apakah foto diproses di perangkat atau dikirim ke layanan penyimpanan. Beri tamu pilihan untuk tidak ikut serta dan minta izin terpisah sebelum foto dipublikasikan.', 'Setelah acara, hapus salinan yang tidak lagi diperlukan dan batasi akses album sesuai tujuan yang sudah disampaikan.'] },
    ], faq: [{ question: 'Kapan photobooth digital perlu diuji?', answer: 'Uji sebelum acara dan ulangi di lokasi setelah QR, jaringan, pencahayaan, serta bingkai final siap.' }, { question: 'Apakah semua foto harus dikumpulkan panitia?', answer: 'Tidak. Jelaskan sejak awal jika foto hanya tersimpan di perangkat tamu atau jika ada album bersama.' }],
  },
  {
    slug: 'cara-membuat-qr-photobooth-yang-mudah-dipindai', title: 'Cara Membuat QR Photobooth yang Mudah Dipindai', description: 'Atur ukuran, kontras, tautan, dan posisi kode QR agar tamu cepat membuka photobooth.', category: 'Photobooth', image: '/images/articles/article-1492684223066.jpg', imageAlt: 'Tamu berkumpul di sebuah acara', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Gunakan tautan yang benar', paragraphs: ['Salin alamat photobooth dari halaman yang sudah diuji. Pindai kode QR hasil desain dengan beberapa ponsel untuk memastikan tautan terbuka tanpa salah ketik atau halaman perantara yang membingungkan.', 'Jika alamat berubah, buat ulang kode QR dan ganti seluruh materi cetak. Jangan mengandalkan kode lama yang mungkin masih mengarah ke halaman sebelumnya.'] }, { heading: 'Buat kode terlihat jelas', paragraphs: ['Gunakan warna gelap pada latar terang, sisakan ruang kosong di sekeliling kode, dan hindari menaruh ornamen di atas pola QR. Cetak dengan ukuran yang sesuai jarak pemindaian dan uji hasil cetak sebenarnya.', 'Letakkan petunjuk “Pindai untuk mulai berfoto” di dekat kode. Tempatkan QR setinggi mata atau di meja yang tidak tertutup dekorasi.'] }, { heading: 'Siapkan cara akses cadangan', paragraphs: ['Cantumkan tautan singkat sebagai alternatif jika kamera tamu tidak dapat memindai QR. Panitia juga dapat membantu membuka tautan, tetapi jangan meminta kata sandi atau data pribadi yang tidak diperlukan.'] }],
  },
  {
    slug: 'privasi-foto-tamu-di-acara-digital', title: 'Privasi Foto Tamu di Acara: Hal yang Perlu Dijelaskan', description: 'Buat aturan sederhana tentang pengambilan, penyimpanan, album, dan publikasi foto acara.', category: 'Persiapan acara', image: '/images/articles/article-1519741497674.jpg', imageAlt: 'Pasangan dalam suasana perayaan', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Jelaskan alur foto dengan terbuka', paragraphs: ['Sebelum tamu mulai berfoto, jelaskan apakah hasil hanya tersimpan di ponsel mereka, dikirim ke album, atau digunakan untuk dokumentasi. Gunakan kalimat singkat yang mudah ditemukan di dekat area QR.', 'Jangan menganggap keikutsertaan berarti izin untuk publikasi. Beri pilihan yang jelas bagi tamu yang ingin berfoto untuk kenangan pribadi tetapi tidak ingin fotonya muncul di media sosial.'] }, { heading: 'Minta izin sebelum membagikan', paragraphs: ['Minta persetujuan orang yang terlihat jelas dalam foto sebelum mengunggahnya ke akun publik. Untuk anak-anak, ikuti kebijakan keluarga atau penyelenggara dan minta persetujuan orang tua atau wali.', 'Jika membuat album bersama, batasi akses kepada peserta yang memang membutuhkannya. Tetapkan kontak panitia untuk permintaan koreksi atau penghapusan.'] }, { heading: 'Tentukan masa simpan', paragraphs: ['Simpan foto hanya selama diperlukan untuk tujuan acara. Hapus salinan kerja dan batasi siapa yang dapat mengunduh atau meneruskan album setelah acara selesai.'] }],
  },
  {
    slug: 'checklist-photobooth-pernikahan-hybrid', title: 'Checklist Photobooth Pernikahan: Online dan Area Foto', description: 'Gabungkan photobooth digital dan area foto fisik dengan alur yang jelas untuk tamu.', category: 'Photobooth', image: '/images/wedding-ripki-hero.jpg', imageAlt: 'Area pernikahan sebagai inspirasi photobooth', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Sebelum hari pernikahan', paragraphs: ['Tentukan tujuan masing-masing area. Photobooth online dapat memberi akses dari ponsel tamu, sementara area foto khusus menyediakan latar dan pencahayaan yang konsisten.', 'Siapkan bingkai dengan nama dan tanggal yang benar, uji tautan serta QR, lalu tetapkan panitia yang bertanggung jawab atas perangkat, petunjuk, dan bantuan tamu.'] }, { heading: 'Atur alur di lokasi', paragraphs: ['Tempatkan area foto agar tidak menghalangi pintu masuk, jalur katering, atau akses tamu. Tambahkan lampu lembut dan tandai titik berdiri agar wajah tidak terlalu dekat dengan latar.', 'Sediakan QR di meja penerima tamu dan area foto. Uji jaringan di titik tersebut dan siapkan tautan tertulis jika pemindaian bermasalah.'] }, { heading: 'Setelah acara', paragraphs: ['Periksa foto yang terkumpul, pilih hanya yang disetujui untuk album bersama, dan bagikan tautan dengan akses terbatas. Sampaikan berapa lama album akan tersedia.'] }],
  },
  {
    slug: 'ide-photobooth-gathering-kantor', title: 'Ide Photobooth untuk Gathering Kantor yang Inklusif', description: 'Buat sudut foto kantor yang santai, mudah diikuti, dan tidak memaksa karyawan tampil di kamera.', category: 'Inspirasi', image: '/images/articles/article-1530103862676.jpg', imageAlt: 'Dekorasi acara yang meriah', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Pilih tema yang ramah semua orang', paragraphs: ['Gunakan warna atau tema yang terhubung dengan acara, bukan lelucon internal yang hanya dipahami sebagian tim. Sediakan bingkai netral agar setiap peserta nyaman menggunakannya.', 'Properti foto bersifat pilihan. Hindari atribut yang menyinggung identitas atau membuat seseorang merasa harus ikut berpose.'] }, { heading: 'Buat partisipasi fleksibel', paragraphs: ['Sediakan pilihan berfoto sendiri, bersama rekan, atau tidak berfoto. Letakkan area di tempat yang mudah ditemukan tanpa menjadikannya jalur wajib.', 'Jika memakai photobooth online, uji akses dari ponsel kantor dan pribadi. Beri petunjuk singkat serta bantuan tanpa meminta peserta memasang aplikasi tambahan.'] }, { heading: 'Atur penggunaan foto', paragraphs: ['Tentukan apakah foto akan dibagikan ke kanal internal atau publik. Minta persetujuan sebelum publikasi dan berikan cara untuk meminta foto dihapus.'] }],
  },
  {
    slug: 'pencahayaan-photobooth-ponsel-di-ruangan-kecil', title: 'Pencahayaan Photobooth Ponsel di Ruangan Kecil', description: 'Atur posisi lampu dan kamera agar foto di ruang terbatas tetap terang tanpa bayangan keras.', category: 'Tips foto', image: '/images/referensi-kamera.jpeg', imageAlt: 'Kamera untuk mengambil foto di dalam ruangan', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Tempatkan cahaya di depan subjek', paragraphs: ['Di ruangan kecil, mulai dengan satu sumber cahaya lembut di depan atau sedikit menyamping dari wajah. Hindari lampu tepat di belakang karena kamera dapat membuat wajah tampak gelap.', 'Jika cahaya terlalu keras, pantulkan ke dinding terang atau gunakan diffuser yang aman. Jangan menutup lampu yang panas dengan kain.'] }, { heading: 'Atur jarak dan sudut', paragraphs: ['Letakkan kamera setinggi mata dan mundurkan perangkat secukupnya agar semua orang masuk bingkai. Jarak antara subjek dan dinding membantu mengurangi bayangan di latar.', 'Ambil foto uji sebelum tamu datang. Periksa wajah di bagian tepi, pantulan pada kacamata, dan apakah dekorasi membuat latar terlalu ramai.'] }, { heading: 'Gunakan perlengkapan sederhana', paragraphs: ['Penyangga ponsel atau tumpukan buku yang kokoh membantu menjaga kamera tetap stabil. Kunci posisi perangkat setelah uji agar komposisi tidak berubah selama acara.'] }],
  },
  {
    slug: 'rundown-area-foto-untuk-acara-keluarga', title: 'Rundown Area Foto untuk Acara Keluarga', description: 'Susun giliran foto keluarga agar momen penting tercatat tanpa membuat tamu menunggu lama.', category: 'Persiapan acara', image: '/images/articles/article-1511285560929.jpg', imageAlt: 'Suasana perayaan bersama keluarga', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Buat daftar kelompok lebih awal', paragraphs: ['Catat kelompok yang ingin berfoto, misalnya keluarga inti, keluarga besar, lalu teman dekat. Tunjuk satu anggota keluarga untuk memanggil kelompok berikutnya agar fotografer tidak perlu mencari tamu satu per satu.', 'Sisakan waktu untuk momen spontan dan perubahan jadwal. Daftar ini menjadi panduan, bukan aturan kaku yang harus diikuti jika acara berubah.'] }, { heading: 'Pilih lokasi yang mudah dijangkau', paragraphs: ['Pilih area dengan cahaya cukup dan jalur masuk yang tidak mengganggu acara. Pastikan kursi tersedia bagi anggota keluarga yang membutuhkan dan sediakan ruang untuk kelompok besar.', 'Sampaikan urutan secara lisan atau lewat koordinator. Hindari memanggil nama atau informasi pribadi dengan pengeras suara tanpa kebutuhan.'] }, { heading: 'Beri waktu untuk foto pilihan', paragraphs: ['Setelah foto kelompok utama, buka kesempatan singkat bagi tamu yang ingin berfoto sendiri. Photobooth digital dapat menjadi pelengkap agar tamu tidak harus menunggu fotografer resmi.'] }],
  },
  {
    slug: 'cara-membagikan-album-foto-acara-dengan-aman', title: 'Cara Membagikan Album Foto Acara dengan Aman', description: 'Pilih akses album, sampaikan aturan berbagi, dan kelola foto acara setelah perayaan selesai.', category: 'Persiapan acara', image: '/images/articles/article-1527529482837.jpg', imageAlt: 'Para tamu menikmati acara bersama', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Pilih siapa yang boleh melihat', paragraphs: ['Tentukan apakah album hanya untuk keluarga, peserta acara, atau publik. Gunakan pengaturan berbagi yang sesuai dan kirim tautan melalui kanal yang tepat.', 'Sebelum membagikan, periksa nama album, isi, dan izin akses dari perangkat lain. Hindari menaruh data sensitif di judul atau keterangan foto.'] }, { heading: 'Sampaikan aturan penggunaan', paragraphs: ['Beri tahu penerima apakah mereka boleh mengunduh atau meneruskan foto. Minta persetujuan orang yang tampak jelas sebelum memublikasikan gambar ke akun publik.', 'Sediakan kontak untuk melaporkan foto yang perlu dihapus atau diperbaiki. Tanggapi permintaan tersebut melalui orang yang mengelola album.'] }, { heading: 'Tinjau akses setelah acara', paragraphs: ['Tentukan kapan tautan tidak lagi diperlukan dan cabut akses jika album sudah tidak digunakan. Simpan salinan pilihan hanya jika memang diperlukan oleh keluarga atau penyelenggara.'] }],
  },
  {
    slug: 'panduan-foto-kelompok-besar-dengan-ponsel', title: 'Panduan Foto Kelompok Besar dengan Ponsel', description: 'Atur barisan, jarak kamera, dan aba aba agar foto kelompok tetap jelas dan semua wajah terlihat.', category: 'Tips foto', image: '/images/articles/article-1511578314322.jpg', imageAlt: 'Kelompok berkumpul dalam sebuah acara', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Susun barisan bertingkat', paragraphs: ['Tempatkan orang di beberapa baris dengan jarak yang cukup. Minta barisan belakang berdiri di sela bahu barisan depan agar wajah tidak tertutup.', 'Untuk kelompok sangat besar, gunakan tangga rendah yang aman atau pilih lokasi lapang. Jangan meminta tamu berdiri di tempat yang licin atau tidak stabil.'] }, { heading: 'Atur kamera dan cahaya', paragraphs: ['Letakkan ponsel pada penyangga yang kokoh, gunakan lensa utama, dan mundurkan kamera sampai seluruh kelompok masuk. Hindari zoom digital berlebihan karena dapat mengurangi detail.', 'Pilih cahaya yang merata dan pastikan tidak ada matahari langsung yang menyilaukan sebagian kelompok. Gunakan timer agar fotografer bisa ikut masuk foto.'] }, { heading: 'Ambil beberapa jepretan', paragraphs: ['Berikan aba-aba yang jelas dan ambil beberapa foto berurutan. Minta semua orang melihat lensa yang sama dan tahan posisi sebentar sebelum mengambil foto berikutnya.', 'Periksa hasil sebelum kelompok bubar. Pastikan wajah di tepi tidak terpotong dan ambil ulang jika ada yang berkedip atau tertutup.'] }],
  },
  {
    slug: 'undangan-digital-dan-rsvp-yang-ramah-tamu', title: 'Undangan Digital dan RSVP yang Ramah Tamu', description: 'Buat konfirmasi kehadiran mudah diisi serta tetap nyaman bagi tamu dengan kebiasaan berbeda.', category: 'Undangan digital', image: '/images/invitations/inv-12.jpg', imageAlt: 'Tampilan undangan digital untuk sebuah acara', author: 'Tim Ruang Kilas', updated: '2026-11-04',
    sections: [{ heading: 'Tanyakan informasi seperlunya', paragraphs: ['Formulir RSVP sebaiknya meminta nama, jumlah tamu, dan konfirmasi kehadiran. Tambahkan pertanyaan kebutuhan makanan atau akses hanya jika penyelenggara dapat menindaklanjutinya.', 'Jelaskan batas waktu jawaban dan siapa yang dapat dihubungi jika tamu kesulitan mengisi formulir. Hindari meminta informasi pribadi yang tidak diperlukan untuk acara.'] }, { heading: 'Pastikan mudah digunakan di ponsel', paragraphs: ['Uji formulir dari layar ponsel. Label kolom harus jelas, tombol mudah ditekan, dan pesan setelah pengiriman memberi tahu bahwa jawaban berhasil diterima.', 'Jika memungkinkan, sediakan pilihan untuk menjawab lewat pesan atau telepon. Tidak semua tamu nyaman membuka tautan atau mengisi formulir daring.'] }, { heading: 'Kelola jawaban dengan tertib', paragraphs: ['Batasi akses ke daftar RSVP pada panitia yang membutuhkannya. Gunakan jawaban untuk merencanakan acara dan jangan membagikan daftar tamu ke grup yang tidak berkepentingan.'] }],
  },
  {
    slug: 'cara-menggunakan-photobooth-online', title: 'Cara Menggunakan Photobooth Online Langsung dari HP', description: 'Buat photostrip sendiri lewat browser, dari menyiapkan cahaya hingga menyimpan hasil foto.', category: 'Photobooth', image: '/images/friends-photo-booth.jpg', imageAlt: 'Teman-teman berpose bersama di photobooth',
    sections: [
      { heading: 'Siapkan kamera dan pencahayaan', paragraphs: ['Photobooth online memungkinkan kamu mengambil foto berbingkai lewat browser. Siapkan HP atau laptop dengan kamera, lalu cari tempat yang cukup terang. Cahaya dari jendela yang menghadap wajah biasanya membuat wajah terlihat lebih jelas.', 'Bersihkan lensa dan letakkan perangkat pada permukaan yang stabil. Jika berfoto bersama, sisakan ruang di tepi layar agar semua orang masuk ke dalam bingkai.'] },
      { heading: 'Ambil foto di studio', paragraphs: ['Buka Studio, pilih ukuran foto dan jumlah jepretan yang tersedia, lalu tekan Nyalakan kamera dan izinkan akses ketika browser memintanya. Pilih efek lensa dan waktu hitung mundur, kemudian ambil foto sesuai jumlah slot.', 'Jika ada pose yang ingin diulang, pilih thumbnail slot foto tersebut. Setelah semua slot terisi, lanjutkan ke Bingkai; pilih desain, lalu lanjutkan ke Filter untuk menambahkan efek warna atau stiker.'] },
      { heading: 'Simpan dan bagikan hasilnya', paragraphs: ['Pada tahap Simpan, pilih Unduh foto JPG dan periksa folder unduhan atau aplikasi Berkas. Simpan sebelum menutup halaman karena sesi foto berlangsung di browser perangkatmu. Gunakan file unduhan asli jika ingin mencetak atau membagikan hasil.', 'Jika kamera tidak muncul, periksa izin kamera di pengaturan browser dan tutup aplikasi lain yang sedang memakainya. Kembali ke studio dan pilih Coba lagi. Sebelum membagikan hasil bersama, pastikan orang lain dalam foto setuju.'] },
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
      { heading: 'Jelaskan penggunaan foto', paragraphs: ['Sampaikan apakah foto hanya untuk kenangan pribadi, album bersama, atau akan dipublikasikan. Minta persetujuan sebelum menggunakan foto tamu dalam materi promosi atau unggahan publik.', 'Hormati tamu yang memilih tidak difoto. Untuk anak-anak, minta persetujuan orang tua atau wali. Petunjuk di area foto dan bantuan petugas dapat membuat pilihan ini lebih mudah disampaikan.'] },
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
  {
    slug: 'checklist-photobooth-online-pertama-kali', title: 'Checklist Pertama Kali Menggunakan Photobooth Online', description: 'Siapkan kamera, cahaya, dan pilihan bingkai agar sesi photobooth pertamamu berjalan lancar.', category: 'Photobooth', image: '/images/articles/article-1502635385003.jpg', imageAlt: 'Kamera dan perlengkapan untuk sesi photobooth online',
    sections: [
      { heading: 'Sebelum membuka studio', paragraphs: ['Gunakan browser yang diperbarui dan buka halaman melalui koneksi aman. Saat browser meminta izin kamera, pilih izinkan, lalu pastikan tidak ada aplikasi lain yang sedang memakai kamera.', 'Letakkan perangkat pada permukaan yang stabil, bersihkan lensa, dan cari area dengan cahaya cukup. Untuk hasil yang lebih rapi, hadapkan wajah ke sumber cahaya dan rapikan latar di belakang.'] },
      { heading: 'Saat sesi berlangsung', paragraphs: ['Periksa pratinjau sebelum mengambil foto. Pastikan wajah tidak terpotong, pilih bingkai yang sesuai, lalu ikuti hitung mundur untuk setiap jepretan.', 'Setelah selesai, tinjau hasilnya dan unduh file yang diinginkan. Jika foto dibagikan ke grup, minta izin orang lain yang ikut terfoto dan simpan file di tempat yang aman.'] },
    ],
  },
  {
    slug: 'memilih-layout-photostrip-sesuai-acara', title: 'Cara Memilih Layout Photostrip Sesuai Acara', description: 'Bandingkan layout satu foto, strip vertikal, dan grid agar hasilnya sesuai kebutuhan acara.', category: 'Photobooth', image: '/images/articles/article-1531058020387.jpg', imageAlt: 'Contoh photostrip dengan beberapa susunan foto',
    sections: [
      { heading: 'Kenali bentuk layout', paragraphs: ['Layout satu foto cocok untuk potret cepat atau foto pasangan, sedangkan strip vertikal memberi ruang untuk rangkaian ekspresi. Grid dua kali dua lebih pas untuk kelompok kecil yang ingin beberapa momen dalam satu bingkai.', 'Perhatikan jumlah jepretan dan ruang untuk teks. Bingkai dengan banyak foto membutuhkan waktu sesi lebih panjang, jadi sesuaikan dengan antrean tamu dan durasi acara.'] },
      { heading: 'Sesuaikan dengan lokasi dan tamu', paragraphs: ['Pilih layout yang proporsional dengan area foto dan jarak kamera. Untuk ruang sempit, satu atau dua foto lebih nyaman; untuk area luas, strip atau grid bisa mengajak lebih banyak orang bergabung.', 'Jika hasil akan dicetak, uji ukuran teks dan margin pada contoh cetak. Pastikan wajah dan nama acara tetap terbaca di ukuran akhir.'] },
    ],
  },
  {
    slug: 'menyiapkan-hasil-photobooth-untuk-dicetak', title: 'Menyiapkan Hasil Photobooth untuk Dicetak', description: 'Periksa resolusi, rasio, dan margin agar photostrip tetap tajam saat dicetak.', category: 'Photobooth', image: '/images/articles/article-1511795409834.jpg', imageAlt: 'Tamu berkumpul di area photobooth acara',
    sections: [
      { heading: 'Periksa file sebelum cetak', paragraphs: ['Gunakan file hasil unduhan dengan resolusi terbaik, bukan tangkapan layar pratinjau. Periksa apakah wajah, teks, dan ornamen bingkai tidak terpotong pada rasio yang akan dicetak.', 'Bandingkan warna di layar dengan hasil cetak percobaan. Perbedaan kecil pada kecerahan dan saturasi sering terjadi, jadi lakukan satu kali uji cetak sebelum memproduksi banyak salinan.'] },
      { heading: 'Pilih ukuran dan bahan cetak', paragraphs: ['Tentukan ukuran cetak berdasarkan tujuan, misalnya strip kecil untuk souvenir atau cetakan lebih besar untuk dipajang. Pilih bahan kertas yang tidak terlalu tipis agar hasilnya tidak mudah terlipat.', 'Sisakan margin aman di tepi agar bagian penting tidak terpotong saat pemotongan. Simpan file asli dan salinan cetak di tempat terpisah untuk cadangan.'] },
    ],
  },
  {
    slug: 'panduan-memilih-tema-undangan-pernikahan', title: 'Panduan Memilih Tema Undangan Pernikahan', description: 'Cocokkan tema, warna, dan tipografi undangan dengan suasana acara dan cerita pasangan.', category: 'Undangan digital', image: '/images/invitations/inv-09.jpg', imageAlt: 'Detail busana dan dekorasi pernikahan',
    sections: [
      { heading: 'Mulai dari suasana acara', paragraphs: ['Tentukan lebih dulu apakah acara terasa formal, intim, atau santai. Dari situ, pilih palet warna dan gaya tipografi yang mendukung suasana, bukan hanya mengikuti tren.', 'Perhatikan lokasi acara dan dekorasi utama. Undangan yang senada dengan bunga, kain, atau pencahayaan di venue akan terasa lebih menyatu.'] },
      { heading: 'Jaga keterbacaan dan konsistensi', paragraphs: ['Pilih satu atau dua jenis huruf dan pastikan ukuran teks nyaman dibaca di ponsel. Informasi tanggal, lokasi, dan RSVP harus tetap jelas meskipun desainnya dekoratif.', 'Buka pratinjau di beberapa ukuran layar dan minta orang lain membacanya. Konsistensi warna, foto, dan gaya ornamen membuat undangan terasa rapi.'] },
    ],
  },
  {
    slug: 'menulis-cerita-pasangan-di-undangan-digital', title: 'Cara Menulis Cerita Pasangan di Undangan Digital', description: 'Susun cerita singkat yang personal tanpa membuat tamu kehilangan informasi acara.', category: 'Undangan digital', image: '/images/invitations/inv-10.jpg', imageAlt: 'Potret pasangan dalam suasana hangat',
    sections: [
      { heading: 'Pilih momen yang ingin diceritakan', paragraphs: ['Pilih dua atau tiga momen yang penting, misalnya pertemuan pertama, perjalanan bersama, atau lamaran. Tulis dengan kalimat pendek dan detail yang mudah dibayangkan.', 'Hindari menyalin cerita dari contoh lain. Gunakan suara kalian sendiri agar tamu merasa membaca cerita yang benar-benar personal.'] },
      { heading: 'Jaga ritme dan privasi', paragraphs: ['Sisipkan cerita di antara informasi acara agar tamu tidak perlu membaca paragraf panjang. Beri jeda visual dengan foto atau kutipan singkat.', 'Sepakati bersama pasangan bagian mana yang boleh dibagikan. Hindari mencantumkan detail pribadi yang tidak nyaman dibaca keluarga atau tamu.'] },
    ],
  },
  {
    slug: 'mengatur-galeri-foto-di-undangan-digital', title: 'Mengatur Galeri Foto di Undangan Digital', description: 'Pilih urutan, jumlah, dan ukuran foto agar galeri tetap cepat dibuka dan nyaman dilihat.', category: 'Undangan digital', image: '/images/invitations/inv-14.jpg', imageAlt: 'Pasangan berfoto di area outdoor',
    sections: [
      { heading: 'Susun urutan foto', paragraphs: ['Mulai dari foto yang paling mewakili suasana acara, lalu lanjutkan dengan potret pasangan, detail dekorasi, dan momen bersama keluarga. Urutan yang jelas membantu tamu memahami cerita.', 'Batasi jumlah foto yang ditampilkan sekaligus. Beberapa foto pilihan biasanya lebih nyaman dilihat daripada galeri yang sangat panjang.'] },
      { heading: 'Optimalkan untuk ponsel', paragraphs: ['Kompres foto sebelum diunggah dan pastikan wajah tidak terpotong pada tampilan tegak. Beri keterangan singkat jika foto membutuhkan konteks.', 'Uji galeri dengan koneksi seluler dan beberapa ukuran layar. Pastikan foto tetap tajam, tombol mudah disentuh, dan halaman tidak terasa berat.'] },
    ],
  },
  {
    slug: 'ide-photobooth-untuk-acara-kantor', title: 'Ide Photobooth untuk Acara Kantor', description: 'Buat area foto kantor yang rapi, profesional, dan tetap menyenangkan untuk tim.', category: 'Inspirasi', image: '/images/articles/article-1511578314322.jpg', imageAlt: 'Para tamu berbincang di sebuah acara',
    sections: [
      { heading: 'Tema yang tetap profesional', paragraphs: ['Gunakan warna dan logo perusahaan secara proporsional. Bingkai sederhana dengan nama acara, tahun, dan satu ornamen biasanya lebih rapi daripada banyak elemen yang saling berebut perhatian.', 'Siapkan properti yang netral dan mudah dipakai, seperti papan ucapan atau topi ringan. Hindari aksesori yang terlalu besar agar wajah tetap terlihat.'] },
      { heading: 'Alur dan privasi di lingkungan kerja', paragraphs: ['Letakkan area foto di tempat yang tidak menghalangi jalur utama. Beri petunjuk singkat dan tentukan kanal berbagi foto yang jelas agar hasilnya tidak tersebar tanpa kesepakatan.', 'Keikutsertaan sebaiknya sukarela, termasuk saat foto kelompok kantor. Sediakan pilihan bagi rekan yang ingin melewatkan foto atau menyimpan hasil sendiri. Minta izin terpisah sebelum mengunggah foto ke akun publik.'] },
    ],
  },
  {
    slug: 'ide-undangan-digital-untuk-acara-intim', title: 'Ide Undangan Digital untuk Acara Intim', description: 'Desain undangan yang hangat untuk acara kecil, dari palet warna sampai pesan personal.', category: 'Inspirasi', image: '/images/invitations/inv-13.jpg', imageAlt: 'Pasangan dalam suasana perayaan yang tenang',
    sections: [
      { heading: 'Pilih suasana yang dekat', paragraphs: ['Untuk acara kecil, undangan dengan palet lembut, foto natural, dan bahasa yang hangat biasanya terasa lebih personal. Pilih satu warna utama dan satu aksen agar tampilan tetap tenang.', 'Tulis pesan pembuka yang menyebut penerima secara personal. Detail kecil seperti nama tamu dan kalimat singkat membuat undangan terasa lebih tulus.'] },
      { heading: 'Informasi yang tetap lengkap', paragraphs: ['Meskipun acaranya intim, tetap cantumkan tanggal, waktu, lokasi, peta, dan cara konfirmasi kehadiran. Tamu tidak perlu mencari informasi tambahan di tempat lain.', 'Periksa tautan dan tampilan di ponsel sebelum dibagikan. Pastikan semua tamu bisa membuka undangan tanpa membuat akun atau memasang aplikasi.'] },
    ],
  },
  {
    slug: 'tema-photobooth-untuk-baby-shower', title: 'Ide Tema Photobooth untuk Baby Shower', description: 'Pilih warna, properti, dan bingkai yang lembut untuk merayakan calon bayi.', category: 'Inspirasi', image: '/images/articles/article-1530103862676.jpg', imageAlt: 'Suasana pesta dengan balon warna-warni',
    sections: [
      { heading: 'Palet dan properti lembut', paragraphs: ['Gunakan warna pastel atau netral yang nyaman dilihat. Tambahkan balon, bunga, atau papan ucapan dengan ukuran yang tidak menutupi wajah tamu.', 'Pilih properti yang ringan, bersih, dan aman. Hindari benda kecil atau tajam yang mudah terjatuh di area foto.'] },
      { heading: 'Nyaman untuk ibu dan tamu', paragraphs: ['Sediakan kursi dan ruang gerak yang cukup, terutama untuk ibu hamil atau tamu yang membawa anak. Atur area foto dekat dengan pengawasan orang dewasa.', 'Tawarkan pilihan untuk ikut berfoto tanpa memaksa. Beri tahu tamu bagaimana hasil foto akan dibagikan dan minta izin sebelum mengunggahnya.'] },
    ],
  },
  {
    slug: 'tips-foto-photobooth-dengan-cahaya-jendela', title: 'Tips Foto Photobooth dengan Cahaya Jendela', description: 'Manfaatkan cahaya alami dari jendela untuk wajah yang lebih jelas dan natural.', category: 'Tips foto', image: '/images/articles/article-1517457373958.jpg', imageAlt: 'Suasana ruangan dengan cahaya alami',
    sections: [
      { heading: 'Hadapkan wajah ke jendela', paragraphs: ['Berdirilah menghadap atau sedikit menyamping ke arah jendela. Cahaya yang lembut dari samping membantu membentuk wajah tanpa membuat bayangan keras.', 'Hindari jendela yang sangat terang tepat di belakang subjek. Jika latar terlalu terang, geser posisi atau tutup sebagian jendela dengan tirai tipis.'] },
      { heading: 'Atur jarak dan latar', paragraphs: ['Beri jarak antara subjek dan dinding agar bayangan tidak menempel. Letakkan kamera setinggi mata dan pastikan seluruh wajah masuk ke pratinjau.', 'Ambil satu foto percobaan, lalu sesuaikan posisi jika wajah terlalu gelap atau latar terlalu ramai. Perubahan kecil pada arah hadap sering lebih efektif daripada menambah banyak properti.'] },
    ],
  },
  {
    slug: 'cara-mengatur-posisi-kamera-photobooth', title: 'Cara Mengatur Posisi Kamera Photobooth', description: 'Tentukan tinggi, jarak, dan sudut kamera agar semua orang masuk bingkai dengan nyaman.', category: 'Tips foto', image: '/images/referensi-kamera.jpeg', imageAlt: 'Kamera pada penyangga untuk sesi foto',
    sections: [
      { heading: 'Setinggi mata dan stabil', paragraphs: ['Letakkan kamera atau ponsel pada penyangga yang stabil dengan tinggi mendekati mata orang yang berfoto. Sudut dari bawah atau atas yang terlalu ekstrem dapat membuat proporsi wajah terlihat aneh.', 'Periksa apakah perangkat sudah terkunci dan tidak mudah bergeser. Kabel atau tas di sekitar penyangga sebaiknya dipindahkan dari jalur tamu.'] },
      { heading: 'Cek bingkai untuk kelompok', paragraphs: ['Untuk foto berkelompok, atur jarak kamera agar semua orang masuk tanpa berdempetan. Lihat pratinjau dari tepi ke tepi, bukan hanya bagian tengah.', 'Minta satu orang membantu mengarahkan posisi dan memastikan tidak ada wajah yang terpotong. Ambil satu foto percobaan sebelum hitung mundur dimulai.'] },
    ],
  },
  {
    slug: 'tips-foto-photobooth-untuk-keluarga-besar', title: 'Tips Foto Photobooth untuk Keluarga Besar', description: 'Atur barisan, jarak, dan waktu foto agar keluarga besar tetap rapi dalam satu bingkai.', category: 'Tips foto', image: '/images/articles/article-1527529482837.jpg', imageAlt: 'Keluarga dan teman berkumpul untuk foto bersama',
    sections: [
      { heading: 'Susun barisan bertingkat', paragraphs: ['Tempatkan anak-anak atau orang yang lebih pendek di depan, lalu susun barisan berikutnya di belakang. Pastikan wajah di baris belakang tidak tertutup.', 'Minta semua orang mendekat ke arah tengah tanpa berdesakan. Beri ruang di tepi bingkai agar tangan dan bahu tidak terpotong.'] },
      { heading: 'Beri arahan singkat', paragraphs: ['Tunjuk satu orang sebagai pengarah agar keluarga tidak menerima banyak instruksi sekaligus. Minta semua melihat kamera dan menahan posisi selama hitung mundur.', 'Ambil beberapa foto berturut-turut untuk menangkap ekspresi yang berbeda. Setelah selesai, beri kesempatan kepada anggota keluarga untuk melihat hasil dan memilih foto favorit.'] },
    ],
  },
  {
    slug: 'checklist-acara-photobooth-dan-undangan', title: 'Checklist Acara: Photobooth dan Undangan Digital', description: 'Siapkan dua hal yang paling sering ditanyakan tamu sebelum hari acara.', category: 'Persiapan acara', image: '/images/articles/article-1492684223066.jpg', imageAlt: 'Panggung acara dengan pencahayaan dan penonton',
    sections: [
      { heading: 'Seminggu sebelum acara', paragraphs: ['Periksa tautan undangan, peta, dan tombol konfirmasi kehadiran. Uji tautan photobooth atau QR dari beberapa ponsel dan pastikan halaman terbuka tanpa akun.', 'Periksa ejaan nama, tanggal, dan alamat pada undangan serta bingkai foto. Siapkan tautan cadangan yang mudah dikirim melalui pesan jika ada kendala.'] },
      { heading: 'Saat hari acara', paragraphs: ['Letakkan petunjuk photobooth di area yang mudah terlihat dan pastikan pencahayaan cukup. Tunjuk satu orang yang bisa membantu tamu jika kamera atau koneksi bermasalah.', 'Catat siapa yang dapat dihubungi untuk urusan venue dan teknis. Setelah acara, minta izin sebelum membagikan foto tamu ke akun publik.'] },
    ],
  },
  {
    slug: 'menyusun-jadwal-foto-acara-pernikahan', title: 'Menyusun Jadwal Foto di Acara Pernikahan', description: 'Bagi waktu foto keluarga, pasangan, dan tamu agar tidak bertabrakan dengan prosesi.', category: 'Persiapan acara', image: '/images/articles/article-1519741497674.jpg', imageAlt: 'Dekorasi pernikahan dengan bunga dan cahaya hangat',
    sections: [
      { heading: 'Tentukan prioritas foto', paragraphs: ['Buat daftar kelompok yang paling penting, misalnya keluarga inti, keluarga besar, dan sahabat. Urutkan berdasarkan lokasi dan waktu agar sesi foto tidak saling menunggu.', 'Siapkan satu orang yang mengenal anggota keluarga untuk membantu memanggil kelompok berikutnya. Ini membuat pasangan tidak perlu mencari orang satu per satu.'] },
      { heading: 'Koordinasikan dengan rundown', paragraphs: ['Sisipkan jadwal foto pada jeda yang realistis dan bagikan kepada pembawa acara, fotografer, serta keluarga. Beri ruang untuk perubahan tanpa mengorbankan prosesi utama.', 'Jika waktu terbatas, dahulukan foto yang paling penting dan biarkan momen spontan terjadi di sela acara. Tidak semua pose harus masuk ke daftar.'] },
    ],
  },
  {
    slug: 'menyiapkan-tim-acara-untuk-photobooth', title: 'Menyiapkan Tim Acara untuk Mengelola Photobooth', description: 'Tunjuk orang, bagi tugas, dan siapkan langkah sederhana saat tamu butuh bantuan.', category: 'Persiapan acara', image: '/images/articles/article-1511285560929.jpg', imageAlt: 'Pasangan berjalan bersama di hari pernikahan',
    sections: [
      { heading: 'Bagi peran dan jalur bantuan', paragraphs: ['Tentukan satu orang untuk menyambut tamu, satu orang untuk membantu penggunaan kamera, dan satu orang sebagai cadangan. Pastikan setiap orang tahu ke mana harus menghubungi penanggung jawab venue.', 'Buat jalur antrean yang jelas dan hindari menempatkan area foto di jalur masuk atau dekat kabel. Beri tanda sederhana tentang cara memulai sesi.'] },
      { heading: 'Bekali dengan panduan singkat', paragraphs: ['Siapkan satu halaman berisi tautan, cara mengizinkan kamera, langkah mengambil foto, dan kontak bantuan. Simpan panduan di tempat yang mudah diakses tim.', 'Lakukan uji singkat sebelum acara dan catat kendala yang muncul. Setelah acara, kumpulkan masukan tim agar pengalaman tamu berikutnya lebih lancar.'] },
    ],
  },
  {
    slug: 'fitur-ruang-kilas-vs-photobooth-online-lain',
    title: 'Fitur Ruang Kilas yang Membedakannya dari Photobooth Online Lain',
    description: 'Kenali apa yang membuat Ruang Kilas berbeda: pengolahan lokal, lensa vintage, bingkai custom, Boomerang, dan alur tanpa akun.',
    category: 'Photobooth',
    image: '/images/friends-photo-booth.jpg',
    imageAlt: 'Sekelompok teman berfoto bersama di photobooth',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Seluruh pengambilan dan pengolahan foto berjalan di browser; tidak ada unggahan ke server.',
      'Ada lima efek lensa real-time, enam filter warna, dan tiga belas tema bingkai termasuk Custom Warna.',
      'Hasil bisa diunduh sebagai JPG, direkam sebagai Boomerang, atau dibagikan lewat fitur berbagi perangkat.',
      'Tidak perlu akun, langganan, atau pemasangan aplikasi untuk menyelesaikan satu sesi.',
    ],
    sections: [
      {
        heading: 'Pemrosesan lokal yang bisa dijelaskan',
        paragraphs: [
          'Banyak photobooth online meminta pengguna mengunggah foto ke server untuk diproses. Ruang Kilas melakukan pengambilan, penggabungan bingkai, penerapan filter, dan ekspor langsung di canvas browser. Artinya, foto asli tidak dikirim ke backend untuk disimpan.',
          'Konsekuensinya, privasi tidak hanya bergantung pada janji kebijakan, tetapi pada alur teknis: kamera memberi aliran gambar ke halaman, halaman menggambar hasilnya di perangkat, lalu pengguna mengunduhnya sendiri. Browser juga menghentikan akses kamera saat sesi ditutup atau kamera dimatikan.',
        ],
        list: [
          'Tidak ada unggahan foto ke server Ruang Kilas.',
          'Tidak ada akun atau basis data pengguna untuk menyimpan hasil.',
          'File akhir tersimpan di perangkat setelah diunduh.',
        ],
      },
      {
        heading: 'Lensa vintage yang diproses di pratinjau',
        paragraphs: [
          'Ruang Kilas menyediakan efek Original, Fisheye 360, Leica 35mm, Digicam 2004, VHS Camcorder, dan Dreamy Soft Prism. Efek diterapkan pada pratinjau kamera, sehingga pengguna bisa melihat karakter lensa sebelum menekan tombol jepret. Ini berbeda dari layanan yang baru menampilkan efek setelah foto diunggah.',
          'Setiap lensa punya karakter berbeda: Fisheye mendistorsi ruang, Leica memberi grain dan tone hangat, Digicam menambahkan kontras flash dan timestamp, VHS memunculkan scanline serta pergeseran warna, dan Dreamy memberi glow lembut. Efek ini bisa dikombinasikan dengan filter warna terpisah.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Pemilihan efek lensa di studio Ruang Kilas', caption: 'Efek lensa dipilih sebelum memotret dan langsung terlihat di pratinjau.' },
      },
      {
        heading: 'Bingkai bertema dan warna custom',
        paragraphs: [
          'Tiga belas tema bingkai dibagi ke dalam kategori Signature, Retro, Cute & Pop, dan Custom. Contohnya Kilas Butter, Atelier Noir, Swiss Modernist, Struk Belanja, 35mm Film Roll, Festival Pass, Tokyo Purikura, Y2K Cyber, Coquette Ribbon, dan Matcha Cafe. Pengguna juga bisa membuat warna bingkai sendiri lewat palet atau kode hex serta memilih motif polos, dots, lines, atau grid.',
          'Fleksibilitas ini berguna untuk acara yang punya identitas visual kuat. Panitia bisa menyamakan warna bingkai dengan undangan atau dekorasi tanpa menunggu desainer eksternal. Caption hingga 40 karakter dan stiker digital bisa ditempel serta digeser sesuai kebutuhan.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Kategori bingkai di studio Ruang Kilas', caption: 'Kategori bingkai membantu mempersempit pilihan saat waktu sesi terbatas.' },
      },
      {
        heading: 'Satu sesi, beberapa format keluaran',
        paragraphs: [
          'Setelah foto selesai, pengguna dapat mengunduh JPG, merekam Boomerang berdurasi 3 atau 4 detik, atau memakai tombol berbagi perangkat. Format video mengikuti dukungan browser: sebagian browser menghasilkan MP4, sebagian WebM. Tombol berbagi memakai Web Share API bila tersedia, sehingga file bisa langsung dikirim ke aplikasi lain.',
          'Karena semua berjalan lokal, tidak ada antrean server yang membuat pengguna menunggu. Namun kualitas dan ketersediaan format tetap bergantung pada perangkat. Pengguna perlu memeriksa hasil unduhan sebelum menutup tab.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tahap simpan dan bagikan di Ruang Kilas', caption: 'Tahap akhir menyediakan unduhan JPG, Boomerang, dan berbagi dari perangkat.' },
        tip: 'Jika tombol Boomerang tidak tersedia di browser tertentu, unduh foto JPG sebagai hasil utama. Dukungan perekaman video memang berbeda antar-browser.',
      },
      {
        heading: 'Yang tetap perlu dipertimbangkan',
        paragraphs: [
          'Ruang Kilas bukan pengganti fotografer profesional atau booth fisik dengan cetak instan. Tidak ada galeri cloud otomatis, tidak ada penyimpanan jangka panjang, dan hasil tidak otomatis terkirim ke tamu. Semua file harus diunduh atau dibagikan sendiri.',
          'Karena itu, Ruang Kilas paling cocok untuk sesi cepat, konten media sosial, suvenir digital, dan acara yang ingin mengurangi antrean fisik. Untuk cetak dalam jumlah besar atau dokumentasi resmi, tetap siapkan vendor dan alur kerja terpisah.',
        ],
      },
    ],
    faq: [
      { question: 'Apakah foto saya diunggah ke server?', answer: 'Tidak. Pengambilan dan penggabungan foto dilakukan di browser. File baru berpindah perangkat jika kamu mengunduh atau membagikannya sendiri.' },
      { question: 'Apakah perlu membuat akun?', answer: 'Tidak. Studio bisa dibuka langsung dari tautan dan digunakan tanpa login.' },
      { question: 'Apakah Boomerang selalu tersedia?', answer: 'Tidak selalu. Perekaman video bergantung pada dukungan MediaRecorder dan codec di browser. Jika tidak tersedia, gunakan unduhan foto.' },
    ],
  },
  {
    slug: 'photobooth-online-di-android',
    title: 'Photobooth Online di Android: Izin Kamera, Timer, dan Hasil Foto',
    description: 'Panduan khusus Android untuk membuka Ruang Kilas, mengizinkan kamera, memilih kamera depan, dan menyimpan photostrip ke galeri.',
    category: 'Photobooth',
    image: '/images/referensi-kamera.jpeg',
    imageAlt: 'Kamera dan perlengkapan untuk sesi photobooth di Android',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Gunakan Chrome versi terbaru dan buka tautan HTTPS.',
      'Jika izin pernah ditolak, ubah lewat ikon gembok di bilah alamat, bukan hanya menutup tab.',
      'Tutup aplikasi lain yang memakai kamera sebelum menyalakan studio.',
      'File JPG biasanya masuk ke folder Download; gunakan menu bagikan untuk menyimpannya ke galeri atau Google Photos.',
    ],
    sections: [
      {
        heading: 'Membuka studio di Chrome Android',
        paragraphs: [
          'Buka tautan Ruang Kilas di Chrome. Pastikan alamat diawali HTTPS dan tidak ada peringatan koneksi. Jika kamu membuka dari tautan di aplikasi pesan, pilih opsi buka di browser agar izin kamera dan unduhan berjalan normal.',
          'Perbarui Chrome melalui Play Store jika halaman tidak menampilkan tombol kamera. Versi browser yang sangat lama mungkin tidak mendukung sebagian API kamera atau perekaman video yang dipakai studio.',
        ],
      },
      {
        heading: 'Memberi izin kamera yang benar',
        paragraphs: [
          'Saat menekan tombol nyalakan kamera, Chrome akan menampilkan permintaan izin. Pilih izinkan. Jika tidak muncul, ketuk ikon gembok atau ikon pengaturan di kiri bilah alamat, buka izin situs, lalu ubah kamera menjadi izinkan. Muat ulang halaman setelah mengubah izin.',
          'Jika izin sudah diizinkan tetapi kamera tetap gelap, tutup aplikasi panggilan video, kamera, atau aplikasi lain yang mungkin memakai kamera. Pada sebagian perangkat, kamera hanya bisa dipakai satu aplikasi dalam satu waktu.',
        ],
        list: [
          'Ketuk ikon gembok di bilah alamat.',
          'Pilih Izin atau Pengaturan situs.',
          'Ubah Kamera menjadi Izinkan.',
          'Muat ulang halaman studio.',
          'Tutup aplikasi lain yang memakai kamera.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tombol nyalakan kamera pada studio', caption: 'Tombol nyalakan kamera memicu permintaan izin browser; pastikan kamu memilih izinkan.' },
      },
      {
        heading: 'Mengatur timer, kamera depan, dan retake',
        paragraphs: [
          'Gunakan tombol Balik untuk berpindah antara kamera depan dan belakang jika perangkat mendukung. Untuk berfoto sendiri, kamera depan lebih mudah karena layar berfungsi sebagai cermin. Aktifkan Mirror bila kamu ingin hasil mengikuti gerakan di layar.',
          'Pilih timer 3 detik untuk pose santai atau 5–10 detik untuk kelompok. Setelah semua slot terisi, periksa thumbnail. Ketuk slot tertentu untuk retake tanpa mengulang foto lain. Ini menghemat waktu saat satu ekspresi kurang pas.',
        ],
      },
      {
        heading: 'Menyimpan hasil ke galeri',
        paragraphs: [
          'Setelah menekan Unduh foto JPG, Chrome biasanya menampilkan notifikasi unduhan. File tersimpan di folder Download. Buka file tersebut, lalu gunakan menu bagikan atau opsi simpan untuk memindahkannya ke Google Photos atau galeri.',
          'Jika unduhan gagal, periksa ruang penyimpanan dan izin penyimpanan Chrome. Untuk Boomerang, file disimpan dengan ekstensi sesuai dukungan browser. Jika video tidak bisa diputar di galeri, coba buka dengan pemutar video yang mendukung format tersebut.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tombol unduh foto dan Boomerang di Android', caption: 'Gunakan unduhan JPG sebagai hasil utama; Boomerang bergantung pada dukungan perekaman browser.' },
      },
      {
        heading: 'Jika kamera Android tidak muncul',
        paragraphs: [
          'Coba urutan berikut: tutup aplikasi kamera lain, periksa izin situs, muat ulang halaman, lalu coba browser lain. Jika masih gagal, restart perangkat. Beberapa ponsel membatasi akses kamera untuk situs yang dibuka di mode hemat daya atau browser bawaan tertentu.',
          'Periksa juga apakah halaman dibuka di dalam aplikasi pesan atau media sosial, bukan browser penuh. WebView di dalam aplikasi sering memiliki izin kamera berbeda. Salin tautan ke Chrome untuk hasil yang lebih konsisten.',
        ],
      },
    ],
    devices: [
      { platform: 'Android · Chrome', notes: ['Izin kamera diatur per situs lewat ikon gembok.', 'Unduhan JPG masuk ke folder Download.', 'Gunakan tombol Balik untuk kamera depan.'] },
      { platform: 'Android · browser bawaan', notes: ['Dukungan API kamera dan unduhan bisa berbeda.', 'Jika tombol kamera tidak muncul, buka tautan di Chrome.'] },
    ],
    faq: [
      { question: 'Kenapa kamera hanya menampilkan layar hitam?', answer: 'Biasanya karena izin belum diberikan atau kamera sedang dipakai aplikasi lain. Periksa izin situs dan tutup aplikasi kamera atau panggilan video.' },
      { question: 'Di mana file photostrip tersimpan?', answer: 'Umumnya di folder Download. Buka file lalu simpan ke galeri atau Google Photos jika ingin muncul di aplikasi foto.' },
      { question: 'Apakah bisa memakai kamera belakang?', answer: 'Bisa, jika perangkat dan browser menyediakan pilihan kamera. Gunakan tombol Balik untuk berpindah kamera.' },
    ],
  },
  {
    slug: 'photobooth-online-di-iphone',
    title: 'Photobooth Online di iPhone: Panduan Safari dari Izin Kamera sampai Simpan',
    description: 'Cara memakai Ruang Kilas di iPhone dan iPad, termasuk izin kamera Safari, kamera depan, unduh JPG, dan menyimpan hasil ke Photos.',
    category: 'Photobooth',
    image: '/images/referensi-kamera.jpeg',
    imageAlt: 'Perlengkapan foto untuk sesi photobooth di iPhone',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Gunakan Safari versi terbaru dan buka tautan HTTPS.',
      'Izin kamera bisa diatur lewat menu aA atau Settings Safari.',
      'File unduhan masuk ke aplikasi Files, lalu bisa disimpan ke Photos.',
      'Dukungan Boomerang dan berbagi file bergantung pada versi iOS serta browser.',
    ],
    sections: [
      {
        heading: 'Membuka studio di Safari iPhone',
        paragraphs: [
          'Buka tautan Ruang Kilas di Safari. Hindari membuka dari dalam aplikasi lain karena tampilan dan izin kamera bisa berbeda. Jika kamu membuka dari pesan, pilih opsi buka di Safari.',
          'Pastikan iOS dan Safari sudah diperbarui. Versi lama mungkin belum mendukung sebagian API kamera atau berbagi file. Jika halaman terasa berat, tutup tab lain sebelum memulai sesi.',
        ],
      },
      {
        heading: 'Mengizinkan kamera di Safari',
        paragraphs: [
          'Saat kamera dinyalakan, Safari akan meminta izin. Pilih Izinkan. Jika kamu pernah menolak, ketuk ikon aA di bilah alamat, pilih Pengaturan Situs Web, lalu ubah Kamera menjadi Izinkan. Muat ulang halaman setelahnya.',
          'Pada iOS yang lebih baru, pengaturan per situs juga bisa diakses dari Settings > Safari > Camera. Jika izin sudah benar tetapi kamera tetap tidak muncul, tutup aplikasi yang sedang memakai kamera dan coba lagi.',
        ],
        list: [
          'Ketuk ikon aA di bilah alamat.',
          'Pilih Pengaturan Situs Web.',
          'Ubah Kamera menjadi Izinkan.',
          'Muat ulang halaman studio.',
          'Tutup aplikasi kamera atau panggilan video lain.',
        ],
      },
      {
        heading: 'Mengatur pose dan kamera depan',
        paragraphs: [
          'Gunakan tombol Balik untuk memilih kamera depan. Di iPhone, kamera depan biasanya membuat wajah terlihat lebih dekat; mundurkan perangkat sedikit agar bahu dan tangan masuk ke bingkai. Letakkan ponsel pada penyangga agar stabil.',
          'Pilih timer yang cukup panjang untuk kelompok. Setelah semua foto diambil, periksa thumbnail dan gunakan retake pada slot yang kurang pas. Perhatikan apakah teks bingkai tertutup tangan atau rambut.',
        ],
      },
      {
        heading: 'Menyimpan hasil ke Photos',
        paragraphs: [
          'Setelah menekan unduh, Safari menyimpan file ke aplikasi Files, biasanya di folder Downloads. Buka file tersebut, ketuk ikon bagikan, lalu pilih Simpan Gambar untuk memasukkannya ke Photos. Kamu juga bisa menekan lama gambar dan memilih opsi simpan.',
          'Untuk Boomerang, format file mengikuti dukungan browser. Jika video tidak bisa diputar atau dibagikan, gunakan hasil JPG. Jangan menutup tab sebelum unduhan selesai dan file benar-benar tersimpan.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tombol unduh dan bagikan di iPhone', caption: 'Di iPhone, unduhan masuk ke Files terlebih dahulu; simpan ke Photos lewat menu bagikan.' },
      },
      {
        heading: 'Jika hasil terlihat gelap atau terpotong',
        paragraphs: [
          'Wajah yang gelap sering disebabkan jendela terang di belakang. Putar tubuh menghadap jendela atau pindah ke area dengan cahaya lebih merata. Jika wajah terpotong, mundurkan ponsel atau pilih layout yang memberi ruang lebih lebar.',
          'Periksa juga apakah zoom kamera tidak sengaja aktif. Di Safari, cubit layar dapat mengubah tampilan halaman; pastikan kamu tidak memperbesar antarmuka hingga tombol sulit dijangkau. Kembalikan zoom ke normal sebelum memotret.',
        ],
      },
    ],
    devices: [
      { platform: 'iPhone · Safari', notes: ['Izin kamera diatur lewat menu aA atau Settings Safari.', 'Unduhan JPG masuk ke Files, lalu disimpan ke Photos.', 'Boomerang mengikuti dukungan codec Safari dan versi iOS.'] },
      { platform: 'iPad · Safari', notes: ['Tata letak lebih lebar cocok untuk sesi kelompok.', 'Pastikan orientasi perangkat tidak terkunci saat berpindah layout.'] },
    ],
    faq: [
      { question: 'Kenapa tombol kamera tidak muncul di iPhone?', answer: 'Pastikan halaman dibuka di Safari, bukan di dalam aplikasi lain, dan izin kamera situs sudah diizinkan.' },
      { question: 'Bagaimana menyimpan hasil ke Photos?', answer: 'Buka file di aplikasi Files, ketuk bagikan, lalu pilih Simpan Gambar.' },
      { question: 'Apakah Boomerang bisa dibagikan ke Instagram?', answer: 'Bisa jika browser dan aplikasi mendukung format video yang dihasilkan. Jika tidak, gunakan foto JPG atau konversi video terlebih dahulu.' },
    ],
  },
  {
    slug: 'photobooth-online-di-laptop',
    title: 'Photobooth Online di Laptop: Webcam, Layar Penuh, dan Unduhan',
    description: 'Siapkan sesi photobooth di laptop atau PC dengan webcam, posisi kamera, mode fullscreen, dan penyimpanan file yang rapi.',
    category: 'Photobooth',
    image: '/images/referensi-kamera.jpeg',
    imageAlt: 'Webcam dan perlengkapan untuk photobooth di laptop',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Gunakan Chrome, Edge, atau browser modern lain dan izinkan webcam.',
      'Atur sudut layar agar kamera setinggi mata, bukan menunduk.',
      'Manfaatkan tombol Fullscreen untuk menghilangkan gangguan tab.',
      'Simpan file di folder khusus dan ganti namanya agar mudah dicari.',
    ],
    sections: [
      {
        heading: 'Menyiapkan browser dan webcam',
        paragraphs: [
          'Buka studio di browser modern dan tekan tombol nyalakan kamera. Browser akan meminta izin webcam. Jika pernah diblokir, buka pengaturan situs lewat ikon gembok di bilah alamat dan ubah izin kamera.',
          'Tutup aplikasi konferensi video yang mungkin masih memakai webcam. Pada Windows, periksa juga pengaturan privasi kamera agar browser diizinkan mengakses kamera. Di macOS, periksa System Settings > Privacy & Security > Camera.',
        ],
        list: [
          'Chrome atau Edge versi terbaru.',
          'Izin kamera untuk situs sudah diberikan.',
          'Tidak ada aplikasi lain yang memakai webcam.',
          'Webcam tidak tertutup penutup fisik.',
        ],
      },
      {
        heading: 'Mengatur posisi dan sudut layar',
        paragraphs: [
          'Webcam laptop biasanya berada di bezel atas layar. Atur sudut layar agar kamera mendekati ketinggian mata. Jika layar terlalu rendah, wajah akan terlihat menunduk dan dagu menonjol. Letakkan laptop di atas tumpukan buku jika perlu.',
          'Beri jarak sekitar 50–80 cm dari kamera. Untuk foto berdua, salah satu orang bisa duduk lebih dekat ke kamera. Pastikan latar di belakang tidak terlalu ramai dan tidak ada sumber cahaya terang tepat di belakang kepala.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tampilan kamera studio di laptop', caption: 'Di laptop, sudut layar menentukan tinggi kamera. Sesuaikan sebelum memulai sesi.' },
      },
      {
        heading: 'Memakai mode layar penuh',
        paragraphs: [
          'Tombol Fullscreen di kanan atas studio menyembunyikan elemen browser dan memberi ruang lebih besar untuk pratinjau. Ini membantu saat berfoto kelompok karena semua orang bisa melihat hitung mundur. Tekan Esc untuk keluar dari layar penuh.',
          'Jika kamu memakai laptop eksternal, pilih layar yang menghadap subjek. Jangan menaruh jendela studio di layar yang tidak terlihat oleh peserta. Pastikan kursor tidak menutupi tombol saat sesi berlangsung.',
        ],
      },
      {
        heading: 'Menyimpan dan menamai file',
        paragraphs: [
          'File JPG biasanya masuk ke folder Downloads. Buat folder khusus untuk acara dan pindahkan file ke sana. Ganti nama file dengan tanggal dan nama acara agar mudah dicari, misalnya photostrip-acara-2026-11-04.jpg.',
          'Jika mengunduh Boomerang, periksa ekstensi file. Format video mengikuti dukungan browser. Simpan salinan di drive eksternal atau cloud jika file akan dipakai untuk konten acara. Jangan hanya mengandalkan folder Download.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tombol unduh di laptop', caption: 'Setelah mengunduh, pindahkan file ke folder acara dan ganti namanya agar mudah ditemukan.' },
        tip: 'Gunakan webcam eksternal jika ingin hasil lebih tajam dan posisi kamera lebih fleksibel. Banyak webcam eksternal bisa dipasang setinggi mata dengan tripod kecil.',
      },
      {
        heading: 'Jika webcam tidak terdeteksi',
        paragraphs: [
          'Periksa apakah webcam terbaca di aplikasi lain. Jika tidak, masalahnya ada di perangkat atau driver, bukan di studio. Cabut dan sambungkan ulang webcam eksternal, lalu muat ulang browser.',
          'Pada Windows, buka Device Manager dan periksa kamera. Pada macOS, periksa izin kamera browser di System Settings. Jika memakai laptop kantor, kebijakan perusahaan mungkin memblokir akses kamera untuk situs tertentu.',
        ],
      },
    ],
    devices: [
      { platform: 'Windows · Chrome/Edge', notes: ['Periksa Settings > Privacy > Camera.', 'File unduhan masuk ke folder Downloads.', 'Tekan Esc untuk keluar dari fullscreen.'] },
      { platform: 'macOS · Safari/Chrome', notes: ['Periksa System Settings > Privacy & Security > Camera.', 'Safari meminta izin per situs.', 'Gunakan tombol Fullscreen untuk tampilan tanpa gangguan.'] },
    ],
    faq: [
      { question: 'Kenapa webcam laptop tidak muncul di browser?', answer: 'Bisa karena izin situs, pengaturan privasi sistem, atau webcam sedang dipakai aplikasi lain. Periksa ketiganya sebelum mencoba browser lain.' },
      { question: 'Apakah bisa memakai webcam eksternal?', answer: 'Bisa, jika browser dan sistem mengenali perangkat tersebut. Pilih kamera yang aktif di pengaturan situs bila ada beberapa pilihan.' },
      { question: 'Di mana file tersimpan?', answer: 'Umumnya di folder Downloads. Pindahkan ke folder acara dan ganti namanya agar mudah dicari.' },
    ],
  },
  {
    slug: 'cara-membuat-boomerang-photobooth',
    title: 'Cara Membuat Boomerang Photobooth dan Membagikannya ke Media Sosial',
    description: 'Rekam Boomerang 3 atau 4 detik di Ruang Kilas, pilih format yang didukung perangkat, lalu bagikan ke Instagram Story atau TikTok.',
    category: 'Photobooth',
    image: '/images/friends-photo-booth.jpg',
    imageAlt: 'Teman-teman berpose untuk klip Boomerang',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Boomerang direkam dari sesi foto dan tersedia dalam durasi 3 atau 4 detik.',
      'Format file mengikuti dukungan browser, umumnya MP4 atau WebM.',
      'Gerakan kecil yang berulang lebih mudah dibaca daripada gerakan besar.',
      'Jika video gagal, unduh JPG dan gunakan sebagai hasil utama.',
    ],
    sections: [
      {
        heading: 'Apa yang dimaksud Boomerang di Ruang Kilas',
        paragraphs: [
          'Boomerang adalah klip pendek yang menangkap gerakan di sekitar sesi foto. Di tahap simpan, pilih opsi Boomerang, tentukan durasi 3 atau 4 detik, lalu tekan tombol unduh. Studio merekam hasil dari canvas dan menyimpannya sebagai file video.',
          'Karena perekaman dilakukan di browser, dukungan format bergantung pada MediaRecorder dan codec yang tersedia. Sebagian browser menghasilkan MP4, sebagian WebM. Perbedaan ini wajar dan bukan berarti sesi gagal.',
        ],
      },
      {
        heading: 'Menyiapkan gerakan yang mudah dibaca',
        paragraphs: [
          'Pilih gerakan sederhana yang bisa diulang, misalnya melambaikan tangan, mengangguk, atau berpose lalu kembali ke posisi awal. Gerakan besar dan cepat sering terlihat kabur karena durasi klip sangat pendek. Beri jeda satu detik sebelum bergerak.',
          'Letakkan kamera stabil. Jika kamera ikut bergoyang, seluruh klip akan terasa bergetar. Untuk kelompok, tentukan satu gerakan bersama agar hasilnya tidak saling bertabrakan. Ulangi dua atau tiga kali dan pilih yang paling rapi.',
        ],
        list: [
          'Gerakan kecil dan berulang.',
          'Kamera stabil di penyangga.',
          'Satu gerakan utama per kelompok.',
          'Cahaya cukup agar noise berkurang.',
        ],
      },
      {
        heading: 'Memilih durasi 3 atau 4 detik',
        paragraphs: [
          'Durasi 3 detik cocok untuk gerakan cepat dan konten yang perlu langsung kembali ke awal. Durasi 4 detik memberi sedikit ruang untuk gerakan yang lebih santai. Sesuaikan dengan tempo gerakan dan durasi Story yang kamu rencanakan.',
          'Jika hasil terasa terlalu cepat, ulangi dengan gerakan lebih lambat daripada menambah durasi terus-menerus. Boomerang yang baik terasa seperti satu tarikan napas, bukan video panjang yang dipotong.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Pilihan durasi Boomerang di studio', caption: 'Pilih durasi 3 atau 4 detik sebelum mengunduh; durasi memengaruhi tempo gerakan.' },
      },
      {
        heading: 'Menyimpan dan membagikan',
        paragraphs: [
          'Tekan tombol unduh Boomerang dan tunggu proses selesai. Periksa file di galeri atau pemutar video. Jika ingin membagikan langsung, gunakan tombol bagikan dari perangkat. Fitur ini memakai Web Share API dan ketersediaannya berbeda di setiap browser.',
          'Untuk Instagram Story atau TikTok, unggah file dari galeri. Jika aplikasi tidak menerima format video tertentu, konversi terlebih dahulu atau gunakan hasil JPG. Jangan mengunggah dari folder Download jika aplikasi tidak memiliki izin akses folder tersebut.',
        ],
        image: { src: '/images/studio-steps/wedding-result-mobile.png', alt: 'Contoh hasil yang dibagikan dari ponsel', caption: 'Contoh tampilan hasil di ponsel dengan tombol bagikan, unduh JPG, dan ulangi foto.' },
      },
      {
        heading: 'Jika Boomerang tidak bisa diunduh',
        paragraphs: [
          'Periksa apakah browser mendukung MediaRecorder. Jika tombol tidak aktif atau proses gagal, coba browser lain yang lebih baru. Beberapa browser di dalam aplikasi pesan membatasi perekaman video.',
          'Pastikan penyimpanan perangkat cukup dan kamu tidak menutup tab saat proses berlangsung. Jika tetap gagal, unduh foto JPG. Untuk kebutuhan konten, kamu bisa membuat animasi sederhana dari beberapa foto memakai aplikasi edit video.',
        ],
      },
    ],
    faq: [
      { question: 'Kenapa Boomerang saya berformat WebM?', answer: 'Browser memilih format yang didukung. Jika MP4 tidak tersedia, WebM digunakan. Dukungan format berbeda antar-browser dan perangkat.' },
      { question: 'Bisakah Boomerang diunggah ke Instagram?', answer: 'Bisa jika aplikasi mendukung format file yang dihasilkan. Jika tidak, konversi video terlebih dahulu atau gunakan foto JPG.' },
      { question: 'Apakah Boomerang bisa direkam ulang tanpa mengulang foto?', answer: 'Kamu bisa kembali ke tahap sebelumnya dan menyesuaikan pengaturan, tetapi perekaman mengikuti sesi yang sedang aktif. Mengulang foto memberi hasil gerakan yang baru.' },
    ],
  },
  {
    slug: 'panduan-efek-lensa-ruang-kilas',
    title: 'Panduan 5 Efek Lensa Ruang Kilas dan Waktu yang Tepat Memakainya',
    description: 'Pahami karakter Fisheye 360, Leica 35mm, Digicam 2004, VHS Camcorder, dan Dreamy Soft Prism agar tidak salah pilih lensa.',
    category: 'Tips foto',
    image: '/images/referensi-kamera.jpeg',
    imageAlt: 'Lensa kamera sebagai inspirasi efek photobooth',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Setiap lensa punya karakter berbeda; pilih berdasarkan suasana yang ingin dibangun.',
      'Efek lensa dan filter warna adalah dua lapisan terpisah.',
      'Uji kombinasi lensa, filter, dan bingkai di pratinjau sebelum memotret.',
      'Untuk kelompok, hindari lensa yang terlalu banyak mendistorsi tepi bingkai.',
    ],
    sections: [
      {
        heading: 'Fisheye 360 dan Leica 35mm',
        paragraphs: [
          'Fisheye 360 memberi distorsi cembung yang kuat, seperti kamera aksi era 90-an. Lensa ini cocok untuk foto kelompok yang ingin terasa lucu dan berenergi. Namun wajah di tepi bingkai bisa terlihat melengkung, jadi atur posisi agar wajah utama tetap di tengah.',
          'Leica 35mm memberi tone hangat, grain halus, dan aksen light leak tipis. Karakternya cocok untuk potret santai, foto berdua, dan suasana nostalgia. Karena warnanya sudah hangat, hindari filter Warm tambahan jika kulit terlihat terlalu kuning.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Pilihan lensa Fisheye dan Leica di studio', caption: 'Fisheye dan Leica memberi karakter yang sangat berbeda; uji keduanya dengan pose yang sama.' },
      },
      {
        heading: 'Digicam 2004 dan VHS Camcorder',
        paragraphs: [
          'Digicam Cybershot 2004 menambahkan kontras digital flash dan timestamp berwarna oranye. Lensa ini cocok untuk foto bergaya kamera saku awal 2000-an, terutama saat memakai bingkai Retro. Pastikan cahaya cukup karena kontras tinggi bisa membuat bayangan wajah lebih tegas.',
          'VHS Camcorder menambahkan scanline dan pergeseran warna RGB. Efeknya kuat, jadi gunakan untuk foto yang memang ingin terasa seperti cuplikan kaset lama. Untuk teks bingkai yang kecil, pergeseran warna bisa membuatnya sulit dibaca; pilih bingkai dengan teks besar.',
        ],
      },
      {
        heading: 'Dreamy Soft Prism dan Original',
        paragraphs: [
          'Dreamy Soft Prism memberi glow lembut pada area terang, mirip potret editorial. Lensa ini cocok untuk foto satu orang atau pasangan dengan cahaya lembut. Hindari memakainya di ruangan yang sangat terang karena highlight bisa terlalu memutih.',
          'Original tidak menambahkan efek apa pun. Gunakan Original jika kamu ingin warna bingkai dan filter menjadi fokus, atau jika ingin hasil yang paling netral untuk dicetak. Original juga aman untuk kelompok besar karena tidak ada distorsi tepi.',
        ],
        list: [
          'Fisheye: kelompok lucu dan energi tinggi.',
          'Leica: potret hangat dan nostalgia.',
          'Digicam: gaya kamera saku awal 2000-an.',
          'VHS: suasana kaset dan glitch.',
          'Dreamy: potret lembut dan editorial.',
          'Original: netral dan aman untuk semua pose.',
        ],
      },
      {
        heading: 'Mengombinasikan lensa, filter, dan bingkai',
        paragraphs: [
          'Mulai dari lensa, lalu pilih filter yang tidak bertabrakan. Lensa Leica yang hangat biasanya cukup dengan No Filter atau Classic. Lensa Digicam bisa dipadukan dengan B&W untuk kesan koran lama, sedangkan VHS cocok dengan bingkai Retro.',
          'Uji kombinasi di pratinjau dengan pose sebenarnya. Nama efek tidak selalu menggambarkan hasil akhir di pencahayaan ruanganmu. Jika wajah menjadi terlalu terang atau tekstur berlebihan, kurangi satu lapisan efek.',
        ],
        tip: 'Ambil satu foto uji untuk setiap kombinasi yang ingin dicoba. Membandingkan hasil berdampingan lebih mudah daripada mengingat tampilan sebelumnya.',
      },
      {
        heading: 'Kesalahan umum dalam memilih lensa',
        paragraphs: [
          'Kesalahan pertama adalah memakai efek terlalu banyak sekaligus: lensa kuat, filter pekat, dan bingkai ramai. Hasilnya wajah tenggelam. Kesalahan kedua adalah memilih lensa hanya dari nama tanpa melihat pratinjau di cahaya ruangan.',
          'Kesalahan ketiga adalah memakai Fisheye untuk kelompok besar tanpa mengatur posisi. Wajah di tepi bisa terdistorsi. Jika ingin efek tetap terasa, letakkan wajah utama di tengah dan biarkan tepi bingkai menangkap distorsi.',
        ],
      },
    ],
    faq: [
      { question: 'Apakah efek lensa bisa diganti setelah foto diambil?', answer: 'Lensa dipilih saat tahap kamera. Untuk mengganti, kembali ke tahap kamera dan ambil ulang atau sesuaikan pengaturan sebelum melanjutkan.' },
      { question: 'Lensa mana yang paling aman untuk cetak?', answer: 'Original atau Leica dengan filter ringan biasanya paling aman karena tidak terlalu banyak mengubah warna dan kontras.' },
      { question: 'Bisakah lensa digabung dengan filter warna?', answer: 'Bisa. Keduanya lapisan berbeda, tetapi uji hasilnya agar warna tidak berlebihan.' },
    ],
  },
  {
    slug: 'panduan-frame-custom-warna-motif',
    title: 'Cara Memakai Frame Custom Warna dan Motif di Ruang Kilas',
    description: 'Atur warna bingkai lewat palet atau kode hex, pilih motif, dan pastikan caption tetap terbaca di layar ponsel.',
    category: 'Photobooth',
    image: '/images/wedding-ripki-hero.jpg',
    imageAlt: 'Inspirasi warna bingkai untuk acara pernikahan',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Custom Warna berguna saat bingkai harus mengikuti identitas acara.',
      'Gunakan satu warna utama dan satu aksen agar tidak ramai.',
      'Motif Polos paling aman untuk teks kecil; Dots, Lines, dan Grid perlu diuji.',
      'Caption maksimal 40 karakter dan harus terbaca di layar ponsel.',
    ],
    sections: [
      {
        heading: 'Kapan sebaiknya memakai Custom Warna',
        paragraphs: [
          'Custom Warna cocok untuk acara yang sudah memiliki palet tetap, misalnya pernikahan dengan undangan berwarna tertentu, acara kantor dengan warna brand, atau ulang tahun dengan tema khusus. Bingkai custom membuat hasil foto terasa menyatu dengan materi acara lain.',
          'Jika acara tidak memiliki palet yang jelas, tema bawaan seperti Kilas Butter atau Swiss Modernist biasanya lebih cepat dipakai. Custom Warna membutuhkan keputusan warna yang konsisten, terutama jika beberapa orang akan memakai studio yang sama.',
        ],
      },
      {
        heading: 'Memilih warna utama dan aksen',
        paragraphs: [
          'Tentukan satu warna latar dan satu warna teks. Warna aksen bisa dipakai untuk garis, bintang, atau detail kecil. Pastikan kontras teks dan latar cukup; teks gelap di latar terang lebih mudah dibaca daripada teks abu-abu di latar pastel.',
          'Ambil warna dari undangan atau dekorasi, lalu uji di layar ponsel. Warna yang terlihat lembut di monitor bisa menjadi terlalu pucat setelah dicetak. Jika ragu, pilih latar netral dan gunakan warna acara sebagai aksen.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Contoh bingkai dengan warna custom', caption: 'Custom Warna memungkinkan bingkai mengikuti palet undangan atau dekorasi.' },
      },
      {
        heading: 'Memilih motif yang tidak mengganggu wajah',
        paragraphs: [
          'Motif Polos paling aman karena tidak bersaing dengan foto. Dots dan Lines memberi tekstur ringan, tetapi bisa mengganggu jika terlalu rapat. Grid cocok untuk kesan teknis atau editorial, asalkan teks tetap terbaca.',
          'Uji motif dengan foto asli, bukan bidang kosong. Pola yang tampak halus di layar desain bisa terlihat ramai di belakang wajah. Jika motif berada di area foto, kurangi kepadatannya atau pindahkan ke tepi bingkai.',
        ],
        list: [
          'Polos: aman untuk semua jenis teks.',
          'Dots: tekstur ringan, hindari kepadatan tinggi.',
          'Lines: cocok untuk kesan editorial.',
          'Grid: kuat untuk tema teknis, tetapi periksa keterbacaan.',
        ],
      },
      {
        heading: 'Mengatur caption dan stiker',
        paragraphs: [
          'Caption maksimal 40 karakter dan tercetak langsung di bingkai. Gunakan nama acara, tanggal, atau kalimat singkat. Hindari kalimat panjang karena akan mengecil dan sulit dibaca pada hasil akhir.',
          'Stiker bisa digeser dan dihapus dengan dobel klik. Tempatkan stiker di area yang tidak menutupi wajah atau teks utama. Untuk kelompok, kurangi jumlah stiker agar foto tetap rapi.',
        ],
        image: { src: '/images/studio-steps/studio-step3-filters.png', alt: 'Pengaturan caption dan filter pada bingkai custom', caption: 'Caption dan filter sebaiknya diuji bersama karena keduanya memengaruhi keterbacaan.' },
      },
      {
        heading: 'Uji sebelum dibagikan ke tamu',
        paragraphs: [
          'Buka hasil di ponsel dengan kecerahan normal. Periksa apakah nama acara, tanggal, dan caption terbaca tanpa memperbesar layar. Jika tidak, perbesar teks atau sederhanakan latar.',
          'Cetak satu contoh jika hasil akan dicetak. Perbedaan warna dan ukuran teks baru terlihat setelah cetak. Setelah cocok, simpan pengaturan dan bagikan tautan studio ke tamu atau panitia.',
        ],
        tip: 'Simpan kode hex warna acara di catatan panitia. Ini memastikan semua orang memakai warna yang sama saat mengatur ulang bingkai.',
      },
      {
        heading: 'Kesalahan yang sering terjadi',
        paragraphs: [
          'Warna teks dan latar terlalu dekat membuat caption hilang. Motif terlalu rapat membuat wajah sulit terlihat. Caption terlalu panjang membuat teks mengecil. Stiker terlalu banyak menutupi ekspresi tamu.',
          'Perbaiki dengan mengurangi satu elemen pada satu waktu. Mulai dari kontras teks, lalu kepadatan motif, lalu jumlah stiker. Perubahan kecil biasanya lebih efektif daripada mengganti seluruh desain.',
        ],
      },
    ],
    faq: [
      { question: 'Apakah warna bisa memakai kode hex?', answer: 'Bisa. Custom Warna menyediakan palet dan input warna, termasuk kode hex, untuk menyesuaikan bingkai.' },
      { question: 'Berapa panjang caption yang disarankan?', answer: 'Maksimal 40 karakter. Untuk keterbacaan terbaik, gunakan 15–25 karakter.' },
      { question: 'Apakah motif bisa dipakai di area foto?', answer: 'Bisa, tetapi uji dengan foto asli agar tidak mengganggu wajah dan teks.' },
    ],
  },
  {
    slug: 'photobooth-online-vs-photobooth-fisik',
    title: 'Photobooth Online vs Photobooth Fisik: Mana yang Cocok untuk Acaramu?',
    description: 'Bandingkan biaya, antrean, kualitas cetak, privasi, dan pengalaman tamu sebelum memilih photobooth online atau booth fisik.',
    category: 'Persiapan acara',
    image: '/images/wedding-ripki-hero.jpg',
    imageAlt: 'Suasana acara pernikahan dengan area foto',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Photobooth online unggul untuk jangkauan luas, biaya per tamu rendah, dan antrean singkat.',
      'Booth fisik unggul untuk cetak instan, properti nyata, dan pengalaman yang dipandu operator.',
      'Keduanya bisa dikombinasikan: online untuk semua tamu, fisik untuk area utama.',
      'Pilih berdasarkan tujuan acara, bukan hanya harga.',
    ],
    sections: [
      {
        heading: 'Perbedaan alur tamu',
        paragraphs: [
          'Photobooth online membuka tautan di perangkat tamu. Tidak ada antrean fisik, tetapi tamu harus memberi izin kamera dan mengunduh hasil sendiri. Booth fisik menyediakan perangkat, properti, dan operator; tamu datang, berpose, lalu menerima cetakan.',
          'Untuk tamu yang tidak nyaman memakai ponsel, booth fisik lebih ramah. Untuk tamu yang ingin langsung membagikan foto ke media sosial, photobooth online lebih cepat karena file sudah ada di perangkat mereka.',
        ],
      },
      {
        heading: 'Biaya dan perangkat',
        paragraphs: [
          'Photobooth online tidak memerlukan kamera khusus, printer, atau operator per area. Biaya utama ada pada desain bingkai, penyiapan tautan, dan pendampingan. Booth fisik membutuhkan perangkat, cetak, staf, transportasi, dan listrik.',
          'Namun photobooth online bergantung pada perangkat tamu dan koneksi internet. Jika banyak tamu membawa ponsel lama atau sinyal buruk, pengalaman bisa tidak merata. Booth fisik lebih terkontrol karena perangkat dan jaringan disiapkan penyelenggara.',
        ],
        list: [
          'Online: biaya per tamu rendah, jangkauan luas.',
          'Fisik: biaya lebih tinggi, pengalaman terkontrol.',
          'Online: tidak ada cetak instan.',
          'Fisik: membutuhkan ruang dan operator.',
        ],
      },
      {
        heading: 'Kualitas hasil dan cetak',
        paragraphs: [
          'Photobooth online menghasilkan file digital yang bisa diunduh dan dicetak kemudian. Kualitas bergantung pada kamera perangkat, cahaya, dan pengaturan bingkai. Booth fisik biasanya memakai kamera dan lampu khusus sehingga hasil lebih konsisten.',
          'Jika cetak instan penting, booth fisik lebih praktis. Jika hasil digital dan konten media sosial lebih penting, photobooth online sudah cukup. Untuk cetak berkualitas, file JPG dari photobooth online tetap bisa dicetak setelah diuji terlebih dahulu.',
        ],
        image: { src: '/images/studio-steps/wedding-result.jpg', alt: 'Contoh hasil digital yang bisa dicetak', caption: 'Hasil digital bisa dicetak, tetapi perlu uji cetak untuk memastikan warna dan ketajaman.' },
      },
      {
        heading: 'Antrean dan kapasitas',
        paragraphs: [
          'Booth fisik memiliki kapasitas terbatas karena satu perangkat melayani satu kelompok pada satu waktu. Photobooth online memungkinkan banyak tamu berfoto bersamaan dari perangkat masing-masing. Ini mengurangi antrean, terutama saat jam ramai.',
          'Namun photobooth online memindahkan beban teknis ke tamu. Siapkan petunjuk yang jelas dan satu petugas bantuan. Jika tamu kesulitan, antrean bantuan bisa tetap terbentuk di sekitar area QR.',
        ],
      },
      {
        heading: 'Rekomendasi kombinasi',
        paragraphs: [
          'Untuk pernikahan, gunakan photobooth online sebagai pelengkap dokumentasi dan suvenir digital, sementara fotografer resmi menangani momen utama. Jika anggaran memungkinkan, sediakan booth fisik kecil di area resepsi untuk tamu yang ingin cetak instan.',
          'Untuk acara kantor atau sekolah, photobooth online sering lebih hemat dan mudah disebarkan. Untuk acara dengan banyak tamu yang tidak membawa ponsel, booth fisik lebih aman. Pilih berdasarkan kebutuhan tamu, bukan tren.',
        ],
      },
    ],
    faq: [
      { question: 'Mana yang lebih murah?', answer: 'Photobooth online umumnya lebih murah karena tidak memerlukan perangkat, cetak, dan operator di lokasi. Namun biaya desain dan pendampingan tetap ada.' },
      { question: 'Bisakah keduanya dipakai bersamaan?', answer: 'Bisa. Photobooth online untuk jangkauan luas dan booth fisik untuk pengalaman cetak instan di area utama.' },
      { question: 'Mana yang lebih baik untuk privasi?', answer: 'Photobooth online yang memproses foto lokal menjaga foto tetap di perangkat tamu. Booth fisik menyimpan file di perangkat penyelenggara, jadi perlu kesepakatan penggunaan.' },
    ],
  },
  {
    slug: 'solusi-kamera-gelap-buram-photobooth',
    title: 'Kamera Gelap atau Buram saat Photobooth? Solusi per Perangkat',
    description: 'Perbaiki hasil foto yang gelap, buram, atau terbalik di Android, iPhone, dan laptop dengan langkah yang bisa dicoba langsung.',
    category: 'Tips foto',
    image: '/images/referensi-kamera.jpeg',
    imageAlt: 'Kamera untuk mengatasi hasil foto gelap atau buram',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Periksa cahaya dan kebersihan lensa sebelum menyalahkan kamera.',
      'Gunakan penyangga agar perangkat tidak bergoyang saat hitung mundur.',
      'Izin kamera dan aplikasi lain adalah penyebab umum layar hitam.',
      'Solusi berbeda antara Android, iPhone, dan laptop.',
    ],
    sections: [
      {
        heading: 'Cek cahaya, lensa, dan stabilitas',
        paragraphs: [
          'Foto gelap sering terjadi karena sumber cahaya berada di belakang subjek. Putar tubuh menghadap jendela atau lampu, lalu ambil satu foto uji. Jika wajah masih gelap, tambahkan pantulan dari dinding putih atau pindahkan lampu lebih dekat ke depan.',
          'Lensa yang berminyak membuat foto terlihat berkabut dan kurang tajam. Bersihkan dengan kain microfiber. Letakkan perangkat pada penyangga atau tumpukan buku agar tidak bergoyang saat hitung mundur.',
        ],
        list: [
          'Wajah menghadap cahaya, bukan membelakangi.',
          'Lensa bersih dan tidak berembun.',
          'Perangkat stabil di penyangga.',
          'Latar tidak lebih terang daripada wajah.',
        ],
      },
      {
        heading: 'Android: izin dan aplikasi lain',
        paragraphs: [
          'Jika layar kamera hitam, periksa izin kamera situs lewat ikon gembok. Tutup aplikasi panggilan video atau kamera yang mungkin masih berjalan. Muat ulang halaman setelah izin diubah.',
          'Jika hasil buram, periksa apakah kamera sedang memakai mode zoom digital atau fokus macro. Ketuk pratinjau untuk memicu fokus, lalu tahan perangkat diam. Pada sebagian ponsel, mode hemat daya membatasi kinerja kamera; coba matikan sementara.',
        ],
      },
      {
        heading: 'iPhone: Safari dan pengaturan privasi',
        paragraphs: [
          'Pastikan halaman dibuka di Safari, bukan di dalam aplikasi pesan. Periksa izin kamera lewat menu aA > Pengaturan Situs Web, atau Settings > Safari > Camera. Jika izin sudah benar, tutup aplikasi kamera lain dan muat ulang halaman.',
          'Foto buram di iPhone sering disebabkan gerakan tangan saat menekan tombol. Gunakan timer dan letakkan ponsel di penyangga. Bersihkan lensa karena sidik jari sangat terlihat pada kamera kecil.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Pemeriksaan hasil sebelum menyimpan', caption: 'Periksa hasil di tahap simpan; jika gelap atau buram, kembali ke tahap kamera dan ulangi.' },
      },
      {
        heading: 'Laptop: webcam dan sudut layar',
        paragraphs: [
          'Webcam laptop sering menghasilkan gambar grain di ruangan minim cahaya. Tambahkan lampu di depan wajah dan hindari jendela terang di belakang. Atur sudut layar agar kamera setinggi mata dan wajah tidak terlihat menunduk.',
          'Jika gambar terlihat gelap padahal ruangan terang, periksa apakah penutup privasi webcam terbuka. Di Windows atau macOS, periksa izin kamera browser dan pastikan tidak ada aplikasi konferensi yang masih memakai webcam.',
        ],
      },
      {
        heading: 'Jika foto terbalik atau tidak sesuai posisi',
        paragraphs: [
          'Gunakan tombol Mirror untuk mengubah orientasi pratinjau. Jika hasil terbalik setelah diunduh, periksa pengaturan orientasi perangkat dan pastikan layar tidak terkunci pada orientasi yang salah. Muat ulang halaman setelah mengubah orientasi.',
          'Untuk kelompok, periksa pratinjau dari tepi ke tepi. Jika wajah terpotong, mundurkan kamera atau pilih layout yang lebih lebar. Jangan mengandalkan hasil setelah foto diambil karena bingkai sudah ditentukan di awal.',
        ],
      },
    ],
    devices: [
      { platform: 'Android', notes: ['Periksa izin kamera per situs.', 'Tutup aplikasi kamera atau panggilan video lain.', 'Gunakan timer dan penyangga untuk mengurangi blur.'] },
      { platform: 'iPhone', notes: ['Buka di Safari, bukan WebView aplikasi pesan.', 'Atur izin lewat aA > Pengaturan Situs Web.', 'Simpan hasil ke Photos lewat menu bagikan.'] },
      { platform: 'Laptop', notes: ['Periksa penutup privasi webcam.', 'Atur sudut layar agar kamera setinggi mata.', 'Tambahkan lampu di depan wajah.'] },
    ],
    faq: [
      { question: 'Kenapa hasil foto saya buram?', answer: 'Biasanya karena gerakan tangan, lensa kotor, atau cahaya kurang. Gunakan timer, bersihkan lensa, dan stabilkan perangkat.' },
      { question: 'Kenapa wajah gelap padahal ruangan terang?', answer: 'Kamera mungkin menyesuaikan exposure ke sumber cahaya di belakang. Hadapkan wajah ke cahaya atau pindah posisi.' },
      { question: 'Apakah kamera bisa dipakai dua aplikasi sekaligus?', answer: 'Umumnya tidak. Tutup aplikasi lain yang memakai kamera sebelum menyalakan studio.' },
    ],
  },
  {
    slug: 'photobooth-untuk-acara-sekolah-kampus',
    title: 'Ide Photobooth Online untuk Acara Sekolah dan Kampus',
    description: 'Rencanakan photobooth yang aman, hemat, dan mudah diikuti untuk ospek, class meeting, reuni, atau wisuda.',
    category: 'Inspirasi',
    image: '/images/friends-photo-booth.jpg',
    imageAlt: 'Sekelompok teman berfoto untuk acara sekolah',
    author: 'Tim Ruang Kilas',
    reviewer: 'Tim Produk Ruang Kilas',
    updated: '2026-11-04',
    takeaways: [
      'Photobooth online cocok untuk acara dengan banyak peserta dan perangkat sendiri.',
      'Gunakan bingkai yang mencerminkan identitas sekolah atau angkatan.',
      'Tetapkan aturan privasi dan izin foto sejak awal.',
      'Siapkan petugas dan alur antrean untuk jam ramai.',
    ],
    sections: [
      {
        heading: 'Tema dan bingkai yang relevan',
        paragraphs: [
          'Untuk ospek, gunakan warna dan nama angkatan yang jelas. Untuk wisuda, tambahkan tahun lulus dan nama fakultas. Untuk reuni, buat bingkai per angkatan agar peserta mudah mengenali fotonya. Hindari terlalu banyak elemen agar wajah tetap terlihat.',
          'Bingkai dengan teks besar lebih mudah dibaca di layar ponsel. Jika acara memiliki logo sekolah, letakkan secara proporsional dan jangan menutupi area foto. Uji bingkai dengan foto kelompok karena acara sekolah sering melibatkan banyak orang.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Pemilihan bingkai untuk acara sekolah', caption: 'Gunakan bingkai dengan nama angkatan atau tahun lulus agar hasil mudah dikenali.' },
      },
      {
        heading: 'Akses lewat QR dan pengawasan',
        paragraphs: [
          'Tempatkan QR di area registrasi atau papan informasi. Sertakan instruksi singkat: pindai, izinkan kamera, lalu ikuti hitung mundur. Siapkan tautan tertulis untuk peserta yang kamera pemindainya bermasalah.',
          'Untuk peserta di bawah umur, sediakan pengawasan guru atau panitia. Jelaskan bahwa foto diproses di perangkat dan tidak otomatis diunggah. Minta izin orang tua jika foto akan dipublikasikan di akun sekolah.',
        ],
      },
      {
        heading: 'Privasi dan izin siswa',
        paragraphs: [
          'Beri tahu peserta bahwa mereka dapat memilih untuk tidak berfoto. Jangan memaksa atau mempermalukan yang menolak. Sediakan area foto yang tidak menghalangi jalur dan tidak membuat peserta merasa diperhatikan.',
          'Jika foto akan dipakai untuk publikasi sekolah, mintalah persetujuan terpisah. Untuk album bersama, batasi akses hanya untuk peserta acara. Hapus foto yang diminta dihapus dan jangan mengunggah ulang ke grup lain.',
        ],
        list: [
          'Partisipasi bersifat sukarela.',
          'Album hanya untuk peserta acara.',
          'Izin terpisah untuk publikasi.',
          'Kontak untuk permintaan penghapusan.',
        ],
      },
      {
        heading: 'Alur antrean saat jam ramai',
        paragraphs: [
          'Acara sekolah sering memiliki jam istirahat yang sama, sehingga antrean bisa melonjak. Sediakan dua titik QR atau dua area foto jika ruang memungkinkan. Minta peserta menyiapkan ponsel sebelum sampai di depan QR.',
          'Batasi durasi sesi dan jelaskan jumlah foto sejak awal. Sediakan petugas yang mengarahkan giliran dan membantu izin kamera. Untuk kelompok besar, ambil foto per kelas atau per angkatan agar tidak menumpuk.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tampilan kamera yang perlu dipahami peserta', caption: 'Semakin sedikit langkah di layar, semakin cepat antrean peserta berjalan.' },
      },
      {
        heading: 'Checklist panitia sekolah',
        paragraphs: [
          'Uji tautan dan QR dari beberapa ponsel sebelum acara. Pastikan jaringan di area acara cukup. Siapkan petunjuk cetak dan tautan cadangan. Tentukan petugas yang membantu peserta dan mengelola antrean.',
          'Setelah acara, kumpulkan foto yang disetujui untuk album sekolah. Minta izin sebelum mengunggah ke akun resmi. Simpan catatan kendala agar acara berikutnya lebih lancar.',
        ],
        tip: 'Buat bingkai khusus per angkatan dan satu bingkai netral. Peserta dari angkatan lain tetap bisa berfoto tanpa merasa dikecualikan.',
      },
    ],
    faq: [
      { question: 'Apakah aman untuk siswa di bawah umur?', answer: 'Aman jika ada pengawasan dan izin yang jelas. Foto diproses di perangkat, tetapi publikasi tetap memerlukan persetujuan.' },
      { question: 'Berapa banyak QR yang sebaiknya disediakan?', answer: 'Satu QR utama dan satu cadangan di area berbeda sudah cukup untuk mengurangi kerumunan.' },
      { question: 'Bagaimana jika jaringan sekolah buruk?', answer: 'Siapkan tautan cadangan dan minta peserta membuka halaman sebelum masuk area acara. Jika perlu, gunakan hotspot panitia yang disetujui.' },
    ],
  },
];

// Consolidated articles keep their old addresses through the article route.
export const articleRedirects: Record<string, string> = {
  'cara-membuat-qr-photobooth-yang-mudah-dipindai': 'cara-membuat-qr-photobooth-acara',
  'privasi-foto-tamu-di-acara-digital': 'privasi-foto-di-acara-digital',
  'ide-photobooth-gathering-kantor': 'ide-photobooth-untuk-acara-kantor',
  'panduan-foto-kelompok-besar-dengan-ponsel': 'panduan-foto-grup-banyak-orang',
  'undangan-digital-dan-rsvp-yang-ramah-tamu': 'rsvp-undangan-digital-yang-efektif',
};
export const articles = allArticles.filter((article) => !Object.hasOwn(articleRedirects, article.slug));
