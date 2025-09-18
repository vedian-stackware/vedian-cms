import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { show } from '@/routes/menus';
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
import { Config, Puck } from '@measured/puck';
import { config } from '@/editors/editor.config';
import '@measured/puck/puck.css';
import { router } from '@inertiajs/react';
import { Render } from '@measured/puck';

let hrefId = 0;

let breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menus',
        href: menus().url
    },
    {
        title: 'Show',
        href: show(hrefId).url
    }
];

export default function Show({ id, article, data }: { id: number, article: any, data: any }) {
    hrefId = id;
    console.log(article);
    console.log(breadcrumbs);
    return;
}
