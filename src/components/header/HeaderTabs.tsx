import HeaderTabItem from './HeaderTabItem';
import styles from './HeaderTabs.module.css';
import { HeaderTabsProps } from './HeaderTabsProps';
import { PageSections } from '../../usePageSectionsRefMap';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function HeaderTabs({ activeTab }: HeaderTabsProps) {
  const { tabs } = (content as Content).header;
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index) => (
        <HeaderTabItem
          key={index}
          id={PageSections[tab.id as keyof typeof PageSections]}
          href={tab.href}
          label={tab.label}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
}
