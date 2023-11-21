import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next',
  description: 'мое приложение на Next.js',
};
export default function Home(): JSX.Element {
  const denis = 'Denis!!!!!!!!!';
  return (
    <main className={styles.main}>
      {denis}
    </main>
  );
}
