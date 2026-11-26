export type ProjectCategory =
  | 'Automotive Component Design'
  | 'Mechanical Assemblies'
  | 'Automotive Exterior Design'
  | 'Automotive Interior Design'
  | 'Industrial Product Design'
  | 'Reverse Engineering'
  | '3D Modelling & Rendering';

export interface ProjectImage {
  src: string;
  label: string;
  caption: string;
}

export interface BeforeAfterPair {
  title: string;
  beforeLabel: string;
  beforeSrc: string;
  beforeNote: string;
  afterLabel: string;
  afterSrc: string;
  afterNote: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface CadProject {
  id: string;
  title: string;
  subtitle: string;
  primaryCategory: ProjectCategory;
  categories: ProjectCategory[];
  software: string[];
  sourceFile: string;
  year: string;
  isSubsystemHighlight?: boolean;
  subsystemNote?: string;
  thumbnail: string;
  gallery: ProjectImage[];
  beforeAfter: BeforeAfterPair;
  modelGlb?: string;
  description: string;
  designObjectives: string[];
  engineeringConcepts: string[];
  technicalFeatures: string[];
  myContribution: string;
  specs: ProjectSpec[];
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  iconKey: 'cad' | 'render' | 'drafting' | 'cnc' | 'mechanics' | 'code';
  items: {
    name: string;
    context: string;
    tag?: string;
  }[];
}
