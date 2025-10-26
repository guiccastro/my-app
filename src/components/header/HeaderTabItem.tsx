import { HeaderTabItemProps } from './HeaderTabItemProps';
import styles from './HeaderTabItem.module.css';
import classnames from 'classnames';

export default function HeaderTabItem({
  id,
  href,
  label,
  activeTab,
}: HeaderTabItemProps) {
  return (
    <a
      href={href}
      className={classnames(styles.item, { [styles.active]: activeTab === id })}
    >
      {label}
    </a>
  );
}
