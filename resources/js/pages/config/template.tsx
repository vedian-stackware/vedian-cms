import AppLayout from '@/layouts/app-layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { template, store } from '@/routes/config';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';
import { articles } from '@/routes';
import PageEditor from '@/editors/page.editor';
import ConfigLayout from '@/layouts/config/layout';
import LayoutEditor from '@/editors/template.editor';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: articles().url
    },
    {
        title: 'Create',
        href: template().url
    }
];


export default function Template() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article create" />
            <ConfigLayout hidePanels>
                <LayoutEditor router={store.post()} />
            </ConfigLayout>

        </AppLayout>
    );
}


