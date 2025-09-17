import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { create } from '@/routes/menus';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, usePage, useForm } from '@inertiajs/react';
import { menus } from '@/routes';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import ArticleController from '@/actions/App/Http/Controllers/Articles/ArticleController';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Puck } from '@measured/puck';
import { config } from '../../../../puck.config';
import '@measured/puck/puck.css';
import { router } from '@inertiajs/react';
import MenusLayout from '@/layouts/menus/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menus',
        href: menus().url
    },
    {
        title: 'Create',
        href: create().url
    }
];

const initialData = { root: { props: {} } };


export default function Create() {
    const { auth } = usePage<SharedData>().props;
    const save = (puckData: any, e?: React.FormEvent) => {
        if (e) e.preventDefault();
        console.log(puckData);

        router.post(ArticleController.store().url, {
            title: puckData.root?.props?.title ?? '',
            content: JSON.stringify(puckData),
            author_id: auth.user.id,
            status: 'draft'}, {
            preserveState: false,
            preserveScroll: true, // optional
        })
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus create" />
            <MenusLayout>

            </MenusLayout>

        </AppLayout>
    );
}


