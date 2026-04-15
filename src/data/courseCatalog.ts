import courseCatalogJson from './course-catalog.json';
import { getCourseById } from './courses';

export interface CourseCatalogSubcategory {
  name: string;
  courseIds: string[];
}

export interface CourseCatalogMainCategory {
  name: string;
  subcategories: CourseCatalogSubcategory[];
}

export const COURSE_CATALOG = courseCatalogJson as CourseCatalogMainCategory[];

function toCategorySlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getMainCategoryBySlug(slug: string): CourseCatalogMainCategory | null {
  const normalizedSlug = toCategorySlug(slug);
  return COURSE_CATALOG.find((main) => toCategorySlug(main.name) === normalizedSlug) || null;
}

export function getSubcategoryBySlug(slug: string): {
  mainCategory: CourseCatalogMainCategory;
  subcategory: CourseCatalogSubcategory;
} | null {
  const normalizedSlug = toCategorySlug(slug);

  for (const mainCategory of COURSE_CATALOG) {
    for (const subcategory of mainCategory.subcategories) {
      if (toCategorySlug(subcategory.name) === normalizedSlug) {
        return { mainCategory, subcategory };
      }
    }
  }

  return null;
}

export function getCourseIdsForSlug(slug: string): string[] {
  const mainCategory = getMainCategoryBySlug(slug);
  if (mainCategory) {
    return mainCategory.subcategories.flatMap((subcategory) => subcategory.courseIds);
  }

  const subcategoryMatch = getSubcategoryBySlug(slug);
  if (subcategoryMatch) {
    return subcategoryMatch.subcategory.courseIds;
  }

  const maybeCourse = getCourseById(slug);
  if (maybeCourse) {
    return [slug];
  }

  return [];
}
