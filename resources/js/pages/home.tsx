// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import AppLayout from '@/layouts/app-layout';
// import ArticlesLayout from '@/layouts/articles/layout';
// import { show } from '@/routes/articles';
// import { type BreadcrumbItem, type SharedData } from '@/types';
// import { Form, Head, usePage, useForm } from '@inertiajs/react';
// import { articles } from '@/routes';
// import { Input } from '@/components/ui/input';
// import InputError from '@/components/input-error';
// import { Label } from '@/components/ui/label';
// import ArticleController from '@/actions/App/Http/Controllers/Articles/ArticleController';
// import { Button } from '@/components/ui/button';
// import { LoaderCircle } from 'lucide-react';
// import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Config, Puck } from '@measured/puck';
import { config } from '@/editors/editor.config';
import '@measured/puck/puck.css';
import { Render } from '@measured/puck';

let hrefId = 0;

export default function Home({ id, article, data }: { id: number, article: any, data: any }) {
    hrefId = id;
    console.log(article);
    return <Render config={config} data={data} />;
}
