import { useCallback, useEffect, useRef, useState } from 'react';

export function useCameraStream() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [deviceId, setDeviceId] = useState('');
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const currentAspectRef = useRef(9 / 16);

  const refreshDevices = useCallback(async () => {
    if (!navigator.mediaDevices?.enumerateDevices) return;
    const all = await navigator.mediaDevices.enumerateDevices();
    setDevices(all.filter((device) => device.kind === 'videoinput'));
  }, []);

  const stop = useCallback(() => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setError('');
  }, [stream]);

  const start = useCallback(async (requestedDevice = deviceId, requestedFacing = facingMode, requestedAspect = currentAspectRef.current) => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Browser ini belum mendukung akses kamera. Coba buka lewat Chrome, Safari, atau Firefox terbaru.');
      return false;
    }
    currentAspectRef.current = requestedAspect;
    setBusy(true);
    setError('');
    try {
      stream?.getTracks().forEach((track) => track.stop());
      const isPortrait = requestedAspect < 1;
      const target: MediaTrackConstraints = requestedDevice
        ? { deviceId: { exact: requestedDevice } }
        : { facingMode: { ideal: requestedFacing } };
      // Ask for a sensor-native ratio (3:4 portrait / 16:9 landscape) instead of
      // the exact 9:16 output. Forcing 9:16 makes some browsers crop-and-scale
      // the sensor, which reads as an unwanted digital zoom in the viewfinder.
      const constraints: MediaStreamConstraints = {
        audio: false,
        video: {
          ...target,
          width: { ideal: isPortrait ? 1080 : 1920 },
          height: { ideal: isPortrait ? 1440 : 1080 },
          aspectRatio: { ideal: isPortrait ? 3 / 4 : 16 / 9 },
        },
      };
      const next = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(next);
      const selectedId = next.getVideoTracks()[0]?.getSettings().deviceId;
      if (selectedId) setDeviceId(selectedId);
      await refreshDevices();
      return true;
    } catch (cause) {
      const name = cause instanceof DOMException ? cause.name : '';
      if (name === 'NotAllowedError' || name === 'SecurityError') {
        setError('Izin kamera belum diberikan. Aktifkan izin kamera di pengaturan browser, lalu coba lagi.');
      } else if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        setError('Kamera nggak ditemukan. Sambungkan kamera atau pilih perangkat lain.');
      } else if (name === 'NotReadableError' || name === 'TrackStartError') {
        setError('Kamera sedang dipakai aplikasi lain. Tutup aplikasi itu, lalu nyalakan lagi di sini.');
      } else {
        setError('Kamera belum bisa dinyalakan. Pastikan halaman dibuka lewat HTTPS dan coba ulang.');
      }
      return false;
    } finally {
      setBusy(false);
    }
  }, [deviceId, facingMode, refreshDevices, stream]);

  const changeDevice = useCallback(async (id: string) => {
    setDeviceId(id);
    if (stream) await start(id, facingMode, currentAspectRef.current);
  }, [facingMode, start, stream]);

  const flip = useCallback(async () => {
    const next = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(next);
    if (stream) await start('', next, currentAspectRef.current);
  }, [facingMode, start, stream]);

  useEffect(() => {
    void refreshDevices();
    navigator.mediaDevices?.addEventListener?.('devicechange', refreshDevices);
    return () => {
      navigator.mediaDevices?.removeEventListener?.('devicechange', refreshDevices);
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, [refreshDevices, stream]);

  return { stream, devices, deviceId, facingMode, error, busy, start, stop, changeDevice, flip };
}
