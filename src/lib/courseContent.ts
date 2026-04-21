export interface CourseTopic {
  title: string;
  bullets: string[];
}

export interface CourseSchedule {
  date: string;
  venue: string;
  duration: string;
  price: string;
}

export interface CourseData {
  id: string;
  title: string;
  category: string;
  description: string;
  whoShouldAttend: string;
  pastDelegates: string[];
  outcomes: string[];
  topics: CourseTopic[];
  schedule: CourseSchedule[];
}

export interface CourseCatalogSubcategory {
  name: string;
  courseIds: string[];
}

export interface CourseCatalogMainCategory {
  name: string;
  subcategories: CourseCatalogSubcategory[];
}

export type CourseCategoryGroup = {
  name: string;
  items: string[];
};

export type CourseListingRow = {
  courseId: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  duration: string;
  price: string;
  scheduleIndex: number;
};

import { COURSE_CATALOG } from "@/data/courseCatalog";
import { getCourseById, getAllCourseIds } from "@/data/courses";
// Also import CourseData to resolve returning CourseData correctly

const DEFAULT_COURSE_CATALOG_PATH = "/src/data/course-catalog.json";
const DEFAULT_COURSE_MANIFEST_PATH = "/src/data/courses-manifest.json";
const DEFAULT_COURSE_DIR = "/src/data/courses";

function normalizeBaseUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

function getContentBaseUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;
  if (!raw || raw.trim().length === 0) return null;
  return normalizeBaseUrl(raw.trim());
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  return (await res.json()) as T;
}

export async function fetchCourseCatalog(): Promise<CourseCatalogMainCategory[]> {
  const baseUrl = getContentBaseUrl();
  if (baseUrl) {
    try {
      return await fetchJson<CourseCatalogMainCategory[]>(`${baseUrl}${DEFAULT_COURSE_CATALOG_PATH}`);
    } catch {
      console.warn("API fetch failed, falling back to local static catalog");
    }
  }
  return COURSE_CATALOG;
}

export async function fetchCourseIds(): Promise<string[]> {
  const baseUrl = getContentBaseUrl();
  if (baseUrl) {
    try {
      return await fetchJson<string[]>(`${baseUrl}${DEFAULT_COURSE_MANIFEST_PATH}`);
    } catch {
      console.warn("API fetch failed, falling back to local static course IDs");
    }
  }
  return getAllCourseIds();
}

export async function fetchCourseById(id: string): Promise<CourseData | null> {
  const baseUrl = getContentBaseUrl();
  if (baseUrl) {
    try {
      return await fetchJson<CourseData>(`${baseUrl}${DEFAULT_COURSE_DIR}/${id}.json`);
    } catch {
      console.warn(`API fetch for ${id} failed, falling back to local static course data`);
    }
  }
  return getCourseById(id);
}

export async function fetchAllCourses(): Promise<CourseData[]> {
  const baseUrl = getContentBaseUrl();
  if (!baseUrl) {
    // Fast path: fully static extraction if no API base URL is provided
    const ids = getAllCourseIds();
    const courses = ids.map((id) => getCourseById(id));
    return courses.filter((c): c is CourseData => c !== null);
  }

  // Network path with graceful item-level fallback included in fetchCourseById
  const ids = await fetchCourseIds();
  const courses = await Promise.all(ids.map((id) => fetchCourseById(id)));
  return courses.filter((c): c is CourseData => c !== null);
}

export function toCategorySlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function getCategoryPath(value: string): string {
  return `/categories/${toCategorySlug(value)}`;
}

export function getCategoryLabelFromSlugFromCatalog(
  slug: string,
  catalog: CourseCatalogMainCategory[]
): string {
  const labels = new Set<string>();
  catalog.forEach((group) => {
    labels.add(group.name);
    group.subcategories.forEach((sub) => labels.add(sub.name));
  });

  for (const label of labels) {
    if (toCategorySlug(label) === slug) return label;
  }

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildCategoryGroups(catalog: CourseCatalogMainCategory[]): CourseCategoryGroup[] {
  return catalog.map((main) => ({
    name: main.name,
    items: main.subcategories.map((sub) => sub.name),
  }));
}

export function getAllCourseInterestOptionsFromCatalog(catalog: CourseCatalogMainCategory[]): string[] {
  const options = new Set<string>();
  catalog.forEach((group) => {
    options.add(group.name);
    group.subcategories.forEach((sub) => options.add(sub.name));
  });
  return Array.from(options);
}

export function buildCourseListings(courses: CourseData[]): CourseListingRow[] {
  return courses.flatMap((course) =>
    course.schedule.map((slot, scheduleIndex) => ({
      courseId: course.id,
      title: course.title,
      category: course.category,
      date: slot.date,
      venue: slot.venue,
      duration: slot.duration,
      price: slot.price,
      scheduleIndex,
    }))
  );
}

export function getCourseIdsForSlugFromCatalog(slug: string, catalog: CourseCatalogMainCategory[]): string[] {
  const normalizedSlug = toCategorySlug(slug);
  for (const main of catalog) {
    for (const sub of main.subcategories) {
      if (toCategorySlug(sub.name) === normalizedSlug) return sub.courseIds;
    }
  }
  return [];
}

export function getListingsForSlugFromData(
  slug: string,
  catalog: CourseCatalogMainCategory[],
  listings: CourseListingRow[]
): CourseListingRow[] {
  const courseIds = new Set(getCourseIdsForSlugFromCatalog(slug, catalog).map((id) => toCategorySlug(id)));

  if (courseIds.size > 0) {
    return listings.filter((row) => courseIds.has(toCategorySlug(row.courseId)));
  }

  const normalizedSlug = toCategorySlug(slug);
  return listings.filter((row) => {
    const rowCourseSlug = toCategorySlug(row.courseId);
    const rowTitleSlug = toCategorySlug(row.title);
    return rowCourseSlug === normalizedSlug || rowTitleSlug === normalizedSlug;
  });
}

const MONTH_MAP: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

export function extractMonthYear(value: string): string | null {
  const match = value.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b[\s-]+(\d{4})/i);
  if (!match) return null;
  return `${match[1]} ${match[2]}`;
}

export function parsePriceValue(value: string): number {
  const normalized = value.replace(/[^0-9.]/g, "");
  return Number.parseFloat(normalized || "0");
}

export function parseListingDateToTimestamp(value: string): number | null {
  const match = value.match(/\b(\d{1,2})\s*-\s*(\d{1,2})\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*(\d{4})\b/i);
  if (!match) return null;

  const startDay = Number.parseInt(match[1], 10);
  const monthIndex = MONTH_MAP[match[3].toLowerCase()];
  const year = Number.parseInt(match[4], 10);
  if (monthIndex === undefined) return null;

  return new Date(year, monthIndex, startDay).getTime();
}

