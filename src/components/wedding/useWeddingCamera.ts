import { useCallback, useEffect, useRef, useState } from 'react';

export type WeddingCameraStatus = 'idle' | 'starting' | 'live' | 'error';
export type WeddingFacing = 'user' | 'environment';

function friendlyCameraError(cause: unknown) {
  const name = cause instanceof DOMException ? cause.name : '';
  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return 'Izin kamera belum diberikan. Aktifkan izin kamera di pengaturan browser, lalu coba lagi.';
  }
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
    return 'Kamera tidak ditemukan. Pastikan kamera perangkat aktif, lalu coba lagi.';
  }
  if (name === 'NotReadableError' || name === 'TrackStartError') {
    return 'Kamera sedang dipakai aplikasi lain. Tutup aplikasi tersebut, lalu nyalakan kamera di sini.';
  }
  if (name === 'OverconstrainedError' || name === 'ConstraintNotSatisfiedError') {
    return 'Kamera perangkat ini belum mendukung mode potret. Coba muat ulang halaman.';
  }
  return 'Kamera belum bisa dinyalakan. Pastikan halaman dibuka lewat HTTPS dan coba lagi.';
}

/**
 * Small, race-safe camera controller tailored for the wedding booth.
 * - Only one getUserMedia request can win at a time.
 * - Every track is stopped when replaced, stopped, or unmounted.
 */
export function useWeddingCamera() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [status, setStatus] = useState<WeddingCameraStatus>('idle');
  const [error, setError] = useState('');
  const [facing, setFacing] = useState<WeddingFacing>('user');

  const streamRef = useRef<MediaStream | null>(null);
  const requestRef = useRef(0);

  const releaseStream = useCallback(() => {
    const current = streamRef.current;
    streamRef.current = null;
    current?.getTracks().forEach((track) => track.stop());
  }, []);

  const stop = useCallback(() => {
    requestRef.current += 1;
    releaseStream();
    setStream(null);
    setStatus('idle');
    setError('');
  }, [releaseStream]);

  const start = useCallback(async (nextFacing: WeddingFacing = facing) => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setStatus('error');
      setError('Kamera tidak bisa diakses. Pastikan halaman dibuka lewat HTTPS (atau localhost) dan gunakan Chrome, Safari, Edge, atau Firefox terbaru.');
      return false;
    }

    const requestId = ++requestRef.current;
    releaseStream();
    setStream(null);
    setStatus('starting');
    setError('');
    setFacing(nextFacing);

    try {
      const next = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: { ideal: nextFacing },
          width: { ideal: 1080 },
          height: { ideal: 1440 },
          aspectRatio: { ideal: 3 / 4 },
        },
      });

      // A newer start()/stop() happened while the browser was asking permission.
      if (requestRef.current !== requestId) {
        next.getTracks().forEach((track) => track.stop());
        return false;
      }

      streamRef.current = next;
      setStream(next);
      setStatus('live');
      const actualFacing = next.getVideoTracks()[0]?.getSettings().facingMode;
      if (actualFacing === 'user' || actualFacing === 'environment') setFacing(actualFacing);
      return true;
    } catch (cause) {
      if (requestRef.current !== requestId) return false;
      setStatus('error');
      setError(friendlyCameraError(cause));
      return false;
    }
  }, [facing, releaseStream]);

  useEffect(() => () => {
    requestRef.current += 1;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  return { stream, status, error, facing, start, stop };
}
