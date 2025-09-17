import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticleLayout from '@/layouts/articles/layout';
import { articles, dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { edit } from '@/routes/articles';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: articles().url,
    },
    {
        title: 'Overview',
        href: articles().url,
    },
];

export default function Articles({articles}:{articles:any}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Articles" />
            <ArticleLayout>
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
                            <td><Link href={edit(article.id).url}>
                                edit</Link></td>
                        </tr>
                        // <a key={article.id} href={article.href}>
                        //     {article.title} | {article.href} | {article.status}
                        //     <br />
                        // </a>
                    ))}
                    </tbody>
                </table>
            </ArticleLayout>

        </AppLayout>
    );
}
