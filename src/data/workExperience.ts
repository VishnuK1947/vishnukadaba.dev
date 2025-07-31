export interface WorkExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  link: string;
}

export const workExperience: WorkExperienceItem[] = [
  {
    company: 'Expedia Group',
    role: 'Engineering, Machine Learning',
    period: '2025',
    logo: '/expedia-logo.png',
    link: 'https://www.expediagroup.com/',
  },
  {
    company: 'Vellum',
    role: 'Engineering, Applied AI',
    period: '2024 - 25',
    logo: '/vellum.png',
    link: 'https://www.vellum.ai/',
  },
  {
    company: 'USC ECE Department',
    role: 'Machine Learning',
    period: '2024 - 25',
    logo: '/usc.png',
    link: 'https://minghsiehece.usc.edu/',
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
  {
    company: 'RTWO Solutions',
    role: 'Engineering, Embedded Systems',
    period: '2021 - 22',
    logo: '/rtwo.png',
    link: 'https://www.rtwohealthcare.com/',
  },
];
