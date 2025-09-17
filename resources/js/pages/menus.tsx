import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticleLayout from '@/layouts/articles/layout';
import { articles, dashboard, menus } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import MenusLayout from '@/layouts/menus/layout';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Select } from '@/components/ui/select';
import { show } from '@/routes/articles';

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

export default function Articles({ articles }: { articles: any }) {

    console.log(articles);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus" />
            <MenusLayout>
                <table>
                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>slug</td>
                        <td>href</td>
                        <td>status</td>
                    </tr>
                    </thead>
                    <tbody>
                    {articles.map((article: any) => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                            <td>{article.slug}</td>
                            <td>{article.href}</td>
                            <td>{article.status}</td>
                            <td><a href={show(article.id).url}>
                                asda</a></td>
                        </tr>
                        // <a key={article.id} href={article.href}>
                        //     {article.title} | {article.href} | {article.status}
                        //     <br />
                        // </a>
                    ))}
                    </tbody>
                </table>
            </MenusLayout>

        </AppLayout>
    );
}
