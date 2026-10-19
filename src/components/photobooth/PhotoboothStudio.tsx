import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { composePhotostrip, drawLensFrame } from './canvasRenderer';
import { frameCategories, frames, layouts, lenses } from './presets';
import { useCameraStream } from './useCameraStream';
import { useLiveCapture } from './useLiveCapture';
import type { CustomPattern, FramePreset, LayoutId, LensId, PhotoSlot } from './types';

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

  const [step, setStep] = useState<StudioStep>(1);
  const [lens, setLens] = useState<LensId>('studio');
  const [layout, setLayout] = useState<LayoutId>('strip4');
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
  const [showQr, setShowQr] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notice, setNotice] = useState('');

  const selectedLayout = layouts.find((item) => item.id === layout) ?? layouts[0];
  const visibleFrames = useMemo(() => category === 'Semua' ? frames : frames.filter((item) => item.category === category), [category]);
  const capturedCount = slots.filter((slot) => Boolean(slot?.image)).length;
  const isLayoutFilled = capturedCount >= selectedLayout.count;
  const hasPhotos = capturedCount > 0;
  const canDownload = Array.from({ length: selectedLayout.count }, (_, index) => Boolean(slots[index]?.image)).every(Boolean);

  const [qrPayload, setQrPayload] = useState('');
  useEffect(() => {
    if (!slots[0]?.image) { setQrPayload(''); return; }
    const thumb = document.createElement('canvas');
    thumb.width = 48;
    thumb.height = 67;
    const context = thumb.getContext('2d');
    if (!context) return;
    context.fillStyle = frame.background;
    context.fillRect(0, 0, thumb.width, thumb.height);
    const image = new Image();
    image.src = slots[0].image;
    image.onload = () => {
      context.drawImage(image, 4, 4, 40, 49);
      context.fillStyle = frame.foreground;
      context.font = 'bold 4px Arial';
      context.textAlign = 'center';
      context.fillText('MIVORA PHOTO', 24, 60);
      const data = { v: 1, title: 'Mivora Photo — Digital Collector Card', name: caption.slice(0, 18), frame: frame.name, preview: thumb.toDataURL('image/jpeg', 0.22) };
      const bytes = new TextEncoder().encode(JSON.stringify(data));
      const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');
      const encoded = btoa(binary);
      const basePath = window.location.pathname.replace(/\/studio\/?$/, '').replace(/\/+$/, '');
      setQrPayload(`${window.location.origin}${basePath}/share#data=${encoded}`);
    };
  }, [caption, frame, slots]);

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
        drawLensFrame(video, canvas, lens, mirror);
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
  }, [camera.stream, lens, mirror, step]);

  const renderOutput = useCallback(async () => {
    const version = ++renderVersion.current;
    const canvas = await composePhotostrip({ slots, frame, layoutId: layout, caption, stickers, stickerPositions, customColor, customPattern });
    const target = outputRef.current;
    if (!target || version !== renderVersion.current) return;
    target.width = canvas.width;
    target.height = canvas.height;
    target.getContext('2d')?.drawImage(canvas, 0, 0);
  }, [caption, customColor, customPattern, frame, layout, slots, stickerPositions, stickers]);

  useEffect(() => {
    if (outputRef.current && slots.length) {
      void renderOutput();
    }
  }, [slots, frame, layout, caption, stickers, stickerPositions, customColor, step, renderOutput]);

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
    if (autoShoot && targetSlot === null) {
      for (let i = 1; i < selectedLayout.count; i++) {
        await new Promise((resolve) => window.setTimeout(resolve, 650));
        await runOne();
      }
    }
    setCountdown(null);
    setIsCapturing(false);
  }, [autoShoot, camera, isCapturing, selectedLayout.count, snap, targetSlot, timer]);

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
    await renderOutput();
    const canvas = outputRef.current;
    if (!canvas) return;
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) return setNotice('File PNG belum bisa dibuat. Coba lagi setelah foto selesai dimuat.');
    const link = document.createElement('a');
    link.download = `mivora-photo-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const shareResult = async () => {
    await renderOutput();
    const canvas = outputRef.current;
    if (!canvas) return;
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) return;
    const file = new File([blob], 'mivora-photo.png', { type: 'image/png' });
    if (navigator.canShare?.({ files: [file] }) && navigator.share) {
      await navigator.share({ title: 'Hasil Mivora Photo', files: [file] });
    } else {
      await exportImage();
      setNotice('Browser ini belum mendukung share file. PNG sudah diunduh, tinggal kirim dari galeri.');
    }
  };

  const exportMotion = async () => {
    try {
      const frameCount = Math.max(2, live.framesRef.current.length);
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
          outputWidth: 720,
        });
      }));
      const blob = await live.exportWebm(async (context, frameIndex) => {
        const composite = animatedComposites[frameIndex % animatedComposites.length];
        context.fillStyle = frame.background;
        context.fillRect(0, 0, 720, 1440);
        const scale = Math.min(720 / composite.width, 1380 / composite.height);
        const width = composite.width * scale;
        const height = composite.height * scale;
        context.drawImage(composite, (720 - width) / 2, (1440 - height) / 2, width, height);
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mivora-boomerang.webm';
      link.click();
      URL.revokeObjectURL(url);
    } catch (cause) {
      setNotice(cause instanceof Error ? cause.message : 'Video belum bisa dibuat.');
    }
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
          >
            <span className="step-num">01</span>
            <span className="step-name">Kamera</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 2 ? 'is-active' : ''}`}
            onClick={() => hasPhotos && setStep(2)}
            disabled={!hasPhotos}
          >
            <span className="step-num">02</span>
            <span className="step-name">Pilih bingkai</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 3 ? 'is-active' : ''}`}
            onClick={() => hasPhotos && setStep(3)}
            disabled={!hasPhotos}
          >
            <span className="step-num">03</span>
            <span className="step-name">Filter & stiker</span>
          </button>
          <span className="stepper-arrow" aria-hidden="true">→</span>
          <button
            type="button"
            className={`stepper-btn ${step === 4 ? 'is-active' : ''}`}
            onClick={() => hasPhotos && setStep(4)}
            disabled={!hasPhotos}
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
                <span>01 / KAMERA & VIEW FINDER</span>
                <span className="mono-label">{camera.stream ? 'LIVE · AKTIF' : 'STANDBY'}</span>
              </div>

              <div className={`viewfinder ${lens === 'fisheye' ? 'viewfinder-fisheye' : ''}`}>
                <video ref={videoRef} className="camera-video-hidden" playsInline muted aria-label="Kamera langsung" />
                <canvas ref={previewRef} className="camera-preview" aria-label="Pratinjau filter kamera" />
                {!camera.stream && (
                  <div className="camera-empty">
                    <div className="camera-icon" aria-hidden="true"><span /><span /><span /></div>
                    <p>Tempat seru kalian<br />dimulai di sini.</p>
                    <span>Izinkan kamera untuk mulai.</span>
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
                <span>PILIH FORMAT & HASIL JEPRET</span>
                <span className="mono-label">{capturedCount}/{selectedLayout.count} TERCATAT</span>
              </div>

              {/* Layout Picker */}
              <div className="editor-block layout-block">
                <div className="block-heading">
                  <h3>Format Photostrip</h3>
                  <span>{selectedLayout.name}</span>
                </div>
                <div className="layout-options">
                  {layouts.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`layout-option ${layout === item.id ? 'is-selected' : ''}`}
                      onClick={() => {
                        setLayout(item.id);
                        setSlots((current) => current.slice(0, item.count));
                        setTargetSlot(null);
                      }}
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
                  <p className="callout-success">✦ Semua slot foto sudah lengkap! Siap untuk memilih bingkai.</p>
                ) : hasPhotos ? (
                  <p className="callout-info">Lengkapi {selectedLayout.count - capturedCount} foto lagi, atau langsung lanjut ke desain.</p>
                ) : (
                  <p className="callout-idle">Nyalakan kamera dan ambil foto pertamamu.</p>
                )}
                <button
                  type="button"
                  className="step-primary-cta"
                  disabled={!hasPhotos}
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
                  Lanjut ke Filter & Stiker <span className="nav-arrow">→</span>
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
                <span>03 / PERSONALISASI</span>
                <span className="mono-label">TEKS & STIKER</span>
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
                Photostrip beresolusi tinggi siap disimpan langsung ke galerimu, dibuat animasi Boomerang, atau dikirim lewat QR ke HP.
              </p>

              <div className="export-buttons-group">
                <button
                  type="button"
                  className="download-button primary-download"
                  disabled={!canDownload}
                  onClick={() => void exportImage()}
                >
                  <span>Unduh photostrip PNG</span>
                  <span aria-hidden="true">↓</span>
                </button>

                <button
                  type="button"
                  className="secondary-action"
                  disabled={!canDownload || !live.hasMotion}
                  onClick={() => void exportMotion()}
                >
                  <span>Simpan Boomerang WebM</span>
                  <span aria-hidden="true">↻</span>
                </button>

                <button
                  type="button"
                  className="secondary-action"
                  disabled={!canDownload}
                  onClick={() => setShowQr(true)}
                >
                  <span>Tampilkan QR hasil foto</span>
                  <span aria-hidden="true">▦</span>
                </button>

                <button
                  type="button"
                  className="secondary-action"
                  disabled={!canDownload}
                  onClick={() => void shareResult()}
                >
                  <span>Bagikan dari perangkat</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              <div className="step-nav-row export-nav-row">
                <button type="button" className="nav-btn-prev" onClick={() => setStep(3)}>
                  <span className="nav-arrow">←</span> Edit Bingkai & Stiker
                </button>
                <button type="button" className="nav-btn-reset" onClick={resetSession}>
                  Mulai Sesi Baru <span className="nav-arrow">↺</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Dialog Modal */}
      {showQr && (
        <div className="qr-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowQr(false); }}>
          <section className="qr-dialog" role="dialog" aria-modal="true" aria-labelledby="qr-title">
            <button type="button" className="qr-close" onClick={() => setShowQr(false)} aria-label="Tutup QR">×</button>
            <span className="mono-label">MIVORA DIGITAL COLLECTOR CARD</span>
            <h2 id="qr-title">Bawa memorinya.</h2>
            <p>Scan untuk membuka kartu digital dengan pratinjau ringkas. QR ini menyimpan preview kecil di dalam kode; file resolusi tinggi tetap ada di perangkat ini.</p>
            <div className="qr-code">
              <QRCodeSVG
                value={
                  qrPayload ||
                  (typeof window !== 'undefined'
                    ? `${window.location.origin}${window.location.pathname.replace(/\/studio\/?$/, '').replace(/\/+$/, '')}/share`
                    : '/share')
                }
                size={210}
                level="M"
                marginSize={4}
              />
            </div>
            <button type="button" className="download-button" onClick={() => void exportImage()}>
              Unduh file penuh di perangkat ini ↓
            </button>
            <small>QR memuat data ringkas photostrip, bukan tautan upload atau storage online.</small>
          </section>
        </div>
      )}
    </div>
  );
}
