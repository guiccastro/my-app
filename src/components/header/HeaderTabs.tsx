import HeaderTabItem from './HeaderTabItem';
import styles from './HeaderTabs.module.css';
import { HeaderTabsProps } from './HeaderTabsProps';
import { PageSections } from '../../usePageSectionsRefMap';

export default function HeaderTabs({
  tabs,
  activeTab,
  isVertical = false,
  onTabClick,
}: HeaderTabsProps) {
  return (
    <div className={`${styles.tabs} ${isVertical ? styles.vertical : ''}`}>
      {tabs.map((tab, index) => (
        <HeaderTabItem
          key={index}
          id={PageSections[tab.id as keyof typeof PageSections]}
          href={tab.href}
          label={tab.label}
          activeTab={activeTab}
          onClick={onTabClick}
        />
      ))}
    </div>
  );
}
