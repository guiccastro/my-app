import { CertificatesSection } from '../../content.types';
import React from 'react';

export interface CertificatesProps {
  content: CertificatesSection;
  ref: React.RefObject<HTMLDivElement | null>;
}
