import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { createBoomerangBlob, supportsBoomerangRecording } from './boomerang';
import type { BoomerangFile } from './boomerang';
import { useWeddingCamera } from './useWeddingCamera';
import {
  canvasToJpegBlob,
  composeWeddingPhoto,
  drawWeddingComposition,
  loadWeddingFrame,
} from './weddingFrame';

type BoothView = 'landing' | 'camera' | 'result';

interface WeddingBoothProps {
  heroSrc: string;
  frameSrc: string;
  homeHref: string;
}

interface WeddingPhoto {
  url: string;
  blob: Blob;
}

const PREVIEW_WIDTH = 810;
const PREVIEW_HEIGHT = 1440;
const COUNTDOWN_SECONDS = 3;

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 8.5h2.2l1.4-2.1h5.8l1.4 2.1h2.2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <circle cx="10.5" cy="14" r="3.2" />
      <path d="M20.5 4.5v3M19 6h3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

function FlipCameraIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8.5h2l1.3-2h5.4l1.3 2H16" />
      <path d="M4 8.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      <path d="M9.5 14.2a2.8 2.8 0 1 0 5.2-1.5" />
      <path d="M17.7 4.1v4.2h-4.2M17.7 8.3A5.2 5.2 0 0 0 15 3.5" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 15V3M8 7l4-4 4 4" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12M8 11l4 4 4-4" />
      <path d="M5 20h14" />
    </svg>
  );
}

function RetakeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10a8 8 0 1 1 2 6.3" />
      <path d="M4 5v5h5" />
    </svg>
  );
}

function BoomerangIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 9.5A8 8 0 0 1 19 7" />
      <path d="M19 3.5V7h-3.5" />
      <path d="M19.5 14.5A8 8 0 0 1 5 17" />
      <path d="M5 20.5V17h3.5" />
      <path d="M10.5 9.5 15.5 12l-5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

function TypedText({ text, start = 0.34 }: { text: string; start?: number }) {
  return (
    <>
      <span
        className="wd-typed"
        aria-hidden="true"
        style={{ '--type-start': `${start}s` } as CSSProperties}
      >
        {Array.from(text).map((character, index) => (
          <span
            className="wd-typed-char"
            key={`${text}-${index}`}
            style={{ '--char-index': index } as CSSProperties}
          >
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
      </span>
      <span className="wd-sr-only">{text}</span>
    </>
  );
}

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

export default function WeddingBooth({ heroSrc, frameSrc, homeHref }: WeddingBoothProps) {
  const camera = useWeddingCamera();
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<WeddingPhoto | null>(null);
  const runIdRef = useRef(0);
  const busyRef = useRef(false);
  const boomerangTimerRef = useRef<number | null>(null);
  const boomerangFramesRef = useRef<string[]>([]);
  const boomerangFileRef = useRef<BoomerangFile | null>(null);
  const boomerangBusyRef = useRef(false);

  const [view, setView] = useState<BoothView>('landing');
  const [frameImage, setFrameImage] = useState<HTMLImageElement | null>(null);
  const [ready, setReady] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);
  const [notice, setNotice] = useState('');
  const [result, setResult] = useState<WeddingPhoto | null>(null);
  const [sharing, setSharing] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [boomerangSupported, setBoomerangSupported] = useState(false);
  const [boomerangAvailable, setBoomerangAvailable] = useState(false);
  const [boomerangBusy, setBoomerangBusy] = useState(false);

  const mirror = camera.facing === 'user';

  const clearResult = useCallback(() => {
    if (resultRef.current) {
      URL.revokeObjectURL(resultRef.current.url);
      resultRef.current = null;
    }
    setResult(null);
  }, []);

  const stopRun = useCallback(() => {
    runIdRef.current += 1;
    busyRef.current = false;
    if (boomerangTimerRef.current !== null) {
      window.clearInterval(boomerangTimerRef.current);
      boomerangTimerRef.current = null;
    }
    boomerangFramesRef.current = [];
    boomerangFileRef.current = null;
    boomerangBusyRef.current = false;
    setCapturing(false);
    setCountdown(null);
    setFlash(false);
    setBoomerangAvailable(false);
    setBoomerangBusy(false);
  }, []);

  const goHome = useCallback(() => {
    stopRun();
    setNotice('');
    camera.stop();
    clearResult();
    setView('landing');
  }, [camera.stop, clearResult, stopRun]);

  // Keep the live element attached to the active stream.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || view !== 'camera') return;
    if (!camera.stream) {
      video.srcObject = null;
      return;
    }

    video.srcObject = camera.stream;
    setReady(false);
    let cancelled = false;
    const markReady = () => {
      if (!cancelled) setReady(true);
    };
    video.addEventListener('loadeddata', markReady);
    video.addEventListener('canplay', markReady);
    const playback = video.play();
    if (playback) playback.catch(() => {});
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) markReady();

    return () => {
      cancelled = true;
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', markReady);
    };
  }, [camera.stream, view]);

  // Mirror the exact composition for the viewfinder at ~30 fps.
  useEffect(() => {
    if (view !== 'camera') return;
    const canvas = previewRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let animationFrame = 0;
    let lastPaint = 0;
    const paint = (now: number) => {
      animationFrame = requestAnimationFrame(paint);
      if (document.hidden || now - lastPaint < 34) return;
      lastPaint = now;
      drawWeddingComposition(context, videoRef.current, canvas.width, canvas.height, mirror, frameImage);
    };
    drawWeddingComposition(context, videoRef.current, canvas.width, canvas.height, mirror, frameImage);
    animationFrame = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(animationFrame);
  }, [frameImage, mirror, ready, view]);

  useEffect(() => {
    if (view === 'landing') return;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    const focusTimer = window.setTimeout(() => overlayRef.current?.focus({ preventScroll: true }), 80);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      window.clearTimeout(focusTimer);
    };
  }, [view]);

  useEffect(() => {
    if (view === 'landing') return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        goHome();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goHome, view]);

  useEffect(() => {
    if (view === 'landing') return;
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusable = Array.from(
        overlay.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!overlay.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && (document.activeElement === first || document.activeElement === overlay)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [view]);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function');
    setBoomerangSupported(supportsBoomerangRecording());
  }, []);

  // Load the frame before the viewfinder starts so the live preview, JPG, and
  // boomerang frames all share the same artwork.
  useEffect(() => {
    let active = true;
    loadWeddingFrame(frameSrc)
      .then((image) => {
        if (active) setFrameImage(image);
      })
      .catch(() => {
        // Capture will surface the error if the frame still cannot be loaded.
      });
    return () => {
      active = false;
    };
  }, [frameSrc]);

  useEffect(() => () => {
    runIdRef.current += 1;
    if (boomerangTimerRef.current !== null) {
      window.clearInterval(boomerangTimerRef.current);
      boomerangTimerRef.current = null;
    }
    if (resultRef.current) URL.revokeObjectURL(resultRef.current.url);
    resultRef.current = null;
  }, []);

  const openCamera = () => {
    setNotice('');
    setCountdown(null);
    setFlash(false);
    setView('camera');
    void camera.start(camera.facing);
  };

  const retryCamera = () => {
    setNotice('');
    setReady(false);
    void camera.start(camera.facing);
  };

  const flipCamera = () => {
    if (capturing) return;
    setReady(false);
    setNotice('');
    void camera.start(camera.facing === 'user' ? 'environment' : 'user');
  };

  const capture = async () => {
    if (busyRef.current) return;
    if (!frameImage) {
      setNotice('Bingkai sedang dimuat. Coba lagi sebentar.');
      return;
    }
    const video = videoRef.current;
    if (!video || !ready || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.videoWidth) {
      setNotice('Kamera belum siap. Coba lagi sebentar.');
      return;
    }

    const runId = ++runIdRef.current;
    busyRef.current = true;
    setCapturing(true);
    setNotice('');
    setBoomerangAvailable(false);
    setBoomerangBusy(false);
    if (boomerangTimerRef.current !== null) {
      window.clearInterval(boomerangTimerRef.current);
      boomerangTimerRef.current = null;
    }
    boomerangFramesRef.current = [];
    boomerangFileRef.current = null;
    boomerangBusyRef.current = false;

    // Keep the last beat of the countdown as framed images for the boomerang.
    if (boomerangSupported) {
      boomerangTimerRef.current = window.setInterval(() => {
        if (runIdRef.current !== runId) return;
        const canvas = previewRef.current;
        if (!canvas) return;
        try {
          const frame = canvas.toDataURL('image/jpeg', 0.72);
          boomerangFramesRef.current = [...boomerangFramesRef.current, frame].slice(-14);
        } catch {
          // A failed frame shouldn't interrupt the still capture.
        }
      }, 110);
    }

    try {
      for (let value = COUNTDOWN_SECONDS; value >= 1; value -= 1) {
        if (runIdRef.current !== runId) return;
        setCountdown(value);
        await sleep(1000);
      }
      if (runIdRef.current !== runId) return;
      if (boomerangTimerRef.current !== null) {
        window.clearInterval(boomerangTimerRef.current);
        boomerangTimerRef.current = null;
      }
      setCountdown(null);
      setFlash(true);

      const canvas = await composeWeddingPhoto(video, mirror, frameSrc);
      if (runIdRef.current !== runId) return;
      const blob = await canvasToJpegBlob(canvas);
      if (runIdRef.current !== runId) return;

      const url = URL.createObjectURL(blob);
      if (resultRef.current) URL.revokeObjectURL(resultRef.current.url);
      const photo = { url, blob };
      resultRef.current = photo;
      setResult(photo);

      await sleep(210);
      if (runIdRef.current !== runId) {
        URL.revokeObjectURL(url);
        resultRef.current = null;
        return;
      }

      camera.stop();
      setReady(false);
      setFlash(false);
      setNotice('');
      setBoomerangAvailable(boomerangFramesRef.current.length >= 2);
      setView('result');
    } catch (cause) {
      setFlash(false);
      setCountdown(null);
      setNotice(cause instanceof Error ? cause.message : 'Foto belum bisa diproses. Coba lagi.');
    } finally {
      if (boomerangTimerRef.current !== null) {
        window.clearInterval(boomerangTimerRef.current);
        boomerangTimerRef.current = null;
      }
      if (runIdRef.current === runId) {
        busyRef.current = false;
        setCapturing(false);
        setCountdown(null);
      }
    }
  };

  const retake = () => {
    stopRun();
    setNotice('');
    clearResult();
    setView('camera');
    void camera.start(camera.facing);
  };

  const triggerDownload = () => {
    const photo = resultRef.current;
    if (!photo) return;
    setDownloading(true);
    const link = document.createElement('a');
    link.href = photo.url;
    link.download = 'wedding-ripki-aura.jpg';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => setDownloading(false), 600);
  };

  const downloadBoomerang = async () => {
    if (boomerangBusy || boomerangBusyRef.current) return;
    const runId = runIdRef.current;
    const frames = boomerangFramesRef.current;
    if (frames.length < 2) {
      setNotice('Boomerang belum siap. Coba foto ulang.');
      return;
    }

    let file = boomerangFileRef.current;
    if (!file) {
      boomerangBusyRef.current = true;
      setBoomerangBusy(true);
      setNotice('');
      try {
        file = await createBoomerangBlob(frames);
        if (runIdRef.current !== runId) return;
        boomerangFileRef.current = file;
      } catch (cause) {
        if (runIdRef.current === runId) {
          setNotice(
            cause instanceof Error
              ? cause.message
              : 'Boomerang belum bisa dibuat. Coba lagi atau unduh JPG.',
          );
        }
        return;
      } finally {
        boomerangBusyRef.current = false;
        if (runIdRef.current === runId) setBoomerangBusy(false);
      }
    }

    if (runIdRef.current !== runId || !file) return;
    const url = URL.createObjectURL(file.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wedding-ripki-aura-boomerang.${file.extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const sharePhoto = async () => {
    const photo = resultRef.current;
    if (!photo || sharing) return;
    setSharing(true);
    setNotice('');

    try {
      const file = new File([photo.blob], 'wedding-ripki-aura.jpg', { type: 'image/jpeg' });
      let supportsFiles = false;
      try {
        supportsFiles = !navigator.canShare || navigator.canShare({ files: [file] });
      } catch {
        supportsFiles = false;
      }

      if (navigator.share && supportsFiles) {
        try {
          await navigator.share({
            title: 'Ripki & Aura — Wedding Photo',
            text: 'Ripki & Aura — Sukabumi, 28 November 2026.',
            files: [file],
          });
          return;
        } catch (cause) {
          if (cause instanceof DOMException && cause.name === 'AbortError') return;
        }
      }

      triggerDownload();
      setNotice('Share sheet tidak tersedia. Foto sudah diunduh — unggah dari galeri.');
    } finally {
      setSharing(false);
    }
  };

  const gateVisible = view === 'camera' && (!ready || camera.status !== 'live');
  const shutterDisabled = !ready || !frameImage || capturing || camera.status !== 'live';

  return (
    <div className="wd-page">
      <section className="wd-hero" aria-labelledby="wd-wedding-title">
        <div className="wd-hero-media" aria-hidden="true">
          <img src={heroSrc} alt="" fetchPriority="high" decoding="async" />
          <span className="wd-hero-wash" />
        </div>

        <header className="wd-topbar">
          <a className="wd-wordmark" href={homeHref} aria-label="Ruang Kilas, kembali ke beranda">
            <span aria-hidden="true">✦</span> RUANG <i>KILAS</i>
          </a>
          <span className="wd-topbar-tag">Virtual Photobooth · 2026</span>
        </header>

        <div className="wd-hero-center">
          <article className="wd-card">
            <span className="wd-card-ribbon">Virtual Photobooth</span>
            <p className="wd-kicker">
              <span className="wd-kicker-line" aria-hidden="true" />
              <TypedText text="The Wedding Of" start={0.36} />
              <span className="wd-kicker-line" aria-hidden="true" />
            </p>
            <h1 className="wd-names" id="wd-wedding-title" aria-label="Ripki & Aura">
              <span className="wd-names-line" aria-hidden="true">
                Ripki <em>&amp;</em> Aura
              </span>
            </h1>
            <p className="wd-venue">
              <PinIcon />
              <TypedText text="Sukabumi" start={0.92} />
            </p>
            <p className="wd-date">
              <TypedText text="28 November 2026" start={1.08} />
            </p>
            <div className="wd-status" role="status">
              <span className="wd-status-dot" aria-hidden="true" />
              <span>Happening now</span>
            </div>
            <button className="wd-cta" type="button" onClick={openCamera}>
              <CameraIcon />
              <span>Open Camera</span>
              <span className="wd-cta-arrow" aria-hidden="true">→</span>
            </button>
            <p className="wd-note">Sekali jepret, langsung berbingkai.</p>
          </article>
        </div>

        <footer className="wd-credit">
          <span>Foto: Ripki &amp; Aura</span>
          <span>Virtual Photobooth · <a href={homeHref}>ruangkilas.my.id</a></span>
        </footer>
      </section>

      {view !== 'landing' && (
        <div
          className="wd-overlay"
          ref={overlayRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={view === 'camera' ? 'Kamera wedding photobooth' : 'Hasil foto wedding'}
        >
          {view === 'camera' ? (
            <div className="wd-cam">
              <header className="wd-cam-top">
                <button className="wd-icon-btn" type="button" onClick={goHome} aria-label="Kembali ke undangan">
                  <ArrowLeftIcon />
                </button>
                <div className="wd-cam-title">
                  <strong>Photo Booth</strong>
                  <span>1 jepret · potret</span>
                </div>
                <span className={`wd-live-badge ${camera.status === 'live' ? 'is-live' : ''}`}>
                  <i aria-hidden="true" />
                  {camera.status === 'live' ? 'Live' : 'Ready'}
                </span>
              </header>

              <div className="wd-cam-stage">
                <div className="wd-cam-frame">
                  <canvas
                    ref={previewRef}
                    className="wd-cam-canvas"
                    width={PREVIEW_WIDTH}
                    height={PREVIEW_HEIGHT}
                    role="img"
                    aria-label="Pratinjau kamera dengan bingkai wedding Ripki dan Aura"
                  />

                  {camera.status === 'live' && ready && !capturing && (
                    <div className="wd-cam-hud" aria-hidden="true">
                      <span>Portrait</span>
                      <span>1 / 1</span>
                    </div>
                  )}

                  {countdown !== null && (
                    <div className="wd-countdown" key={countdown} aria-live="assertive">
                      {countdown}
                    </div>
                  )}

                  {flash && <span className="wd-flash" aria-hidden="true" />}

                  {gateVisible && (
                    <div className="wd-cam-gate" role="status">
                      {camera.status === 'error' ? (
                        <>
                          <strong>Kamera butuh izin</strong>
                          <span>{camera.error || 'Izinkan akses kamera untuk mulai memotret.'}</span>
                          <button type="button" onClick={retryCamera}>Coba lagi</button>
                        </>
                      ) : camera.status === 'idle' ? (
                        <>
                          <strong>Kamera belum menyala</strong>
                          <span>Izinkan akses untuk mulai.</span>
                          <button type="button" onClick={retryCamera}>Nyalakan kamera</button>
                        </>
                      ) : (
                        <>
                          <span className="wd-spinner" aria-hidden="true" />
                          <strong>{camera.status === 'starting' ? 'Sebentar, kamera menyala…' : 'Menyambungkan kamera…'}</strong>
                          <span>Pilih Izinkan saat browser bertanya.</span>
                          {camera.status === 'live' && (
                            <button type="button" onClick={retryCamera}>Coba lagi</button>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="wd-cam-controls">
                <p className={`wd-cam-status ${notice ? 'is-error' : ''}`} role="status">
                  {notice
                    || (camera.status === 'error'
                      ? 'Kamera belum aktif'
                      : camera.status === 'starting'
                        ? 'Kamera menyala…'
                        : !ready
                          ? 'Menyambungkan gambar…'
                          : !frameImage
                            ? 'Menyiapkan bingkai…'
                            : 'Siap. Senyum, ya.')}
                </p>

                <div className="wd-shutter-row">
                  <span className="wd-side-chip" aria-hidden="true">
                    <b>1</b>
                    <small>Jepret</small>
                  </span>
                  <button
                    className="wd-shutter"
                    type="button"
                    onClick={() => void capture()}
                    disabled={shutterDisabled}
                    aria-label={capturing ? 'Menghitung mundur' : 'Ambil foto'}
                  >
                    <span className="wd-shutter-ring"><span className="wd-shutter-disc" /></span>
                  </button>
                  <button
                    className="wd-icon-btn wd-icon-btn-round"
                    type="button"
                    onClick={flipCamera}
                    aria-label="Ganti kamera depan atau belakang"
                    disabled={!camera.stream || capturing}
                  >
                    <FlipCameraIcon />
                  </button>
                </div>

                <p className="wd-cam-hint">Masuk ke bingkai. Senyum.</p>
              </div>

              <video ref={videoRef} className="wd-video" playsInline muted autoPlay aria-hidden="true" />
            </div>
          ) : result ? (
            <div className="wd-result">
              <div className="wd-result-bg" aria-hidden="true">
                <img src={heroSrc} alt="" decoding="async" />
              </div>

              <header className="wd-cam-top">
                <button className="wd-icon-btn" type="button" onClick={goHome} aria-label="Kembali ke undangan">
                  <ArrowLeftIcon />
                </button>
                <div className="wd-cam-title">
                  <strong>Foto Kamu</strong>
                  <span>Sukabumi</span>
                </div>
                <span className="wd-topbar-spacer" aria-hidden="true" />
              </header>

              <div className="wd-result-body">
                <p className="wd-result-kicker">Sukabumi · 28 November 2026</p>
                <h2 className="wd-result-title">Fotomu <em>siap.</em></h2>

                <img className="wd-result-img" src={result.url} alt="Foto wedding berbingkai Ripki dan Aura" />

                <div className="wd-result-actions">
                  <button className="wd-btn wd-btn-primary" type="button" onClick={() => void sharePhoto()} disabled={sharing} aria-busy={sharing}>
                    <ShareIcon />
                    <span>{sharing ? 'Membuka menu bagikan…' : 'Bagikan ke WhatsApp / IG Story'}</span>
                  </button>

                  <div className="wd-download-row">
                    <button className="wd-btn wd-btn-secondary wd-btn-compact" type="button" onClick={triggerDownload} disabled={downloading} aria-busy={downloading}>
                      <DownloadIcon />
                      <span>{downloading ? 'Menyimpan…' : 'Unduh JPG'}</span>
                    </button>
                    {boomerangAvailable && (
                      <button
                        className="wd-btn wd-btn-secondary wd-btn-compact"
                        type="button"
                        onClick={() => void downloadBoomerang()}
                        disabled={boomerangBusy}
                        aria-busy={boomerangBusy}
                        aria-label="Unduh boomerang video"
                      >
                        <BoomerangIcon />
                        <span>{boomerangBusy ? 'Membuat…' : 'Unduh Boomerang'}</span>
                      </button>
                    )}
                  </div>

                  <button className="wd-btn wd-btn-ghost" type="button" onClick={retake}>
                    <RetakeIcon />
                    <span>Foto ulang</span>
                  </button>
                </div>

                <p className="wd-result-note" role="status">
                  {notice || (canNativeShare
                    ? 'Pilih WhatsApp atau Instagram di menu bagikan.'
                    : 'Browser ini mengunduh file. Unggah ke WhatsApp atau IG dari galeri.')}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
