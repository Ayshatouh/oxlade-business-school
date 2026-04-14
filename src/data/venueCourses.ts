import venueCourses from '@/data/venue-courses.json';

export type VenueListedCourse = {
  courseId: string;
  title: string;
  date: string;
  venue: string;
  price: string;
};

/** Slugs used in URLs: /courses/by-venue/[slug] */
export const VENUE_SLUGS = [
  "london",
  "dubai",
  "istanbul",
  "singapore",
  "abuja",
  "barcelona",
] as const;

export type VenueSlug = (typeof VENUE_SLUGS)[number];

const SLUG_TO_CITY: Record<VenueSlug, string> = {
  london: "London",
  dubai: "Dubai",
  istanbul: "Istanbul",
  singapore: "Singapore",
  abuja: "Abuja",
  barcelona: "Barcelona",
};

export function isVenueSlug(value: string): value is VenueSlug {
  return (VENUE_SLUGS as readonly string[]).includes(value);
}

export function cityFromVenueSlug(slug: string): string | null {
  if (!isVenueSlug(slug)) return null;
  return SLUG_TO_CITY[slug];
}

/** Derived from the generated JSON file */
export const VENUE_LISTED_COURSES: VenueListedCourse[] = venueCourses as VenueListedCourse[];

export function getCoursesForCity(city: string): VenueListedCourse[] {
  return VENUE_LISTED_COURSES.filter(
    (c) => c.venue.toLowerCase() === city.toLowerCase()
  );
}

export function getVenueCityLinks(): { slug: VenueSlug; label: string }[] {
  return VENUE_SLUGS.map((slug) => ({ slug, label: SLUG_TO_CITY[slug] }));
}
