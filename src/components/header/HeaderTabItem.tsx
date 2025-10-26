import { HeaderTabItemProps } from './HeaderTabItemProps';
import styles from './HeaderTabItem.module.css';
import classnames from 'classnames';

export default function HeaderTabItem({
  id,
  href,
  label,
  activeTab,
  onClick,
}: HeaderTabItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={classnames(styles.item, { [styles.active]: activeTab === id })}
    >
      {label}
    </a>
  );
}
