---
name: camera-photobooth
description: >-
  Use this skill when implementing in-browser webcam capture, photobooth islands,
  canvas snapshot rendering, multi-shot sequences, or custom photo frame filters.
---

# Browser Camera & Photobooth Engineering Runbook

## 1. Stream Lifecycle Stability
- **Persistent Stream**: Jangan pernah memutus (`track.stop()`) dan meminta izin webcam ulang di tengah transisi state (misal dari mode standby ke countdown atau capture sequence). Pertahankan `MediaStream` tetap aktif selama rangkaian sesi foto berlangsung.
- **Cleanup**: Hentikan stream dan matikan track hanya saat komponen di-*unmount* secara permanen atau user secara sadar menutup kamera / beralih keluar fitur.

## 2. Preventing Black / Blank Captures
Sebelum mengambil frame ke canvas (`ctx.drawImage(video, ...)`), **wajib** lakukan verifikasi kesiapan video feed:
```typescript
if (!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || video.videoWidth === 0) {
  throw new Error("Video stream is not ready for capture");
}
```

## 3. Capture Feedback & UX
- **Audio Feedback**: Putar shutter click sintetis via Web Audio API saat pengambilan foto agar user merasakan respons instan.
- **Thumbnail Strip**: Tampilkan thumbnail frame yang baru saja terambil di bawah viewfinder secara langsung agar user dapat memverifikasi hasil jepretan seketika.
- **Aspect Ratios**: Dukung rasio analog photobooth umum:
  - `2x6 Strip` (4 cut vertical)
  - `4x6 Grid` (2x2 collage)
  - `9:16 Story` (vertical mobile)
  - `Duo Strip` (2 cut horizontal)
  - `Classic Polaroid` (4:5 single portrait)

## 4. Canvas Compositing & Watermark
- Saat menggabungkan bingkai / frame tematik, pastikan watermark atau logo brand diposisikan rapi di margin border (bawah/atas) tanpa menutupi area wajah atau pose subjek.
- Dukung ekspor gambar high-res (PNG/JPEG) dan mekanisme download mudah (Direct download, Web Share API, dan QR Code untuk transfer ke smartphone).
