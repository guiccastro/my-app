import { HeaderSection } from '../../content.types';
import { PageSections } from '../../usePageSectionsRefMap';

export interface HeaderProps {
  content: HeaderSection;
  activeTab: PageSections;
  language: 'pt' | 'en';
  onLanguageChange: (language: 'pt' | 'en') => void;
}
