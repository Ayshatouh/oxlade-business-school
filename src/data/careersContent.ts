export type CareerTabId = 'delivery' | 'programmes' | 'operations';

export interface JobListing {
  id: string;
  tab: CareerTabId;
  title: string;
  location: string;
  languages?: string;
  compensation?: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const CAREER_TABS: { id: CareerTabId; label: string }[] = [
  { id: 'delivery', label: 'Delivery & faculty' },
  { id: 'programmes', label: 'Programmes & quality' },
  { id: 'operations', label: 'Client operations' },
];

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: 'associate-trainer',
    tab: 'delivery',
    title: 'Associate corporate trainer',
    location: 'Hybrid — UK & international delivery',
    languages: 'English (professional working proficiency)',
    compensation: 'Day rate discussed at shortlist stage',
    sections: [
      {
        heading: `About the role`,
        paragraphs: [
          'We work with practising specialists who can translate complex topics into applied learning for senior audiences. You will collaborate with programme leads, contribute to materials where appropriate, and uphold our delivery standards across venues and virtual classrooms.',
        ],
      },
      {
        heading: 'What we look for',
        paragraphs: [
          'Demonstrable subject depth in one or more of our catalogue areas, credible corporate or public-sector experience, and confidence facilitating discussion-heavy sessions rather than lecture-only formats.',
        ],
      },
    ],
  },
  {
    id: 'programme-coordinator',
    tab: 'programmes',
    title: 'Programme coordinator',
    location: 'Remote-first (UK time)',
    languages: 'English',
    sections: [
      {
        heading: 'About the role',
        paragraphs: [
          'You will support scheduling, delegate communications, and documentation across open programmes and bespoke assignments. Attention to detail, calm under deadlines, and a service mindset are essential.',
        ],
      },
      {
        heading: 'Opportunity overview',
        paragraphs: [
          'This is a hands-on coordination role working closely with admissions, faculty, and venue partners. Growth path toward programme management for strong performers.',
        ],
      },
    ],
  },
  {
    id: 'client-success',
    tab: 'operations',
    title: 'Client success associate',
    location: 'London (hybrid)',
    languages: 'English',
    sections: [
      {
        heading: 'About the role',
        paragraphs: [
          'You will be the day-to-day contact for corporate L&D sponsors: scoping needs, aligning proposals, and ensuring a smooth experience from enquiry through delivery.',
        ],
      },
      {
        heading: 'Opportunity overview',
        paragraphs: [
          'Ideal for someone early in a B2B professional services career who enjoys structured communication, CRM hygiene, and building trusted relationships with stakeholders.',
        ],
      },
    ],
  },
];
