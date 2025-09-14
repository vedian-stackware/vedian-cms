import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticleLayout from '@/layouts/articles/layout';
import { articles, dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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

export default function Articles() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Articles" />
            <ArticleLayout>
                askldhjasd
            </ArticleLayout>

        </AppLayout>
    );
}
