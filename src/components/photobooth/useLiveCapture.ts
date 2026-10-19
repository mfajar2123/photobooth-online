import { useCallback, useRef, useState } from 'react';

export function useLiveCapture() {
  const framesRef = useRef<string[]>([]);
  const currentFramesRef = useRef<string[]>([]);
  const clipsRef = useRef<string[][]>([]);
  const [hasMotion, setHasMotion] = useState(false);

  const recordWindow = useCallback(async (canvas: HTMLCanvasElement) => {
    if (!canvas.width || !canvas.height) return;
    const image = canvas.toDataURL('image/jpeg', 0.76);
    currentFramesRef.current = [...currentFramesRef.current, image].slice(-12);
    framesRef.current = currentFramesRef.current;
    setHasMotion(currentFramesRef.current.length > 1 || clipsRef.current.some((clip) => clip.length > 1));
  }, []);

  const finishShot = useCallback((slotIndex: number, shiftOldest = false) => {
    const clip = currentFramesRef.current.slice(-12);
    if (shiftOldest) clipsRef.current = [...clipsRef.current.slice(1), clip];
    else clipsRef.current[slotIndex] = clip;
    framesRef.current = clip;
    currentFramesRef.current = [];
    setHasMotion(clipsRef.current.some((item) => item.length > 1));
  }, []);

  const exportWebm = useCallback(async (draw: (context: CanvasRenderingContext2D, frameIndex: number) => Promise<void>) => {
    if (!('MediaRecorder' in window) || !HTMLCanvasElement.prototype.captureStream) {
      throw new Error('Browser ini belum mendukung ekspor video. Unduh strip PNG sebagai gantinya.');
    }
    const canvas = document.createElement('canvas');
    canvas.width = 720;
    canvas.height = 1440;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas video nggak bisa dibuat di browser ini.');
    const stream = canvas.captureStream(24);
    const mimeType = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((type) => MediaRecorder.isTypeSupported(type));
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    const chunks: BlobPart[] = [];
    const finished = new Promise<Blob>((resolve, reject) => {
      recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
      recorder.onerror = () => reject(new Error('Video gagal direkam. Coba unduh PNG dulu.'));
      recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || 'video/webm' }));
    });
    recorder.start();
    const count = Math.max(framesRef.current.length, 2);
    for (let i = 0; i < count * 2; i++) {
      const index = i < count ? i : count * 2 - i - 1;
      await draw(context, index);
      await new Promise((resolve) => window.setTimeout(resolve, 42));
    }
    recorder.stop();
    stream.getTracks().forEach((track) => track.stop());
    return finished;
  }, []);

  const clearMotion = useCallback(() => {
    framesRef.current = [];
    currentFramesRef.current = [];
    clipsRef.current = [];
    setHasMotion(false);
  }, []);

  return { framesRef, clipsRef, hasMotion, recordWindow, finishShot, exportWebm, clearMotion };
}
