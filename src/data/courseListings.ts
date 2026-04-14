import { getAllCourseIds, getCourseById } from './courses';
import { getParentCategoryByItemSlug, toCategorySlug } from './courseCategories';

export interface CourseListingRow {
  courseId: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  duration: string;
  price: string;
  scheduleIndex: number;
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

export const COURSE_LISTINGS: CourseListingRow[] = getAllCourseIds()
  .map((courseId) => getCourseById(courseId))
  .filter((course): course is NonNullable<typeof course> => course !== null)
  .flatMap((course) =>
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

export function getListingsForSlug(slug: string): CourseListingRow[] {
  const normalizedSlug = toCategorySlug(slug);
  const parentCategory = getParentCategoryByItemSlug(slug);
  const normalizedParentCategory = parentCategory ? toCategorySlug(parentCategory) : null;

  return COURSE_LISTINGS.filter((row) => {
    return (
      row.courseId === normalizedSlug ||
      toCategorySlug(row.title) === normalizedSlug ||
      toCategorySlug(row.category) === normalizedSlug ||
      (normalizedParentCategory !== null && toCategorySlug(row.category) === normalizedParentCategory)
    );
  });
}

export function extractMonthYear(value: string): string | null {
  const match = value.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b[\s-]+(\d{4})/i);
  if (!match) return null;
  return `${match[1]} ${match[2]}`;
}

export function parsePriceValue(value: string): number {
  const normalized = value.replace(/[^0-9.]/g, '');
  return Number.parseFloat(normalized || '0');
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
