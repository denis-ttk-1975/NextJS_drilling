import { Htag } from '@/components';
import type { Metadata } from 'next';
// import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next',
  description: 'мое приложение на Next.js',
};
export default function Home(): JSX.Element {
  return (
<>
<Htag tag = {'h1'}>Наименование 111</Htag>
<Htag tag = {'h2'}>Наименование 222</Htag>
<Htag tag = {'header_title'}>Наименование Title Header</Htag>
</>
  );
}
