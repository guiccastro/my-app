import React from 'react';
import { ExperiencesSection } from '../../content.types';

export interface ExperiencesProps {
  content: ExperiencesSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
