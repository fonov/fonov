import defaultImg from '@/assets/img/default.svg';

export interface ImageResult {
  src: string;
  width: number;
  height: number;
}

const FALLBACK: ImageResult = { src: defaultImg, width: 365, height: 710 };

/** Returns instruction image for a test step. Uses placeholder until per-model assets are added. */
export function getTestImage(
  _test: string,
  _number: number,
  _model: string | null,
  _color: string | null,
  _lang: string
): ImageResult {
  return FALLBACK;
}
