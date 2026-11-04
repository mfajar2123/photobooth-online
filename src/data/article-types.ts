import type { ArticleSection } from './articles';

export interface ArticleExtra {
  takeaways?: string[];
  sections: ArticleSection[];
}
