import * as React from 'react';

interface TopBarContentProps extends React.ComponentProps<'main'> {
}

export function TopBar({ children, ...props }: React.ComponentProps<'nav'>) {
    return (
        <nav
            className="relative z-10 bg-violet-800/50 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-violet-400/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export function NavGroup({ children, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className="group" {...props}>
            {children}
        </div>
    );
}
