import * as React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface NavProps {
    item?: any,
    listData?: any,
    children?: React.ReactNode;
    onClick?: (e?: any) => void;
    onClickLink?: (e?: any) => void;
    onClickHandler?: (value: any) => void;
}

interface NavItemProps {
    href?: string;
    onClick?: (e?: any) => void;
    onClickLink?: (e?: any) => void;
    className?: string;
}
export function NavItem({ children, ...props }: React.PropsWithChildren<NavItemProps>) {
    return (
        <Link
            className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            {...props}
        >
            {children}
        </Link>
    );
}
