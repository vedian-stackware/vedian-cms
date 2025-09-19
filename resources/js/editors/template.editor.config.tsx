// page.editor.config.tsx
import { Config, Content } from '@measured/puck';
import { JSX } from 'react';
import { menuList } from '@/actions/App/Http/Controllers/Menus/MenuController';
import { TopBar, TopBarActionGroup, TopBarLogoGroup, TopBarNavItemGroup } from '@/components/partials/top-bar';
import { NavItem } from '@/components/partials/web-nav/nav-item';

type Props = {

    // Headings: {
    //     title: string,
    //     size: string
    // };
    // CallToAction: {
    //     title: string,
    //     actionButtonText: string,
    //     actionButtonHref: string,
    //     readMoreButtonText: string,
    //     readMoreButtonHref: string
    // };
    // HeroSectionSimple: {
    //     title: string,
    //     superScript: string,
    //     description: string,
    //     buttonText: string,
    //     href: string,
    //     buttonReadMore: string,
    //     buttonLearnMore: string,
    // };
    // Grid: {
    //     content: Content;
    // }
};

export const config: Config<Props> = {
    categories: {
        // typography: {
        //     components: ['Headings']
        // },
        // actionSections: {
        //     components: ['CallToAction', 'HeroSectionSimple'],
        //     defaultExpanded: false
        // }
    },
    root: {
        fields: {
            data: {
                type: 'external',
                fetchList: async () => {

                    return await fetch(menuList().url).then((res) => res.json());

                }
            }

        },
        defaultProps: {
            title: 'Your page',
            description: 'Lorem ipsum'
        },
        render: ({ data, children, title, description }) => {
            console.log(data);
            return (
                <TopBar>
                    <TopBarLogoGroup>

                    </TopBarLogoGroup>
                    <TopBarNavItemGroup>
                        {data?.nav_items.length > 0 && data.nav_items.map((item, idx) => (
                            <NavItem key={`nav-item-${item.id}-${idx}`} href={item.href}
                                     className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                                {item.title}
                            </NavItem>
                        ))}
                    </TopBarNavItemGroup>
                    <TopBarActionGroup>
                        {data?.action_items.length > 0 && data.action_items.map((item, idx) => (
                            <NavItem key={`nav-item-${item.id}-${idx}`} href={item.href}
                                     className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                                {item.title}
                            </NavItem>
                        ))}
                    </TopBarActionGroup>
                </TopBar>
            );
        }
    },
    components: {}
};
