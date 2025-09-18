import { Puck } from '@measured/puck';
import { config } from '@/editors/editor.config';
// import '../../css/editors.css';
import '@measured/puck/puck.css';
import { router, usePage } from '@inertiajs/react';
import type { RouteDefinition } from '@/wayfinder';
import { SharedData } from '@/types';

let initialData: Record<string, any> = {};
const SavePage = (puckData: any, e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const method: string = initialData.router.method;
    const url: string = initialData.router.url;

    const data = {
        title: puckData.root?.props?.title ?? '',
        author_id: initialData.authorId,
        status: puckData.root?.props?.status ?? 'draft',
        type: puckData.root?.props?.type ?? 'page',
        content: JSON.stringify(puckData)
    };

    if (method === 'post') {
        router.post(url, data, {
            preserveState: false,
            preserveScroll: true // optional
        });
    } else if (method === 'put') {
        router.put(url, data, {
            preserveState: false,
            preserveScroll: true
        });
    }
};

export default function PageEditor({ router, data = null }: {
    router: RouteDefinition<any>,
    data?: any
}) {
    const { auth } = usePage<SharedData>().props;
    initialData = data || {};
    initialData.router = router;
    initialData.authorId = auth.user.id;

    return (
        <Puck
            config={config}
            data={initialData}
            onPublish={SavePage}
        />
    );
}
