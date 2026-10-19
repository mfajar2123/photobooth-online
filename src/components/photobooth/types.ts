export type LensId = 'studio' | 'fisheye' | 'digicam' | 'leica' | 'bw' | 'vhs' | 'thermal' | 'dreamy';
export type LayoutId = 'strip4' | 'strip3' | 'grid4' | 'duo2' | 'polaroid';
export type CustomPattern = 'solid' | 'dots' | 'lines' | 'grid';

export interface LensPreset {
  id: LensId;
  name: string;
  shortName: string;
  description: string;
}

export interface FramePreset {
  id: string;
  name: string;
  category: string;
  background: string;
  foreground: string;
  accent: string;
  motif: string;
  caption: string;
}

export interface PhotoSlot {
  image: string;
  moment: string;
}
