import styles from './TitleHeader.module.css';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function TitleHeader() {
  const { title } = (content as Content).header;
  return (
    <a className={styles.title} href="#banner">
      {title}
    </a>
  );
}
