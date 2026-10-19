# Mivora Photo

Aplikasi photobooth online modern berbasis browser dengan simulasi filter lensa kamera, koleksi variasi bingkai foto, stiker interaktif, dan ekspor photostrip maupun animasi Boomerang. Seluruh proses pengambilan foto dan pengolahan gambar berlangsung langsung di sisi klien (browser) tanpa mengunggah data ke server luar.

## Fitur Utama

- Privasi Penuh: Akses kamera dan pengolahan gambar dilakukan 100% lokal di browser pengguna.
- Efek Lensa Real-time: Fisheye 360, Leica 35mm Film Grain, Digicam Cybershot 2004, VHS Camcorder Glitch, dan Dreamy Soft Prism.
- Beragam Format Layout: Strip 4 klasik, Grid 2x2, Solo Polaroid, Mini 3, dan Wide 1.
- Kustomisasi Bingkai: Variasi tema (Retro Analog, Y2K Cyber, Minimalist Editorial, Museum Art, Cinema Ticket, Yearbook), pemilihan warna bebas, dan tekstur latar.
- Personalisasi: Input nama/caption dan stiker interaktif yang dapat diatur posisinya.
- Ekspor Fleksibel: Unduh gambar PNG kualitas tinggi, video animasi Boomerang (format WebM), dan pratinjau kartu digital melalui kode QR.
- Responsif: Mendukung tampilan perangkat desktop, tablet, maupun ponsel dengan opsi layar penuh (fullscreen).

## Teknologi

- Framework: Astro 5
- Komponen Antarmuka: React 19
- Styling: Tailwind CSS dan Vanilla CSS
- Tipografi: Montserrat / Oswald (Judul), Lora / Merriweather (Teks Isi) via Fontsource
- Bahasa Pemrograman: TypeScript
- Pengujian: Playwright

## Prasyarat Sistem

- Node.js versi 22.12.0 atau lebih baru
- pnpm versi 9 atau lebih baru

## Panduan Penggunaan Lokal

1. Salin repositori:
```bash
git clone https://github.com/mfajar2123/photobooth-online.git
cd photobooth-online
```

2. Pasang dependensi:
```bash
pnpm install
```

3. Jalankan server pengembangan:
```bash
pnpm dev
```
Buka peramban di alamat `http://localhost:4321`.

4. Bangun berkas produksi:
```bash
pnpm run build
```

5. Jalankan pratinjau hasil build:
```bash
pnpm run preview
```

6. Jalankan pengujian end-to-end:
```bash
pnpm test
```

## Deployment ke GitHub Pages

Proyek ini telah dikonfigurasi dengan alur kerja otomatis GitHub Actions pada `.github/workflows/deploy.yml`.

Untuk mengaktifkan deployment:
1. Buka halaman pengaturan repositori di GitHub (Settings).
2. Masuk ke menu Pages pada bilah navigasi samping kiri.
3. Di bagian Build and deployment, pilih opsi Source menjadi "GitHub Actions".
4. Setiap pembaruan kode yang di-push ke branch main atau master akan otomatis di-build dan di-deploy ke alamat GitHub Pages.

## Lisensi dan Hak Cipta Aset

- Foto pratinjau disediakan oleh Kevin Torres melalui Unsplash dengan lisensi gratis untuk penggunaan personal maupun komersial.
- Seluruh font tipografi didistribusikan di bawah lisensi terbuka (SIL Open Font License / Apache License).
