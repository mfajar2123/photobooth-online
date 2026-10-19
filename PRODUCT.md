# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with TypeScript strict mode and React islands, as specified in `plan.md`.

## Users

Friends and small groups in Indonesia who want to make playful photobooth photos from a phone or laptop browser without installing an app.

## Product Purpose

Mivora Photo lets people capture, style, compose, and save photobooth images and short looping captures directly in their browser. Success means a visitor can complete a photo session and export a polished result from the same device.

## Positioning

Camera capture, lens effects, frame composition, and exports run locally in the browser; Mivora Photo has no photo storage backend or database.

## Operating Context

Users open the site on a phone or laptop, grant camera access, take one or more photos, choose a lens and frame, personalize the composition, then download or share the result. A secure browser context and a working camera are needed for live capture.

## Capabilities and Constraints

- All camera, image composition, animation, and QR composition work is client-side. Do not upload or persist user photos to a server.
- Support camera selection and front/rear facing modes where the browser exposes them, countdowns, manual and sequential capture, retakes, multiple photo layouts, frame themes, stickers, captions, image export, and browser sharing where supported.
- Camera access is permission-based. Explain permission and device errors with a recovery action, and stop camera tracks when the user turns the camera off or leaves the studio.
- The product plan calls for eight live lens looks, sixteen frame themes, animated capture export, QR-based local sharing guidance, Indonesian copy, and a complete marketing page.
- Video export support varies by browser. Offer a supported local format or a clear fallback when a requested codec is unavailable.

## Brand Commitments

- Product name: Mivora Photo.
- Voice: friendly, concise Indonesian with polite Gen-Z phrasing.
- The plan specifies Butter Yellow `#FFF3B0`, Warm Cream `#FFFDF5`, Sky Blue `#8ECAE6`, Poppy Red `#E63946`, and Obsidian Ink `#121212`.
- The plan specifies a tactile editorial style with expressive typography, clear borders, generous whitespace, and authored visual assets.

## Evidence on Hand

- `plan.md` is the supplied product and feature brief.
- No production photography, customer proof, or licensed brand assets were supplied. Do not invent testimonials, real customers, or operational claims beyond the brief.

## Product Principles

- Keep personal images on the user's device.
- Make a complete photo session possible without an account or app install.
- Show the effect of choices directly in the live preview and final composition.
- Make camera states and export limitations understandable and recoverable.
