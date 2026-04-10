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

/**
 * Open-course style rows shown per city. courseId must match a route under /courses/[id].
 */
export const VENUE_LISTED_COURSES: VenueListedCourse[] = [
  // London
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "25 - 29 May 2026",
    venue: "London",
    price: "£4,495",
  },
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "14 - 18 Jul 2026",
    venue: "London",
    price: "£3,800",
  },
  {
    courseId: "data-analytics",
    title: "Data Analytics for Decision Makers",
    date: "Flexible Start",
    venue: "London",
    price: "£1,950",
  },
  {
    courseId: "fraud-detection",
    title: "Strategic Internal Audit Leadership",
    date: "08 - 12 Sep 2026",
    venue: "London",
    price: "£4,495",
  },
  // Dubai
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "02 - 06 Sep 2026",
    venue: "Dubai",
    price: "£3,800",
  },
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "19 - 23 Oct 2026",
    venue: "Dubai",
    price: "£4,495",
  },
  {
    courseId: "data-analytics",
    title: "Data Analytics for Decision Makers",
    date: "Flexible Start",
    venue: "Dubai",
    price: "£1,950",
  },
  // Istanbul
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "21 - 25 Apr 2026",
    venue: "Istanbul",
    price: "£3,800",
  },
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "16 - 20 Jun 2026",
    venue: "Istanbul",
    price: "£4,495",
  },
  {
    courseId: "data-analytics",
    title: "Data Analytics for Decision Makers",
    date: "Flexible Start",
    venue: "Istanbul",
    price: "£1,950",
  },
  // Singapore
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "02 - 07 Nov 2026",
    venue: "Singapore",
    price: "£4,495",
  },
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "11 - 15 Aug 2026",
    venue: "Singapore",
    price: "£3,800",
  },
  {
    courseId: "data-analytics",
    title: "Data Analytics for Decision Makers",
    date: "Flexible Start",
    venue: "Singapore",
    price: "£1,950",
  },
  // Abuja
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "05 - 09 May 2026",
    venue: "Abuja",
    price: "£3,800",
  },
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "22 - 26 Sep 2026",
    venue: "Abuja",
    price: "£4,495",
  },
  // Barcelona
  {
    courseId: "mini-mba",
    title: "Mini MBA in Business Management",
    date: "15 - 19 Jun 2026",
    venue: "Barcelona",
    price: "£3,800",
  },
  {
    courseId: "fraud-detection",
    title: "Fraud Detection and Prevention in Internal Auditing",
    date: "06 - 10 Oct 2026",
    venue: "Barcelona",
    price: "£4,495",
  },
  {
    courseId: "data-analytics",
    title: "Data Analytics for Decision Makers",
    date: "Flexible Start",
    venue: "Barcelona",
    price: "£1,950",
  },
];

export function getCoursesForCity(city: string): VenueListedCourse[] {
  return VENUE_LISTED_COURSES.filter(
    (c) => c.venue.toLowerCase() === city.toLowerCase()
  );
}

export function getVenueCityLinks(): { slug: VenueSlug; label: string }[] {
  return VENUE_SLUGS.map((slug) => ({ slug, label: SLUG_TO_CITY[slug] }));
}
