import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { create } from '@/routes/articles';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, usePage, useForm } from '@inertiajs/react';
import { articles } from '@/routes';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import ArticleController from '@/actions/App/Http/Controllers/Articles/ArticleController';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Puck } from '@measured/puck';
import {config} from '../../../../puck.config'
import "@measured/puck/puck.css";
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
// Provide an initial page to load into the editor (empty for new pages)
const initialData = {};

// Save the page when the user clicks on Publish
const save = (data: any) => {
    console.log(data); // Replace this with a call to your backend
};

export default function Create() {
    const { auth } = usePage<SharedData>().props;

    const data = {};
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article create" />
            <ArticlesLayout>
                <Puck config={config} data={initialData} onPublish={save} />
            </ArticlesLayout>

        </AppLayout>
    );
}


