
export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM or 'Present'
  description: string[];
  type: 'full-time' | 'part-time' | 'volunteer' | 'internship';
  tags: string[];
}

export interface Achievement {
  title: string;
  description: string;
  stat?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
  stats?: { label: string; value: string }[];
}
