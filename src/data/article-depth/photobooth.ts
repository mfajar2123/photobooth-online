import type { ArticleExtra } from '../article-types';

export const photoboothExtras: Record<string, ArticleExtra> = {
  'cara-menggunakan-photobooth-online': {
    takeaways: [
      'Sesi photobooth di Ruang Kilas berjalan dalam empat tahap: kamera, bingkai, filter, lalu simpan.',
      'Tidak perlu akun atau aplikasi tambahan; cukup browser yang mendukung kamera dan koneksi aman.',
      'Foto diproses di perangkat, jadi unduh hasilnya sebelum menutup tab atau mematikan kamera.',
      'Periksa pratinjau sebelum lanjut karena hasil akhir mengikuti bingkai dan jumlah jepretan yang dipilih.',
    ],
    sections: [
      {
        heading: 'Alur empat tahap yang akan kamu lalui',
        paragraphs: [
          'Setelah halaman studio terbuka, kamu akan melihat penanda tahap 01 Kamera, 02 Bingkai, 03 Filter, dan 04 Simpan. Urutan ini sengaja dibuat linear agar kamu tidak kehilangan hasil foto di tengah jalan. Kamu tetap bisa kembali ke tahap sebelumnya lewat tombol navigasi di bagian bawah panel.',
          'Pada tahap pertama, pilih orientasi Potret atau Landscape, tentukan jumlah foto, lalu nyalakan kamera. Setelah semua slot terisi, lanjut ke bingkai. Di tahap ketiga kamu mengatur filter warna, caption, dan stiker. Tahap terakhir menampilkan pratinjau akhir beserta tombol unduh dan bagikan.',
        ],
        list: [
          '01 Kamera: pilih ukuran foto, timer, efek lensa, dan ambil foto.',
          '02 Bingkai: pilih tema, kategori, atau Custom Warna.',
          '03 Filter: tentukan tone warna, caption maksimal 40 karakter, dan stiker.',
          '04 Simpan: unduh JPG, ekspor Boomerang, atau bagikan dari perangkat.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tangkapan layar tahap kamera di studio Ruang Kilas', caption: 'Tahap 01 Kamera: pilih Potret atau Landscape, atur timer, lalu nyalakan kamera.' },
      },
      {
        heading: 'Menyiapkan cahaya dan posisi sebelum menekan kamera',
        paragraphs: [
          'Cahaya yang paling mudah diatur adalah jendela yang menghadap wajah. Letakkan perangkat setinggi mata, bersihkan lensa, dan beri jarak sekitar satu meter agar wajah tidak terlalu penuh di bingkai. Untuk foto berdua atau bertiga, mundur sedikit dan pastikan semua kepala masih masuk ke area pratinjau.',
          'Jika ruangan gelap, tambahkan lampu di depan subjek, bukan di belakang. Hindari menyalakan lampu sangat dekat karena bayangan hidung dan dagu bisa menjadi keras. Lakukan satu jepretan uji, lalu geser posisi sebelum mengambil seluruh rangkaian.',
        ],
        tip: 'Gunakan timer 3 detik untuk pose santai dan 5–10 detik bila kamu perlu menyiapkan properti atau mengatur posisi kelompok.',
      },
      {
        heading: 'Memilih bingkai dan filter tanpa mengorbankan wajah',
        paragraphs: [
          'Bingkai menentukan ruang foto dan posisi teks. Untuk kelompok kecil, pilih bingkai dengan margin lebar agar wajah di tepi tidak terpotong. Untuk potret satu orang, bingkai dengan satu bidang besar biasanya lebih aman karena ekspresi menjadi fokus utama.',
          'Filter warna sebaiknya disesuaikan dengan cahaya ruangan. Di dalam ruangan berwarna hangat, filter Warm bisa membuat kulit terlihat terlalu kuning; coba No Filter atau Classic lebih dulu. Efek lensa dan filter warna adalah dua lapisan berbeda, jadi uji kombinasinya di pratinjau, bukan hanya dari nama efeknya.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Tangkapan layar pemilihan bingkai di studio Ruang Kilas', caption: 'Tahap 02 Bingkai: kategori Signature, Retro, Cute & Pop, dan Custom membantu mempersempit pilihan.' },
      },
      {
        heading: 'Menerapkan filter warna, caption, dan stiker',
        paragraphs: [
          'Tahap 03 mengatur suasana akhir foto. Pilih No Filter jika ingin warna lensa tetap murni, atau coba Classic, Film, B&W, Warm, dan Vivid. Filter diterapkan ke seluruh foto dalam bingkai, jadi periksa apakah warna kulit dan latar masih terlihat wajar.',
          'Tulis caption maksimal 40 karakter, misalnya nama acara atau tanggal. Tempel stiker jika ingin menambah aksen, lalu geser ke posisi yang tidak menutupi wajah. Dobel klik stiker untuk menghapusnya. Semua perubahan langsung terlihat di pratinjau bingkai.',
        ],
        image: { src: '/images/studio-steps/studio-step3-filters.png', alt: 'Tangkapan layar pemilihan filter warna di studio Ruang Kilas', caption: 'Tahap 03 Filter: pilih tone warna, lalu tambahkan caption dan stiker sebelum lanjut ke tahap simpan.' },
        tip: 'Jangan menumpuk lensa kuat, filter pekat, dan banyak stiker sekaligus. Pilih satu efek utama agar wajah tetap menjadi fokus.',
      },
      {
        heading: 'Contoh hasil photostrip dari studio',
        paragraphs: [
          'Hasil akhir berupa satu bingkai potret 9:16 yang menyusun foto dari atas ke bawah. Pada layout satu foto, bidang foto lebih besar dan ruang teks berada di bagian bawah. Pada layout dua atau tiga foto, setiap foto mendapat bidang lebih kecil tetapi rangkaian ekspresi terlihat sebagai satu cerita.',
          'Perhatikan contoh berikut: warna bingkai, caption, dan footer merek tercetak menyatu dengan foto. Karena semua elemen digambar di canvas, hasil unduhan tidak bergantung pada tangkapan layar. Gunakan contoh ini sebagai pembanding sebelum memilih bingkai yang lebih ramai atau lebih minimal.',
        ],
        image: { src: '/images/studio-steps/final-studio-portrait.png', alt: 'Contoh hasil photostrip potret dari studio Ruang Kilas', caption: 'Contoh hasil potret 9:16 dari studio. Area foto, caption, dan footer digambar langsung di canvas.' },
      },
      {
        heading: 'Menyimpan hasil dan memeriksa sebelum membagikan',
        paragraphs: [
          'Di tahap akhir, periksa apakah teks bingkai, caption, dan stiker tidak menutupi wajah. Unduh versi JPG untuk disimpan di galeri, lalu pilih Boomerang jika kamu juga ingin klip gerak. Jika kamu berfoto bersama orang lain, tunjukkan hasilnya dan minta izin sebelum mengunggah ke media sosial.',
          'Setelah selesai, matikan kamera atau tutup tab studio. Browser akan menghentikan akses kamera, dan file yang sudah diunduh tetap tersimpan di perangkat. Jika ingin mengulang dengan bingkai lain, gunakan tombol kembali daripada memulai sesi baru agar foto tidak perlu diambil ulang.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tangkapan layar tahap simpan dan bagikan di studio Ruang Kilas', caption: 'Tahap 04 Simpan: unduh foto JPG, Boomerang, atau bagikan langsung dari perangkat.' },
      },
    ],
  },
  'photobooth-virtual-untuk-pernikahan': {
    takeaways: [
      'Photobooth virtual memindahkan proses foto ke perangkat tamu, sehingga antrean fisik berkurang.',
      'Bingkai harus diuji dengan foto satu orang, pasangan, dan kelompok sebelum tautan dibagikan.',
      'Sediakan QR, tautan pendek, dan satu petugas yang memahami alur izin kamera.',
      'Jangan mengunggah foto tamu ke akun publik tanpa persetujuan.',
    ],
    sections: [
      {
        heading: 'Menyiapkan bingkai yang terbaca di layar tamu',
        paragraphs: [
          'Mulai dari nama pasangan, tanggal, dan satu ornamen utama. Hindari menumpuk banyak elemen karena layar ponsel tamu lebih kecil daripada monitor tempat kamu mendesain. Teks yang tampak kecil di laptop sering menjadi tidak terbaca setelah foto diperkecil ke bingkai 9:16.',
          'Uji bingkai memakai foto uji dengan satu orang, dua orang, dan kelompok kecil. Perhatikan apakah dagu atau dahi terpotong, apakah teks menutupi wajah, dan apakah warna bingkai menyatu dengan pakaian tamu. Simpan versi final minimal sehari sebelum acara agar ada waktu memperbaiki ejaan.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Pemilihan bingkai photobooth pernikahan di Ruang Kilas', caption: 'Pilih bingkai dengan margin lebar agar tamu yang berfoto berkelompok tetap masuk ke bingkai.' },
      },
      {
        heading: 'Alur tamu dari QR ke hasil foto',
        paragraphs: [
          'Tempel QR di meja penerima tamu, dekat area foto, atau di meja makan. Sertakan tiga instruksi singkat: pindai, izinkan kamera, lalu ikuti hitung mundur. Jika tamu harus mengisi banyak langkah, mereka cenderung berhenti di tengah. Satu kalimat ajakan yang jelas lebih efektif daripada paragraf panjang.',
          'Siapkan juga tautan tertulis di bawah QR untuk tamu yang kamera pemindainya bermasalah. Petugas acara sebaiknya mencoba sendiri dari dua atau tiga ponsel berbeda sebelum tamu datang. Uji di lokasi acara, bukan hanya di rumah, karena kualitas jaringan dan pencahayaan bisa berbeda.',
        ],
        image: { src: '/images/studio-steps/wedding-result-mobile.png', alt: 'Contoh tampilan hasil photobooth pernikahan di ponsel', caption: 'Contoh tampilan hasil di ponsel: tombol bagikan, unduh JPG, dan ulangi foto berada dalam satu layar.' },
      },
      {
        heading: 'Mengelola ekspektasi tamu dan privasi',
        paragraphs: [
          'Beri tahu tamu bahwa foto diproses di perangkat mereka dan tidak otomatis masuk ke galeri pasangan. Jika kamu menyediakan album bersama, jelaskan siapa yang dapat melihat, berapa lama tautan aktif, dan bagaimana cara meminta penghapusan.',
          'Untuk tamu yang tidak nyaman memakai kamera sendiri, sediakan area foto alternatif atau tawarkan bantuan petugas. Photobooth virtual sebaiknya melengkapi dokumentasi resmi, bukan menggantikan fotografer utama. Jelaskan hal ini kepada keluarga agar ekspektasi semua pihak sama.',
        ],
        list: [
          'Sebutkan batas waktu penggunaan tautan jika ada.',
          'Minta izin sebelum menampilkan foto tamu di media sosial pasangan.',
          'Sediakan kontak panitia untuk kendala teknis.',
        ],
      },
    ],
  },
  'checklist-persiapan-photobooth-event': {
    takeaways: [
      'Persiapan photobooth dibagi menjadi H-7, H-1, dan hari acara agar tidak menumpuk di satu waktu.',
      'Uji tautan, QR, izin kamera, dan hasil unduhan di perangkat yang benar-benar akan dipakai.',
      'Cetak petunjuk singkat dan tunjuk satu penanggung jawab teknis.',
      'Sisakan rencana cadangan untuk jaringan dan perangkat.',
    ],
    sections: [
      {
        heading: 'H-7: kunci konsep dan bahan',
        paragraphs: [
          'Tentukan tujuan area foto: apakah untuk suvenir tamu, konten media sosial, atau dokumentasi internal. Dari tujuan itu, tentukan layout, bingkai, dan apakah tamu memakai perangkat sendiri. Kunci nama acara, tanggal, dan ejaan sebelum desain bingkai dikunci.',
          'Siapkan tautan studio, tautan cadangan, dan teks petunjuk. Jika memakai QR, buat QR dari tautan final, bukan tautan pratinjau. Kumpulkan properti sederhana dan pastikan tidak ada benda tajam atau kecil yang mudah lepas.',
        ],
        list: [
          'Nama acara, tanggal, dan ejaan sudah dikonfirmasi.',
          'Bingkai diuji dengan foto satu orang dan kelompok.',
          'Tautan studio dan tautan cadangan sudah disimpan.',
          'Petunjuk tamu ditulis maksimal tiga langkah.',
        ],
      },
      {
        heading: 'H-1: uji perangkat dan lokasi',
        paragraphs: [
          'Buka studio di ponsel dan laptop yang akan dipakai. Periksa izin kamera, pilihan kamera depan, timer, dan hasil unduhan. Jika memakai QR, cetak satu contoh dan pindai dari jarak tamu berdiri. Catat langkah pemulihan jika kamera tidak muncul.',
          'Kunjungi lokasi bila memungkinkan. Periksa cahaya pada jam acara, sinyal internet, dan jalur antrean. Hindari menempatkan area foto di depan pintu keluar atau jalur katering. Tentukan siapa yang bisa dihubungi jika ada kendala listrik atau jaringan.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Uji tahap kamera sebelum acara', caption: 'Uji tahap kamera di perangkat dan lokasi yang akan dipakai, bukan hanya di komputer rumah.' },
      },
      {
        heading: 'Hari acara: 30 menit sebelum tamu datang',
        paragraphs: [
          'Nyalakan perangkat, buka studio, dan lakukan satu sesi foto percobaan dari awal sampai unduh. Periksa ejaan bingkai, kecerahan layar, dan posisi QR. Letakkan petunjuk di tempat yang mudah terlihat tanpa menutupi dekorasi.',
          'Setelah tamu mulai datang, pantau antrean dan bantu tamu yang kesulitan memberi izin kamera. Jangan menambah perubahan desain mendadak kecuali ada kesalahan nama atau tanggal. Catat kendala yang muncul untuk perbaikan acara berikutnya.',
        ],
        tip: 'Simpan tautan studio sebagai catatan di ponsel panitia agar bisa dikirim cepat lewat pesan jika QR bermasalah.',
      },
    ],
  },
  'cara-membuat-qr-photobooth-acara': {
    takeaways: [
      'QR hanya berguna jika mengarah ke tautan final yang sudah diuji dari ponsel.',
      'Kontras, ukuran, dan ruang putih di sekitar kode menentukan keberhasilan pindai.',
      'Sediakan tautan tertulis sebagai cadangan.',
      'Uji hasil cetak di lokasi dengan pencahayaan sebenarnya.',
    ],
    sections: [
      {
        heading: 'Membuat QR dari tautan yang benar',
        paragraphs: [
          'Tentukan lebih dulu halaman yang akan dibuka tamu. Gunakan tautan studio atau halaman acara yang final, bukan URL pratinjau yang memerlukan akses khusus. Buat QR dengan pembuat QR tepercaya, lalu simpan gambar dalam resolusi tinggi agar tidak pecah saat dicetak.',
          'Hindari memperpendek tautan dengan layanan yang menampilkan halaman perantara atau iklan. Jika memakai tautan pendek, uji dari beberapa perangkat dan pastikan halaman tujuan langsung terbuka. Periksa juga apakah tautan memakai HTTPS karena akses kamera memerlukannya.',
        ],
      },
      {
        heading: 'Mendesain dan mencetak QR agar mudah dipindai',
        paragraphs: [
          'Beri ruang putih setidaknya sebesar satu modul QR di sekeliling kode. Jangan menaruh logo atau dekorasi di tengah kode kecuali kamu yakin tingkat koreksi kesalahannya cukup. Cetak dengan kontras tinggi, misalnya hitam di atas putih, dan hindari bahan mengilap yang memantulkan lampu.',
          'Ukuran cetak perlu disesuaikan dengan jarak pindai. QR untuk meja tamu bisa lebih kecil, tetapi QR yang ditempel di dinding sebaiknya lebih besar. Uji hasil cetak dari jarak berdiri, termasuk dengan kamera ponsel yang biasa digunakan tamu.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Halaman studio yang menjadi tujuan QR photobooth', caption: 'Pastikan QR mengarah ke halaman studio yang sudah menampilkan tombol nyalakan kamera tanpa langkah tambahan.' },
      },
      {
        heading: 'Menempatkan QR dan menyiapkan cadangan',
        paragraphs: [
          'Letakkan QR di area registrasi, meja foto, atau meja makan. Sertakan satu kalimat: “Pindai untuk membuat photostrip”. Jangan menaruhnya di permukaan melengkung atau di balik kaca yang memantulkan cahaya.',
          'Cetak tautan tertulis di bawah QR. Jika pemindai tamu bermasalah, mereka masih bisa mengetik alamatnya. Minta petugas mencoba memindai QR saat acara mulai dan simpan salinan digital untuk dicetak ulang jika perlu.',
        ],
        tip: 'Cetak dua salinan QR: satu untuk area utama dan satu untuk area tunggu. Ini mengurangi kerumunan di satu titik.',
      },
    ],
  },
  'rencana-anggaran-photobooth-pernikahan': {
    takeaways: [
      'Bandingkan penawaran berdasarkan pengalaman tamu, bukan hanya harga akhir.',
      'Photobooth virtual dan booth fisik punya komponen biaya yang berbeda.',
      'Minta rincian tertulis tentang cetak, file digital, durasi, dan biaya tambahan.',
      'Sisakan anggaran untuk uji teknis dan koordinasi hari acara.',
    ],
    sections: [
      {
        heading: 'Memecah komponen biaya',
        paragraphs: [
          'Untuk booth fisik, biaya biasanya mencakup perangkat, operator, cetak, desain bingkai, transportasi, dan durasi layanan. Untuk photobooth virtual, komponennya lebih condong ke desain bingkai, penyiapan tautan, QR, dan pendampingan tamu. Keduanya bisa memiliki biaya tambahan untuk revisi atau perpanjangan waktu.',
          'Buat tabel sederhana dengan kolom layanan, jumlah, durasi, dan apa yang termasuk. Ini membuat dua penawaran bisa dibandingkan secara adil. Jangan hanya melihat angka total karena penawaran murah bisa tidak mencakup cetak atau file digital.',
        ],
        list: [
          'Durasi layanan dan jam mulai.',
          'Jumlah cetakan atau batas unduhan.',
          'Desain bingkai dan jumlah revisi.',
          'Perangkat, operator, dan transportasi.',
          'Biaya tambahan untuk listrik atau jaringan.',
        ],
      },
      {
        heading: 'Menyesuaikan dengan alur acara',
        paragraphs: [
          'Perkirakan jam ramai dan letakkan area foto agar tidak menghambat jalur masuk, makan, atau prosesi. Jika acara memiliki banyak tamu, beberapa jam operasional atau area foto tambahan bisa lebih berguna daripada menambah properti. Untuk photobooth virtual, pastikan jaringan di lokasi diuji dan petunjuk akses mudah ditemukan.',
          'Sisakan waktu dan anggaran untuk uji teknis. Satu kali uji di lokasi sering menemukan masalah yang tidak terlihat di rumah, seperti sinyal lemah atau lampu yang membuat layar sulit dibaca.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tahap ekspor hasil photobooth', caption: 'Tanyakan format hasil yang diberikan: foto JPG, Boomerang, atau keduanya.' },
      },
      {
        heading: 'Pertanyaan sebelum menyetujui penawaran',
        paragraphs: [
          'Minta contoh hasil yang relevan dengan acara serupa. Tanyakan siapa yang menyiapkan perangkat, bagaimana jika kamera atau internet bermasalah, dan apakah ada biaya untuk perubahan tanggal. Minta semua kesepakatan dalam tulisan agar mudah diperiksa.',
          'Jangan membandingkan hanya dari harga per jam. Periksa kualitas bingkai, kejelasan petunjuk tamu, dan kemudahan mendapatkan hasil. Pengalaman tamu yang lancar sering lebih berharga daripada selisih biaya kecil.',
        ],
      },
    ],
  },
  'photobooth-online-tanpa-aplikasi': {
    takeaways: [
      'Photobooth berbasis web cukup dibuka lewat browser; tidak perlu menginstal aplikasi.',
      'Akses kamera memerlukan HTTPS dan izin yang diberikan pengguna.',
      'Pengolahan lokal berarti foto tidak otomatis tersimpan di server.',
      'Periksa kebijakan privasi dan tutup sesi setelah selesai.',
    ],
    sections: [
      {
        heading: 'Cara browser mengakses kamera',
        paragraphs: [
          'Saat kamu menekan tombol nyalakan kamera, browser akan meminta izin akses. Jika kamu memilih izinkan, browser menyerahkan aliran kamera ke halaman studio. Halaman kemudian menampilkan pratinjau dan memproses foto di perangkat.',
          'Jika kamu pernah menolak izin, browser mengingat pilihan itu. Buka pengaturan situs melalui ikon gembok di bilah alamat, ubah izin kamera menjadi izinkan, lalu muat ulang halaman. Tutup aplikasi lain yang sedang memakai kamera, seperti panggilan video, karena kamera biasanya hanya bisa dipakai satu aplikasi pada satu waktu.',
        ],
      },
      {
        heading: 'Tanda layanan yang bisa dipercaya',
        paragraphs: [
          'Periksa alamat situs dan pastikan menggunakan HTTPS. Baca penjelasan privasi untuk mengetahui apakah foto diproses lokal atau diunggah. Layanan yang meminta izin kamera tanpa menjelaskan tujuannya sebaiknya tidak digunakan.',
          'Setelah selesai, unduh hasil yang diinginkan lalu tutup tab. Ini menghentikan akses kamera dan membersihkan sesi. Jika memakai perangkat bersama, hapus juga file unduhan dari folder Download bila perlu.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tombol nyalakan kamera pada studio berbasis browser', caption: 'Tombol nyalakan kamera muncul sebelum izin browser diminta; baca petunjuk di panel kanan.' },
        tip: 'Gunakan mode penyamaran hanya jika kamu tidak ingin riwayat dan izin situs tersimpan, tetapi ingat file unduhan tetap tersimpan di perangkat.',
      },
    ],
  },
  'buat-album-foto-bersama-tamu': {
    takeaways: [
      'Tentukan satu kanal berbagi dan satu pengelola album sejak awal.',
      'Jelaskan siapa yang dapat melihat, mengunduh, dan meminta penghapusan.',
      'Minta izin sebelum memakai foto tamu untuk promosi.',
      'Tinjau album setelah acara dan hapus materi yang tidak disepakati.',
    ],
    sections: [
      {
        heading: 'Memilih kanal berbagi yang sederhana',
        paragraphs: [
          'Tamu lebih mudah berpartisipasi jika hanya ada satu tautan dan satu instruksi. Pilih apakah mereka mengunduh foto sendiri, mengirim ke album bersama, atau mengunggah ke galeri privat. Tulis langkahnya dalam satu kartu kecil di area foto.',
          'Jika memakai layanan pihak ketiga, periksa batas akses, masa aktif tautan, dan siapa yang dapat mengunduh. Hindari meminta tamu membuat akun baru kecuali benar-benar diperlukan. Sediakan alternatif mengirim foto lewat pesan bagi tamu yang tidak nyaman memakai album.',
        ],
      },
      {
        heading: 'Menyusun aturan izin yang jelas',
        paragraphs: [
          'Beri tahu tamu bahwa foto mereka mungkin terlihat oleh tamu lain. Jika album akan dipublikasikan atau dipakai untuk promosi, mintalah persetujuan terpisah. Jangan menyamakan izin berfoto dengan izin mengunggah ke akun publik.',
          'Tunjuk satu orang sebagai pengelola album. Pengelola bertugas merapikan unggahan, menghapus foto yang tidak sesuai, dan menanggapi permintaan penghapusan. Setelah acara selesai, tinjau album dan tentukan apakah akan disimpan, dibatasi, atau dihapus.',
        ],
        list: [
          'Siapa yang dapat melihat album.',
          'Apakah foto boleh diunduh dan dibagikan ulang.',
          'Berapa lama album akan disimpan.',
          'Kontak untuk permintaan penghapusan.',
        ],
      },
    ],
  },
  'buat-frame-photobooth-yang-mudah-dibaca': {
    takeaways: [
      'Sisakan area aman untuk wajah sebelum menambah ornamen.',
      'Gunakan satu fokus visual dan pastikan kontras teks cukup.',
      'Uji bingkai pada foto portrait, berdua, dan kelompok.',
      'Periksa hasil unduhan, bukan hanya pratinjau desain.',
    ],
    sections: [
      {
        heading: 'Menentukan area aman dan hierarki visual',
        paragraphs: [
          'Bayangkan wajah akan berada di tengah atau sedikit ke atas. Letakkan nama acara dan tanggal di area tepi, bukan di tengah bidang foto. Jika bingkai memiliki beberapa slot, pastikan jarak antar-slot cukup agar wajah di foto atas tidak menempel ke teks di bawahnya.',
          'Pilih satu elemen utama, misalnya nama acara, lalu gunakan warna aksen untuk detail kecil. Terlalu banyak ornamen membuat mata tidak tahu harus melihat ke mana. Bingkai yang baik terasa rapi saat dilihat sekilas dan tetap terbaca saat diperkecil di layar ponsel.',
        ],
        image: { src: '/images/studio-steps/studio-step2-frame.png', alt: 'Contoh bingkai dengan area teks di bagian bawah', caption: 'Perhatikan bagaimana teks ditempatkan di tepi bawah dan wajah tetap menjadi fokus utama.' },
      },
      {
        heading: 'Menguji keterbacaan dan kontras',
        paragraphs: [
          'Buka bingkai di ponsel dengan kecerahan layar normal. Jika teks sulit dibaca tanpa memperbesar, perbesar ukuran atau sederhanakan latar. Warna teks dan latar yang terlalu dekat akan hilang saat foto dicetak atau dikompres oleh media sosial.',
          'Uji dengan foto asli, bukan hanya bidang kosong. Warna pakaian dan latar ruangan dapat mengubah keseimbangan visual. Minta satu orang yang belum melihat desain untuk menyebutkan nama dan tanggal tanpa dibantu; jika mereka salah, perbaiki sebelum dibagikan.',
        ],
        tip: 'Simpan versi cadangan tanpa ornamen kecil. Jika hasil cetak terlihat ramai, kamu bisa memakai versi sederhana tanpa mengulang desain dari awal.',
      },
    ],
  },
  'panduan-memilih-lokasi-photobooth': {
    takeaways: [
      'Pilih lokasi yang mudah ditemukan tetapi tidak menghambat jalur tamu.',
      'Periksa cahaya pada jam acara, bukan saat ruangan masih kosong.',
      'Uji sinyal internet di titik tersebut jika memakai photobooth berbasis web.',
      'Sisakan ruang tunggu dan jalur keluar yang jelas.',
    ],
    sections: [
      {
        heading: 'Membaca alur tamu di venue',
        paragraphs: [
          'Lokasi terbaik biasanya terlihat dari pintu masuk atau area berkumpul, tetapi tidak berada tepat di jalur utama. Hindari depan pintu keluar, dekat jalur katering, atau di ujung ruangan yang sempit. Tamu perlu ruang untuk berhenti, mengatur pose, dan pergi tanpa menabrak orang lain.',
          'Jika ruang terbatas, tandai titik antre dengan penanda lantai sederhana dan sediakan jalur keluar yang berbeda. Pastikan area foto tidak menutup akses kursi roda, pintu darurat, atau stopkontak yang dibutuhkan vendor lain.',
        ],
      },
      {
        heading: 'Menguji cahaya dan koneksi di lokasi',
        paragraphs: [
          'Lakukan uji foto pada jam acara berlangsung karena lampu panggung, lilin, dan cahaya jendela dapat berubah. Perhatikan pantulan di dinding mengilap dan bayangan yang jatuh di wajah. Jika lampu utama berada di belakang subjek, siapkan lampu tambahan di depan.',
          'Untuk photobooth berbasis web, cek sinyal internet di titik tersebut dengan perangkat yang akan dipakai. Jika sinyal lemah, siapkan opsi jaringan lain yang disetujui venue. Jangan menjanjikan kelancaran sebelum mencoba sendiri di lokasi.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Pengujian kamera di lokasi acara', caption: 'Uji kamera dan pencahayaan dari posisi tamu akan berdiri, bukan dari sisi belakang area foto.' },
        tip: 'Bawa lampu portabel kecil dan tripod. Dua perangkat sederhana ini sering menyelesaikan masalah lokasi yang terlalu gelap.',
      },
    ],
  },
  'persiapan-photobooth-ulang-tahun-anak': {
    takeaways: [
      'Utamakan keamanan: jauhkan kabel, properti tajam, dan benda kecil.',
      'Sesuaikan tinggi kamera dan properti dengan anak, bukan orang dewasa.',
      'Pilih tema sederhana dengan warna cerah dan teks besar.',
      'Minta pendamping mendampingi anak dan hormati pilihan mereka untuk tidak berfoto.',
    ],
    sections: [
      {
        heading: 'Membuat area foto yang aman',
        paragraphs: [
          'Pilih sudut yang tidak dilalui anak berlarian. Sembunyikan kabel di balik meja atau lakban, dan pastikan tripod atau penyangga ponsel tidak mudah tersenggol. Properti seperti topi, papan ucapan, atau balon harus ringan dan tidak memiliki bagian tajam.',
          'Letakkan area foto dekat dengan pengawasan orang dewasa. Sediakan kursi kecil atau bantal untuk anak yang lebih pendek agar wajah mereka masuk ke bingkai. Jangan memaksa anak berdiri di tempat tinggi tanpa pendampingan.',
        ],
      },
      {
        heading: 'Memilih tema dan mengatur sesi',
        paragraphs: [
          'Gunakan satu atau dua warna cerah dan karakter yang disukai anak. Teks sebaiknya besar dan singkat karena anak-anak sering bergerak. Bingkai dengan banyak ornamen kecil akan sulit dibaca pada foto kelompok.',
          'Gunakan timer yang cukup panjang agar anak sempat bersiap. Ambil beberapa foto berturut-turut, lalu pilih yang ekspresinya paling natural. Setelah selesai, tunjukkan hasilnya kepada anak dan orang tua sebelum membagikannya.',
        ],
        image: { src: '/images/studio-steps/studio-step3-filters.png', alt: 'Pemilihan filter warna untuk foto anak', caption: 'Filter warna sebaiknya tidak membuat kulit anak terlihat pucat atau terlalu jenuh.' },
        tip: 'Siapkan tisu dan cermin kecil di dekat area foto. Anak-anak sering ingin merapikan rambut atau wajah sebelum berpose.',
      },
    ],
  },
  'cara-membagikan-foto-acara-dengan-tamu': {
    takeaways: [
      'Pilih satu kanal berbagi dan tulis instruksinya di area foto.',
      'Uji tautan dari ponsel yang berbeda sebelum acara.',
      'Beri tahu batas waktu akses dan cara meminta penghapusan.',
      'Minta izin sebelum memakai foto tamu untuk promosi.',
    ],
    sections: [
      {
        heading: 'Kanal berbagi yang paling sedikit langkah',
        paragraphs: [
          'Unduhan langsung adalah cara paling sederhana jika tamu memakai perangkat sendiri. Jika kamu menyediakan album, pastikan tautan tidak memerlukan akun baru. Tulis langkahnya dalam tiga poin: buka tautan, pilih foto, simpan atau bagikan.',
          'Untuk acara dengan banyak tamu, siapkan satu tautan utama dan satu tautan cadangan. Simpan tautan di catatan panitia agar bisa dikirim ulang lewat pesan. Jangan menaruh tautan hanya di satu QR yang mudah tertutup dekorasi.',
        ],
      },
      {
        heading: 'Izin, akses, dan masa simpan',
        paragraphs: [
          'Jelaskan apakah foto hanya untuk kenangan pribadi atau akan dipublikasikan. Jika album dapat diakses publik, beri tahu tamu sejak awal. Minta persetujuan sebelum mengunggah foto ke akun pasangan atau akun penyelenggara.',
          'Tentukan berapa lama album disimpan dan siapa yang dapat mengunduh. Setelah acara, tinjau album dan hapus foto yang tidak disepakati. Sediakan kontak pengelola agar tamu bisa meminta perubahan atau penghapusan.',
        ],
        image: { src: '/images/studio-steps/wedding-result.jpg', alt: 'Contoh hasil foto acara yang siap dibagikan', caption: 'Contoh hasil akhir yang menyertakan nama acara dan tanggal; pastikan teks tetap terbaca setelah dikompres media sosial.' },
      },
    ],
  },
  'rencana-cadangan-teknis-photobooth': {
    takeaways: [
      'Uji kamera, browser, tautan, dan unduhan sebelum acara.',
      'Siapkan perangkat cadangan dan sumber jaringan alternatif.',
      'Tunjuk satu petugas teknis dengan panduan pemulihan singkat.',
      'Jika layanan berhenti, arahkan tamu ke area foto alternatif tanpa membuat mereka menunggu tanpa penjelasan.',
    ],
    sections: [
      {
        heading: 'Daftar pemulihan cepat',
        paragraphs: [
          'Masalah paling umum adalah izin kamera yang tertolak, kamera dipakai aplikasi lain, dan halaman yang perlu dimuat ulang. Susun daftar tiga langkah: periksa izin situs, tutup aplikasi kamera lain, lalu muat ulang halaman. Simpan daftar ini di ponsel petugas.',
          'Siapkan perangkat cadangan yang sudah diuji. Jika memakai photobooth berbasis web, buka tautan di perangkat cadangan sebelum acara agar tidak perlu mengatur dari awal saat tamu menunggu. Pastikan perangkat terisi daya dan bawa power bank.',
        ],
        list: [
          'Izin kamera situs sudah diizinkan.',
          'Tidak ada aplikasi lain yang memakai kamera.',
          'Halaman dimuat ulang dan tautan benar.',
          'Perangkat cadangan siap dan daya cukup.',
          'Jaringan alternatif tersedia.',
        ],
      },
      {
        heading: 'Ketika masalah tidak bisa diselesaikan cepat',
        paragraphs: [
          'Jika kamera tetap tidak muncul, jangan memaksa tamu menunggu di depan layar. Arahkan mereka ke area foto alternatif atau tawarkan untuk mencoba lagi beberapa menit kemudian. Beri penjelasan singkat dan jangan menyalahkan perangkat tamu.',
          'Catat waktu, perangkat, dan pesan kesalahan yang muncul. Informasi ini membantu penyelenggara memperbaiki masalah setelah acara. Jika memakai vendor, hubungi kontak teknis yang sudah disepakati, bukan mencari bantuan di saluran umum.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tahap ekspor sebagai titik pemeriksaan akhir', caption: 'Uji seluruh alur sampai tahap unduh; masalah ekspor sering baru terlihat di langkah terakhir.' },
        tip: 'Simpan tautan studio, panduan singkat, dan kontak teknis di satu catatan yang dapat dibuka tanpa internet.',
      },
    ],
  },
  'panduan-menggunakan-properti-photobooth': {
    takeaways: [
      'Pilih sedikit properti yang mudah dikenali dan tidak menutupi wajah.',
      'Pastikan properti bersih, ringan, dan aman untuk semua usia.',
      'Sediakan pilihan berfoto tanpa properti.',
      'Rawat properti selama acara dan simpan kembali setelah selesai.',
    ],
    sections: [
      {
        heading: 'Memilih properti yang tepat',
        paragraphs: [
          'Mulai dari dua atau tiga properti yang sesuai tema, misalnya papan ucapan, topi ringan, atau kacamata tanpa lensa. Hindari aksesori besar yang menghalangi mata atau mulut karena ekspresi tamu justru hilang. Warna properti sebaiknya kontras dengan bingkai agar tidak menyatu.',
          'Periksa bahan dan ukuran. Properti untuk anak harus lebih kecil dan tidak memiliki sudut tajam. Untuk acara formal, pilih properti yang rapi dan tidak terlalu lucu agar tetap sesuai suasana.',
        ],
      },
      {
        heading: 'Mengatur dan merawat selama acara',
        paragraphs: [
          'Letakkan properti dalam wadah terbuka di samping area foto, bukan di jalur antrean. Tunjuk petugas untuk merapikan dan membersihkan properti secara berkala. Sediakan tisu atau lap untuk properti yang dipakai bergantian.',
          'Beri pilihan kepada tamu untuk berfoto tanpa properti. Periksa pratinjau sebelum mengambil foto agar aksesori tidak menutupi teks bingkai. Setelah acara, hitung dan simpan properti agar tidak tertinggal di venue.',
        ],
        image: { src: '/images/studio-steps/studio-step3-filters.png', alt: 'Pemilihan filter dan stiker pada studio', caption: 'Stiker digital bisa menjadi alternatif properti fisik yang lebih mudah dibersihkan dan disimpan.' },
        tip: 'Beri label kecil di wadah properti dengan nama acara agar mudah dikembalikan setelah acara.',
      },
    ],
  },
  'cara-mengatur-antrean-photobooth': {
    takeaways: [
      'Tandai jalur masuk dan keluar agar antrean tidak menutup area lain.',
      'Batasi durasi sesi dan jelaskan jumlah foto sejak awal.',
      'Sediakan petugas yang mengarahkan giliran.',
      'Sediakan waktu alternatif bagi tamu yang tidak ingin menunggu.',
    ],
    sections: [
      {
        heading: 'Membuat alur antrean yang terlihat',
        paragraphs: [
          'Gunakan penanda lantai atau papan kecil untuk menunjukkan titik tunggu dan titik foto. Jika memungkinkan, pisahkan jalur masuk dan keluar. Tamu yang sudah selesai tidak perlu melewati antrean orang yang baru datang.',
          'Tulis perkiraan durasi di papan petunjuk, misalnya “sekitar 2 menit per kelompok”. Ini membantu tamu memutuskan apakah mereka akan menunggu atau kembali nanti. Hindari sistem nomor yang rumit jika acara hanya berlangsung beberapa jam.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Area kamera dan panel pengaturan', caption: 'Semakin sedikit langkah di layar, semakin cepat antrean berjalan.' },
      },
      {
        heading: 'Mengelola jam ramai',
        paragraphs: [
          'Antrean biasanya memuncak setelah prosesi atau saat jam makan. Jika memungkinkan, buka area foto lebih awal dan minta tamu datang pada waktu yang lebih lengang. Petugas dapat memberi tahu tamu bahwa mereka bisa kembali setelah acara utama.',
          'Pantau kenyamanan orang yang menunggu, terutama lansia dan anak-anak. Sediakan kursi di dekat area tunggu jika ruang memungkinkan. Jangan menempatkan antrean di depan pintu keluar atau menghalangi akses kursi roda.',
        ],
        tip: 'Sediakan satu petugas khusus antrean dan satu petugas kamera. Dua peran kecil ini membuat alur jauh lebih cepat daripada satu orang mengerjakan semuanya.',
      },
    ],
  },
  'daftar-periksa-hari-acara-photobooth': {
    takeaways: [
      'Lakukan pemeriksaan 30 menit sebelum tamu datang.',
      'Uji seluruh alur dari nyalakan kamera sampai unduh.',
      'Periksa ejaan, pencahayaan, daya, dan posisi petunjuk.',
      'Simpan kontak teknis dan tautan cadangan di tempat yang mudah diakses.',
    ],
    sections: [
      {
        heading: 'Pemeriksaan perangkat dan area',
        paragraphs: [
          'Nyalakan perangkat dan buka studio. Periksa izin kamera, pilihan kamera depan, timer, dan hasil unduhan. Pastikan layar cukup terang dan tidak memantulkan lampu. Jika memakai QR, pindai dari posisi tamu akan berdiri.',
          'Periksa area sekitar: kabel tidak melintang, penyangga stabil, dan properti tidak menghalangi wajah. Pastikan jalur antrean tidak menutup pintu atau akses darurat. Letakkan petunjuk di tempat yang mudah terlihat.',
        ],
        list: [
          'Kamera menyala dan izin diberikan.',
          'Bingkai, nama, dan tanggal sudah benar.',
          'Timer dan jumlah foto sesuai rencana.',
          'Hasil unduhan terbuka dengan baik.',
          'QR atau tautan sudah diuji.',
          'Daya perangkat dan jaringan aman.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Pemeriksaan tahap ekspor sebelum acara', caption: 'Lakukan satu sesi uji sampai tahap unduh; jangan hanya memeriksa pratinjau.' },
      },
      {
        heading: 'Brief singkat untuk petugas',
        paragraphs: [
          'Kumpulkan petugas lima menit sebelum area dibuka. Tunjukkan cara memberi izin kamera, cara mengganti bingkai, dan siapa yang dihubungi jika ada masalah. Pastikan mereka tahu di mana tautan cadangan disimpan.',
          'Sepakati siapa yang menangani antrean dan siapa yang membantu tamu di layar. Setelah acara, minta petugas mencatat kendala yang muncul agar bisa diperbaiki untuk acara berikutnya.',
        ],
      },
    ],
  },
  'checklist-photobooth-online-pertama-kali': {
    takeaways: [
      'Gunakan browser terbaru dan koneksi HTTPS.',
      'Beri izin kamera dan tutup aplikasi lain yang memakai kamera.',
      'Pilih orientasi dan jumlah foto sebelum mulai mengambil.',
      'Unduh hasil sebelum menutup tab.',
    ],
    sections: [
      {
        heading: 'Sebelum membuka studio',
        paragraphs: [
          'Siapkan perangkat yang kamera depan dan belakangnya berfungsi. Bersihkan lensa dengan kain lembut, lalu cari area dengan cahaya cukup. Letakkan perangkat pada penyangga atau tumpukan buku agar stabil dan setinggi mata.',
          'Buka browser terbaru dan pastikan alamat situs diawali HTTPS. Tutup aplikasi panggilan video atau kamera lain. Jika memakai laptop, sambungkan charger agar sesi tidak terputus di tengah.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tampilan awal studio sebelum kamera dinyalakan', caption: 'Tahap awal studio: pilih orientasi, timer, dan efek lensa sebelum menyalakan kamera.' },
      },
      {
        heading: 'Saat sesi berlangsung',
        paragraphs: [
          'Periksa pratinjau sebelum menekan tombol. Pastikan wajah tidak terpotong dan latar tidak lebih terang daripada wajah. Pilih efek lensa dan filter yang sesuai, lalu ikuti hitung mundur. Gunakan slot retake jika satu foto kurang bagus tanpa mengulang semua.',
          'Setelah selesai, periksa hasil di tahap simpan. Unduh JPG dan, jika perlu, Boomerang. Tunjukkan hasil kepada orang yang ikut berfoto sebelum membagikannya. Simpan file di folder yang mudah ditemukan.',
        ],
        image: { src: '/images/studio-steps/studio-step4-export.png', alt: 'Tahap simpan dan bagikan pada sesi pertama', caption: 'Tahap 04 Simpan: periksa hasil akhir, lalu unduh atau bagikan.' },
        tip: 'Lakukan satu sesi percobaan singkat sebelum acara. Ini membantumu mengenali tombol dan alur tanpa membuat tamu menunggu.',
      },
      {
        heading: 'Setelah sesi selesai',
        paragraphs: [
          'Matikan kamera dan tutup tab studio. Periksa folder unduhan dan ganti nama file jika perlu. Jika memakai perangkat bersama, hapus file yang tidak ingin ditinggalkan.',
          'Catat pengaturan yang paling cocok, misalnya timer, lensa, dan bingkai. Catatan ini menghemat waktu saat kamu memakai studio lagi untuk acara berikutnya.',
        ],
      },
    ],
  },
  'memilih-layout-photostrip-sesuai-acara': {
    takeaways: [
      'Layout menentukan jumlah jepretan, durasi sesi, dan bentuk hasil akhir.',
      'Potret cocok untuk satu momen; landscape cocok untuk rangkaian horizontal.',
      'Sesuaikan jumlah foto dengan antrean dan kemampuan tamu berpose.',
      'Uji hasil di ukuran tampilan dan cetak sebelum dipakai.',
    ],
    sections: [
      {
        heading: 'Membandingkan pilihan layout',
        paragraphs: [
          'Ruang Kilas menyediakan orientasi Potret Story dan Landscape dengan pilihan satu, dua, atau tiga foto. Potret dengan satu foto cocok untuk potret cepat atau foto pasangan. Landscape dengan dua atau tiga foto memberi ruang untuk rangkaian ekspresi dan lebih pas untuk kelompok kecil.',
          'Semakin banyak foto, semakin panjang sesi dan semakin besar kemungkinan satu frame berisi ekspresi yang kurang pas. Untuk acara dengan antrean panjang, satu atau dua foto biasanya lebih efisien. Untuk sesi santai, tiga foto memberi variasi yang lebih hidup.',
        ],
        image: { src: '/images/studio-steps/final-studio-portrait.png', alt: 'Contoh layout potret 9:16', caption: 'Layout Potret Story menghasilkan bingkai 9:16 yang mudah dibagikan ke media sosial.' },
      },
      {
        heading: 'Menyesuaikan dengan ruang dan hasil akhir',
        paragraphs: [
          'Perhatikan jarak kamera dan lebar area foto. Di ruang sempit, layout potret lebih mudah diatur. Di area luas, layout landscape bisa mengajak lebih banyak orang masuk tanpa berdesakan. Jika hasil akan dicetak, uji margin dan ukuran teks pada contoh cetak.',
          'Untuk suvenir kecil, layout potret dengan satu atau dua foto biasanya lebih tajam karena wajah mendapat ruang lebih besar. Untuk konten media sosial, landscape dengan tiga foto bisa terasa seperti bercerita. Pilih berdasarkan cara hasil akan digunakan, bukan hanya karena terlihat ramai.',
        ],
        image: { src: '/images/studio-steps/final-studio-landscape.png', alt: 'Contoh layout landscape dengan beberapa foto', caption: 'Layout Landscape menyusun beberapa foto dari atas ke bawah dalam bingkai potret.' },
        tip: 'Cetak satu contoh sebelum memesan banyak. Perbedaan rasio dapat memotong tepi foto atau membuat teks terlalu kecil.',
      },
    ],
  },
  'menyiapkan-hasil-photobooth-untuk-dicetak': {
    takeaways: [
      'Gunakan file unduhan asli, bukan tangkapan layar pratinjau.',
      'Periksa rasio, margin aman, dan ukuran teks sebelum mencetak.',
      'Lakukan satu uji cetak untuk membandingkan warna dan kecerahan.',
      'Simpan file asli dan salinan cetak di tempat terpisah.',
    ],
    sections: [
      {
        heading: 'Memeriksa file sebelum masuk percetakan',
        paragraphs: [
          'Unduh hasil dari tahap simpan dan buka file aslinya. Periksa resolusi, ketajaman wajah, dan apakah teks bingkai terpotong. Tangkapan layar pratinjau biasanya lebih rendah resolusi dan bisa menghasilkan cetakan buram.',
          'Perhatikan rasio. Layout potret 9:16 tidak sama dengan ukuran kertas foto standar. Jika percetakan meminta rasio lain, diskusikan apakah akan menambah margin atau memotong tepi. Jangan memotong area wajah atau teks penting.',
        ],
        image: { src: '/images/studio-steps/final-studio-portrait.png', alt: 'Hasil photostrip potret siap dicetak', caption: 'Periksa hasil akhir dalam ukuran penuh sebelum mengirim ke percetakan.' },
      },
      {
        heading: 'Memilih ukuran, bahan, dan jumlah',
        paragraphs: [
          'Untuk suvenir, cetakan kecil dengan kertas agak tebal lebih nyaman dibawa pulang. Untuk dipajang, pilih ukuran lebih besar dan bahan yang tidak mudah melengkung. Tanyakan apakah percetakan menyediakan potong rapi atau kamu perlu memotong sendiri.',
          'Bandingkan satu cetakan percobaan dengan tampilan layar. Perbedaan kecerahan dan saturasi sering terjadi, terutama pada warna cerah. Setelah cocok, barulah cetak dalam jumlah banyak. Simpan file asli untuk cetak ulang.',
        ],
        tip: 'Sisakan margin aman minimal 3 mm di setiap tepi agar bagian penting tidak terpotong saat proses pemotongan.',
      },
    ],
  },
};
