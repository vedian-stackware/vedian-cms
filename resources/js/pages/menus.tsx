import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { articles, dashboard, menus } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import MenusLayout from '@/layouts/menus/layout';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Select } from '@/components/ui/select';
import { edit, show } from '@/routes/menus';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menus',
        href: menus().url
    },
    {
        title: 'Overview',
        href: menus().url
    }
];

export default function Menus({ menus }: { menus: any }) {

    // console.log(articles);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus" />
            <MenusLayout>
                <table className="relative min-w-full divide-y divide-white/15">
                    <thead>
                    <tr>
                        <th scope="col"
                            className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">Title
                        </th>
                        <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {menus.map((menu: any) => (
                        <tr key={menu.id}>
                            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{menu.name}</td>
                            <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                                <Link href={edit(menu.id).url}
                                      className="text-indigo-400 hover:text-indigo-300">
                                    edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </MenusLayout>

        </AppLayout>
    );
}
