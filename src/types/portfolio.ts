export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  problemStatement: string;
  solution: string;
  githubUrl?: string;
  demoUrl?: string;
  interactiveType?: 'detection' | 'market' | 'mplad' | 'gesture' | 'voice';
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    description: string;
    level: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: 'hackathon' | 'course' | 'leadership' | 'competition';
  description: string;
  credentialUrl?: string;
  verificationNote?: string;
}
