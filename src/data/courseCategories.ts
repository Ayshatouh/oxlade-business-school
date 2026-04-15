import { COURSE_CATALOG } from './courseCatalog';

export interface CourseCategoryGroup {
  name: string;
  items: string[];
}

export const COURSE_CATEGORY_GROUPS: CourseCategoryGroup[] = COURSE_CATALOG.map((mainCategory) => ({
  name: mainCategory.name,
  items: mainCategory.subcategories.map((subcategory) => subcategory.name),
}));

export function toCategorySlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getCategoryPath(value: string): string {
  return `/categories/${toCategorySlug(value)}`;
}

export function getCategoryLabelFromSlug(slug: string): string {
  const labels = new Set<string>();

  COURSE_CATEGORY_GROUPS.forEach((group) => {
    labels.add(group.name);
    group.items.forEach((item) => labels.add(item));
  });

  for (const label of labels) {
    if (toCategorySlug(label) === slug) {
      return label;
    }
  }

  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function getAllCourseInterestOptions(): string[] {
  const options = new Set<string>();

  COURSE_CATEGORY_GROUPS.forEach((group) => {
    options.add(group.name);
    group.items.forEach((item) => options.add(item));
  });

  return Array.from(options);
}

export function getParentCategoryByItemSlug(slug: string): string | null {
  const normalizedSlug = toCategorySlug(slug);

  for (const group of COURSE_CATEGORY_GROUPS) {
    for (const item of group.items) {
      if (toCategorySlug(item) === normalizedSlug) {
        return group.name;
      }
    }
  }

  return null;
}
