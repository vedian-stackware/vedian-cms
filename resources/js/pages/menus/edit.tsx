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
import { config } from '@/editors/editor.config';
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
export default function Edit({ pages, menu }: { pages: any, menu: any }) {
    console.log(menu);
    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
        <Draggable id="draggable">Drag me</Draggable>
    );

    function handleDragEnd(event) {
        const { over } = event;

        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu edit" />
            <MenusLayout>

                <NavigationEditor key='123' pages={pages} menu={menu} method="put" url={update(menu.id).url} />

            </MenusLayout>

        </AppLayout>
    );
}
