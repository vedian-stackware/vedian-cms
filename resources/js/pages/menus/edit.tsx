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
import { config } from '@/editors/page.editor.config';
import '@measured/puck/puck.css';
import { router } from '@inertiajs/react';
import MenusLayout from '@/layouts/menus/layout';
import NavigationEditor from '@/editors/navigation.editor';
import { data } from '@/editors/navigation.editor';
import { update } from '@/routes/menus';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from '@/editors/Droppable';
import { Draggable } from '@/editors/Draggable';
import { useState } from 'react';

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
export default function Edit({ pages, menu, navItems, actions }: { pages: any, menu: any, navItems: any, actions: any }) {
    console.log(menu);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu edit" />
            <MenusLayout>

                <NavigationEditor key='123' pages={pages} menu={menu} navItems={navItems} actions={actions} method="put" url={update(menu.id).url} />

            </MenusLayout>

        </AppLayout>
    );
}
