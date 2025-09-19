import AppLayout from '@/layouts/app-layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { create, store } from '@/routes/articles';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';
import { articles } from '@/routes';
import PageEditor from '@/editors/page.editor';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: articles().url
    },
    {
        title: 'Create',
        href: create().url
    }
];


export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article create" />
            <ArticlesLayout hidePanels>
                <PageEditor router={store.post()} />
            </ArticlesLayout>

        </AppLayout>
    );
}


