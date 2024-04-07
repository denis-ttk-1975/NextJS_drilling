import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstCategory
        }),
        next: {
            revalidate: 10
        },
    });
    console.log('revalidating getMenu');
    return res.json();
}