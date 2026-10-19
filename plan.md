# MIVORA PHOTO — Master Execution Plan & Codex CLI Prompt

> **Instruksi Penggunaan:** Berikan keseluruhan isi dokumen ini kepada Codex CLI / AI Coding Agent Anda. Dokumen ini dirancang sebagai *System Prompt & Technical Blueprint* end-to-end agar agen mengeksekusi proyek tanpa *placeholder*, bebas dari desain *AI-Slop*, dan langsung siap produksi (100% *Client-Side / Frontend-Only*).

---

## 1. SYSTEM ROLE & DIRECTIVES UNTUK CODEX CLI

Kamu adalah **Principal Creative Technologist, Senior Frontend Architect, dan Design Director** kelas dunia (standar Awwwards / Studio Freight). Tugasmu adalah membangun aplikasi web startup photobooth online modern bernama **Mivora Photo**.

### Aturan Mutlak (Zero-Tolerance Rules):
1. **100% Frontend-Only (Zero Backend / Zero Database):** Semua proses tangkapan kamera, pemrosesan filter lensa, penggabungan kanvas (frame + foto + stiker), pembuatan video Live Photo/Boomerang, hingga pembuatan QR Code berjalan **murni di browser pengguna** (Client-Side Web APIs).
2. **Anti-AI-Slop Philosophy:** Dilarang keras membuat desain generik khas template AI!
   - **JANGAN GUNAKAN:** Gradien ungu/neon gelap ala SaaS AI, *bento grid* kecil-kecil yang penuh sesak dengan ikon generik, *glassmorphism* berlebihan yang kabur, atau kalimat pembuka klise seperti *"Welcome to the future of photography"*.
   - **GUNAKAN:** Desain *Tactile Editorial Neo-Brutalism* yang bersih, dewasa, dan *Gen-Z approved*. Ruang kosong (*whitespace*) yang lega, tipografi *display* ekstra tebal (*bold*), elemen visual berupa foto asli dan stiker interaktif yang tajam, *border* tegas (`2px solid #121212`), dan *hard offset shadow* (`4px 4px 0px #121212`).
3. **Minimal Clutter per Section:** Setiap *section* pada *landing page* tidak boleh dipenuhi kartu-kartu kecil yang berantakan. Fokus pada **1 pesan utama yang kuat, tipografi besar yang interaktif, dan visual/gambar latar atau *showcase* yang mendominasi** namun tetap elegan dan ringan.
4. **No Empty Placeholders:** Semua teks copywriting, alamat, kontak, sosial media, FAQ, hingga variasi bingkai harus terisi penuh dengan data realistis (menggunakan bahasa Indonesia gaul Gen-Z yang sopan, relevan, dan *catchy*).

---

## 2. ENVIRONMENT SETUP & CLI SKILLS INSTALLATION

Sebelum menulis kode aplikasi, jalankan perintah inisialisasi dan instalasi *skills* berikut secara berurutan di terminal:

```bash
# 1. Inisialisasi Proyek Astro dengan TypeScript (Strict)
pnpm create astro@latest mivora-photo --template minimal --typescript strict --install --no-git
cd mivora-photo

# 2. Tambahkan integrasi React (untuk Studio Photobooth & shadcn/ui) dan Tailwind CSS
pnpm astro add react tailwind --yes

# 3. Install AI Agent Skills & Design Quality Guardrails sesuai instruksi
pnpm dlx skills add shadcn/ui
npx impeccable install
git clone https://github.com/miqdadbadjuber/anti-slop/ .agents/anti-slop || true

# 4. Install Core Libraries (GSAP, Lenis Smooth Scroll, Lucide Icons, QRCode, Canvas/GIF helpers)
pnpm add gsap @studio-freight/lenis lucide-react qrcode.react html-to-image gifenc canvas-confetti
pnpm add -D @types/canvas-confetti @playwright/test

# 5. Setup Playwright untuk Automated QA
pnpm exec playwright install chromium
```

> **Catatan Agen:** Baca dan terapkan pedoman dari `.agents/anti-slop` dan `impeccable` sebelum menyusun komponen UI. Pastikan konfigurasi `shadcn/ui` dikustomisasi agar sesuai dengan *palette* Mivora Photo (bukan warna *default* hitam-putih bawaan shadcn).

---

## 3. BRAND IDENTITY & DESIGN SYSTEM (MIVORA PHOTO)

### A. Color Palette (Wajib Didefinisikan di `tailwind.config.mjs` & CSS Variables)
- **Butter Yellow (Primary Surface / Canvas):** `#FFF3B0` (Hangat, nostalgik, ramah mata).
- **Warm Cream (Secondary Clean Surface):** `#FFFDF5` (Untuk memberikan kontras ruang bernafas agar mata tidak lelah).
- **Sky Blue (Interactive & Accent Surface):** `#8ECAE6` (Segar, muda, memberi aksen kontras pada tombol/badge).
- **Punchy Poppy Red (Primary CTA & Highlight):** `#E63946` (Energetik, menarik perhatian, khusus untuk aksi utama & *recording badge*).
- **Obsidian Ink (Typography & Structural Borders):** `#121212` (Jangan gunakan `#000000` murni; gunakan `#121212` untuk kesan cetak editorial).

### B. Tipografi
Muat dari Google Fonts di `Layout.astro`:
- **Heading / Display:** `'Syne'` atau `'Cabinet Grotesk'` (Weights: 700, 800) — Karakter lebar, *bold*, sangat ekspresif saat dianimasikan per huruf.
- **Body Copy:** `'Plus Jakarta Sans'` (Weights: 500, 600, 700) — Sangat nyaman dibaca di mobile maupun desktop.
- **Technical / Camera HUD / Timestamp:** `'JetBrains Mono'` (Weight: 500) — Digunakan untuk indikator ISO, shutter speed, timer hitung mundur, dan *watermark* kode seri bingkai.

### C. Elemen Stiker & Ornamen
- Buat komponen `<DraggableSticker />` dan `<FloatingSticker />` berbasis SVG kustom beresolusi tinggi (bintang *sparkle* Y2K, pita *coquette*, kamera analog retro, senyum *acid graphics*, perangko pos, teks bubble *"CHEESE!"*, *"CORE MEMORY"*).
- Stiker pada *Landing Page* bisa digeser (*drag*) oleh pengunjung menggunakan kursor/sentuhan untuk memberi pengalaman taktil yang seru.

---

## 4. ARSITEKTUR HALAMAN & LAYOUT FLOW (CAMPURAN ALIGNMENT)

Landing page dan Studio berada dalam ekosistem yang mulus. Pada `src/pages/index.astro`, terapkan aturan **Polosan, Elegan, Interaktif, Tanpa Elemen Kecil yang Berlebihan**, dengan variasi *alignment* (Rata Tengah, Rata Kiri, Rata Kanan) sebagai berikut:

### Section 1: HERO SECTION (Alignment: **RATA TENGAH / CENTERED**)
- **Background:** Warna `#FFF3B0` (Butter Yellow) bersih dengan 4–5 potongan *photostrip* asli yang melayang (*floating image planes*) di sudut-sudut layar yang bergerak mengikuti efek *mouse parallax* halus, ditambah beberapa stiker SVG yang bisa di-*drag*.
- **Konten Tengah:**
  - Badge kecil di atas: `"✨ NO APP INSTALL • 100% BROWSER PHOTOBOOTH"`
  - Headline Raksasa (GSAP Split-Text Character Reveal, keluar satu per satu dengan *stagger delay*): **"Abadikan Momen Seru, Langsung dari Browser Lo."**
  - Sub-headline singkat & sopan: *"Nggak perlu antre di mall. Pilih efek lensa kamera mahal, tempel stiker sesuka hati, dan simpan photostrip estetik bareng bestie detik ini juga."*
  - **2 Tombol Utama:** `Mulai Photobooth Sekarang 📸` (Warna Merah `#E63946`, mengarah/scroll langsung ke Studio atau membuka mode Full Studio) dan `Lihat Koleksi Frame` (Warna Biru Muda `#8ECAE6`).

### Section 2: CAMERA LENS SHOWCASE (Alignment: **RATA KIRI / LEFT-ALIGNED**)
- **Konsep Visual:** Tampilan *split* asimetris yang bersih. Teks besar berada di **Sisi Kiri**, sedangkan latar belakang / **Sisi Kanan** menampilkan 1 *interactive image preview* besar yang berubah secara *real-time* saat kursor menyentuh nama mode lensa di sebelah kiri.
- **Konten Kiri (Tipografi Interaktif):**
  - Judul: **"Satu Webcam, Berasa Punya Sewa Lensa Studio."**
  - Daftar Mode Kamera (Hover/Tap untuk mengubah gambar besar di kanan):
    1. `01 / FISHEYE 360° ULTRA-WIDE` — Efek cembung ekstrem ala video klip hip-hop 90an & kamera aksi.
    2. `02 / LEICA 35MM FILM GRAIN` — Kontras hangat, *vignette* optik, dan *haloing* merah pada *highlight*.
    3. `03 / DIGICAM CYBERSHOT 2004` — *Flash* keras, saturasi Y2K, lengkap dengan *date stamp* oranye di pojok foto.
    4. `04 / VHS CAMCORDER GLITCH` — Efek *chromatic aberration* (RGB split) dan garis *scanline* kaset pita.
    5. `05 / DREAMY SOFT PRISM` — Efek pantulan lensa berkilau untuk *vibe* foto ala majalah Korea.

### Section 3: CURATED FRAME WALL (Alignment: **RATA KANAN / RIGHT-ALIGNED**)
- **Konsep Visual:** Latar belakang menggunakan warna `#8ECAE6` (Sky Blue) dengan *background marquee* gambar contoh-contoh hasil *photostrip* yang bergerak miring secara perlahan. Konten teks utama dan kontrol kategori diletakkan **Rata Kanan**.
- **Konten Kanan:**
  - Judul: **"Ratusan Vibes Bingkai. Nggak Ada Kata Bosan."**
  - Copywriting: *"Bukan cuma bingkai polosan warna-warni. Kami desain setiap frame pakai ilustrasi penuh, tekstur kertas asli, dan tema yang relate sama keseharian lo."*
  - **Interactive Category Switcher (Mengubah contoh visual besar secara instan):** `Y2K Cyber`, `Retro Receipt`, `Museum Art`, `Gigs & Music`, `Coquette Ribbon`, `90s Yearbook`, `Cinema Ticket`, dan `Minimalist Editorial`.

### Section 4: THE INTERACTIVE PHOTOBOOTH STUDIO (Workspace Utama — **CENTERED STUDIO**)
- Ini adalah jantung aplikasi (`<PhotoboothStudio client:load />`). Berada langsung di halaman agar user bisa langsung menjajalnya tanpa pindah halaman, dengan tombol **"Fullscreen Studio Mode"** untuk pengalaman maksimal di HP maupun laptop. *(Detail fitur teknis ada di Bagian 5).*

### Section 5: BOOMERANG & LIVE PHOTO SPOTLIGHT (Alignment: **RATA KIRI / LEFT-ALIGNED**)
- **Konsep Visual:** Polosan elegan dengan warna `#FFFDF5`. Sisi kiri berisi tipografi besar yang menjelaskan fitur gerak, dan sisi kanan menampilkan satu *looping preview* besar bergaya polaroid hidup.
- **Konten Kiri:**
  - Judul: **"Bukan Cuma Foto Diam. Bikin Live Photo & Boomerang!"**
  - Copywriting: *"Setiap senyum, kedipan, dan gaya absurd sebelum blitz menyala ikut terekam. Unduh hasilnya sebagai foto cetak resolusi tinggi sekaligus video Boomerang siap upload ke IG Story & TikTok."*

### Section 6: EDITORIAL FAQ & FULL COMPANY FOOTER (Alignment: **RATA TENGAH KE KIRI**)
- **FAQ Singkat (Accordion Minimalis):** Menjawab pertanyaan privasi (*"Apakah foto saya disimpan di server?"* -> *"100% Aman! Mivora tidak punya database. Semua foto diproses langsung di memori HP/Laptop kamu dan hilang saat tab ditutup"*), cara pakai di HP, dan cara unduh QR.
- **Complete Brand Footer (Data Lengkap & Realistis, Tidak Boleh Kosong):**
  - **Nama & Tagline:** PT Mivora Kreasi Visual — *Your Pocket Creative Photobooth.*
  - **Alamat Studio Fisik & Headquarter:** Gedung Kemang Point Lt. 3, Jl. Kemang Raya No. 3, Bangka, Kec. Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12730.
  - **Kontak Lengkap:**
    - Email Bisnis & Kolaborasi: `hello@mivoraphoto.id` | `partnership@mivoraphoto.id`
    - WhatsApp Customer Care: `+62 812-8899-4021` (Senin–Minggu, 09.00 – 21.00 WIB)
    - Instagram & TikTok: `@mivora.photo`
  - **Tautan Cepat & Legal:** Privacy Policy (Modal Interaktif Penjelasan Client-Side), Terms of Service, Brand Guidelines, Request Custom Event Frame.

---

## 5. SPESIFIKASI TEKNIS FITUR PHOTOBOOTH STUDIO (WAJIB BERFUNGSI 100%)

Komponen `<PhotoboothStudio />` harus dibangun secara modular, bebas *bug*, dengan penanganan izin kamera (*permission error handling*) yang ramah pengguna.

### A. Kamera & WebRTC Engine (`useCameraStream.ts`)
1. **Akses Perangkat:** Menggunakan `navigator.mediaDevices.getUserMedia` dengan opsi resolusi ideal (`1920x1080` atau `1280x720`), mendukung pergantian kamera depan/belakang (`facingMode: "user" | "environment"`) dan *dropdown* pemilihan sumber webcam jika ada lebih dari satu.
2. **Real-Time WebGL / 2D Canvas Lens Mode (Bukan Sekadar CSS Filter!):**
   Render *stream* `<video>` ke dalam `<canvas>` secara *real-time* (`requestAnimationFrame` 60fps) sehingga efek lensa terlihat langsung saat pengguna berkaca dan ikut ter-render saat foto diambil:
   - **Mode 1: Standard Studio HD** (Koreksi pencahayaan cerah & *skin-tone* natural).
   - **Mode 2: 360° Fisheye Pro Lens** (Algoritma distorsi barel radial pada piksel kanvas + *circular lens frame vignette* seperti lensa 8mm).
   - **Mode 3: Vintage 90s Digicam** (Ketajaman tinggi, sedikit *color quantization*, simulasi *flash* putih saat jepret, dan *date stamp* digital `#FF7700` di sudut kanan bawah).
   - **Mode 4: Analog 35mm Leica** (*Film grain* dinamis menggunakan *noise pattern*, *light leak* hangat di tepi kanvas, dan kurva warna retro).
   - **Mode 5: B&W Ilford High-Contrast** (Hitam putih dramatis ala *street photography*).
   - **Mode 6: Glitch VHS Camcorder** (Pergeseran *channel* Merah dan Biru secara horizontal + teks `PLAY ▶ SP 00:04:12` di layar).
   - **Mode 7: Thermal / Cyber Pop** (Pemetaan gradien warna *duotone* Butter Yellow, Sky Blue, dan Poppy Red).
   - **Mode 8: Soft Dreamy Glow** (Lapisan *bloom* lembut pada area terang menggunakan `globalCompositeOperation = 'screen'`).
3. **Kontrol Kamera Lengkap:**
   - Mirror Toggle (Balik Kiri-Kanan).
   - Countdown Timer Selector: `3 Detik`, `5 Detik`, `10 Detik`.
   - Burst / Auto-Shoot Mode (Otomatis menjepret seluruh slot foto secara berurutan dengan jeda, atau manual per jepretan).
   - **Retake Individual Slot:** Pengguna bisa mengeklik salah satu foto yang kurang bagus di dalam *photostrip* untuk mengulang foto di slot itu saja tanpa mengulang semuanya!

### B. Boomerang & Live Photo Capture (`useLiveCapture.ts`)
- Saat *countdown* mencapai 1.5 detik terakhir sebelum jepretan, rekam 12 *frame* beruntun berkecepatan tinggi ke dalam memori buffer.
- Setelah seluruh slot terisi, pengguna tidak hanya mendapatkan gambar PNG/JPG statis, tetapi juga bisa melihat dan mengunduh **Boomerang (Animasi maju-mundur mulus dalam format WebM/MP4 atau GIF)** di mana semua slot bergerak hidup secara bersamaan di dalam bingkai!

### C. Sistem Layout & Koleksi Bingkai Kaya Visual (`FrameLibrary.ts`)
Sediakan minimal **5 Bentuk Layout Dasar** dan **16+ Desain Bingkai Penuh Aset Visual** (gunakan grafis SVG berpola kaya, ilustrasi vektor *built-in*, tekstur kertas, dan *asset* gambar kurasi sehingga bingkai terlihat ramai, artistik, dan *vibes*-nya sangat terasa):

**Pilihan Layout:**
1. **Classic Strip (1x4 Vertikal)** — Ukuran standar photobooth mall.
2. **Mini Duo Strip (1x3 Vertikal)**.
3. **Editorial Quad Grid (2x2 Kotak)**.
4. **Wide Cinema Postcard (2x1 Landscape)**.
5. **Big Solo Polaroid (1x1 Fokus Tunggal)**.

**Koleksi Tema Bingkai (Setiap bingkai penuh dengan dekorasi grafis & ilustrasi SVG/Canvas di pinggirannya):**
1. **Mivora Signature Butter** (Warna kuning butter, pola stiker bintang merah & biru, garis tegas).
2. **Y2K Cyber Pop** (Ornamen krom metalik, jendela OS jadul, ikon kursor pixel, gradasi biru langit).
3. **Tokyo Purikura Arcade** (Penuh coretan neon lucu, mahkota, teks Jepang/Indonesia *"Kawaii Bestie"*, taburan bintang).
4. **Struk Belanja Minimarket (Retro Receipt)** (Tekstur kertas struk kusut, daftar belanjaan konyol seperti *"1x Ketawa Ngakak - Rp 0"*, barcode asli di bawah).
5. **90s High School Yearbook** (Pola kertas buku tahunan, kutipan *"Most Likely to Be Famous"*, ornamen penjepit kertas).
6. **Indie Music Festival / Gigs Pass** (Desain tiket VIP konser, grafik gelombang suara, robekan tiket).
7. **Coquette Pastel Ribbon** (Penuh ilustrasi pita merah muda & biru muda, renda, dan mutiara).
8. **Museum Louvre Art Frame** (Bingkai ukiran klasik dengan plakat kurator seni di bawah foto).
9. **Koran Pagi Editorial (Breaking News)** (Layout halaman depan koran dengan headline *"BREAKING: DUA SAHABAT TERTANGKAP KAMERA TERLALU KEREN"*).
10. **Film Roll Kodachrome 35mm** (Lubang-lubang *sprocket* klise film hitam dengan nomor eksposur `24A`, `25A`).
11. **Windows 98 Paint Canvas** (Bingkai antarmuka aplikasi gambar retro lengkap dengan palet warna di bawah).
12. **Matcha Cafe Aesthetic** (Ilustrasi cangkir kopi/matcha, croissant, dan noda kopi estetik).
13. **Cosmic Tarot Card** (Ornamen matahari, bulan sabit, dan garis konstelasi bintang emas).
14. **Poppy Red Checkerboard** (Motif papan catur merah-krem bergaya *skater* 90an).
15. **Summer Beach Postcard** (Prangko pantai, cap pos udara, dan ilustrasi ombak).
16. **Custom Color & Pattern Builder** (Memungkinkan user mengatur warna bingkai sendiri + memilih motif polkadot, garis, atau *grid*).

### D. Kustomisasi Stiker & Teks Interaktif
- Setelah foto selesai, pengguna bisa menambahkan **Stiker Tambahan** di atas kanvas hasil (bisa digeser, diperbesar/perkecil, dan diputar) serta menuliskan **Custom Caption / Nama Geng** dengan pilihan font retro atau tulisan tangan.

### E. Subtle Brand Watermark (Marketing-Friendly & Non-Intrusive)
- Setiap hasil unduhan bingkai wajib menyertakan *watermark* eksklusif di bagian *footer margin* bingkai (tidak pernah menutupi wajah/foto pengguna).
- Desain *watermark* menyerupai cap keaslian kamera analog atau label desainer:
  `[Ikon Bintang Merah Kecil] MIVORA PHOTO STUDIO • mivoraphoto.id • [Tanggal Otomatis]`
- Terlihat seperti bagian dari desain *streetwear/editorial* yang membuat orang lain penasaran ingin mencoba saat foto tersebut diunggah ke Instagram Story.

### F. Sistem Unduh & QR Code Instan (100% Tanpa Backend!)
Bagaimana cara kerja QR Code di aplikasi *frontend-only* tanpa server penyimpanan file?
1. **Direct High-Res Download:** Tombol unduh instan file `PNG` (Kualitas Cetak 300 DPI) dan `WebM/GIF` (Untuk Boomerang/Live Photo).
2. **Native Web Share API:** Tombol *"Kirim ke HP / Share Langsung"* menggunakan `navigator.share({ files: [photoFile] })` yang otomatis membuka AirDrop (iOS/Mac), Nearby Share, WhatsApp, atau Instagram.
3. **Smart Client-Side QR Code (`qrcode.react`):**
   - Buat modal **"Scan QR Hasil Photobooth"**.
   - **Mekanisme A (Self-Contained Digital Strip URL):** Encode data ringkas komposisi (tema bingkai, tanggal, *caption*, serta *ultra-compressed micro-preview* atau *P2P WebRTC/Local Broadcast Session*) ke dalam URL `/share#data=...`, sehingga saat di-scan menampilkan *Digital Collector Card* interaktif Mivora Photo beserta tombol simpan!
   - **Mekanisme B (Instant Mobile Bridge):** Sediakan tampilan QR yang bersih lengkap dengan instruksi jelas dan tombol 1-klik unduh langsung di perangkat aktif, memastikan tidak pernah ada *broken link* atau *error* 404.

---

## 6. ANIMASI GSAP, PERFORMANSI, SEO & KEAMANAN

### A. Animasi Interaktif (GSAP + ScrollTrigger + Lenis)
1. **Smooth Scroll:** Aktifkan `@studio-freight/lenis` yang disinkronkan dengan `gsap.ticker`.
2. **Character Stagger Reveal:** Buat utilitas *split-text* ringan di TypeScript yang memecah teks judul menjadi elemen `<span class="inline-block">` per huruf/kata, lalu animasikan muncul dari bawah (`yPercent: 110`, `rotateZ: 3`, `stagger: 0.025`, `ease: "expo.out"`).
3. **Scroll-Driven Parallax & Tilting:** Saat halaman di-scroll, contoh-contoh *photostrip* di latar belakang bergerak dengan kecepatan berbeda dan sedikit miring mengikuti kecepatan scroll (*scroll velocity skew*).
4. **Magnetic Buttons:** Tombol CTA utama memiliki efek magnetik halus saat didekati kursor.
5. **Accessibility Guard:** Hormati pengaturan `prefers-reduced-motion: reduce`.

### B. SEO, Performa & Security (Standar Produksi)
1. **SEO Lengkap di `Layout.astro`:**
   - Title: `Mivora Photo — Photobooth Online Estetik & Efek Lensa Pro di Browser`
   - Meta Description, OpenGraph Tags lengkap, Twitter Card, Canonical URL, dan **JSON-LD Structured Data** (`WebApplication` & `Organization`).
   - Buat juga `public/robots.txt` dan konfigurasi sitemap.
2. **Performa (Lighthouse 95+ Target):**
   - Gunakan *Zero-JS by default* milik Astro untuk kerangka statis, dan muat Studio/GSAP secara cerdas.
   - Semua aset gambar dekoratif menggunakan format WebP/SVG teroptimasi dengan atribut `loading="lazy"` dan `decoding="async"` (kecuali gambar Hero menggunakan `fetchpriority="high"`).
   - Pastikan *WebGL / Canvas loop* otomatis berhenti (`cancelAnimationFrame`) ketika pengguna sedang tidak berada di bagian kamera atau saat kamera dimatikan.
3. **Security Headers & Privacy:**
   - Tambahkan meta Content-Security-Policy (CSP) yang aman (mengizinkan `blob:` dan `mediastream:` untuk kamera/kanvas lokal, menolak skrip eksternal mencurigakan).
   - Pastikan seluruh *stream* kamera (`MediaStreamTrack.stop()`) langsung diputus begitu pengguna menekan tombol "Matikan Kamera" demi privasi.

---

## 7. AUTOMATED QA MENGGUNAKAN PLAYWRIGHT (`tests/mivora.spec.ts`)

Buat dan jalankan pengujian otomatis menggunakan Playwright dengan opsi Chromium palsu untuk kamera (`--use-fake-ui-for-media-stream` dan `--use-fake-device-for-media-stream` di `playwright.config.ts`) sehingga kamera dapat diuji secara otomatis tanpa perlu klik izin manual!

### Skenario Pengujian Wajib Lulus:
1. **Landing Page & Alignment Check:** Memastikan Hero Section berada di tengah, Section Lensa rata kiri, Section Bingkai rata kanan, dan Footer memuat informasi alamat & kontak lengkap.
2. **Anti-Slop & Responsive Check:** Menguji tampilan di viewport Desktop (`1440x900`) dan Mobile (`390x844`) — memastikan tidak ada *horizontal overflow* dan semua tombol interaktif dapat diklik.
3. **Camera & Lens Mode Test:** Membuka Studio Photobooth, menyalakan kamera (menggunakan *fake media stream* Chromium), mengganti mode lensa ke `360° Fisheye` dan `Vintage Digicam`, lalu memverifikasi elemen `<canvas>` aktif me-render *frame*.
4. **Capture, Frame Customization & Download Flow:**
   - Menekan tombol ambil foto (mode instan untuk testing).
   - Memilih minimal 3 tema bingkai berbeda (`Y2K Cyber Pop`, `Retro Receipt`, `Mivora Signature`).
   - Menambahkan stiker dan teks *caption*.
   - Memverifikasi *watermark* `MIVORA PHOTO` ter-render pada kanvas akhir.
   - Membuka modal **QR Code** dan memastikan elemen SVG/Canvas QR Code tampil tanpa *error* di *console*.

---

## 8. TAHAPAN EKSEKUSI UNTUK CODEX CLI (STEP-BY-STEP EXECUTION LOOP)

Jalankan tugas ini secara berurutan tanpa berhenti sampai seluruh tes Playwright berwarna hijau (PASS):

1. **Step 1 — Scaffolding & Skills:** Inisialisasi proyek Astro + React + Tailwind, jalankan `pnpm dlx skills add shadcn/ui`, `npx impeccable install`, dan tarik panduan `anti-slop`.
2. **Step 2 — Design Tokens & Custom SVG Assets:** Siapkan konfigurasi warna (`#FFF3B0`, `#8ECAE6`, `#E63946`, `#121212`), muat font `Syne`, `Plus Jakarta Sans`, dan `JetBrains Mono`, serta bangun kumpulan komponen SVG Stiker & Aset Ilustrasi Bingkai.
3. **Step 3 — Photobooth Core Engine:** Bangun *custom hooks* untuk Kamera, Filter Lensa Canvas (termasuk 360 Fisheye, Digicam, Leica, VHS), Perekam Boomerang/Live Photo, serta *Frame Compositor* dengan 16+ variasi bingkai penuh visual dan *subtle watermark*.
4. **Step 4 — Landing Page & GSAP Animations:** Bangun seluruh *section* sesuai urutan alignment (Center -> Left -> Right -> Studio -> Left -> Footer Lengkap) dengan copywriting Gen-Z yang asik dan animasi GSAP Split-Text + ScrollTrigger.
5. **Step 5 — Playwright QA & Self-Healing:** Jalankan `pnpm exec playwright test`. Jika ada tes yang gagal atau terdapat *console error* / *TypeScript error*, perbaiki kodenya secara mandiri hingga `0 errors` dan semua pengujian Playwright **PASSED**.