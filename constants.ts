
import { Experience, Achievement, Education, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Product Designer II',
    company: 'Miracle of Mind, Isha Foundation',
    startDate: '2023-09',
    endDate: 'Present',
    description: [
      'Designed UX/UI for Miracle of Mind: Achieved #1 in Health & Fitness on Google Play/App Store India and Top 50 Overall.',
      'Drove 1M+ downloads in just 15 hours through strategic launch design and scalable user flows.',
      'Optimised key flows (+15% activation, +8% retention via A/B testing) and shipped core gamification systems.'
    ],
    type: 'full-time',
    tags: ['Product Design', 'Growth', 'Rive']
  },
  {
    id: '2',
    role: 'Founding Product Designer',
    company: 'Sugar AI',
    startDate: '2024-02',
    endDate: '2024-07',
    description: [
      'Created AI copilot experiences, including voice UIs and automations.',
      'Developed high-fidelity prototypes for investor outreach.'
    ],
    type: 'part-time',
    tags: ['AI/ML', 'Prototyping', 'VUI']
  },
  {
    id: '3',
    role: 'Business & Operations Manager',
    company: 'BiSy - Business Sustainability',
    startDate: '2023-05',
    endDate: '2023-09',
    description: [
      'Established company branding and digital strategy.',
      'Led hiring and rebuilt digital presence.'
    ],
    type: 'full-time',
    tags: ['Strategy', 'Branding']
  },
  {
    id: '4',
    role: 'UX Designer',
    company: 'Sadhguru App, Isha Foundation',
    startDate: '2022-07',
    endDate: '2023-04',
    description: [
      'Maintained global design system and user-centric features.',
      'Conducted extensive user research and usability testing.'
    ],
    type: 'volunteer',
    tags: ['UX Research', 'Design Systems']
  },
  {
    id: '5',
    role: 'Product Design Intern',
    company: 'Triomics',
    startDate: '2022-01',
    endDate: '2022-04',
    description: [
      'Created clinical trial tools for HealthTech dashboards.',
      'Revamped patient-facing mobile application UX.'
    ],
    type: 'internship',
    tags: ['HealthTech', 'Web/Mobile']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Miracle of Mind',
    category: 'Product Design Case Study',
    description: 'Designed UX/UI for the #1 Health & Fitness app in India (Top 50 Overall). Drove 1M+ downloads in 15 hours.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Downloads (15h)', value: '1M+' },
      { label: 'Category Rank', value: '#1' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Record Breaking Launch',
    description: 'Drove 1M+ downloads in 15 hours for Miracle of Mind.',
    stat: '1M+'
  },
  {
    title: 'Top Charts',
    description: '#1 in Health & Fitness, Top 50 Overall in India.',
    stat: '#1'
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'Manipal Institute of Technology',
    degree: 'B.Tech in EEE',
    period: '2018 - 2022'
  },
  {
    school: 'Google',
    degree: 'UX Design Specialization',
    period: 'Professional Cert'
  }
];

export const SKILLS = ['Product', 'Design Systems', 'UX Writing', 'Prompt Engineering', 'Visual Design', 'Motion Design', 'UX Research'];
export const TOOLS = ['Figma', 'Rive', 'Midjourney', 'Adobe Creative Suite'];
