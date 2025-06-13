import { slugify } from "../url";

export function getUrlByCategory(category: string) {
  return `/noticias/sobre/${slugify(category)}`;
}
