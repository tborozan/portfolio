export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface AboutInfo {
  bio: string;
  timeline: TimelineItem[];
}

export interface SkillItem {
  name: string;
  iconClass?: string;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export interface SkillsViewModel {
  skillGroups: SkillGroup[];
  additionalSpecializations: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  projectUrl: string | null;
  technologies: string[];
}
