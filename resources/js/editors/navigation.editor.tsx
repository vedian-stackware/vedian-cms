import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

export let data: any[] = [];
export default function NavigationEditor({ pages, menu = null }: { pages: any, menu?: any | null }) {
    let selectedPage: typeof pages | null = null;
    const [menuData, setMenuData] = useState<{ id: number, article_id: number; title: string; href: string }[]>([]);
    const [pageListData, setPageListData] = useState<typeof pages>(pages);

    useEffect(() => {
        setPageListData(pages);
        if (menu !== null) {
            setMenuData(
                menu.menu_items.map((m: any) => ({
                    id: m.id,
                    article_id: m.article_id ?? m.id, // fallback if no article_id
                    title: m.title,
                    href: m.href
                }))
            );
            menu.menu_items.forEach((m: any) => {
                onChangeUrlSelect(m.article_id);
                data.push(m);
                addMenuItem(m.article_id);
                removePageFromList(m.article_id);
            });
            console.log(data);
        }
    }, [pages]);

    const removePageFromList = (article_id: number) => {
        setPageListData((prev: typeof pages) => prev.filter((page: typeof pages) => page.article_id !== article_id));
    };
    const addPageToList = (article_id: number) => {
        setPageListData((prev: typeof pages) => {
            if (prev.some((item: { article_id: number }) => item.article_id === article_id)) {
                return prev;
            }
            data = data.filter((item: { article_id: number }) => item.article_id !== selectedPage.article_id);
            console.log(data);

            return [...prev, selectedPage];
        });
    };
    const addMenuItem = (article_id: number) => {
        setMenuData((prev: typeof menuData) => {
            if (prev.some((item: { article_id: number }) => item.article_id === article_id)) {
                return prev;
            }
            data.push(selectedPage);
            console.log(data);
            return [...prev, selectedPage];
        });
    };
    const removeMenuItem = (article_id: number) => {
        setMenuData((prev: typeof menuData) => prev.filter((menu: {
            article_id: number
        }) => menu.article_id !== article_id));
    };
    const onChangeUrlSelect = (article_id: string) => {
        selectedPage = pages.find((p: any) => p.article_id.toString() === article_id);
    };
    const onAddMenuPage = () => {
        if (!selectedPage) return;
        addMenuItem(selectedPage.article_id);
        removePageFromList(selectedPage.article_id);
    };

    const onRemoveMenuItem = (article_id: number) => {
        selectedPage = pages.find((p: any) => p.article_id.toString() === article_id.toString());
        removeMenuItem(selectedPage.article_id);
        addPageToList(selectedPage.article_id);

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
                                        <div className="group">
                                            <Link href={item.href} key={item.article_id}
                                                  onClick={(e: any) => (e.preventDefault())}
                                                  className=" px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                                                {item.title}
                                                <Button
                                                    onClick={() => {
                                                        onRemoveMenuItem(item.article_id);
                                                    }}
                                                    className="hidden group-hover:inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer ml-2 p-2">
                                                    <i className="p-2"><MinusIcon /></i>
                                                </Button>
                                            </Link>
                                        </div>
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
                            <SelectItem key={p.article_id} value={p.article_id.toString()}>
                                {p.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button
                    onClick={onAddMenuPage}
                    title="123"
                    className="size-9 shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-hidden focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none rounded-tl-none rounded-bl-none ">
                    <PlusIcon />
                </Button>
            </div>
        </div>
    );
}
