import { getMenu } from '@/api/menu';

export default async function Menu(): Promise<JSX.Element> {
    const menu = await getMenu(0);

  return (
    <main>
        <div>{menu.length}</div>
    </main>



  );
}