import type { Metadata } from 'next';

// import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next - страница About',
  description: 'мое приложение на Next.js',
};
export default function About(): JSX.Element {

  return (
<>
Страница About
</>
  );
}