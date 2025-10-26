import { PageSections } from '../../usePageSectionsRefMap';

export interface HeaderTabItemProps {
  id: PageSections;
  href: string;
  label: string;
  activeTab: PageSections;
}
