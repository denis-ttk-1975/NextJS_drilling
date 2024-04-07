import type { Metadata } from 'next';

// import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next - страница News',
  description: 'мое приложение на Next.js',
};
export default function News(): JSX.Element {

  return (
<>
Страница НОВОСТИ !!!!
</>
  );
}