# Ruang Kilas — 16:9 / 20s brand motion v2

## Brief

| Field | Decision |
| --- | --- |
| Objective | Show that Ruang Kilas now covers the whole celebration: photobooth, undangan digital, and artikel. |
| Audience | Friends and small groups in Indonesia planning a wedding, party, or event. |
| Hook / payoff | "Rayakan momenmu, simpan ceritanya." → one place for photos, invitations, and ideas. |
| CTA | Buka ruangkilas.my.id → photobooth, undangan digital, artikel. |
| Evidence | Site sections `index.astro`, `undangan/[slug].astro`, `artikel/[slug].astro`, and data files. No invented testimonials, prices, or customer claims. |
| Identity | Montserrat Variable (display), Lora Variable (body), JetBrains Mono (technical). Butter `#FFF3B0`, cream `#FFFDF5`, sky `#8ECAE6`, poppy `#E63946`, ink `#121212`, paper `#F1EAD9`. |
| Format | 1920×1080, 16:9, 60 fps, 20.0 s, MP4 + AAC. |
| Visual concept | Paper objects carry the story: photostrip, invitation phone, article browser window. One primary focus per beat. |
| Motion concept | Word-follow close pass → camera pullback to reveal the object → object state change → CTA reading hold. Blur is not used as a decorative layer; camera and object moves carry the rhythm. |
| Audio | Reuse the previous synthetic score family (120 BPM) with re-timed SFX families: air sweep for camera moves, shutter for captures, paper for the invitation, page flick for articles, single closing hit. |
| Status | Implemented in `video/ruangkilas-motion-v2.html`; rendered delivery `video/ruangkilas-16x9-20s-v2.mp4`. |

## Beat map

| # | Time | Copy | Primary focus / asset | Camera | Boundary / audio |
| --- | --- | --- | --- | --- | --- |
| 0 | 0.00–2.80 | RAYAKAN / MOMENMU. / SIMPAN CERITANYA. + "Photobooth & undangan digital, dalam satu tempat." | Text; photostrip + invitation mini card enter right | Close on RAYAKAN, drift down, pull back at 1.50 | Butter background. Shutter on strip at 1.20. |
| 1 | 2.60–5.60 | LIMA LENSA / VINTAGE. + "Tampilan kamera langsung di preview." | Five lens names left; large lens preview card right | Push into text, hold, pull back | Air sweep at 2.56. Shutters at 3.55 / 4.15 / 4.70. Lens preview switches at 3.45 / 4.05 / 4.60 / 5.10. |
| 2 | 5.40–8.10 | BINGKAI / SESUAI VIBE. + "Retro receipt sampai editorial minimalis." | Three photostrips left; right-aligned text | Push into text right, pull back | Air sweep at 5.36. |
| 3 | 7.90–10.60 | BUKAN CUMA / FOTO DIAM. + two lines | Text left; live photostrip right | Push into text, pull back | Air sweep at 7.86. |
| 4 | 10.40–14.00 | UNDANGAN / YANG BERCERITA. + "Satu tautan: cerita, galeri, peta, RSVP." | Text left; invitation phone right | Push into text, pull back to reveal phone, push into phone | Paper slide at 10.46 / 10.90. Row stagger 10.92–11.83. Tap at 11.90. Air sweep at 10.36. |
| 5 | 13.80–17.20 | IDE & / CERITA. + "Panduan photobooth, undangan, dan acara." | Article browser window left; text right | Push into browser, pull back, push toward text | Page flicks at 13.86 / 14.16 / 14.46. Air sweep at 13.76. |
| 6 | 17.10–20.00 | ✦ RUANG KILAS / PHOTOBOOTH & / UNDANGAN DIGITAL. + offerings line + button + domain | Centered lockup on ink | Slow push then settle | Riser 15.3–17.0. Kick + low impact at 17.10. Tonal resolve 17.35 / 17.44. |

## Review status

- Implemented: composition, render script, audio script.
- Technically checked: 1,200 frames rendered at 60 fps; MP4 is 20.000 s, 1920×1080, H.264 High, AAC 48 kHz stereo, 13.1 MB; audio mean −24.3 dB, peak −3.7 dB.
- Visually reviewed: key frames inspected at 1.8, 4.2, 6.6, 9.4, 11.6, 12.8, 15.9, and 18.5 s.
- Aurally reviewed: not directly heard in this environment; level/waveform checks only.
- User-approved: pending.
