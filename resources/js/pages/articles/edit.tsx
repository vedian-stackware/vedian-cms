import AppLayout from '@/layouts/app-layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { create, edit, update } from '@/routes/articles';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { articles } from '@/routes';
import PageEditor from '@/puck/PageEditor';

export default function Edit({ article }: { article: any }) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Articles',
            href: articles().url
        },
        {
            title: 'Edit',
            href: edit(article.id).url
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article edit" />
            <ArticlesLayout>
                <PageEditor router={update.put(article.id)} data={article.content} />
            </ArticlesLayout>
        </AppLayout>
    );
}


