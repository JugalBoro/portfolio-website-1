export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
  type: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  link: string;
}