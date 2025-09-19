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
import { TopBar, TopBarActionGroup, TopBarLogoGroup, TopBarNavItemGroup } from '@/components/partials/top-bar';
import { CrudNavItem, NavActionInput, NavItemDropdown } from '@/components/partials/editor-nav/nav-item';
import { NavItem } from '@/components/partials/web-nav/nav-item';
import { Input } from '@/components/ui/input';
import { resolveAllData } from '@measured/puck';
import { config } from '@/editors/editor.config';

export default function NavigationEditor({ pages, method, url, navItems = null, actions = null, menu = null }: {
    pages: any,
    method: string,
    url: string,
    navItems?: any | null,
    actions?: any | null,
    menu?: any | null,
}) {
    const [menuData, setMenuData] = useState<{
        id: number,
        page_id: number,
        article_id: number;
        title: string;
        href: string
    }[]>([]);
    const [pageListData, setPageListData] = useState<typeof pages>(pages);
    const [menuActionData, setMenuActionData] = useState<{
        id: number,
        page_id: number,
        article_id: number;
        title: string;
        href: string
    }[]>([]);
    const [menuName, setMenuName] = useState(menu?.name ?? '');


    const [crudData, setCrudData] = useState<{
        id: number,
        page_id: number,
        article_id: number;
        title: string;
        href: string
    }[]>([]);


    useEffect(() => {
        setPageListData(pages);
        if (menu !== null) {
            setMenuData(
                menu.nav_items.map((m: any) => ({
                    id: m.id,
                    article_id: m.article_id ?? m.id,
                    title: m.title,
                    slug: m.slug,
                    href: m.href
                }))
            );
            setMenuActionData(
                menu.action_items.map((m: any) => ({
                    id: m.id,
                    article_id: m.article_id ?? m.id,
                    title: m.title,
                    slug: m.slug,
                    href: m.href
                }))
            );
            menu.nav_items.forEach((m: any) => {
                addMenuItem(m);
            });
            menu.action_items.forEach((m: any) => {
                addMenuActionItem(m);
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
    const addMenuActionItem = (item: any) => {
        setMenuActionData((prev) => {
            if (prev.some((i: any) => i.article_id === item.article_id)) return prev;
            return [...prev, item];
        });
        setPageListData((prev: typeof pageListData) => prev.filter((p: typeof pageListData) => p.article_id !== item.article_id));
    };

    const removeMenuItem = (item: any) => {
        setMenuData((prev) => prev.filter(i => i.article_id !== item.article_id));
        setPageListData((prev: typeof pageListData) => [...prev, item]);

    };

    const removeMenuActionItem = (item: any) => {
        setMenuActionData((prev) => prev.filter(i => i.article_id !== item.article_id));
        setPageListData((prev: typeof pageListData) => [...prev, item]);

    };

    const handleAddSelected = (value: number) => {
        const page = pageListData.find((p: typeof pageListData) => p.article_id === value);
        if (page) {
            addMenuItem(page);

        }
    };
    const handleAddActionSelected = (value: number) => {
        const page = pageListData.find((p: typeof pageListData) => p.article_id === value);
        if (page) {
            addMenuActionItem(page);
        }
    };
    return (
        <div>
            <Input name="name"
                   value={menuName}
                   onChange={(e) => setMenuName(e.target.value)} />
            <TopBar>
                <TopBarLogoGroup>

                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt=""
                             className="h-8 w-auto" />
                    </a>
                </TopBarLogoGroup>
                <TopBarNavItemGroup>
                    {menuData.length > 0 && menuData.map((item, idx) => (

                        <CrudNavItem key={`menu-item-${item.id}-${idx}`} onClick={() => removeMenuItem(item)}>
                            {item.title}
                        </CrudNavItem>
                    ))}
                    {menuData.length >= 0 && pageListData.length > 0 && (
                        <NavItemDropdown>
                            {pageListData.map((p: any, idx: number) => (
                                <DropdownMenuItem
                                    key={`dropdown-page-${p.article_id ?? idx}`}
                                    onClick={() => (handleAddSelected(p.article_id))}
                                >
                                    {p.title}
                                </DropdownMenuItem>
                            ))}
                        </NavItemDropdown>
                    )}
                </TopBarNavItemGroup>
                <TopBarActionGroup>
                    {menuActionData.length > 0 && menuActionData.map((item, idx) => (

                        <CrudNavItem key={`menu-action-${item.id}-${idx}`} onClick={() => removeMenuActionItem(item)}>
                            {item.title}
                        </CrudNavItem>
                    ))}
                    {menuActionData.length >= 0 && (
                        <NavItemDropdown>
                            {pageListData.map((p: any, idx: number) => (
                                <DropdownMenuItem
                                    key={`dropdown-page-${p.article_id ?? idx}`}
                                    onClick={() => (handleAddActionSelected(p.article_id))}
                                >
                                    {p.title}
                                </DropdownMenuItem>
                            ))}
                        </NavItemDropdown>
                    )}
                </TopBarActionGroup>
            </TopBar>

            <Button onClick={() => {
                if (method === 'put') {
                    router.put(
                        url,
                        { name: menuName, items: menuData, actions: menuActionData }
                    );
                } else {
                    router.post(
                        url,
                        { name: menuName, items: menuData, actions: menuActionData }
                    );
                }

            }
            }>Save
            </Button>;
        </div>
    );
}
