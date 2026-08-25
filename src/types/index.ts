export interface Metric {
  label: string;
  value: string;
  detail?: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  problem: string;
  architecture: string[];
  techStack: string[];
  metrics: Metric[];
}

export interface SkillItem {
  name: string;
  category: string;
  level: "Advanced" | "Expert" | "Core";
  experience: string;
  useCase: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  tagline: string;
  icon: string;
  items: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  title: string;
  education: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  github: string;
  linkedin: string;
  availability: string;
}

export interface AcademicHighlight {
  institution: string;
  degree: string;
  gpa: string;
  districtRank: string;
  highlights: string[];
}

export interface DirectorshipHighlight {
  company: string;
  role: string;
  timeline: string;
  summary: string;
  contributions: string[];
}

export interface AthleticHighlight {
  sport: string;
  achievement: string;
  year: string;
  details: string;
}

export interface ToastMessage {
  id: string;
  type: "success" | "info" | "copied";
  title: string;
  message: string;
}
