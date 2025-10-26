export interface Content {
  title: string;
  about: AboutSection;
  academic: AcademicSection;
  certificates: CertificatesSection;
  competences: CompetencesSection;
  contact: ContactSection;
  experiences: ExperiencesSection;
  languages: LanguagesSection;
  projects: ProjectsSection;
  banner: BannerSection;
  header: HeaderSection;
}

export interface AboutSection {
  title: string;
  description: string[];
  details: {
    title: string;
    value: string;
  }[];
}

export interface AcademicSection {
  title: string;
  items: {
    logo: string;
    institution: string;
    level: string;
    course?: string;
  }[];
}

export interface CertificatesSection {
  title: string;
  items: {
    title: string;
    institution: string;
    duration?: string;
    date: string;
    skills?: string;
  }[];
}

export interface CompetencesSection {
  title: string;
  sections: Competence[];
}

export interface Competence {
  title: string;
  type: 'percentage' | 'level';
  items: (PercentageCompetenceItem | LevelCompetenceItem)[];
}

export interface PercentageCompetenceItem {
  name: string;
  level: string;
}

export interface LevelCompetenceItem {
  name: string;
  level: string;
  levelClass: string;
}

export interface ContactSection {
  title: string;
  address: string;
  phone: {
    number: string;
    link: string;
  };
  email: {
    address: string;
    link: string;
  };
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
  developedBy: string;
}

export interface ExperiencesSection {
  title: string;
  items: {
    logo: string;
    company: string;
    role: string;
    location: string;
    period: string;
    description: string;
    competences: string;
  }[];
}

export interface LanguagesSection {
  title: string;
  items: {
    name: string;
    level: string;
    levelClass: string;
  }[];
}

export interface ProjectsSection {
  title: string;
  items: {
    banner: string;
    url: string;
    title: string;
    type: string;
    period: string;
    description: string;
    technologies: string;
  }[];
}

export interface BannerSection {
  title: string;
  description: string;
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface HeaderSection {
  title: string;
  tabs: {
    id: string;
    href: string;
    label: string;
  }[];
}
