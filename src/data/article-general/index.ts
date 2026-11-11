import type { Article } from '../articles';
import { generalArticlesPart1 } from './group-1';
import { generalArticlesPart2 } from './group-2';
import { generalArticlesPart3 } from './group-3';

export const generalArticles: Article[] = [
  ...generalArticlesPart1,
  ...generalArticlesPart2,
  ...generalArticlesPart3,
];
