import { HeaderSection } from '../../content.types';
import { PageSections } from '../../usePageSectionsRefMap';

export interface HeaderTabsProps {
  tabs: HeaderSection['tabs'];
  activeTab: PageSections;
  isVertical?: boolean;
  onTabClick?: () => void;
}
