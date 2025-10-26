import { RefObject, useRef } from 'react';

export enum PageSections {
  overview = 'overview',
  about = 'about',
  experiences = 'experiences',
  academic = 'academic',
  projects = 'projects',
  languages = 'languages',
  competences = 'competences',
  certificates = 'certificates',
  contacts = 'contacts',
}

export default function usePageSectionsRefMap(): Record<
  PageSections,
  RefObject<HTMLDivElement | null>
> {
  return {
    [PageSections.overview]: useRef<HTMLDivElement>(null),
    [PageSections.about]: useRef<HTMLDivElement>(null),
    [PageSections.experiences]: useRef<HTMLDivElement>(null),
    [PageSections.academic]: useRef<HTMLDivElement>(null),
    [PageSections.projects]: useRef<HTMLDivElement>(null),
    [PageSections.languages]: useRef<HTMLDivElement>(null),
    [PageSections.competences]: useRef<HTMLDivElement>(null),
    [PageSections.certificates]: useRef<HTMLDivElement>(null),
    [PageSections.contacts]: useRef<HTMLDivElement>(null),
  };
}
