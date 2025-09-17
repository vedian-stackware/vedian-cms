import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import ArticleLayout from '@/layouts/articles/layout';
import { articles, dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { edit } from '@/routes/articles';
import { Button } from '@/components/ui/button';
import { EditIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: articles().url
    },
    {
        title: 'Overview',
        href: articles().url
    }
];

export default function Articles({ articles }: { articles: any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Articles" />
            <ArticleLayout>
                <table className="relative min-w-full divide-y divide-white/15">
                    <thead>
                    <tr>
                        <th scope="col"
                            className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">Title
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Slug</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Href</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">type</th>
                        <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                    {articles.map((article: any) => (
                        <tr key={article.id}>
                            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{article.title}</td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">{article.slug}</td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">
                                <Link href={article.href}
                                      className="text-indigo-400 hover:text-indigo-300">
                                    {article.href}
                                </Link>
                            </td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">
                                <Badge variant={article.status}>{article.status}</Badge>
                            </td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">{article.type}</td>
                            <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                                <Link href={edit(article.id).url}
                                      className="text-indigo-400 hover:text-indigo-300">
                                    edit
                                </Link>
                            </td>
                        </tr>
                        // <a key={article.id} href={article.href}>
                        // {article.title} | {article.href} | {article.status}
                        // <br />
                        // </a>
                    ))}
                    </tbody>
                </table>
            </ArticleLayout>

        </AppLayout>
    )
        ;
}
