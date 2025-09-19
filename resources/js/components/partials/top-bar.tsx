import * as React from 'react';

interface TopBarContentProps extends React.ComponentProps<'main'> {
}

export function TopBar({ children, ...props }: React.ComponentProps<'header'>) {
    return (
        <header className="bg-gray-900">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {children}
            </nav>
        </header>
    );
}

export function TopBarLogoGroup({ children, ...props }: TopBarContentProps) {
    return (
        <div className="group" {...props}>
            <div className="flex lg:flex-1">
                {/*{children}*/}
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt=""
                         className="h-8 w-auto" />
                </a>
            </div>
        </div>
    );
}

export function TopBarActionGroup({ children, ...props }: TopBarContentProps) {

    return (
        <div {...props}>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {children}
            </div>
        </div>
    );
}

export function TopBarNavItemGroup({ children, ...props }: React.ComponentProps<'div'>) {
    return (
        <div {...props}>
            <div className="hidden lg:flex lg:gap-x-12">
                {children}
            </div>
        </div>
    );
}
