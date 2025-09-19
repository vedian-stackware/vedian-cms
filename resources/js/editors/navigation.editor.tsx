import { useEffect, useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import { pageList, update } from '@/routes/menus';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';


export default function NavigationEditor({ pages, method, url, menu = null }: {
    pages: any,
    method: string,
    url: string,
    menu?: any | null
}) {
    const [menuData, setMenuData] = useState<{ id: number, article_id: number; title: string; href: string }[]>([]);
    const [pageListData, setPageListData] = useState<typeof pages>(pages);
    const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

    useEffect(() => {
        setPageListData(pages);
        if (menu !== null) {
            setMenuData(
                menu.menu_items.map((m: any) => ({
                    id: m.id,
                    article_id: m.article_id ?? m.id,
                    title: m.title,
                    slug: m.slug,
                    href: m.href
                }))
            );
            menu.menu_items.forEach((m: any) => {
                addMenuItem(m);
            });
        }
    }, [pages]);

    const removePageFromList = (article_id: number) => {
        setPageListData((prev: typeof pages) => prev.filter((page: any) => page.article_id !== article_id));
    };

    const addPageToList = (item: any) => {
        setPageListData((prev: typeof pages) => {
            if (prev.some((p: any) => p.article_id === item.article_id)) return prev;
            return [...prev, item];
        });
    };

    const addMenuItem = (item: any) => {
        setMenuData((prev) => {
            if (prev.some((i: any) => i.article_id === item.article_id)) return prev;
            return [...prev, item];
        });
        setPageListData((prev) => prev.filter(p => p.article_id !== item.article_id));
    };

    const removeMenuItem = (item: any) => {
        // setMenuData((prev: any) => prev.filter((i: any) => i.article_id !== item.article_id));
        // addPageToList(item);
        setMenuData((prev) => prev.filter(i => i.article_id !== item.article_id));
        setPageListData((prev) => [...prev, item]);
    };

    const handleSelectChange = (article_id: string) => {
        setSelectedArticleId(article_id);
    };

    const handleAddSelected = (value) => {
        setSelectedArticleId(value);
        const page = pageListData.find(p => p.article_id === value);
        if (page) addMenuItem(page);
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
                                        <div className="group" key={item.article_id}>
                                            <Link
                                                onClick={(e) => e.preventDefault()}
                                                className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                            >
                                                {item.title}
                                                <Button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        removeMenuItem(item);
                                                    }}
                                                    className="hidden group-hover:inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer ml-2 p-2"
                                                >
                                                    <MinusIcon />
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                    {menuData.length >= 0 && pageListData.length > 0 && (
                                        <div className="group">
                                            <div
                                                className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger>
                                                        <div
                                                            className="inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer">
                                                            <PlusIcon />
                                                        </div>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        {pageListData.map((p: any) => (
                                                            <DropdownMenuItem key={p.article_id} onClick={(e) => {
                                                                e.preventDefault();
                                                                handleAddSelected(p.article_id);
                                                            }}>
                                                                {p.title}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                {/*<Select onValueChange={handleAddSelected}>*/}
                                                {/*    <SelectTrigger className="w-[200px] rounded-r-none">*/}
                                                {/*        <SelectValue placeholder="Select a page" />*/}
                                                {/*    </SelectTrigger>*/}
                                                {/*    <SelectContent className="bg-gray-800 text-white">*/}
                                                {/*        {pageListData.map((p: any) => (*/}
                                                {/*            <SelectItem key={p.article_id}*/}
                                                {/*                        value={p.article_id.toString()}>*/}
                                                {/*                {p.title}*/}
                                                {/*            </SelectItem>*/}
                                                {/*        ))}*/}
                                                {/*    </SelectContent>*/}
                                                {/*</Select>*/}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Button onClick={() => {
                if (method === 'put') {
                    router.put(
                        url,
                        { name: 'test', items: menuData }
                    );
                } else {
                    router.post(
                        url,
                        { name: 'test', items: menuData }
                    );
                }

            }
            }>Save
            </Button>
        </div>
    );
}
