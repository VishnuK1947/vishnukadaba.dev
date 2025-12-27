export interface WorkExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  link: string;
}

export const workExperience: WorkExperienceItem[] = [
  {
    company: 'Lemma',
    role: 'Engineering (Building)',
    period: '2025 - Present',
    logo: '/lemma.png',
    link: 'https://www.uselemma.ai/',
  },
  {
    company: 'Expedia Group',
    role: 'Engineering, Applied AI & ML',
    period: '2025',
    logo: '/expedia-logo.png',
    link: 'https://www.expedia.com/',
  },
  {
    company: 'Vellum',
    role: 'Engineering, Applied AI',
    period: '2024 - 25',
    logo: '/vellum.png',
    link: 'https://www.vellum.ai/',
  },
  {
    company: 'TRBHI',
    role: 'Engineering, Applied AI',
    period: '2024',
    logo: '/trbhi.png',
    link: 'https://trbhi.com/',
  },
  {
    company: 'Ushur',
    role: 'Engineering, AI Labs',
    period: '2024',
    logo: '/ushur.png',
    link: 'https://www.ushur.com/',
  },
];
