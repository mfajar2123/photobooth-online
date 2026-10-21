export type LensId = 'original' | 'fisheye' | 'leica' | 'digicam' | 'vhs' | 'dreamy' | 'studio' | 'bw' | 'thermal';
export type LayoutId = 'story-1' | 'landscape-1' | 'landscape-2' | 'landscape-3';
export type PhotoFilterId = 'none' | 'classic' | 'film' | 'bw' | 'warm' | 'vivid';
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
