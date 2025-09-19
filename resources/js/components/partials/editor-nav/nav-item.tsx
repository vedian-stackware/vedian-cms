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
import { Input } from '@/components/ui/input';

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

export function CrudNavItem({ children, onClick, ...props }: React.PropsWithChildren<NavItemProps>) {
    return (
        <Link
            onClick={(e) => (e.preventDefault())}
            className="group px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            {...props}
        >
            {children}
            <Button
                onClick={onClick}
                className="hidden group-hover:inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer ml-2 p-2"
            >
                <MinusIcon />
            </Button>
        </Link>
    );
}


export function NavItemDropdown({ children, ...props }: React.PropsWithChildren<NavProps>) {
    return (
        <div
            className="px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            {...props}
        >
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div
                        className="inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer">
                        <PlusIcon />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {children}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export function NavActionInput({ children, ...props }: React.PropsWithChildren<NavProps>) {
    return (
        <div
            className="group px-3 py-2 inline-flex rounded-md text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            {...props}
        >
            <Input name="action" />
            <div
                className="group-hover:inline-flex size-5 shrink-0 text-xs font-semibold border rounded-full border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 cursor-pointer">
                <PlusIcon />
            </div>
        </div>
    );
}
