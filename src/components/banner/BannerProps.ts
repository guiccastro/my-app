import { BannerSection } from '../../content.types';
import React from 'react';

export interface BannerProps {
  content: BannerSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
