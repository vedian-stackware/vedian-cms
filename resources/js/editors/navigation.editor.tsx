import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/16/solid';

export let data: any[] = [];
export default function NavigationEditor({ pages }: { pages: any }) {
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
            data.push(selectedPage);
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
        <div>
            <nav
                className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
        </div>
    );
}
