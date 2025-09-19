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
import { config } from '@/editors/page.editor.config';
import { config as confTemplate } from '@/editors/template.editor.config';
import '@measured/puck/puck.css';
import { Render } from '@measured/puck';
import { TopBar, TopBarActionGroup, TopBarLogoGroup, TopBarNavItemGroup } from '@/components/partials/top-bar';
import { NavItem } from '@/components/partials/web-nav/nav-item';

let hrefId = 0;

export default function Home({ id, article, data, menu }: { id: number, article: any, data: any, menu: any }) {
    hrefId = id;
    console.log(article);
    return (
        <div>
            <Render config={confTemplate} data={data} />
            <Render config={config} data={data} />
        </div>
    )
        ;
}
