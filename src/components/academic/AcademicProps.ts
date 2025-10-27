import { AcademicSection } from '../../content.types';
import React from 'react';

export interface AcademicProps {
  content: AcademicSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
