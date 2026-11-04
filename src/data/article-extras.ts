import type { ArticleExtra } from './article-types';
import { photoboothExtras } from './article-depth/photobooth';
import { undanganExtras } from './article-depth/undangan';
import { tipsFotoExtras } from './article-depth/tips-foto';
import { inspirasiExtras } from './article-depth/inspirasi';
import { persiapanExtras } from './article-depth/persiapan';

export const articleExtras: Record<string, ArticleExtra> = {
  ...photoboothExtras,
  ...undanganExtras,
  ...tipsFotoExtras,
  ...inspirasiExtras,
  ...persiapanExtras,
};
