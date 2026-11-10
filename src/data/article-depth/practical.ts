import type { ArticleSection } from '../articles';

// Additional, topic-specific guidance for the site's core reader journeys.
export const practicalSections: Record<string, ArticleSection[]> = {
  'cara-menggunakan-photobooth-online': [
    { heading: 'Sebelum menutup halaman', paragraphs: [
      'Buka hasil unduhan sekali untuk memastikan gambar tersimpan dan tidak terpotong. Pada perangkat bersama, pindahkan berkas ke tempat penyimpanan yang kamu pilih, lalu hapus salinan yang tidak ingin ditinggalkan. Jika hasil akan dibagikan, periksa kembali nama, tanggal, dan persetujuan semua orang yang terlihat.',
      'Jika ingin mencetak foto, kirim berkas unduhan asli ke percetakan dan mintalah satu contoh cetak sebelum memesan banyak. Untuk berbagi ke perangkat lain, kirim file yang sudah diunduh melalui layanan pilihanmu.'
    ] },
  ],
  'photobooth-online-di-android': [
    { heading: 'Jika tautan dibuka dari aplikasi pesan', paragraphs: [
      'Sebagian aplikasi pesan membuka tautan di jendela browser di dalam aplikasi. Tampilan dan permintaan izin bisa berbeda dari Chrome yang biasa kamu gunakan. Jika tombol kamera tidak merespons atau permintaan izin tidak muncul, gunakan menu aplikasi tersebut untuk membuka tautan di browser utama, kemudian kembali ke studio dan nyalakan kamera.',
      'Pastikan alamat yang terbuka adalah halaman Ruang Kilas yang dimaksud dan memakai HTTPS. Jika kamu sebelumnya menolak izin, periksa izin kamera untuk situs di browser, bukan hanya izin aplikasi kamera bawaan Android. Nama menu dapat berbeda menurut merek ponsel dan versi sistem.'
    ] },
    { heading: 'Membedakan izin browser dan izin situs', paragraphs: [
      'Ada dua tempat yang dapat membatasi kamera: pengaturan Android untuk aplikasi browser dan pengaturan browser untuk sebuah situs. Pertama pastikan aplikasi browser diizinkan memakai kamera di pengaturan perangkat. Kemudian buka pengaturan situs di browser dan periksa apakah ruangkilas.my.id diblokir. Setelah mengubah izin, kembali ke tab studio dan pilih Coba lagi.',
      'Jika masih muncul pesan kamera sedang digunakan, tutup panggilan video, aplikasi kamera, atau tab studio lain yang masih aktif. Cobalah kamera bawaan ponsel untuk memastikan perangkatnya berfungsi. Jangan menghapus foto atau data browser sebagai langkah pertama; pemeriksaan izin lebih tepat untuk masalah ini.'
    ] },
    { heading: 'Memeriksa hasil di ponsel', paragraphs: [
      'Saat semua foto sudah diambil, selesaikan tahap Bingkai dan Filter sampai halaman Simpan. Pilih Unduh foto JPG dan tunggu browser selesai menyiapkan berkas. Buka daftar unduhan browser atau aplikasi pengelola berkas, lalu cari unduhan terbaru. Letak file dan tombol menyimpan ke galeri bergantung pada aplikasi di perangkat.',
      'Buka JPG sebelum membagikannya agar kamu tahu hasil yang dikirim adalah versi lengkap. Untuk mencetak, gunakan file unduhan asli. Bila memakai ponsel pinjaman, sepakati siapa yang menyimpan hasil dan hapus salinan yang tidak lagi diperlukan.'
    ] },
    { heading: 'Pilihan ketika video tidak tersedia', paragraphs: [
      'Boomerang bergantung pada kemampuan perekaman dan ekspor browser. Coba selesaikan sesi dengan browser yang diperbarui, pastikan perangkat memiliki ruang penyimpanan, dan tunggu proses pembuatan selesai. Jika video tetap gagal, unduh foto JPG dan gunakan hasil foto tersebut; tidak perlu mengulangi seluruh sesi hanya untuk menyimpan gambar.',
      'Sebelum acara, coba satu sesi singkat pada ponsel yang benar-benar akan digunakan. Periksa izin kamera, orientasi, unduhan, dan cara membuka hasil. Catat langkah yang berbeda pada perangkat panitia agar bantuan kepada tamu lebih cepat.'
    ] },
  ],
  'photobooth-online-di-iphone': [
    { heading: 'Buka studio melalui Safari', paragraphs: [
      'Jika tautan diterima lewat aplikasi pesan atau media sosial, halaman mungkin terbuka di browser dalam aplikasi. Bila izin kamera tidak muncul atau kamera tidak mulai, buka tautan yang sama di Safari dan coba lagi. Pastikan alamat situs menggunakan HTTPS; nama menu untuk membuka tautan di Safari dapat berbeda menurut aplikasi pengirim.',
      'Saat diminta, izinkan akses kamera untuk situs. Jika pernah memilih tolak, periksa pengaturan kamera untuk situs di Safari dan izin Safari di pengaturan iPhone. Setelah izin diubah, kembali ke studio dan pilih Coba lagi. Perangkat dan versi iOS yang berbeda dapat menampilkan nama menu yang berbeda.'
    ] },
    { heading: 'Ketika pratinjau kosong', paragraphs: [
      'Mulai dengan memeriksa apakah aplikasi kamera iPhone dapat menampilkan gambar. Tutup aplikasi panggilan video dan tab lain yang mungkin memakai kamera, lalu coba lagi dari studio. Jika kamera belakang muncul padahal kamu ingin selfie, gunakan tombol Balik pada panel kamera; periksa pratinjau sebelum mengambil foto.',
      'Izin kamera dan kualitas cahaya adalah dua masalah yang berbeda. Jika gambar muncul tetapi wajah gelap, arahkan wajah ke jendela atau lampu yang lembut. Hindari sumber cahaya terang tepat di belakang kepala. Ambil satu foto percobaan dan lihat hasilnya sebelum melanjutkan ke bingkai.'
    ] },
    { heading: 'Simpan berkas dan temukan kembali', paragraphs: [
      'Setelah seluruh slot terisi, lanjutkan ke Bingkai, Filter, dan Simpan. Tekan Unduh foto JPG dan tunggu hingga unduhan selesai. Periksa daftar unduhan Safari atau aplikasi Files/Berkas. Jika kamu ingin foto muncul di aplikasi Photos, buka berkas dan gunakan pilihan berbagi atau simpan gambar yang tersedia pada perangkatmu.',
      'Simpan JPG dari perangkat pembuat terlebih dahulu. Jika iPhone digunakan bersama, kirim berkas melalui layanan pilihanmu dan pastikan file sudah diterima pemilik foto sebelum menghapus salinan lokal.'
    ] },
    { heading: 'Sebelum membagikan Boomerang', paragraphs: [
      'Di tahap Simpan, pilih durasi yang tersedia dan tunggu video selesai dibuat. Dukungan format dan cara membuka file berbeda antarversi browser. Jika tombol ekspor tidak tersedia atau pembuatan gagal, gunakan unduhan JPG sebagai cadangan. Periksa hasil video di perangkat sebelum mengirimkannya kepada tamu atau mengunggahnya.',
      'Untuk sesi kelompok, beri tahu setiap orang bagaimana foto akan digunakan. Menyimpan di perangkat pribadi berbeda dari mengunggah ke akun publik atau album bersama. Minta persetujuan orang yang tampak jelas sebelum membagikan hasil di luar kelompok.'
    ] },
  ],
  'photobooth-online-di-laptop': [
    { heading: 'Periksa webcam dan izin sistem', paragraphs: [
      'Jika laptop memiliki webcam internal dan kamera eksternal, tentukan perangkat yang ingin dipakai sebelum sesi. Periksa kabel dan penutup fisik kamera. Coba kamera melalui aplikasi bawaan perangkat untuk memastikan gambar muncul, lalu tutup aplikasi itu sebelum membuka studio.',
      'Saat browser meminta izin kamera, pilih perangkat yang sesuai dan izinkan akses. Jika sebelumnya diblokir, periksa izin untuk ruangkilas.my.id pada pengaturan situs di browser. Periksa juga izin kamera untuk aplikasi browser pada sistem operasi. Kedua izin ini terpisah, sehingga salah satunya masih dapat menghalangi akses.'
    ] },
    { heading: 'Atur posisi untuk satu orang atau kelompok', paragraphs: [
      'Letakkan layar stabil pada permukaan datar dan usahakan kamera setinggi mata. Untuk sesi bersama, mundurkan perangkat sampai wajah di sisi kiri dan kanan masuk pratinjau. Hindari meletakkan laptop terlalu rendah karena sudut dari bawah dapat memotong bagian atas kepala ketika orang berdiri.',
      'Hadapkan peserta ke cahaya yang lembut. Jika jendela berada di belakang, putar posisi atau tambah lampu di depan. Gunakan timer yang memberi waktu bagi orang yang menekan tombol untuk kembali ke posisi. Ambil satu percobaan untuk memeriksa bingkai sebelum acara dimulai.'
    ] },
    { heading: 'Menyimpan di komputer dan membagikan ke ponsel', paragraphs: [
      'Setelah tahap Bingkai dan Filter, buka tahap Simpan lalu unduh foto JPG. Periksa folder Downloads/Unduhan dan buka berkas untuk melihat hasil penuh. Jika memakai komputer bersama, pindahkan hasil melalui cara yang dipilih pemilik foto, misalnya penyimpanan pribadi atau pesan, lalu hapus salinan lokal sesuai kesepakatan.',
      'Untuk hasil cetak atau arsip, kirim file JPG yang diunduh di laptop melalui layanan berbagi yang kamu percayai. Periksa file yang diterima sebelum menutup sesi dan sebelum menghapus salinan di perangkat pembuat.'
    ] },
    { heading: 'Jika acara memakai perangkat bersama', paragraphs: [
      'Sebelum tamu datang, uji satu sesi dari awal hingga unduh. Tentukan siapa yang mengoperasikan kamera, di mana hasil disimpan, dan kapan salinan di komputer dihapus. Jelaskan alur ini kepada tamu agar mereka dapat memutuskan apakah ingin ikut berfoto.',
      'Mode layar penuh dapat membantu mengurangi gangguan, tetapi siapkan cara keluar agar petugas tetap bisa membuka folder unduhan atau memperbaiki izin. Simpan kontak bantuan dan rencana cadangan jika koneksi atau webcam gagal. Hindari menganggap bahwa semua peserta setuju hasilnya dipublikasikan hanya karena mereka ikut berfoto.'
    ] },
  ],
  'panduan-frame-custom-warna-motif': [
    { heading: 'Mulai dari kebutuhan hasil akhir', paragraphs: [
      'Tentukan terlebih dahulu apakah hasil akan dilihat di layar ponsel, dikirim melalui pesan, atau dicetak sebagai kenangan. Nama acara dan tanggal yang terbaca pada layar besar belum tentu mudah dibaca pada cetakan kecil. Buat satu contoh, buka dalam ukuran sebenarnya, dan periksa apakah informasi utama masih terlihat tanpa memperbesar gambar.',
      'Untuk acara bersama, pertimbangkan apakah bingkai akan dipakai satu orang atau kelompok. Sisakan ruang untuk wajah di tepi dan hindari elemen dekoratif besar di area foto. Jika nama acara panjang, gunakan bentuk yang tetap jelas dan sudah disepakati penyelenggara; jangan mengubah nama atau tanggal hanya agar muat.'
    ] },
    { heading: 'Cara memilih warna dan motif', paragraphs: [
      'Pilih satu warna dasar yang mendukung foto, lalu tambahkan motif seperlunya. Periksa kontras teks terhadap latar: teks terang di atas warna yang terlalu pucat dapat sulit dibaca. Warna merek atau tema acara boleh menjadi titik awal, tetapi keterbacaan nama dan wajah perlu tetap diuji pada pratinjau.',
      'Jika menggunakan kode warna, salin kode yang sudah disetujui agar hasil konsisten. Simpan catatan warna dan motif di luar sesi bila akan dipakai lagi; perubahan di halaman studio adalah bagian dari sesi yang sedang dikerjakan. Layar yang berbeda dan hasil cetak dapat menampilkan warna dengan sedikit perbedaan.'
    ] },
    { heading: 'Periksa caption dan stiker', paragraphs: [
      'Masukkan teks pendek seperti nama acara atau tanggal dan periksa ejaannya sebelum mengunduh. Jangan memasukkan nomor telepon, alamat rumah, atau informasi tamu yang tidak ingin tersebar, karena teks menyatu dengan gambar yang dibagikan. Jika memakai stiker, geser menjauhi wajah dan tulisan yang perlu dibaca.',
      'Bandingkan hasil dengan dan tanpa stiker. Jika mata langsung tertuju pada ornamen, coba kurangi jumlahnya. Untuk acara yang menghadirkan banyak kelompok, desain netral sering lebih mudah dipakai ulang daripada bingkai yang hanya cocok untuk satu pose atau satu orang.'
    ] },
    { heading: 'Uji sebelum dipakai di acara', paragraphs: [
      'Lakukan satu sesi dengan foto contoh yang boleh dipakai, lalu unduh JPG dari tahap Simpan. Buka file unduhan, bukan hanya pratinjau kecil, dan periksa batas foto, wajah di tepi, teks, serta warna. Jika akan dicetak, tanyakan rasio yang dibutuhkan percetakan dan minta satu cetakan percobaan.',
      'Untuk bingkai acara yang dibuat khusus, kirimkan nama, tanggal, contoh warna, dan batas waktu kepada tim melalui halaman kontak. Jelaskan perangkat dan cara tamu akan membuka photobooth. Kesepakatan tentang materi dan koreksi sejak awal membantu menghindari perubahan mendadak pada hari acara.'
    ] },
  ],
  'panduan-efek-lensa-ruang-kilas': [
    { heading: 'Bedakan efek lensa dan filter warna', paragraphs: [
      'Efek lensa dipilih pada tahap Kamera dan terlihat pada pratinjau saat mengambil foto. Filter warna dipilih pada tahap Filter setelah foto dan bingkai tersedia. Karena keduanya diterapkan pada tahap yang berbeda, pilih efek lensa yang diinginkan sebelum mengambil gambar, kemudian nilai apakah hasilnya masih memerlukan filter warna.',
      'Mulailah dengan Original jika ingin membandingkan kondisi cahaya tanpa efek lensa. Ambil foto percobaan, lalu lihat kembali apakah wajah cukup terang dan seluruh orang masuk bingkai. Jika memilih efek yang kuat, filter warna yang lebih ringan dapat menjaga detail wajah tetap terlihat.'
    ] },
    { heading: 'Menentukan efek untuk suasana foto', paragraphs: [
      'Untuk potret kelompok, perhatikan bagaimana wajah di tengah dan di tepi pratinjau terlihat. Efek dengan distorsi dapat memberi kesan lucu, tetapi posisi terlalu dekat ke kamera dapat membuat wajah tidak seimbang. Mundur sedikit, atur posisi kelompok, dan lihat kembali hasilnya sebelum seluruh jepretan diambil.',
      'Untuk suasana hangat atau nostalgia, perhatikan cahaya dan latar sebelum memilih efek bergaya film. Latar yang sangat ramai dapat membuat tekstur terlihat berlebihan, sedangkan cahaya redup dapat mengurangi detail wajah. Pilih satu ciri yang ingin ditonjolkan dan gunakan hasil percobaan untuk menilai apakah efek tersebut membantu.'
    ] },
    { heading: 'Jika pratinjau terlihat terlalu gelap atau berubah bentuk', paragraphs: [
      'Coba Original lebih dahulu untuk membedakan kondisi kamera dan karakter efek. Jika tampilan asli juga gelap, hadapkan wajah ke cahaya, bersihkan lensa, dan hindari jendela yang sangat terang di belakang. Jika hanya satu efek yang terlihat terlalu kuat, pilih efek lain atau gunakan Original untuk sesi tersebut.',
      'Pratinjau membantu memeriksa arah wajah dan komposisi, tetapi sebaiknya lihat juga file hasil unduhan. Setelah mengambil foto, lanjutkan ke Bingkai dan Filter, lalu unduh JPG untuk memastikan warna dan detail sesuai kebutuhan. Jika satu slot kurang baik, gunakan pilihan mengambil ulang slot sebelum melanjutkan.'
    ] },
    { heading: 'Membuat pilihan konsisten untuk acara', paragraphs: [
      'Pada perangkat bersama, pilih satu atau dua efek yang sesuai tema agar petugas mudah menjelaskan pilihan kepada tamu. Contohnya, tawarkan Original untuk potret netral dan satu efek yang lebih ekspresif untuk tamu yang menginginkannya. Beri tahu tamu bahwa mereka dapat memilih sendiri jika waktu acara memungkinkan.',
      'Uji pilihan di lokasi dengan pencahayaan yang benar. Warna dekorasi dan lampu venue dapat berbeda dari layar saat desain dibuat di rumah. Simpan satu hasil contoh dengan persetujuan orang di dalamnya, lalu gunakan sebagai panduan bagi panitia tanpa menganggap semua perangkat akan menghasilkan tampilan yang identik.'
    ] },
  ],
  'solusi-kamera-gelap-buram-photobooth': [
    { heading: 'Pisahkan masalah izin, cahaya, dan ketajaman', paragraphs: [
      'Jika pratinjau sama sekali tidak muncul, mulai dari izin kamera dan pastikan aplikasi lain tidak menggunakannya. Jika gambar muncul tetapi wajah gelap, perbaiki arah cahaya. Jika wajah terlihat tetapi tidak tajam, periksa kebersihan lensa, kestabilan perangkat, dan apakah orang bergerak saat hitung mundur berakhir.',
      'Ubah satu hal pada satu waktu dan ambil foto percobaan. Misalnya, pilih Original, perbaiki pencahayaan, lalu bandingkan hasil unduhan. Cara ini membantu mengetahui apakah masalah muncul sebelum efek diterapkan atau hanya terlihat saat kombinasi efek dan filter tertentu digunakan.'
    ] },
    { heading: 'Langkah ketika gambar terlalu gelap', paragraphs: [
      'Pindahkan perangkat sehingga wajah menghadap jendela atau lampu yang cukup lembut. Hindari jendela terang tepat di belakang subjek. Pada malam hari, gunakan lampu di depan dengan jarak nyaman; jangan mengarahkan lampu sangat dekat ke mata. Periksa apakah wajah setiap orang mendapat cahaya yang relatif merata.',
      'Jika foto kelompok memiliki baris depan dan belakang, lihat apakah orang di belakang tertutup bayangan. Ubah susunan atau pindahkan sumber cahaya, lalu coba lagi. Filter warna tidak dapat mengembalikan semua detail yang hilang karena kondisi awal terlalu gelap, jadi selesaikan pencahayaan sebelum memilih filter.'
    ] },
    { heading: 'Langkah ketika hasil buram', paragraphs: [
      'Bersihkan lensa secara perlahan menggunakan kain yang sesuai. Letakkan ponsel atau laptop pada penyangga stabil dan minta semua orang menahan pose hingga foto benar-benar diambil. Timer yang lebih panjang dapat memberi waktu kepada orang yang menekan tombol untuk kembali ke tempatnya.',
      'Pada ruangan redup, gerakan kecil lebih mudah terlihat sebagai blur. Tambah cahaya dan ambil ulang slot yang kurang jelas. Jika hanya satu wajah yang terpotong, periksa jarak kamera dan posisi orang di tepi. Hindari membesarkan pratinjau lalu menyimpannya sebagai tangkapan layar; gunakan file unduhan JPG.'
    ] },
    { heading: 'Jika kamera tidak menyala sama sekali', paragraphs: [
      'Pastikan halaman dibuka melalui HTTPS dan periksa izin kamera untuk situs di browser. Tutup aplikasi panggilan video serta tab lain yang memakai kamera. Pada laptop, periksa juga penutup fisik dan pilihan webcam; pada ponsel, coba tombol Balik jika kamera yang aktif bukan yang diinginkan.',
      'Jika masalah tetap terjadi, catat perangkat, browser, pesan yang muncul, dan langkah yang sudah dicoba sebelum menghubungi Ruang Kilas. Jangan mengirim foto pribadi atau data sensitif bila tidak diperlukan untuk menjelaskan masalah. Sambil menunggu bantuan, siapkan perangkat cadangan untuk acara.'
    ] },
  ],
  'cara-membuat-boomerang-photobooth': [
    { heading: 'Siapkan sesi dengan gerakan yang jelas', paragraphs: [
      'Letakkan perangkat di tempat stabil dan pastikan semua orang terlihat dalam pratinjau. Pilih gerakan sederhana seperti melambaikan tangan atau saling menoleh, lalu berlatih mengikuti hitung mundur. Gerakan yang terlalu cepat atau keluar dari bingkai dapat sulit dipahami saat diputar berulang.',
      'Perhatikan pencahayaan sebelum merekam. Wajah yang gelap atau latar yang terlalu terang akan tetap memengaruhi hasil gerak. Pilih efek lensa sebelum mengambil foto dan periksa apakah gerakan masih nyaman dilihat dengan bingkai yang kamu pilih.'
    ] },
    { heading: 'Pilih durasi dan simpan', paragraphs: [
      'Setelah foto, bingkai, dan filter selesai, buka tahap Simpan. Pilih Boomerang dan durasi yang tersedia, yaitu 3 atau 4 detik. Tekan tombol unduh dan tunggu perangkat menyiapkan video. Waktu proses serta format yang dihasilkan bergantung pada kemampuan browser dan perangkat.',
      'Buka file video dari daftar unduhan untuk memastikan gambar dan gerakan sesuai. Jika ingin membagikannya lewat aplikasi lain, gunakan pilihan berbagi perangkat bila tersedia atau pilih file dari aplikasi tujuan. Beberapa aplikasi dapat memproses ulang video, sehingga periksa pratinjau sebelum mengirim.'
    ] },
    { heading: 'Ketika video gagal dibuat', paragraphs: [
      'Ketersediaan Boomerang bergantung pada dukungan perekaman dan ekspor browser. Perbarui browser, pastikan ruang penyimpanan cukup, dan coba lagi setelah proses sebelumnya selesai. Pada perangkat yang terbatas, tutup aplikasi berat lain untuk memberi ruang kerja bagi browser.',
      'Jika video tetap tidak tersedia, simpan foto JPG dari sesi yang sama. Foto adalah hasil terpisah dan dapat menjadi cadangan untuk dibagikan atau dicetak. Jika perlu bantuan, catat browser, perangkat, dan pesan kesalahan tanpa mengirim hasil foto pribadi yang tidak diperlukan.'
    ] },
    { heading: 'Sebelum mengunggah atau mengirim', paragraphs: [
      'Tonton video satu kali dengan suara perangkat sesuai kebutuhan dan periksa apakah ada orang atau informasi di latar yang tidak sengaja terekam. Minta persetujuan orang yang terlihat sebelum mengirim ke grup besar atau mengunggah ke akun publik. Jika ada yang tidak nyaman, pilih hasil lain atau simpan untuk penggunaan pribadi.',
      'Unduh file sebelum menutup tab. Untuk menyimpan Boomerang, gunakan tombol unduh video dan periksa berkasnya di perangkat pembuat. Simpan juga foto JPG secara terpisah jika kamu membutuhkan kedua format.'
    ] },
  ],
  'fitur-ruang-kilas-vs-photobooth-online-lain': [
    { heading: 'Cara membandingkan berdasarkan kebutuhan', paragraphs: [
      'Mulai dengan menentukan hasil yang kamu butuhkan: foto pribadi untuk dibagikan, aktivitas tamu acara, atau gambar yang akan dicetak. Untuk setiap layanan yang dipertimbangkan, coba alur dari membuka halaman sampai menyimpan file. Perhatikan apakah perlu membuat akun, apakah kamera berfungsi di perangkat yang akan digunakan, dan bagaimana file hasil diambil.',
      'Bandingkan fitur yang benar-benar diperlukan, bukan hanya jumlah efek. Untuk acara dengan banyak tamu, petunjuk singkat dan akses yang mudah dapat lebih berguna daripada pilihan yang terlalu banyak. Untuk sesi pribadi, kebebasan memilih lensa dan bingkai mungkin lebih penting. Ketersediaan fitur layanan lain dapat berubah, jadi periksa langsung sebelum memilih.'
    ] },
    { heading: 'Apa arti pemrosesan lokal bagi foto', paragraphs: [
      'Di studio Ruang Kilas, pengambilan dan pengolahan foto berlangsung di browser perangkat. Ini berarti hasil sesi perlu disimpan oleh pengguna; foto tidak otomatis terkumpul dalam album penyelenggara. Jika panitia menginginkan album bersama, siapkan proses dan layanan terpisah, serta jelaskan pilihan berbagi kepada tamu.',
      'Pemrosesan lokal tidak mengontrol apa yang terjadi setelah file dikirim ke aplikasi pesan, album, atau media sosial. Periksa pengaturan layanan tujuan dan minta izin orang yang terlihat sebelum mempublikasikan hasil. Pada perangkat bersama, tentukan pula siapa yang akan menghapus file unduhan setelah diserahkan kepada pemiliknya.'
    ] },
    { heading: 'Membandingkan hasil unduhan', paragraphs: [
      'Di Ruang Kilas, hasil foto diunduh sebagai JPG dari tahap Simpan. Ada pilihan Boomerang jika browser mendukung ekspor. Unduh JPG pada perangkat pembuat dan gunakan cara berbagi yang tersedia di perangkat. Periksa format, ukuran, dan cara pemindahan hasil sebelum memakai layanan pada acara.',
      'Jika hasil akan dicetak, lakukan uji cetak dengan file asli dan diskusikan rasio dengan percetakan. Jika hasil hanya akan dibagikan secara pribadi, uji cara mengirimnya pada perangkat yang dipakai. Jangan berasumsi setiap layanan memiliki album, penyimpanan otomatis, atau jenis file yang sama.'
    ] },
    { heading: 'Kapan fitur tambahan perlu ditanyakan', paragraphs: [
      'Untuk acara khusus, tuliskan nama, tanggal, tema, jumlah tamu, dan apakah tamu memakai ponsel sendiri atau perangkat bersama. Tanyakan kebutuhan bingkai khusus melalui kontak Ruang Kilas. Jelaskan juga kapan desain perlu diperiksa dan siapa yang memberi persetujuan akhir agar informasi pada hasil tidak salah.',
      'Sebelum memutuskan, lakukan satu sesi uji dengan kondisi serupa acara: koneksi di lokasi, pencahayaan, izin kamera, serta cara menyimpan. Jika ada fitur yang wajib tersedia, pastikan melalui uji atau konfirmasi kepada penyedia. Perbandingan yang baik menggunakan kebutuhan dan keterbatasan yang sama untuk setiap pilihan.'
    ] },
  ],
  'photobooth-virtual-untuk-pernikahan': [
    { heading: 'Contoh alur tamu dari meja penerima', paragraphs: [
      'Letakkan petunjuk di meja penerima atau area foto dengan pesan sederhana: buka tautan, izinkan kamera, ambil foto, lalu simpan hasil. Sebelum dicetak, panitia perlu memastikan QR menuju halaman acara yang benar. Uji dengan perangkat yang berbeda dan tuliskan tautan sebagai cadangan untuk tamu yang kesulitan memindai.',
      'Tentukan satu orang yang tahu cara menjelaskan izin kamera dan lokasi tombol unduh. Petugas tidak perlu mengambil alih ponsel atau meminta kata sandi tamu. Bila tamu tidak ingin menggunakan perangkatnya, sediakan pilihan ikut berfoto di area lain atau melewatkan aktivitas tanpa tekanan.'
    ] },
    { heading: 'Persiapan bingkai dan lokasi', paragraphs: [
      'Kumpulkan nama yang benar, tanggal acara, warna utama, dan contoh gaya sebelum meminta bingkai khusus. Mintalah pasangan atau keluarga memeriksa ejaan akhir. Uji bingkai dengan satu orang dan kelompok agar teks tidak menutupi wajah. Perhatikan hasil pada layar ponsel kecil maupun pada file yang sudah diunduh.',
      'Pilih lokasi yang mudah ditemukan dan tidak memotong jalur masuk, jalur makanan, atau akses tamu. Cahaya lembut yang menghadap wajah lebih membantu daripada latar yang sangat terang. Jika area foto juga dipakai untuk kegiatan lain, tentukan waktu dan petugas yang dapat mengarahkan antrean.'
    ] },
    { heading: 'Jelaskan tempat foto tersimpan', paragraphs: [
      'Studio Ruang Kilas memproses foto di perangkat pembuat dan tidak otomatis mengumpulkannya untuk pasangan. Bila pasangan menginginkan album bersama, panitia perlu memilih cara terpisah untuk menerima file dan menjelaskan siapa yang dapat melihat, mengunduh, serta menghapusnya.',
      'Berikan pilihan kepada tamu untuk menyimpan foto sendiri tanpa mengunggah ke album. Minta izin sebelum foto dipublikasikan, terutama untuk anak-anak melalui orang tua atau wali. Sediakan kontak panitia agar permintaan koreksi atau penghapusan dapat ditangani dengan jelas.'
    ] },
    { heading: 'Rencana cadangan pada hari acara', paragraphs: [
      'Sebelum tamu datang, ulangi uji tautan dan kamera di lokasi. Catat apakah jaringan cukup stabil dan apakah petunjuk terbaca dari tempat tamu berdiri. Siapkan tautan tertulis, perangkat cadangan bila tersedia, dan nomor petugas yang dapat membantu. Jangan mengganti tautan sesudah QR dicetak tanpa memperbarui materi.',
      'Jika jaringan atau kamera bermasalah, beri tahu tamu dengan ramah dan arahkan ke pilihan dokumentasi lain. Setelah acara, minta panitia mencatat kendala serta tindak lanjut terkait album. Evaluasi ini membantu penyelenggara memperbaiki alur pada acara berikutnya tanpa harus mengumpulkan data tamu yang tidak diperlukan.'
    ] },
  ],
  'panduan-undangan-pernikahan-digital': [
    { heading: 'Contoh daftar isi untuk disepakati keluarga', paragraphs: [
      'Buat satu dokumen sumber yang berisi nama lengkap kedua mempelai, nama orang tua bila akan dicantumkan, hari dan tanggal, jam beserta zona waktunya, nama tempat, alamat, dan tautan peta. Pisahkan informasi akad, pemberkatan, atau resepsi sesuai acara yang benar-benar diadakan. Tentukan satu orang untuk mengumpulkan koreksi.',
      'Tambahkan informasi yang membantu tamu mengambil keputusan: cara menuju lokasi, ketentuan pakaian bila ada, kontak panitia, serta tenggat RSVP jika diperlukan. Tanyakan kepada keluarga apakah ada detail pribadi yang tidak perlu dipublikasikan. Undangan yang beredar melalui tautan dapat diteruskan oleh penerimanya.'
    ] },
    { heading: 'Uji sebagai tamu yang baru menerima tautan', paragraphs: [
      'Kirim draf kepada satu orang yang tidak ikut menyusun isi. Minta ia menemukan tanggal, waktu, dan alamat tanpa diberi petunjuk terlebih dahulu. Buka halaman melalui ponsel dan periksa apakah teks terbaca, tombol peta menuju lokasi yang benar, dan bagian penting tidak tertutup elemen dekorasi.',
      'Jika menyediakan RSVP, coba isi dengan jawaban percobaan dan pastikan ada petunjuk setelah pengiriman. Hapus atau tandai data percobaan sesuai alur yang dipakai. Jika ada musik, beri tamu kendali atas pemutaran dan pastikan informasi utama tetap dapat diakses tanpa mendengarkan audio.'
    ] },
    { heading: 'Kelola RSVP dan perubahan rencana', paragraphs: [
      'Tentukan pertanyaan sesuai kebutuhan acara, misalnya nama, kehadiran, dan jumlah pendamping. Cantumkan batas waktu dan kontak untuk mengubah jawaban. Jika sebagian tamu lebih nyaman menjawab melalui telepon atau pesan, catat jawabannya dalam daftar yang sama agar jumlah tidak terhitung dua kali.',
      'Batasi akses daftar ke orang yang mengurus acara. Jika jadwal atau lokasi berubah, perbarui halaman dan beri kabar secara langsung kepada tamu yang sudah menerima tautan; jangan menganggap semua orang akan membuka ulang undangan. Periksa kembali tautan peta dan pastikan panitia mengetahui informasi yang paling baru.'
    ] },
    { heading: 'Membagikan undangan dengan pesan personal', paragraphs: [
      'Kelompokkan tamu berdasarkan cara komunikasi yang nyaman bagi mereka. Sertakan sapaan, maksud undangan, dan tautan dalam pesan yang jelas. Untuk undangan yang mencakup satu keluarga, jelaskan siapa yang diundang dan bagaimana konfirmasi dilakukan agar penerima tidak perlu menebak.',
      'Jika mengirim pengingat, beri waktu yang wajar dan prioritaskan tamu yang belum menjawab. Periksa kembali nama penerima dan tautan sebelum mengirim. Simpan versi final materi yang sudah disetujui agar perubahan ejaan atau jadwal dapat dilacak oleh panitia tanpa membuat banyak versi yang saling bertentangan.'
    ] },
  ],
};

export const practicalFollowups: Record<string, ArticleSection> = {
  'cara-menggunakan-photobooth-online': { heading: 'Contoh sesi untuk dua orang', paragraphs: [
    'Bayangkan kamu dan teman ingin satu foto untuk dikirim lewat pesan. Letakkan ponsel pada penyangga, pilih orientasi yang membuat kedua wajah terlihat, dan nyalakan kamera. Pilih waktu hitung mundur yang cukup untuk kembali ke posisi. Lihat pratinjau, ambil foto, lalu buka slot tersebut untuk mengambil ulang jika salah satu wajah terpotong.',
    'Lanjutkan ke Bingkai dan pilih desain yang menyisakan ruang bagi kedua wajah. Di tahap Filter, periksa warna dan posisi stiker. Pada tahap Simpan, unduh JPG, buka hasilnya, dan sepakati apakah foto boleh dikirim ke orang lain. Jika hanya ingin menyimpan kenangan pribadi, file tetap bisa disimpan tanpa mengunggahnya ke layanan lain.'
  ] },
  'photobooth-online-di-android': { heading: 'Checklist sebelum dipakai bersama teman', paragraphs: [
    'Coba buka studio dari tautan yang akan dibagikan, bukan hanya dari riwayat browser milik panitia. Pastikan tombol Nyalakan kamera menampilkan permintaan izin atau memulai kamera jika izin sebelumnya sudah diberikan. Periksa kamera depan dan belakang jika keduanya akan digunakan, lalu ambil satu foto dan temukan JPG dalam unduhan.',
    'Jika tombol unduh ditekan tetapi hasil tidak langsung terlihat di galeri, buka daftar unduhan browser terlebih dahulu. Perangkat Android memakai aplikasi pengelola berkas dan galeri yang berbeda, sehingga nama folder atau tombol dapat berubah. Setelah file ditemukan, buka dan periksa isinya sebelum membagikan; minta persetujuan orang yang tampak di foto.'
  ] },
  'photobooth-online-di-iphone': { heading: 'Checklist sebelum dipakai pada acara', paragraphs: [
    'Coba tautan acara pada iPhone yang akan dipakai, lalu pastikan Safari dapat meminta akses kamera. Ambil satu foto, pilih bingkai, dan unduh JPG. Temukan file melalui daftar unduhan Safari atau aplikasi Berkas, kemudian periksa cara menyimpannya ke Photos jika hal itu dibutuhkan pengguna.',
    'Jika tamu menerima tautan melalui aplikasi pesan, beri petunjuk untuk membuka di Safari saat kamera tidak tersedia di jendela dalam aplikasi. Catat kontak panitia dan sediakan tautan tertulis sebagai cadangan QR. Jangan meminta tamu mengubah pengaturan yang tidak berkaitan dengan kamera atau membagikan kata sandi perangkatnya.'
  ] },
  'photobooth-online-di-laptop': { heading: 'Checklist webcam sebelum sesi', paragraphs: [
    'Periksa kamera di aplikasi bawaan, kemudian tutup aplikasi tersebut. Buka studio melalui HTTPS, izinkan kamera di browser, dan lihat apakah pratinjau menampilkan webcam yang tepat. Jika memakai kamera USB, pastikan kabel terpasang dan perangkat tidak ditutup secara fisik. Pada komputer bersama, siapkan petugas yang memahami pengaturan izin.',
    'Ambil satu foto percobaan pada posisi tamu yang sebenarnya. Periksa bagian pinggir bingkai dan arah cahaya, lalu unduh JPG dan buka dari folder unduhan. Siapkan cara menyerahkan file kepada pemilik foto dan aturan menghapus salinan lokal. Lakukan percobaan sebelum antrean terbentuk agar perbaikan tidak mengganggu acara.'
  ] },
  'panduan-frame-custom-warna-motif': { heading: 'Contoh pemeriksaan bingkai pernikahan', paragraphs: [
    'Misalkan penyelenggara meminta nama pasangan, tanggal, dan warna acara pada bingkai. Tulis ketiga detail dalam satu catatan yang sudah disetujui, lalu terapkan pada desain yang tersedia. Periksa nama dan tanggal sekali lagi setelah foto contoh dimasukkan; kesalahan teks yang sudah menyatu dengan gambar perlu diperbaiki dengan membuat ulang hasil.',
    'Buka JPG dalam ukuran ponsel dan lihat apakah wajah, nama, serta tanggal tetap terbaca. Bila akan dicetak, minta percetakan menunjukkan bagaimana rasio gambar ditempatkan pada kertas. Gunakan margin atau penyesuaian berdasarkan contoh cetak, dan pastikan tepi gambar yang penting tidak terpotong.'
  ] },
  'panduan-efek-lensa-ruang-kilas': { heading: 'Percobaan sederhana untuk memilih lensa', paragraphs: [
    'Pada cahaya yang sama, lihat pratinjau Original lalu pilih salah satu efek lensa. Perhatikan perubahan bentuk wajah, latar, dan kecerahan, terutama di tepi gambar. Atur posisi atau jarak sebelum mengambil foto. Jika efeknya terlalu dominan, kembali ke Original atau pilih efek lain yang lebih sesuai dengan tujuan foto.',
    'Setelah foto masuk slot, pilih bingkai dan coba filter warna secukupnya. Unduh hasil lalu periksa di ukuran penuh. Percobaan ini membantu memilih kombinasi berdasarkan hasil di perangkat dan ruangan yang dipakai; warna dan performa dapat berbeda pada perangkat lain.'
  ] },
  'solusi-kamera-gelap-buram-photobooth': { heading: 'Contoh diagnosis sebelum meminta bantuan', paragraphs: [
    'Jika pratinjau hitam sejak awal, catat apakah browser menampilkan permintaan izin atau pesan bahwa kamera sedang digunakan. Uji kamera pada aplikasi bawaan, tutup aplikasi tersebut, periksa izin situs, dan coba lagi. Jika gambar sudah muncul tetapi gelap, pindahkan sumber cahaya ke depan wajah dan bandingkan dengan mode Original.',
    'Jika foto tetap buram, bersihkan lensa, stabilkan perangkat, dan minta orang menahan pose sampai hitung mundur selesai. Simpan hasil percobaan hanya jika diperlukan. Saat menghubungi bantuan, sebutkan model perangkat, browser, pesan kesalahan, serta langkah yang sudah dicoba agar masalah lebih mudah ditelusuri.'
  ] },
  'cara-membuat-boomerang-photobooth': { heading: 'Contoh gerakan untuk kelompok kecil', paragraphs: [
    'Untuk dua atau tiga orang, coba satu gerakan yang mudah diulang: mulai dengan melihat kamera, lalu semua melambaikan tangan pada hitungan yang disepakati. Sisakan ruang di sekeliling tangan agar tidak keluar dari bingkai. Gunakan penyangga dan lakukan percobaan untuk menilai jarak serta cahaya.',
    'Pada tahap Simpan, pilih durasi yang tersedia dan tunggu video selesai dipersiapkan. Putar file unduhan sebelum dibagikan. Jika hasil kurang jelas, coba gerakan lebih lambat atau pencahayaan yang lebih baik pada sesi berikutnya. Pastikan semua orang setuju bila hasil akan diunggah ke akun publik.',
    'Jika video akan digunakan sebagai kenangan acara, sepakati apakah file hanya dikirim kepada peserta atau juga boleh dipublikasikan panitia. Periksa latar dan tulisan yang muncul sebelum mengirim. Simpan satu salinan pribadi agar kamu tidak perlu bergantung pada file yang sudah diproses ulang oleh aplikasi pesan.'
  ] },
  'fitur-ruang-kilas-vs-photobooth-online-lain': { heading: 'Pertanyaan saat membandingkan layanan', paragraphs: [
    'Gunakan pertanyaan yang sama untuk setiap pilihan: apakah kamera meminta izin dengan jelas, apa yang terjadi jika satu foto ingin diulang, format apa yang bisa diunduh, dan apakah hasil masuk ke album bersama? Uji pada perangkat yang akan dipakai dan baca penjelasan privasi masing-masing layanan.',
    'Catat biaya atau batasan yang benar-benar ditampilkan penyedia saat kamu memeriksa, karena penawaran dapat berubah. Untuk acara, tanyakan pula cara membuat bingkai, waktu pengerjaan, dukungan ketika ada kendala, dan langkah cadangan jika jaringan venue bermasalah. Jangan menganggap fitur yang tersedia pada satu layanan otomatis ada pada layanan lain.'
  ] },
  'photobooth-virtual-untuk-pernikahan': { heading: 'Contoh pembagian tugas panitia', paragraphs: [
    'Sebelum hari acara, satu orang dapat memeriksa ejaan pada bingkai dan satu orang lain mencoba tautan dari ponsel. Pada hari acara, petugas di meja penerima dapat menunjukkan QR dan menjelaskan bahwa tamu akan menyimpan hasil di perangkat mereka sendiri. Sediakan petugas cadangan yang tahu letak tautan dan kontak bantuan.',
    'Jika pasangan ingin album bersama, tunjuk pengelola album terpisah. Orang tersebut menjelaskan cara mengirim foto, membatasi akses, dan menangani permintaan penghapusan. Jangan menaruh tugas ini secara otomatis pada petugas photobooth tanpa memastikan mereka memahami aturan berbagi dan privasi yang sudah disepakati.',
    'Setelah acara, pengelola dapat memeriksa apakah akses album masih diperlukan dan menghapus salinan kerja sesuai kesepakatan. Jika ada tamu meminta fotonya ditarik, sampaikan siapa yang menerima permintaan dan bagaimana panitia akan menindaklanjutinya. Petunjuk ini dapat ditulis singkat di dekat informasi album.'
  ] },
  'panduan-undangan-pernikahan-digital': { heading: 'Contoh pemeriksaan akhir sebelum kirim', paragraphs: [
    'Minta dua orang memeriksa undangan secara terpisah. Orang pertama mencocokkan nama, hari, tanggal, jam, dan alamat dengan catatan keluarga. Orang kedua membuka tautan di ponsel, menekan peta, dan mencoba menemukan kontak serta informasi RSVP tanpa arahan. Catat setiap koreksi dalam satu daftar agar tidak ada versi berbeda yang beredar.',
    'Setelah revisi disetujui, kirim tautan percobaan kepada panitia dan pastikan halaman yang terbuka adalah versi akhir. Siapkan pesan pemberitahuan jika ada perubahan mendadak, beserta daftar penerima yang perlu dihubungi. Periksa ulang akses ke informasi utama sebelum undangan dikirim lebih luas.',
    'Jika acara berlangsung di lebih dari satu lokasi, uji setiap tautan peta secara terpisah dan tulis nama lokasi di dekat waktu acara yang sesuai. Sediakan alamat yang dapat disalin sebagai cadangan jika aplikasi peta tidak terbuka. Periksa juga nomor kontak agar tamu memiliki cara bertanya pada hari acara.'
  ] },
};
