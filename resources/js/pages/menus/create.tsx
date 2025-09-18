import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import MenusLayout from '@/layouts/menus/layout';
import ArticlesLayout from '@/layouts/articles/layout';
import { create } from '@/routes/menus';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, usePage, useForm } from '@inertiajs/react';
import { menus } from '@/routes';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { pageList } from '@/routes/menus';
import { router } from '@inertiajs/react';

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


export default function Create({ pages }: { pages: any }) {
    const { auth } = usePage<SharedData>().props;
    console.log(pages);
    // const save = (puckData: any, e?: React.FormEvent) => {
    //     if (e) e.preventDefault();
    //     console.log(puckData);
    //
    //     router.post(ArticleController.store().url, {
    //         title: puckData.root?.props?.title ?? '',
    //         content: JSON.stringify(puckData),
    //         author_id: auth.user.id,
    //         status: 'draft'
    //     }, {
    //         preserveState: false,
    //         preserveScroll: true // optional
    //     });
    // };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus create" />
            <MenusLayout>
                <Form>
                    <Select>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select a page" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 text-white">
                            {pages.map((p: any) => (
                                <SelectItem key={p.id} value={p.id.toString()}>
                                    {p.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Form>
            </MenusLayout>

        </AppLayout>
);
}


