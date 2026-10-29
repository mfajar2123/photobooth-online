# Rencana Improvement — Ruang Kilas: Undangan Digital + Navbar Profesional

> **Status:** sudah diimplementasikan (Oktober 2026) — lihat bagian 11.
> **Prinsip utama:** 100% statis (tanpa backend/database), design system yang ada **tidak** berubah, brand tetap `ruangkilas.my.id`.

---

## 1. Konteks & Tujuan

Saat ini Ruang Kilas berisi: photobooth online (`/studio`), panduan (`/panduan`), request photobooth event (`/request-event`), brand (`/brand`), terms (`/terms`), dan 2 halaman wedding demo (`/wedding-ripki`, `/wedding-ripki-aura`).

**Tujuan:** menambah lini produk kedua — **Undangan Digital Wedding** — di domain yang sama, sehingga Ruang Kilas menjadi platform "photobooth + undangan digital untuk acara", bukan sekadar tool foto.

**Deliverable:**
1. Navbar profesional ber-dropdown yang menjangkau semua halaman (lama + baru).
2. Produk Undangan Digital: katalog template, contoh/portofolio yang benar-benar berjalan, dan jalur request custom.
3. Contoh undangan interaktif (data statis) yang menampilkan: nama mempelai, tanggal & rundown acara, lokasi + tombol peta, galeri foto, musik, dan fitur pendukung.

---

## 2. Batasan (tidak boleh dilanggar)

| Batasan | Implikasi |
|---|---|
| Statik penuh, tanpa backend/database | Semua data berupa file TypeScript/JSON di repo; build Astro menghasilkan HTML statis. RSVP/pergantian data tamu pakai `mailto:` / `wa.me`, bukan server. |
| Design system tidak berubah | Pakai token & class yang ada di `src/styles/global.css` (`--butter`, `--cream`, `--sky`, `--poppy`, `--ink`, `.section-pad`, `.button-primary`, `.wordmark`, border 2px + hard shadow). Tidak menambah warna baru di luar token. |
| Brand tetap | Nama "Ruang Kilas", wordmark `✦ RUANG KILAS`, domain `ruangkilas.my.id`, kontak yang ada di `src/data/brand.ts`. |
| Tidak merusak halaman yang ada | Halaman lama tetap utuh; hanya header/footer yang direfaktor jadi komponen shared. |

---

## 3. Arsitektur & File

### 3.1 Refactor Navbar (Fase 0)

Sekarang markup `<header class="site-header">` diduplikasi di 6 halaman (index, studio, panduan, request-event, brand, terms/share). Rencana:

- `src/components/layout/SiteHeader.astro` — **baru**, header tunggal dengan dropdown.
- `src/components/layout/SiteFooter.astro` — **baru**, footer tunggal (menggantikan duplikasi footer di index/panduan/request-event).
- `src/data/navigation.ts` — **baru**, struktur menu (single source of truth).
- `src/styles/global.css` — tambah blok style dropdown (tetap pakai token: border 2px ink, bg cream, hard shadow 4px).
- Semua halaman yang ada diganti pemanggilan `<SiteHeader />` / `<SiteFooter />`; markup visual dipertahankan 1:1.

**Struktur menu:**

```
✦ RUANG KILAS        Produk ▾        Portofolio      Panduan      Tentang        [Buka Studio ↗]
                     ├ Photobooth Online        (/studio)
                     ├ Undangan Digital         (/undangan)
                     ├ Photobooth Event         (/request-event)
                     └ Wedding Booth            (/wedding-ripki-aura)
```

- Dropdown: CSS hover + `:focus-within` (aksesibel via keyboard), di mobile jadi accordion (vanilla JS kecil, konsisten dengan pola script yang sudah ada).
- Semua item punya halaman/jangkar tujuan, sehingga **tidak ada halaman yang tidak terjangkau** dari navbar.
- CTA kanan tetap `.header-cta` (sudah ada di design system).

### 3.2 Route Undangan Digital (baru)

```
/undangan                      → hub: hero + ringkasan 3 langkah + CTA katalog & custom
/undangan/katalog              → grid template (data-driven) + filter kategori
/undangan/portofolio           → daftar undangan contoh yang sudah jadi (bisa diklik, live)
/undangan/custom               → form request (client-side) → wa.me / mailto
/undangan/[slug]               → halaman undangan live (getStaticPaths dari data)
                                 contoh: /undangan/rifqi-aulya, /undangan/dimas-nabila, /undangan/andi-salsa
```

Implementasi: `src/pages/undangan/[slug].astro` + `getStaticPaths()` membaca `src/data/invitations.ts` → setiap undangan jadi HTML statis. **Tanpa routing runtime.**

### 3.3 Data (statis)

```
src/data/invitations.ts    → tipe + array data undangan contoh
src/data/templates.ts      → katalog template (nama, kategori, palet, thumbnail, slug demo)
```

**Skema `Invitation`:**

```ts
interface Invitation {
  slug: string;
  theme: 'serat' | 'linen' | 'garden' | 'monokrom';
  couple: {
    bride: { name: string; short: string; photo: string; parents?: string; instagram?: string };
    groom: { name: string; short: string; photo: string; parents?: string; instagram?: string };
  };
  quote: { text: string; source?: string };
  event: {
    date: string;            // ISO
    ceremony:   { time: string; venue: string; address: string };
    reception:  { time: string; venue: string; address: string };
    mapsUrl: string;         // Google Maps link
    dressCode?: string;
    rsvpUrl: string;         // wa.me deep link
  };
  story:   { date: string; title: string; text: string; image: string }[];
  gallery: { src: string; alt: string; caption?: string }[];
  music:   { title: string; artist: string; src: string };
  extras?: {
    livestreamUrl?: string;
    gift?: { bank: string; number: string; holder: string };
    wishesUrl?: string;
  };
}
```

Minimal **3 contoh undangan** dengan data kaya (8–12 foto galeri, 3–4 momen story, rundown lengkap) agar katalog terlihat hidup.

### 3.4 Komponen Interaktif (React islands, pola sama dengan `PhotoboothStudio`)

| Komponen | Fungsi | Catatan statis |
|---|---|---|
| `InvitationCover.tsx` | Cover pembuka + tombol "Buka Undangan" → reveal konten | state lokal |
| `Countdown.tsx` | Hitung mundur ke tanggal acara | `setInterval`, otomatis berhenti |
| `EventSchedule.tsx` | Rundown: akad/resepsi/afterparty + tombol peta | link `mapsUrl` |
| `GalleryLightbox.tsx` | Galeri + lightbox/zoom + navigasi keyboard | aset lokal |
| `MusicPlayer.tsx` | Musik latar: play/pause, mulai setelah cover dibuka | file mp3 di `public/audio/` |
| `SaveTheDate.tsx` | Generate `.ics` di browser → download | `Blob`, tanpa server |
| `Wishes.tsx` | Ucapan/doa → deep link `wa.me` / `mailto` | tanpa form server |
| `GiftCard.tsx` | Amplop digital (copy no. rekening) | `navigator.clipboard` |
| `ShareBar.tsx` | Salin tautan / share native (`navigator.share`) | fallback copy |

Semua interaksi **client-side**, sesuai pola yang sudah ada (`src/components/photobooth/*`, `share.astro`).

---

## 4. Konten Halaman Undangan (spesifikasi)

Urutan section pada `/undangan/[slug]`:

1. **Cover** — nama mempelai, tanggal, tombol "Buka Undangan" (musik mulai di sini).
2. **Salam & kutipan** — kalimat pembuka + kutipan (opsional).
3. **Mempelai** — foto + nama lengkap + orang tua (2 kolom, di mobile stack).
4. **Hitung mundur** — countdown ke tanggal acara.
5. **Detail acara** — akad & resepsi: waktu, venue, alamat, **tombol "Buka Peta"** → Google Maps.
6. **Rundown / timeline** — daftar waktu acara.
7. **Galeri foto** — grid + lightbox (8–12 foto).
8. **Cerita cinta (opsional)** — 3–4 milestone dengan foto.
9. **Musik** — mini player + judul lagu.
10. **Dress code / livestream (opsional)** — jika ada di data.
11. **RSVP & ucapan** — tombol WhatsApp + salin tautan.
12. **Save the date** — unduh `.ics`.
13. **Penutup** — kredit "Dibuat dengan Ruang Kilas" + link ke `/undangan` (marketing loop).

Semua section memakai `.section-pad`, `.section-kicker`, `.button-primary/.button-secondary`, border 2px + hard shadow — persis bahasa visual yang ada.

---

## 5. Aset

- **Unsplash**: unduh 20–30 foto wedding/venue/detail (lisensi Unsplash bebas pakai) ke `public/images/invitations/`, ukuran dioptimalkan (JPEG/WebP, ≤200KB per foto, `loading="lazy"`, `decoding="async"`).
- Catat atribusi di `public/images/invitations/CREDITS.md` (praktik baik).
- **Audio**: 2–3 file musik instrumental bebas lisensi di `public/audio/` (≤1.5MB per lagu, kompres mono 96kbps).
- **Thumbnail katalog**: preview template di `public/images/templates/`.

---

## 6. SEO & Performa

- Tambah URL baru ke `public/sitemap.xml` (sudah ada pola image sitemap).
- JSON-LD per undangan: `Event` + `Person` + `BreadcrumbList` (lewat `extraSchema` yang sudah didukung `BaseLayout`).
- `og:image` per undangan (1200×630, dari foto cover).
- Canonical + title/description per halaman (±60 / ±155 karakter, pola yang sudah diterapkan sebelumnya).
- Target performa: semua gambar lazy kecuali cover, font sudah di-bundle, JS island hanya untuk interaksi.

---

## 7. QA / Testing (Playwright)

| Spec | Yang diuji |
|---|---|
| `tests/navigation.spec.ts` | Dropdown terbuka via hover & keyboard, semua item menu punya URL yang balas 200, CTA berfungsi |
| `tests/undangan.spec.ts` | `/undangan`, `/undangan/katalog`, `/undangan/portofolio`, `/undangan/custom` render tanpa console error; 3 undangan contoh memuat nama mempelai, tanggal, lokasi, galeri, tombol peta |
| `tests/invitation-interactions.spec.ts` | Countdown jalan, lightbox buka/tutup (Esc), tombol peta punya `href` Google Maps benar, musik bisa di-toggle, `.ics` terunduh, RSVP membuka `wa.me` |
| `tests/undangan-responsive.spec.ts` | Tidak ada horizontal overflow di 390×844 dan 1440×900 |

Verifikasi manual: Lighthouse (target ≥90 performance/SEO), uji Chrome + Safari iOS, musik hanya mulai setelah interaksi user (kebijakan autoplay browser).

---

## 8. Fase Pengerjaan

| Fase | Isi | File utama |
|---|---|---|
| **0. Navbar & Footer** | Refactor ke komponen shared + dropdown "Produk" + accordion mobile | `src/components/layout/SiteHeader.astro`, `SiteFooter.astro`, `src/data/navigation.ts`, `global.css`, semua `src/pages/*.astro` |
| **1. Fondasi data** | Tipe `Invitation`, 3 data contoh, `templates.ts` | `src/data/invitations.ts`, `src/data/templates.ts` |
| **2. Halaman undangan** | Template + 3 undangan live | `src/pages/undangan/index.astro`, `src/pages/undangan/[slug].astro` |
| **3. Interaksi** | Cover, countdown, galeri, musik, peta, `.ics`, RSVP, share | `src/components/invitation/*.tsx` |
| **4. Katalog & custom** | Grid template + filter, halaman portofolio, form request | `src/pages/undangan/katalog.astro`, `portofolio.astro`, `custom.astro` |
| **5. SEO + QA** | Sitemap, JSON-LD, og image, Playwright spec, optimasi aset | `public/sitemap.xml`, `tests/*.spec.ts` |

Urutan: 0 → 1 → 2 → 3 → 4 → 5 (fase 4 bisa paralel dengan fase 3).

---

## 9. Keputusan yang perlu dikonfirmasi

1. **Nama lini**: "Undangan Digital" vs "Undangan Online" vs "Undangan Wedding" — untuk teks navbar & hero.
2. **Jumlah contoh undangan**: 3 (cukup untuk portofolio) atau 5+ (lebih meyakinkan, lebih banyak aset).
3. **Musik**: pakai file instrumental bundel (disarankan, tetap statis) — konsekuensi: tambah ±1–2MB aset.
4. **Apakah `/wedding-ripki` & `/wedding-ripki-aura` dijadikan showcase portofolio?** (saat ini `noindex`; kalau dijadikan showcase, perlu dilepas `noindex` + diberi konteks).
5. **Form request custom** tetap `wa.me` + `mailto` (sesuai batasan statis) — tidak ada penyimpanan data.

---

## 10. Risiko & mitigasi

| Risiko | Mitigasi |
|---|---|
| Dropdown navbar kompleks di mobile | `<details>`/accordion sederhana; uji keyboard & screen reader di QA |
| Aset Unsplash membuat build berat | Kompres ≤200KB/foto, lazy-load, batasi 12 foto per undangan |
| Musik autoplay diblokir browser | Musik mulai setelah klik "Buka Undangan" (sudah interaksi user) |
| Halaman contoh terindex dan menyaingi halaman utama | Beri `noindex` pada undangan contoh, atau tandai jelas sebagai "contoh" |
| Duplikasi markup footer/header | Refactor ke komponen di Fase 0 sebelum menambah halaman baru |

## 11. Status Implementasi (Oktober 2026)

Semua fase sudah dieksekusi:

- [x] **Fase 0 — Navbar & footer shared**: `SiteHeader.astro`, `SiteFooter.astro`, `src/data/navigation.ts`, dropdown Produk + accordion mobile, dipasang di seluruh halaman lama.
- [x] **Fase 1 — Data statis**: `src/data/invitations.ts` (3 undangan) dan `src/data/templates.ts` (4 template).
- [x] **Fase 2 — Halaman undangan**: `/undangan/`, `/undangan/katalog/`, `/undangan/portofolio/`, `/undangan/custom/`, dan `/undangan/[slug]/` (rifqi-aulya, dimas-nabila, andi-salsa) via `getStaticPaths`.
- [x] **Fase 3 — Interaksi**: `InvitationCover` (cover + musik), `Countdown`, `Gallery` (lightbox), `InvitationTools` (save the date `.ics`, share, peta, RSVP WhatsApp, salin rekening).
- [x] **Fase 4 — Aset**: 17 foto Unsplash di `public/images/invitations/` (lihat `CREDITS.md`), musik `public/audio/undangan-theme.mp3` (disintesis).
- [x] **Fase 5 — SEO & QA**: sitemap diperbarui, JSON-LD `Event`, 4 spec Playwright baru (navigation, undangan, invitation-interactions, undangan-responsive) — total 34 test lulus.

Build: 16 halaman statis. Halaman demo undangan sengaja `noindex`.

