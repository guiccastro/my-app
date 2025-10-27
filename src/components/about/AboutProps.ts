import { AboutSection } from '../../content.types';
import React from 'react';

export interface AboutProps {
  content: AboutSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
