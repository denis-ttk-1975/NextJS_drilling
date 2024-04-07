import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import type { Metadata } from 'next';
import {notFound} from 'next/navigation';

// import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next - страница Products',
  description: 'мое приложение на Next.js',
};

export async function generateStaticParams(): Promise<{alias: string}[]> {

    const menu = await getMenu(0);
    const urlArray = menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));

    console.log(urlArray);

    return urlArray;
}
export default async function PageProducts({params}: {params: {alias: string}}): Promise<JSX.Element> {
    const page = await getPage(params.alias);

    if (!page) {
        return notFound();
    }

  return (
<>
{/* {JSON.stringify(page)} */}
{page.title}
</>
  );
}