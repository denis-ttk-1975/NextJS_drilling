import type { Metadata } from 'next';

import styles from './page.module.css';
// import { API } from '../api';
// import { MenuItem } from '@/interfaces/menu.interface';
import { getMenu } from '@/api/menu';
import Menu from './components/menu';

export const metadata: Metadata = {
  title: 'Создать приложение Next',
  description: 'мое приложение на Next.js',
};

export default async function Home(): Promise<JSX.Element> {
  console.log('I am Home!!!');
  const menu = await getMenu(0);

  return (
    <main className={styles.main}>
      <div>ГЛАВНАЯ СТРАНИЦА</div>
    </main>
  );
}
