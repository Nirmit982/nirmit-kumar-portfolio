export interface JourneyStage {
  index: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface OtherProject {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
}
