import styles from './TitleHeader.module.css';

export default function TitleHeader({ title }: { title: string }) {
  return (
    <a className={styles.title} href="#banner">
      {title}
    </a>
  );
}
