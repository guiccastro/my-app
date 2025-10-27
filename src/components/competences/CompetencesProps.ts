import { CompetencesSection } from '../../content.types';
import React from 'react';

export interface CompetencesProps {
  content: CompetencesSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
