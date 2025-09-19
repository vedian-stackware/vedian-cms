import AppLayout from '@/layouts/app-layout';
import MenusLayout from '@/layouts/menus/layout';
import { create, store } from '@/routes/menus';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, Link, router } from '@inertiajs/react';
import { menus } from '@/routes';
import '@tailwindplus/elements';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import NavigationEditor from '@/editors/navigation.editor';
import { data } from '@/editors/navigation.editor';
import MenuController from '@/actions/App/Http/Controllers/Menus/MenuController';

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

export default function Create({ pages }: { pages: any }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus create" />
            <MenusLayout>
                <NavigationEditor pages={pages} method="post" url={store().url} />
            </MenusLayout>

        </AppLayout>
    );
}


