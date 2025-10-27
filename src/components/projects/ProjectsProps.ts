import React from 'react';
import { ProjectsSection } from '../../content.types';

export interface ProjectsProps {
  content: ProjectsSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
