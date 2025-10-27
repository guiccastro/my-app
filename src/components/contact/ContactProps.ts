import React from 'react';
import { ContactSection } from '../../content.types';

export interface ContactProps {
  content: ContactSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
