import { PageSections } from '../../usePageSectionsRefMap';

export interface HeaderTabsProps {
  activeTab: PageSections;
  isVertical?: boolean;
  onTabClick?: () => void;
}
