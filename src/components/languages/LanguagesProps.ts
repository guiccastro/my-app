import React from 'react';
import { LanguagesSection } from '../../content.types';

export interface LanguagesProps {
  content: LanguagesSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
