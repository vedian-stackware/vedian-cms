import { Puck } from '@measured/puck';
import { config } from '@/editors/page.editor.config';
// import '../../css/editors.css';
import '@measured/puck/puck.css';
import { router, usePage } from '@inertiajs/react';
import type { RouteDefinition } from '@/wayfinder';
import { SharedData } from '@/types';

let initialData: Record<string, any> = {};


export default function LayoutEditor({ data = null }: {
    router: RouteDefinition<any>,
    data?: any
}) {
    initialData = data || {};

    return (
        <Puck
            config={config}
            data={initialData}
        />
    );
}
