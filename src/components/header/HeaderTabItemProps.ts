import { PageSections } from '../../PageSections';

export interface HeaderTabItemProps {
  id: PageSections;
  href: string;
  label: string;
  activeTab: PageSections;
}
