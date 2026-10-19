import { useCallback, useEffect, useState } from 'react';

export function useCameraStream() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [deviceId, setDeviceId] = useState('');
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

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

  const start = useCallback(async (requestedDevice = deviceId, requestedFacing = facingMode) => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Browser ini belum mendukung akses kamera. Coba buka lewat Chrome, Safari, atau Firefox terbaru.');
      return false;
    }
    setBusy(true);
    setError('');
    try {
      stream?.getTracks().forEach((track) => track.stop());
      const constraints: MediaStreamConstraints = {
        audio: false,
        video: requestedDevice
          ? { deviceId: { exact: requestedDevice }, width: { ideal: 1920 }, height: { ideal: 1080 } }
          : { facingMode: { ideal: requestedFacing }, width: { ideal: 1920 }, height: { ideal: 1080 } },
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
    if (stream) await start(id, facingMode);
  }, [facingMode, start, stream]);

  const flip = useCallback(async () => {
    const next = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(next);
    if (stream) await start('', next);
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
