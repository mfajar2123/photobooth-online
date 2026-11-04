import type { ArticleExtra } from '../article-types';

export const persiapanExtras: Record<string, ArticleExtra> = {
  'panduan-membuat-daftar-tamu-pernikahan': {
    takeaways: [
      'Kelompokkan tamu sejak awal dan catat satu kontak utama per rumah tangga.',
      'Sepakati kapasitas acara sebelum memperluas daftar.',
      'Simpan data di satu dokumen yang hanya dapat diakses panitia.',
      'Gunakan informasi kontak hanya untuk urusan acara.',
    ],
    sections: [
      {
        heading: 'Menyusun struktur daftar',
        paragraphs: [
          'Buat kelompok untuk keluarga, teman, rekan kerja, dan undangan dari masing-masing pihak. Catat satu nama kontak utama per rumah tangga agar pengiriman tidak berulang. Tambahkan kolom jumlah tamu, cara menghubungi, dan catatan kebutuhan khusus.',
          'Sepakati kapasitas acara sebelum memperluas daftar. Jika kapasitas terbatas, prioritaskan kelompok yang paling penting. Diskusikan pembagian undangan dari kedua pihak sejak awal agar tidak ada daftar yang tumpang tindih.',
        ],
        list: [
          'Nama kontak utama dan nomor telepon.',
          'Kelompok undangan.',
          'Jumlah orang per rumah tangga.',
          'Status pengiriman dan konfirmasi.',
          'Catatan akses atau konsumsi khusus.',
        ],
      },
      {
        heading: 'Menjaga privasi dan pembaruan',
        paragraphs: [
          'Simpan daftar di satu dokumen yang hanya dapat diakses panitia terkait. Hindari membagikan daftar lengkap di grup terbuka karena berisi informasi pribadi. Beri akses hanya kepada orang yang benar-benar membutuhkan.',
          'Perbarui status saat ada perubahan. Catat siapa yang sudah dikirimi undangan, siapa yang sudah menjawab, dan siapa yang perlu diingatkan. Setelah acara, simpan data seperlunya dan hapus informasi yang tidak lagi dibutuhkan.',
        ],
        tip: 'Beri nomor pada setiap baris daftar. Nomor ini memudahkan pembahasan tanpa harus menyebut nama lengkap di grup panitia.',
      },
    ],
  },
  'menyusun-timeline-persiapan-undangan': {
    takeaways: [
      'Bagi pekerjaan menjadi pengumpulan materi, penyusunan, uji coba, dan pengiriman.',
      'Kunci detail acara dengan keluarga dan venue sebelum menulis undangan.',
      'Sisihkan waktu untuk uji peta, RSVP, dan tampilan ponsel.',
      'Simpan versi final di satu tempat agar tidak ada salinan berbeda.',
    ],
    sections: [
      {
        heading: 'Tahap pengumpulan dan penyusunan',
        paragraphs: [
          'Mulai dengan mengumpulkan nama, jadwal, alamat, kontak, foto, dan tautan yang akan dipakai. Konfirmasi detail acara dengan keluarga serta venue sebelum memasukkannya ke undangan. Tentukan siapa yang mengumpulkan foto dan siapa yang memeriksa teks.',
          'Setelah materi lengkap, susun urutan informasi. Letakkan detail acara dan peta lebih dulu, lalu cerita dan galeri. Simpan versi final di satu folder agar tidak ada beberapa salinan yang berbeda.',
        ],
        list: [
          'Kumpulkan nama dan jadwal.',
          'Konfirmasi alamat dan peta.',
          'Pilih serta kompres foto.',
          'Susun teks dan tautan.',
          'Uji tampilan dan RSVP.',
        ],
      },
      {
        heading: 'Uji coba dan pengiriman',
        paragraphs: [
          'Buka pratinjau dari ponsel dan komputer, lalu uji peta, RSVP, dan tombol lainnya. Minta satu orang yang belum melihat naskah memeriksa informasi penting. Kirim percobaan ke dirimu sendiri melalui aplikasi pesan yang akan dipakai.',
          'Kirim undangan dengan jeda yang cukup sebelum hari acara. Jika ada perubahan, perbarui halaman dan beri tahu tamu melalui kanal yang sama. Jangan mengandalkan pesan lama yang mungkin sudah tertimbun.',
        ],
        image: { src: '/images/invitations/inv-10.jpg', alt: 'Persiapan detail undangan pernikahan', caption: 'Simpan materi final di satu folder agar desainer dan keluarga memakai versi yang sama.' },
        tip: 'Buat tenggat internal beberapa hari sebelum tenggat sebenarnya. Ini memberi ruang untuk memperbaiki kesalahan tanpa terburu-buru.',
      },
    ],
  },
  'menentukan-jam-pengiriman-undangan': {
    takeaways: [
      'Pertimbangkan jarak perjalanan dan kebutuhan cuti tamu.',
      'Pastikan detail penting sudah dikonfirmasi sebelum mengirim.',
      'Kirim pengingat hanya jika diperlukan dan dengan sopan.',
      'Untuk perubahan mendadak, hubungi tamu yang terdampak secara langsung.',
    ],
    sections: [
      {
        heading: 'Menentukan waktu yang realistis',
        paragraphs: [
          'Tamu dari luar kota biasanya perlu informasi lebih awal untuk menyusun perjalanan. Tamu lokal bisa menerima undangan lebih dekat ke hari acara. Sesuaikan jadwal pengiriman dengan kebutuhan cuti, transportasi, dan kebiasaan keluarga.',
          'Pastikan detail penting sudah dikonfirmasi sebelum tautan dibagikan. Undangan yang dikirim terlalu dini dengan informasi sementara dapat menimbulkan kebingungan. Jika tanggal belum final, kirim save the date terlebih dahulu.',
        ],
      },
      {
        heading: 'Mengirim pengingat dan pembaruan',
        paragraphs: [
          'Jika perlu, kirim pengingat singkat menjelang batas RSVP atau hari acara. Sertakan tautan yang sama dan informasi inti agar tamu tidak perlu mencari pesan lama. Jangan mengirim pesan berulang dalam waktu dekat karena bisa terasa mengganggu.',
          'Untuk perubahan mendadak, hubungi tamu yang terdampak secara langsung dan jelaskan detail terbaru. Perbarui halaman undangan agar informasi terbaru mudah ditemukan. Catat siapa yang sudah diberi tahu agar tidak ada yang terlewat.',
        ],
        tip: 'Simpan template pesan pengingat yang singkat. Kamu bisa mengirimnya tanpa menulis ulang dan tetap terasa personal dengan mengganti nama.',
      },
    ],
  },
  'checklist-acara-photobooth-dan-undangan': {
    takeaways: [
      'Periksa tautan undangan, peta, dan RSVP seminggu sebelum acara.',
      'Uji photobooth dan QR dari beberapa ponsel.',
      'Periksa ejaan pada undangan dan bingkai foto.',
      'Tunjuk satu orang yang menangani kendala teknis pada hari acara.',
    ],
    sections: [
      {
        heading: 'Seminggu sebelum acara',
        paragraphs: [
          'Periksa tautan undangan, peta, dan tombol konfirmasi kehadiran. Uji tautan photobooth atau QR dari beberapa ponsel dan pastikan halaman terbuka tanpa akun. Periksa ejaan nama, tanggal, dan alamat pada undangan serta bingkai foto.',
          'Siapkan tautan cadangan yang mudah dikirim melalui pesan. Pastikan panitia tahu di mana tautan itu disimpan. Cetak petunjuk photobooth dan QR jika diperlukan, lalu uji hasil cetaknya.',
        ],
        list: [
          'Tautan undangan dan peta berfungsi.',
          'RSVP bisa dikirim.',
          'QR photobooth sudah diuji.',
          'Ejaan nama dan tanggal benar.',
          'Tautan cadangan tersedia.',
        ],
      },
      {
        heading: 'Pada hari acara',
        paragraphs: [
          'Letakkan petunjuk photobooth di area yang mudah terlihat dan pastikan pencahayaan cukup. Tunjuk satu orang yang bisa membantu tamu jika kamera atau koneksi bermasalah. Periksa perangkat sudah terisi daya dan tidak ada kabel di jalur tamu.',
          'Catat siapa yang dapat dihubungi untuk urusan venue dan teknis. Setelah acara, minta izin sebelum membagikan foto tamu ke akun publik. Kumpulkan masukan singkat dari panitia untuk acara berikutnya.',
        ],
        image: { src: '/images/articles/article-1492684223066.jpg', alt: 'Panggung acara dengan pencahayaan dan penonton', caption: 'Periksa alur tamu di lokasi agar area foto tidak menghambat jalur utama.' },
        tip: 'Buat satu grup chat panitia khusus hari acara. Pisahkan dari grup keluarga agar informasi teknis tidak tenggelam.',
      },
    ],
  },
  'menyusun-jadwal-foto-acara-pernikahan': {
    takeaways: [
      'Tentukan daftar kelompok foto berdasarkan prioritas.',
      'Sisipkan jadwal foto pada jeda yang realistis.',
      'Koordinasikan dengan pembawa acara, fotografer, dan keluarga.',
      'Dahulukan foto terpenting jika waktu terbatas.',
    ],
    sections: [
      {
        heading: 'Menentukan prioritas dan urutan',
        paragraphs: [
          'Buat daftar kelompok yang paling penting, misalnya keluarga inti, keluarga besar, dan sahabat. Urutkan berdasarkan lokasi dan waktu agar sesi foto tidak saling menunggu. Letakkan kelompok yang paling sulit dikumpulkan di awal.',
          'Siapkan satu orang yang mengenal anggota keluarga untuk membantu memanggil kelompok berikutnya. Ini membuat pasangan tidak perlu mencari orang satu per satu. Beri salinan daftar kepada fotografer dan pengarah.',
        ],
      },
      {
        heading: 'Mengkoordinasikan dengan rundown',
        paragraphs: [
          'Sisipkan jadwal foto pada jeda yang realistis dan bagikan kepada pembawa acara, fotografer, serta keluarga. Beri ruang untuk perubahan tanpa mengorbankan prosesi utama. Pastikan lokasi foto tidak menghalangi jalur tamu.',
          'Jika waktu terbatas, dahulukan foto yang paling penting dan biarkan momen spontan terjadi di sela acara. Tidak semua pose harus masuk daftar. Lebih baik menyelesaikan beberapa foto dengan tenang daripada mengejar semua kombinasi.',
        ],
        image: { src: '/images/articles/article-1519741497674.jpg', alt: 'Dekorasi pernikahan dengan bunga dan cahaya hangat', caption: 'Jadwal foto perlu mempertimbangkan lokasi, cahaya, dan ketersediaan keluarga.' },
        tip: 'Tulis jadwal foto dalam ukuran kartu dan tempel di ruang panitia. Jangan hanya menyimpannya di ponsel satu orang.',
      },
    ],
  },
  'menyiapkan-tim-acara-untuk-photobooth': {
    takeaways: [
      'Bagi peran: penyambut tamu, operator kamera, dan cadangan.',
      'Buat jalur antrean yang jelas dan hindari kabel di jalur tamu.',
      'Bekali tim dengan panduan satu halaman dan kontak bantuan.',
      'Lakukan uji singkat sebelum acara dan kumpulkan masukan setelahnya.',
    ],
    sections: [
      {
        heading: 'Membagi peran dan jalur bantuan',
        paragraphs: [
          'Tentukan satu orang untuk menyambut tamu, satu orang untuk membantu penggunaan kamera, dan satu orang sebagai cadangan. Pastikan setiap orang tahu ke mana harus menghubungi penanggung jawab venue. Buat jalur antrean yang jelas dan hindari menempatkan area foto di jalur masuk atau dekat kabel.',
          'Beri tanda sederhana tentang cara memulai sesi. Jika memakai QR, tunjukkan kepada petugas cara memindai dan apa yang harus dilakukan jika halaman tidak terbuka. Simpan tautan cadangan di ponsel petugas.',
        ],
        list: [
          'Penyambut tamu dan pengatur antrean.',
          'Operator kamera dan bingkai.',
          'Petugas cadangan untuk istirahat.',
          'Kontak teknis dan venue.',
        ],
      },
      {
        heading: 'Panduan singkat dan evaluasi',
        paragraphs: [
          'Siapkan satu halaman berisi tautan, cara mengizinkan kamera, langkah mengambil foto, dan kontak bantuan. Simpan panduan di tempat yang mudah diakses tim. Lakukan uji singkat sebelum acara dan catat kendala yang muncul.',
          'Setelah acara, kumpulkan masukan tim. Tanyakan bagian mana yang paling sering membuat tamu bingung. Gunakan catatan ini untuk memperbaiki petunjuk dan alur pada acara berikutnya.',
        ],
        image: { src: '/images/studio-steps/studio-step1-camera.png', alt: 'Tampilan studio yang perlu dipahami tim acara', caption: 'Tim acara sebaiknya mencoba sendiri alur kamera sampai unduh sebelum membantu tamu.' },
        tip: 'Buat grup chat khusus tim photobooth. Pisahkan dari grup keluarga agar instruksi teknis mudah ditemukan.',
      },
    ],
  },
};
