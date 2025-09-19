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
import { TopBar } from '@/components/partials/nav/top-bar';
import { NavGroup, NavItem, NavItemDropdown } from '@/components/partials/nav/nav-item';
import { Input } from '@/components/ui/input';


export default function NavigationEditor({ pages, method, url, menu = null }: {
    pages: any,
    method: string,
    url: string,
    menu?: any | null
}) {
    const [menuData, setMenuData] = useState<{ id: number, article_id: number; title: string; href: string }[]>([]);
    const [pageListData, setPageListData] = useState<typeof pages>(pages);
    const [menuName, setMenuName] = useState(menu?.name ?? '');

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

    const addMenuItem = (item: any) => {
        setMenuData((prev) => {
            if (prev.some((i: any) => i.article_id === item.article_id)) return prev;
            return [...prev, item];
        });
        setPageListData((prev: typeof pageListData) => prev.filter((p: typeof pageListData) => p.article_id !== item.article_id));
    };

    const removeMenuItem = (item: any) => {
        setMenuData((prev) => prev.filter(i => i.article_id !== item.article_id));
        setPageListData((prev: typeof pageListData) => [...prev, item]);
    };

    const handleAddSelected = (value: number) => {
        const page = pageListData.find((p: typeof pageListData) => p.article_id === value);
        if (page) addMenuItem(page);
    };
    return (
        <div>
            <Input name="name"
                   value={menuName}
                   onChange={(e) => setMenuName(e.target.value)} />
            <TopBar>
                {menuData.length > 0 && menuData.map((item, idx) => (
                    <NavGroup key={`nav-group-${item.id}-${idx}`}>
                        <NavItem key={`menu-item-${item.id}-${idx}`} item={item} onClick={() => removeMenuItem(item)}>
                            {item.title}
                        </NavItem>
                    </NavGroup>
                ))}
                {menuData.length >= 0 && pageListData.length > 0 && (
                    <NavGroup>
                        <NavItemDropdown>
                            {pageListData.map((p: any, idx: number) => (
                                <DropdownMenuItem key={`dropdown-page-${p.article_id ?? idx}`}
                                                  onClick={() => handleAddSelected(p.article_id)}>
                                    {p.title}
                                </DropdownMenuItem>
                            ))}
                        </NavItemDropdown>
                    </NavGroup>
                )}
            </TopBar>

            <Button onClick={() => {
                if (method === 'put') {
                    router.put(
                        url,
                        { name: menuName, items: menuData }
                    );
                } else {
                    router.post(
                        url,
                        { name: menuName, items: menuData }
                    );
                }

            }
            }>Save
            </Button>;
        </div>
    );
}
