import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { composePhotostrip, drawLensFrame } from './canvasRenderer';
import { frameCategories, frames, layouts, lenses, photoFilters } from './presets';
import { useCameraStream } from './useCameraStream';
import { useLiveCapture } from './useLiveCapture';
import type { CustomPattern, FramePreset, LayoutId, LensId, PhotoFilterId, PhotoSlot } from './types';

const stickerChoices = ['✦', '♡', '🎀', '☻', '✿', '★', 'CHEESE!'];

type StudioStep = 1 | 2 | 3 | 4;

export default function PhotoboothStudio() {
  const camera = useCameraStream();
  const live = useLiveCapture();
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const outputRef = useRef<HTMLCanvasElement>(null);
  const countdownTimer = useRef<number | null>(null);
  const motionWindowTimer = useRef<number | null>(null);
  const renderVersion = useRef(0);
  const composedRef = useRef<{ slots: PhotoSlot[]; frame: FramePreset; layout: LayoutId; caption: string; stickers: string[]; stickerPositions: { x: number; y: number }[]; customColor: string; customPattern: CustomPattern; photoFilter: PhotoFilterId; canvas: HTMLCanvasElement } | null>(null);
  const preparedPhotoRef = useRef<{ key: unknown[]; blob: Blob } | null>(null);
  const preparedMotionRef = useRef<{ key: unknown[]; blob: Blob } | null>(null);

  const [step, setStep] = useState<StudioStep>(1);
  const [lens, setLens] = useState<LensId>('studio');
  const [layout, setLayout] = useState<LayoutId>('story-1');
  const [photoFilter, setPhotoFilter] = useState<PhotoFilterId>('classic');
  const [shareFormat, setShareFormat] = useState<'photo' | 'boomerang'>('photo');
  const [boomerangDuration, setBoomerangDuration] = useState<3 | 4>(3);
  const [isExporting, setIsExporting] = useState(false);
  const [isShareReady, setIsShareReady] = useState(false);
  const [frame, setFrame] = useState<FramePreset>(frames[0]);
  const [category, setCategory] = useState('Semua');
  const [slots, setSlots] = useState<PhotoSlot[]>([]);
  const [targetSlot, setTargetSlot] = useState<number | null>(null);
  const [timer, setTimer] = useState(3);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [autoShoot, setAutoShoot] = useState(false);
  const [mirror, setMirror] = useState(true);
  const [caption, setCaption] = useState('');
  const [stickers, setStickers] = useState<string[]>([]);
  const [stickerPositions, setStickerPositions] = useState<{ x: number; y: number }[]>([]);
  const [draggingSticker, setDraggingSticker] = useState<number | null>(null);
  const [customColor, setCustomColor] = useState('#FFF3B0');
  const [customPattern, setCustomPattern] = useState<CustomPattern>('solid');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notice, setNotice] = useState('');

  const selectedLayout = layouts.find((item) => item.id === layout) ?? layouts[0];
  const orientation = layout.startsWith('story-') ? 'story' : 'landscape';
  const visibleFrames = useMemo(() => category === 'Semua' ? frames : frames.filter((item) => item.category === category), [category]);
  const capturedCount = slots.filter((slot) => Boolean(slot?.image)).length;
  const isLayoutFilled = capturedCount >= selectedLayout.count;
  const hasPhotos = capturedCount > 0;
  const canDownload = Array.from({ length: selectedLayout.count }, (_, index) => Boolean(slots[index]?.image)).every(Boolean);
  const exportKey = [slots, frame, layout, caption, stickers, stickerPositions, customColor, customPattern, photoFilter, boomerangDuration];
  const isSameExportKey = (key: unknown[]) => key.every((value, index) => value === exportKey[index]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !camera.stream) return;
    video.srcObject = camera.stream;
    void video.play().catch(() => setNotice('Tekan tombol kamera sekali lagi jika pratinjau belum muncul.'));
  }, [camera.stream]);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = previewRef.current;
    if (!camera.stream || !video || !canvas || step !== 1) return;
    let frameId = 0;
    let lastPaint = 0;
    let intersects = false;
    const paint = (now: number) => {
      if (!intersects || document.hidden) { frameId = 0; return; }
      if (now - lastPaint > 40) {
        drawLensFrame(video, canvas, lens, mirror, selectedLayout.photoRatio);
        lastPaint = now;
      }
      frameId = requestAnimationFrame(paint);
    };
    const updateLoop = () => {
      if (intersects && !document.hidden && frameId === 0) frameId = requestAnimationFrame(paint);
      else if ((!intersects || document.hidden) && frameId !== 0) { cancelAnimationFrame(frameId); frameId = 0; }
    };
    const observer = new IntersectionObserver(([entry]) => { intersects = entry.isIntersecting; updateLoop(); }, { threshold: 0.05 });
    observer.observe(canvas);
    document.addEventListener('visibilitychange', updateLoop);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', updateLoop); if (frameId !== 0) cancelAnimationFrame(frameId); };
  }, [camera.stream, lens, mirror, selectedLayout.photoRatio, step]);

  const renderOutput = useCallback(async () => {
    const version = ++renderVersion.current;
    const cached = composedRef.current;
    const isCached = cached && cached.slots === slots && cached.frame === frame && cached.layout === layout && cached.caption === caption && cached.stickers === stickers && cached.stickerPositions === stickerPositions && cached.customColor === customColor && cached.customPattern === customPattern && cached.photoFilter === photoFilter;
    const canvas = isCached ? cached.canvas : await composePhotostrip({ slots, frame, layoutId: layout, caption, stickers, stickerPositions, customColor, customPattern, filterId: photoFilter });
    if (version !== renderVersion.current) return canvas;
    if (!isCached) composedRef.current = { slots, frame, layout, caption, stickers, stickerPositions, customColor, customPattern, photoFilter, canvas };
    const target = outputRef.current;
    if (target) {
      if (target.width !== canvas.width || target.height !== canvas.height) { target.width = canvas.width; target.height = canvas.height; }
      target.getContext('2d')?.drawImage(canvas, 0, 0);
    }
    return canvas;
  }, [caption, customColor, customPattern, frame, layout, photoFilter, slots, stickerPositions, stickers]);

  useEffect(() => {
    if (outputRef.current && slots.length) {
      void renderOutput();
    }
  }, [slots, frame, layout, caption, stickers, stickerPositions, customColor, photoFilter, step, renderOutput]);

  useEffect(() => () => {
    if (countdownTimer.current !== null) window.clearInterval(countdownTimer.current);
    if (motionWindowTimer.current !== null) window.clearInterval(motionWindowTimer.current);
  }, []);

  const shutterSound = useCallback(() => {
    try {
      const audio = new AudioContext();
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.type = 'triangle';
      oscillator.frequency.value = 900;
      gain.gain.setValueAtTime(0.12, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.09);
      oscillator.start();
      oscillator.stop(audio.currentTime + 0.09);
      oscillator.onended = () => void audio.close();
    } catch { /* Audio feedback is optional when browser audio is unavailable. */ }
  }, []);

  const snap = useCallback(async () => {
    const video = videoRef.current;
    const canvas = previewRef.current;
    if (!video || !canvas || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || video.videoWidth === 0) {
      setNotice('Preview kamera belum siap. Tunggu sebentar lalu coba jepret lagi.');
      return false;
    }
    await live.recordWindow(canvas);
    shutterSound();
    const image = canvas.toDataURL('image/png');
    const photo: PhotoSlot = { image, moment: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) };
    const firstEmpty = slots.findIndex((item, index) => index < selectedLayout.count && !item?.image);
    const shiftOldest = targetSlot === null && firstEmpty < 0;
    const shotIndex = targetSlot ?? (firstEmpty >= 0 ? firstEmpty : selectedLayout.count - 1);
    live.finishShot(shotIndex, shiftOldest);
    setSlots((current) => {
      const firstEmptySlot = current.findIndex((item, index) => index < selectedLayout.count && !item?.image);
      const index = targetSlot ?? (firstEmptySlot >= 0 ? firstEmptySlot : current.length);
      if (index < selectedLayout.count) {
        const next = [...current];
        next[index] = photo;
        return next;
      }
      return [...current.slice(1), photo];
    });
    setTargetSlot(null);
    setNotice('');
    return true;
  }, [live, selectedLayout.count, shutterSound, slots, targetSlot]);

  const startCapture = useCallback(async () => {
    if (isCapturing) return;
    if (!camera.stream) {
      await camera.start();
      return;
    }
    if (!videoRef.current || videoRef.current.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      setNotice('Preview kamera masih disiapkan. Tunggu sebentar ya.');
      return;
    }
    setIsCapturing(true);
    const runOne = async () => {
      setCountdown(timer);
      let remain = timer;
      motionWindowTimer.current = window.setInterval(() => {
        if (remain <= 2 && previewRef.current) void live.recordWindow(previewRef.current);
      }, 110);
      await new Promise<void>((resolve) => {
        countdownTimer.current = window.setInterval(() => {
          remain -= 1;
          setCountdown(remain > 0 ? remain : null);
          if (remain <= 0) {
            if (countdownTimer.current !== null) window.clearInterval(countdownTimer.current);
            countdownTimer.current = null;
            if (motionWindowTimer.current !== null) window.clearInterval(motionWindowTimer.current);
            motionWindowTimer.current = null;
            resolve();
          }
        }, 1000);
      });
      await snap();
    };
    await runOne();
    setCountdown(null);
    setIsCapturing(false);
  }, [camera, isCapturing, snap, timer]);

  const updateLayout = (nextLayout: LayoutId) => {
    if (nextLayout === layout) return;
    setLayout(nextLayout);
    setSlots([]);
    setTargetSlot(null);
    live.clearMotion();
    setNotice(hasPhotos ? 'Format foto berubah. Silakan ambil ulang foto sesuai jumlah yang dipilih.' : '');
  };

  const addSticker = (value: string) => {
    setStickers((current) => [...current, value]);
    setStickerPositions((current) => [...current, { x: 50, y: 45 + current.length * 5 }]);
  };

  const moveSticker = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    if (draggingSticker !== index || !event.currentTarget.parentElement) return;
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    const x = Math.min(94, Math.max(6, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(88, Math.max(6, ((event.clientY - bounds.top) / bounds.height) * 100));
    setStickerPositions((current) => current.map((position, item) => item === index ? { x, y } : position));
  };

  const exportImage = async () => {
    setIsExporting(true);
    try {
      const canvas = await renderOutput();
      if (!canvas) return;
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.92));
      if (!blob) { setNotice('File foto belum bisa dibuat. Coba lagi setelah foto selesai dimuat.'); return; }
      const link = document.createElement('a');
      link.download = `mivora-photo-${new Date().toISOString().slice(0, 10)}.jpg`;
      link.href = URL.createObjectURL(blob);
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } finally {
      setIsExporting(false);
    }
  };

  const shareResult = async () => {
    const isVideo = shareFormat === 'boomerang';
    const prepared = isVideo ? preparedMotionRef.current : preparedPhotoRef.current;
    if (!prepared || !isSameExportKey(prepared.key)) {
      setNotice(`File ${isVideo ? 'Boomerang' : 'foto'} sedang disiapkan. Tombol bagikan aktif setelah selesai.`);
      return;
    }
    const blob = prepared.blob;
    const mimeType = blob.type || (isVideo ? 'video/webm' : 'image/jpeg');
    const extension = isVideo ? (mimeType.includes('mp4') ? 'mp4' : 'webm') : 'jpg';
    const file = new File([blob], `mivora-${isVideo ? 'boomerang' : 'photo'}.${extension}`, { type: mimeType });
    if (navigator.share && (isVideo || !navigator.canShare || navigator.canShare({ files: [file] }))) {
      try {
        await navigator.share({ title: isVideo ? 'Boomerang Mivora Photo' : 'Foto Mivora Photo', files: [file] });
        return;
      } catch (cause) {
        if (cause instanceof DOMException && cause.name === 'AbortError') return;
      }
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(`Browser ini belum mendukung berbagi ${isVideo ? 'video' : 'foto'} langsung. File sudah diunduh, lalu bagikan dari galeri.`);
  };

  const createMotionBlob = async () => {
    setIsExporting(true);
    try {
      const frameCount = Math.max(2, ...live.clipsRef.current.slice(0, selectedLayout.count).map((clip) => clip.length));
      const outputWidth = selectedLayout.ratio >= 1 ? 1280 : 720;
      const outputHeight = Math.round(outputWidth / selectedLayout.ratio);
      const animatedComposites = await Promise.all(Array.from({ length: frameCount }, (_, frameIndex) => {
        const animatedSlots = slots.slice(0, selectedLayout.count).map((slot, slotIndex) => ({
          ...slot,
          image: live.clipsRef.current[slotIndex]?.[frameIndex] ?? slot.image,
        }));
        return composePhotostrip({
          slots: animatedSlots,
          frame,
          layoutId: layout,
          caption,
          stickers,
          stickerPositions,
          customColor,
          customPattern,
          filterId: photoFilter,
          outputWidth,
        });
      }));
      const blob = await live.exportWebm(async (context, frameIndex) => {
        const composite = animatedComposites[frameIndex % animatedComposites.length];
        context.fillStyle = frame.background;
        context.fillRect(0, 0, outputWidth, outputHeight);
        context.drawImage(composite, 0, 0, outputWidth, outputHeight);
      }, boomerangDuration, outputWidth, outputHeight);
      preparedMotionRef.current = { key: exportKey, blob };
      return blob;
    } catch (cause) {
      setNotice(cause instanceof Error ? cause.message : 'Video belum bisa dibuat.');
      return null;
    } finally {
      setIsExporting(false);
    }
  };

  useEffect(() => {
    if (step !== 4 || !canDownload) { setIsShareReady(false); return; }
    let cancelled = false;
    const existing = shareFormat === 'boomerang' ? preparedMotionRef.current : preparedPhotoRef.current;
    if (existing && isSameExportKey(existing.key)) { setIsShareReady(true); return; }
    setIsShareReady(false);
    setIsExporting(true);
    const prepare = async () => {
      try {
        if (shareFormat === 'boomerang') {
          await createMotionBlob();
        } else {
          const canvas = await renderOutput();
          if (!canvas) return;
          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.92));
          if (blob) preparedPhotoRef.current = { key: exportKey, blob };
        }
        const preparedResult = shareFormat === 'boomerang' ? preparedMotionRef.current : preparedPhotoRef.current;
        if (!cancelled) setIsShareReady(Boolean(preparedResult && isSameExportKey(preparedResult.key)));
      } finally {
        if (!cancelled) setIsExporting(false);
      }
    };
    void prepare();
    return () => { cancelled = true; };
  }, [step, canDownload, shareFormat, slots, frame, layout, caption, stickers, stickerPositions, customColor, customPattern, photoFilter, boomerangDuration, renderOutput]);

  const exportMotion = async () => {
    const cached = preparedMotionRef.current;
    const blob = cached && isSameExportKey(cached.key) ? cached.blob : await createMotionBlob();
    if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `mivora-boomerang.${blob.type.includes('mp4') ? 'mp4' : 'webm'}`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const fullscreen = async () => {
    if (!document.fullscreenElement) await document.getElementById('studio-app')?.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  useEffect(() => {
    const update = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', update);
    return () => document.removeEventListener('fullscreenchange', update);
  }, []);

  const resetSession = () => {
    setSlots([]);
    setTargetSlot(null);
    setLayout('story-1');
    setPhotoFilter('classic');
    setShareFormat('photo');
    setBoomerangDuration(3);
    live.clearMotion();
    setStickers([]);
    setStickerPositions([]);
    setCaption('');
    setStep(1);
    setNotice('');
  };

  return (
    <div className="studio-app" id="studio-app">
      {/* Top Header & Step Navigation */}
      <div className="studio-topbar">
        <div className="studio-brand">
          <span className="brand-spark" aria-hidden="true">✦</span>
          <span>MIVORA <i>PHOTO</i></span>
        </div>

        <nav className="studio-stepper" aria-label="Tahapan photobooth">
          <button
            type="button"
            className={`stepper-btn ${step === 1 ? 'is-active' : ''}`}
            onClick={() => setStep(1)}
            aria-label="Tahap 01: Kamera"
          >
            <span className="step-num">01</span>
            <span className="step-name">Kamera</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 2 ? 'is-active' : ''}`}
            onClick={() => canDownload && setStep(2)}
            disabled={!canDownload}
            aria-label="Tahap 02: Pilih bingkai"
          >
            <span className="step-num">02</span>
            <span className="step-name">Bingkai</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 3 ? 'is-active' : ''}`}
            onClick={() => canDownload && setStep(3)}
            disabled={!canDownload}
            aria-label="Tahap 03: Pilih filter"
          >
            <span className="step-num">03</span>
            <span className="step-name">Filter</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 4 ? 'is-active' : ''}`}
            onClick={() => canDownload && setStep(4)}
            disabled={!canDownload}
            aria-label="Tahap 04: Simpan atau bagikan"
          >
            <span className="step-num">04</span>
            <span className="step-name">Simpan</span>
          </button>
        </nav>

        <button className="studio-fullscreen" type="button" onClick={() => void fullscreen()}>
          {isFullscreen ? 'Keluar fullscreen' : 'Fullscreen'} <span aria-hidden="true">⤢</span>
        </button>
      </div>

      {notice && <p className="studio-notice" role="status">{notice}</p>}

      {/* ================= STEP 1: KAMERA & AMBIL FOTO ================= */}
      {step === 1 && (
        <div className="studio-step-content step-camera-view">
          <div className="studio-grid">
            <section className="camera-column" aria-label="Kamera dan kontrol jepretan">
              <div className="studio-section-title">
                <span>AMBIL FOTO</span>
                <span className="mono-label">{camera.stream ? 'LIVE · AKTIF' : 'STANDBY'}</span>
              </div>

              <div className={`viewfinder ${selectedLayout.photoRatio > 1 ? 'viewfinder-landscape' : ''} ${lens === 'fisheye' ? 'viewfinder-fisheye' : ''}`} style={{ aspectRatio: String(selectedLayout.photoRatio) }}>
                <video ref={videoRef} className="camera-video-hidden" playsInline muted aria-label="Kamera langsung" />
                <canvas ref={previewRef} className="camera-preview" aria-label="Pratinjau filter kamera" />
                {!camera.stream && (
                  <div className="camera-empty">
                    <div className="camera-icon" aria-hidden="true"><span /><span /><span /></div>
                    <p>Siap abadikan momen?</p>
                    <span>Izinkan kamera, lalu tekan tombol foto.</span>
                  </div>
                )}
                {countdown !== null && <div className="countdown-overlay" aria-live="assertive">{countdown}</div>}
                {camera.stream && <div className="camera-hud"><span>● REC READY</span><span>HD · {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span></div>}
                {lens === 'digicam' && camera.stream && <span className="digicam-date">{new Date().toLocaleDateString('en-CA')}</span>}
              </div>

              {camera.error && (
                <div className="camera-error" role="alert">
                  <span>{camera.error}</span>
                  <button type="button" onClick={() => void camera.start()}>Coba lagi</button>
                </div>
              )}

              {/* Shutter & Quick Controls */}
              <div className="capture-controls">
                <button
                  type="button"
                  className="shutter-button"
                  onClick={() => void startCapture()}
                  disabled={camera.busy || isCapturing}
                >
                  <span className="shutter-disc" />
                  <span>
                    {camera.busy
                      ? 'Minta izin…'
                      : !camera.stream
                      ? 'Nyalakan kamera'
                      : isCapturing
                      ? 'Senyum dulu…'
                      : targetSlot !== null
                      ? `Ulang foto ${targetSlot + 1}`
                      : 'Ambil foto'}
                  </span>
                </button>

                <label className="timer-select">Timer
                  <select value={timer} onChange={(event) => setTimer(Number(event.target.value))}>
                    <option value={1}>1 detik</option>
                    <option value={3}>3 detik</option>
                    <option value={5}>5 detik</option>
                    <option value={10}>10 detik</option>
                  </select>
                </label>

                <button
                  type="button"
                  className={`auto-toggle ${autoShoot ? 'is-on' : ''}`}
                  onClick={() => setAutoShoot((value) => !value)}
                  aria-pressed={autoShoot}
                >
                  ↻ {autoShoot ? 'Burst aktif' : 'Burst mode'}
                </button>

                <div className="camera-toolbar-inline">
                  <button type="button" className="tool-button" onClick={() => setMirror((value) => !value)} aria-pressed={mirror}>
                    ↔ Mirror {mirror ? 'on' : 'off'}
                  </button>
                  <button type="button" className="tool-button" onClick={() => void camera.flip()}>
                    ⇄ Balik
                  </button>
                  {camera.stream && (
                    <button type="button" className="camera-off" onClick={camera.stop}>
                      Matikan
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Lens Switcher */}
              <div className="camera-quick-lenses">
                <span className="quick-lens-label">Efek Kamera:</span>
                <div className="quick-lens-scroll">
                  {lenses.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`quick-lens-pill ${lens === item.id ? 'is-active' : ''}`}
                      onClick={() => setLens(item.id)}
                    >
                      {item.shortName}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <aside className="edit-column" aria-label="Format photostrip dan hasil foto">
              <div className="studio-section-title">
                <span>ATUR FOTO</span>
                <span className="mono-label">{capturedCount}/{selectedLayout.count} FOTO</span>
              </div>

              {/* Layout Picker */}
              <div className="editor-block layout-block">
                <div className="block-heading">
                  <h3>Ukuran foto</h3>
                  <span>{orientation === 'story' ? 'Story · 9:16' : 'Foto 16:9 · hasil tetap potret'}</span>
                </div>
                <div className="orientation-options" aria-label="Pilih orientasi foto">
                  <button type="button" className={orientation === 'story' ? 'is-selected' : ''} onClick={() => updateLayout('story-1')} aria-pressed={orientation === 'story'}>Potret · Story</button>
                  <button type="button" className={orientation === 'landscape' ? 'is-selected' : ''} onClick={() => updateLayout(`landscape-${selectedLayout.count}` as LayoutId)} aria-pressed={orientation === 'landscape'}>Landscape</button>
                </div>
                <div className="layout-options">
                  {layouts.filter((item) => item.id.startsWith(orientation)).map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`layout-option ${layout === item.id ? 'is-selected' : ''}`}
                      onClick={() => updateLayout(item.id)}
                      aria-pressed={layout === item.id}
                    >
                      <span className={`layout-glyph layout-${item.id}`} aria-hidden="true">
                        {Array.from({ length: item.count }, (_, index) => <i key={index} />)}
                      </span>
                      <strong>{item.name}</strong>
                      <small>{item.detail}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Captured Thumbnails */}
              <div className="editor-block">
                <div className="block-heading">
                  <h3>Slot Jepretan</h3>
                  <span>Klik foto untuk retake</span>
                </div>
                <div className="thumbnails-grid" aria-label="Pilih foto untuk retake">
                  {Array.from({ length: selectedLayout.count }, (_, index) => (
                    <button
                      key={index}
                      className={`thumbnail-slot ${targetSlot === index ? 'is-retake' : ''}`}
                      type="button"
                      onClick={() => {
                        setTargetSlot(index);
                        setNotice(`Foto ${index + 1} dipilih. Jepret lagi untuk mengganti foto ini.`);
                      }}
                      aria-label={`Foto ${index + 1}${slots[index] ? ', retake' : ', kosong'}`}
                    >
                      {slots[index] ? (
                        <>
                          <img src={slots[index].image} alt={`Hasil foto ${index + 1}`} />
                          <span className="slot-retake-badge">↻</span>
                        </>
                      ) : (
                        <span className="empty-slot">{String(index + 1).padStart(2, '0')}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 1 Completion / Next Callout */}
              <div className="step-callout-box">
                {isLayoutFilled ? (
                  <p className="callout-success">Semua foto sudah lengkap. Lanjut pilih bingkai.</p>
                ) : hasPhotos ? (
                  <p className="callout-info">Ambil {selectedLayout.count - capturedCount} foto lagi.</p>
                ) : (
                  <p className="callout-idle">Nyalakan kamera dan ambil foto pertamamu.</p>
                )}
                <button
                  type="button"
                  className="step-primary-cta"
                  disabled={!canDownload || isExporting}
                  onClick={() => setStep(2)}
                >
                  Lanjut ke Bingkai <span className="nav-arrow">→</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* ================= STEP 2: PILIH BINGKAI ================= */}
      {step === 2 && (
        <div className="studio-step-content step-design-view">
          <div className="studio-design-layout">
            <div className="photostrip-stage-wrap">
              <div className="result-paper" style={{ backgroundColor: frame.background }}>
                <canvas ref={outputRef} className="composite-canvas" aria-label="Pratinjau photostrip akhir" />
              </div>
            </div>

            <div className="design-panel">
              <div className="studio-section-title">
                <span>02 / PILIH BINGKAI</span>
                <span className="mono-label">{frame.name}</span>
              </div>

              <div className="frame-categories" aria-label="Kategori bingkai">
                {frameCategories.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={category === item ? 'is-selected' : ''}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="frame-grid">
                {visibleFrames.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`frame-swatch ${frame.id === item.id ? 'is-selected' : ''}`}
                    onClick={() => setFrame(item)}
                    aria-pressed={frame.id === item.id}
                  >
                    <span
                      className={`swatch-art swatch-${item.motif}`}
                      style={{ backgroundColor: item.background, color: item.foreground, borderColor: item.accent }}
                    >
                      <i /><i /><i />
                      <b>{item.caption}</b>
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {frame.id === 'custom' && (
                <div className="custom-controls">
                  <label className="custom-color">
                    Warna bingkai
                    <input type="color" value={customColor} onChange={(event) => setCustomColor(event.target.value)} />
                  </label>
                  <label className="custom-pattern">
                    Motif
                    <select value={customPattern} onChange={(event) => setCustomPattern(event.target.value as CustomPattern)}>
                      <option value="solid">Polos</option>
                      <option value="dots">Polkadot</option>
                      <option value="lines">Garis</option>
                      <option value="grid">Grid</option>
                    </select>
                  </label>
                </div>
              )}

              <div className="step-nav-row">
                <button type="button" className="nav-btn-prev" onClick={() => setStep(1)}>
                  <span className="nav-arrow">←</span> Kembali ke Kamera
                </button>
                <button type="button" className="nav-btn-next" onClick={() => setStep(3)}>
                  Lanjut pilih filter <span className="nav-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 3: FILTER & STIKER ================= */}
      {step === 3 && (
        <div className="studio-step-content step-design-view">
          <div className="studio-design-layout">
            <div className="photostrip-stage-wrap">
              <div className="result-paper" style={{ backgroundColor: frame.background }}>
                <canvas ref={outputRef} className="composite-canvas" aria-label="Pratinjau photostrip akhir" />
                {stickers.map((sticker, index) => (
                  <button
                    type="button"
                    key={`${sticker}-${index}`}
                    className="result-sticker"
                    style={{ left: `${stickerPositions[index]?.x ?? 50}%`, top: `${stickerPositions[index]?.y ?? 50}%` }}
                    onPointerDown={(event) => {
                      setDraggingSticker(index);
                      event.currentTarget.setPointerCapture(event.pointerId);
                    }}
                    onPointerMove={(event) => moveSticker(event, index)}
                    onPointerUp={() => setDraggingSticker(null)}
                    onDoubleClick={() => {
                      setStickers((current) => current.filter((_, i) => i !== index));
                      setStickerPositions((current) => current.filter((_, i) => i !== index));
                    }}
                    aria-label={`Geser atau klik dua kali untuk menghapus stiker ${sticker}`}
                  >
                    {sticker}
                  </button>
                ))}
              </div>
              <small className="drag-hint">✦ Geser stiker di atas foto untuk mengubah posisi. Dobel klik untuk hapus.</small>
            </div>

            <div className="design-panel">
              <div className="studio-section-title">
                <span>03 / FILTER WARNA</span>
                <span className="mono-label">{photoFilters.find((item) => item.id === photoFilter)?.name}</span>
              </div>

              <p className="filter-intro">Pilih nuansa warna untuk semua foto. Kamu bisa ganti kapan saja.</p>
              <div className="photo-filter-options" aria-label="Pilih filter warna">
                {photoFilters.map((item) => (
                  <button key={item.id} type="button" className={`photo-filter-option ${photoFilter === item.id ? 'is-selected' : ''}`} onClick={() => setPhotoFilter(item.id)} aria-pressed={photoFilter === item.id}>
                    <span className="filter-swatch" style={{ filter: item.css }} aria-hidden="true"><i /></span>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </button>
                ))}
              </div>

              {/* Caption Input */}
              <label className="caption-input">Tulis nama geng atau caption
                <input
                  value={caption}
                  onChange={(event) => {
                    const clean = event.target.value.replace(/[<>]/g, '').slice(0, 40);
                    setCaption(clean);
                  }}
                  maxLength={40}
                  placeholder={frame.caption}
                />
                <span>{caption.length}/40 · tercetak langsung di bingkai</span>
              </label>

              {/* Sticker Picker */}
              <div className="sticker-picker">
                <strong>Tempel stiker</strong>
                <span>Pilih stiker untuk ditempel ke photostrip:</span>
                <div>
                  {stickerChoices.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => addSticker(item)}
                      aria-label={`Tambah stiker ${item}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="step-nav-row">
                <button type="button" className="nav-btn-prev" onClick={() => setStep(2)}>
                  <span className="nav-arrow">←</span> Kembali ke Bingkai
                </button>
                <button type="button" className="nav-btn-next" onClick={() => setStep(4)}>
                  Lanjut ke Simpan & Cetak <span className="nav-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 4: SIMPAN & CETAK ================= */}
      {step === 4 && (
        <div className="studio-step-content step-export-view">
          <div className="studio-export-layout">
            <div className="export-preview-stage">
              <div className="result-paper" style={{ backgroundColor: frame.background }}>
                <canvas ref={outputRef} className="composite-canvas" aria-label="Pratinjau photostrip akhir" />
              </div>
            </div>

            <div className="export-actions-panel">
              <div className="studio-section-title">
                <span>04 / SIAP DISIMPAN</span>
                <span className="mono-label">MIVORA PHOTO KEEPSAKE</span>
              </div>

              <h2>Kenanganmu <em>sudah jadi!</em></h2>
              <p className="export-desc">
                {orientation === 'story' ? 'Foto potret 9:16 siap disimpan atau dibagikan.' : 'Hasil akhir potret 9:16; foto landscape disusun dari atas ke bawah.'}
              </p>

              <div className="share-format-panel">
                <strong>Pilih yang akan dibagikan</strong>
                <div className="share-format-options">
                  <button type="button" className={shareFormat === 'photo' ? 'is-selected' : ''} onClick={() => setShareFormat('photo')} aria-pressed={shareFormat === 'photo'}>Foto</button>
                  <button type="button" className={shareFormat === 'boomerang' ? 'is-selected' : ''} onClick={() => setShareFormat('boomerang')} aria-pressed={shareFormat === 'boomerang'}>Boomerang</button>
                </div>
                <label className="boomerang-duration">Durasi Boomerang
                  <select value={boomerangDuration} onChange={(event) => setBoomerangDuration(Number(event.target.value) as 3 | 4)}>
                    <option value={3}>3 detik</option>
                    <option value={4}>4 detik</option>
                  </select>
                </label>
              </div>

              <div className="export-buttons-group">
                <button
                  type="button"
                  className="download-button primary-download"
                  disabled={!canDownload || isExporting}
                  onClick={() => void exportImage()}
                >
                  <span>{isExporting ? 'Menyiapkan foto…' : 'Unduh foto JPG'}</span>
                  <span aria-hidden="true">↓</span>
                </button>

                <button
                  type="button"
                  className="secondary-action"
                  disabled={!canDownload || isExporting}
                  onClick={() => void exportMotion()}
                >
                  <span>{isExporting ? 'Menyiapkan video…' : `Unduh Boomerang ${boomerangDuration} detik`}</span>
                  <span aria-hidden="true">↻</span>
                </button>

                <button
                  type="button"
                  className="secondary-action"
                  disabled={!canDownload || isExporting || !isShareReady}
                  onClick={() => void shareResult()}
                >
                  <span>{!isShareReady || isExporting ? `Menyiapkan ${shareFormat === 'photo' ? 'foto' : 'Boomerang'}…` : `Bagikan ${shareFormat === 'photo' ? 'foto' : 'Boomerang'} dari perangkat`}</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              <div className="step-nav-row export-nav-row">
                <button type="button" className="nav-btn-prev" onClick={() => setStep(3)}>
                  <span className="nav-arrow">←</span> Kembali ke filter
                </button>
                <button type="button" className="nav-btn-reset" onClick={resetSession}>
                  Mulai Sesi Baru <span className="nav-arrow">↺</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
