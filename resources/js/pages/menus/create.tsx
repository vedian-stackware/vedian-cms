import AppLayout from '@/layouts/app-layout';
import MenusLayout from '@/layouts/menus/layout';
import { create } from '@/routes/menus';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { menus } from '@/routes';
import '@tailwindplus/elements';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

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

export default function Create({ pages }: { pages: any }) {
    let selectedPage: typeof pages | null = null;

    const [menuData, setMenuData] = useState<{ id: number; title: string; href: string }[]>([]);
    const [pageListData, setPageListData] = useState<typeof pages>(pages);

    useEffect(() => {
        setPageListData(pages);
    }, [pages]);

    const removePageFromList = (id: number) => {
        setPageListData((prev: typeof pages) => prev.filter((page: typeof pages) => page.id !== id));
    };
    const addMenuItem = (id: number) => {
        setMenuData((prev: typeof menuData) => {
            if (prev.some((item: { id: number }) => item.id === id)) {
                return prev;
            }
            return [...prev, selectedPage];
        });
    };

    const onChangeUrlSelect = (id: string) => {
        selectedPage = pages.find((p: any) => p.id.toString() === id);
    };
    const onAddMenuPage = () => {
        if (!selectedPage) return;
        addMenuItem(selectedPage.id);
        removePageFromList(selectedPage.id);
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menus create" />
            <MenusLayout>
                <div className="flex rounded-lg">
                    <Select onValueChange={onChangeUrlSelect}>
                        <SelectTrigger className="w-[200px] rounded-r-none">
                            <SelectValue placeholder="Select a page" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 text-white">
                            {pageListData.map((p: any) => (
                                <SelectItem key={p.id} value={p.id.toString()}>
                                    {p.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={onAddMenuPage}
                        title="123"
                        className="size-9 shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none rounded-tl-none rounded-bl-none ">
                        <PlusIcon />
                    </Button>
                </div>
                <nav
                    className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/*<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">*/}
                            {/*    <button type="button" command="--toggle" commandfor="mobile-menu"*/}
                            {/*            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">*/}
                            {/*        <span className="absolute -inset-0.5"></span>*/}
                            {/*        <span className="sr-only">Open main menu</span>*/}
                            {/*        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"*/}
                            {/*             data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">*/}
                            {/*            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round"*/}
                            {/*                  stroke-linejoin="round" />*/}
                            {/*        </svg>*/}
                            {/*        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"*/}
                            {/*             data-slot="icon" aria-hidden="true"*/}
                            {/*             className="size-6 not-in-aria-expanded:hidden">*/}
                            {/*            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />*/}
                            {/*        </svg>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/*<div className="flex shrink-0 items-center">*/}
                                {/*    <img*/}
                                {/*        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"*/}
                                {/*        alt="Your Company" className="h-8 w-auto" />*/}
                                {/*</div>*/}
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {menuData.length > 0 && menuData.map((item) => (
                                            <Link href={item.href} key={item.id}
                                                  onClick={(e: any) => (e.preventDefault())}
                                                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </MenusLayout>

        </AppLayout>
    );
}


