export interface TrainingConsultant {
  id: string;
  name: string;
  imageUrl: string;
  /** Link for “Read Biography” — defaults to enquiry if omitted */
  bioHref?: string;
}

/**
 * Faculty and associate consultants shown on /info/our-training-consultants.
 * Replace images and names with your real roster as needed.
 */
export const TRAINING_CONSULTANTS: TrainingConsultant[] = [
  {
    id: 'omolabake-olatubosun',
    name: 'Omolabake Oluwatosin Olatubosun',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bioHref: '/team',
  },
  {
    id: 'james-morrison',
    name: 'James Morrison',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'elena-volkov',
    name: 'Elena Volkov',
    imageUrl:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'marcus-webb',
    name: 'Marcus Webb',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'thomas-brennan',
    name: 'Thomas Brennan',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'amira-hassan',
    name: 'Amira Hassan',
    imageUrl:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'robert-lang',
    name: 'Robert Lang',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];
