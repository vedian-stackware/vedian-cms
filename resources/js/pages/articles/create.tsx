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

export default function Create({ authors, statuses, defaultStatus }) {
    const { auth } = usePage<SharedData>().props;
    const form = useForm({
        title: '',
        slug: '',
        author_id: auth.user.id,
        status: defaultStatus // preselect draft
    });
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article create" />
            <ArticlesLayout>
                <Form {...ArticleController.store.form()}>
                    {({ processing, errors }) => (
                        <div>
                            <Input type="hidden" name="author_id" value={auth.user.id.toString()} />
                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <Label htmlFor="title">Title</Label>
                                    <Input type="text" placeholder="Insert content" name="title" />

                                    <InputError message={errors.title} />
                                </div>
                                <div className="sm:col-span-4">
                                    <Label htmlFor="slug">Slug</Label>
                                    <Input type="text" placeholder="" name="slug" />

                                    <InputError message={errors.slug} />
                                </div>
                                <div className="sm:col-span-4">
                                    <Label htmlFor="status">Status</Label>
                                    <Select
                                        name="status"
                                        value={form.data.status?.toString()}
                                        onValueChange={(value) => form.setData('status', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statuses.map((stat) => (
                                                <SelectItem value={stat.toString()} key={stat.toString()}>
                                                    {stat.toString()}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
                                </div>

                                <div className="sm:col-span-4">
                                    <Label htmlFor="content">Content</Label>
                                    <textarea
                                        onValueChange={(value) => form.setData('contrent', value)} name="content" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">

                                    </textarea>
                                </div>

                                <div className="flex items-center">
                                    <Button className="w-full" disabled={processing} data-test="create-article-button">
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Create article
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </Form>
            </ArticlesLayout>

        </AppLayout>
    );
}
