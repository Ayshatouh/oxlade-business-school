export type ReviewShowcaseTab = "delegates" | "organisations" | "highlights";

export interface ShowcaseReview {
  id: string;
  tab: ReviewShowcaseTab;
  quote: string;
  attribution: string;
  context?: string;
}

export const REVIEW_SHOWCASE_TABS: { id: ReviewShowcaseTab; label: string }[] = [
  { id: "delegates", label: "Delegate voices" },
  { id: "organisations", label: "Organisations" },
  { id: "highlights", label: "Highlights" },
];

export const REVIEW_SHOWCASE_ITEMS: ShowcaseReview[] = [
  {
    id: "d1",
    tab: "delegates",
    quote:
      "The facilitator balanced theory with real scenarios we face weekly. I left with a clear plan I could present to my board the following week.",
    attribution: "Finance director",
    context: "Strategic leadership programme",
  },
  {
    id: "d2",
    tab: "delegates",
    quote:
      "Materials were sharp, pace was demanding but fair, and the cohort quality meant every discussion raised the bar.",
    attribution: "Head of operations",
    context: "Open course — London",
  },
  {
    id: "o1",
    tab: "organisations",
    quote:
      "Oxlade aligned workshops to our competency framework and kept stakeholders informed throughout. Uptake and satisfaction exceeded our L&D targets.",
    attribution: "Group HR business partner",
    context: "In-house series",
  },
  {
    id: "o2",
    tab: "organisations",
    quote:
      "Professional from first scoping call to delivery. Our teams appreciated the practical tools, not generic slide decks.",
    attribution: "Learning & development lead",
    context: "Regional management cohort",
  },
  {
    id: "h1",
    tab: "highlights",
    quote:
      "Consistently strong Net Promoter-style scores across open programmes in the last twelve months, with repeat attendance from alumni organisations.",
    attribution: "Quality & feedback summary",
  },
  {
    id: "h2",
    tab: "highlights",
    quote:
      "Delegates cite clarity of objectives, relevance to role, and facilitator credibility as the top three drivers of satisfaction.",
    attribution: "Course evaluation themes",
  },
];
