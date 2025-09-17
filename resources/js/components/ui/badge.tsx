import * as React from 'react';
import { JSX } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { capitalize, cn } from '@/lib/utils';
import { ArchiveBoxIcon, ArrowUturnUpIcon, CheckBadgeIcon, PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-auto',
    {
        variants: {
            variant: {
                published:
                    'inline-flex items-center rounded-md bg-green-400/10 px-1.5 py-0.5 text-xs font-medium text-green-400',

                draft:
                    'inline-flex items-center rounded-md bg-pink-400/10 px-1.5 py-0.5 text-xs font-medium text-pink-400',

                archived:
                    'inline-flex items-center rounded-md bg-gray-400/10 px-1.5 py-0.5 text-xs font-medium text-gray-300',

                deleted:
                    'inline-flex items-center rounded-md bg-red-400/10 px-1.5 py-0.5 text-xs font-medium text-red-400'

            }
        },
        defaultVariants: {
            variant: 'draft'
        }
    }
);

function Badge({
                   className,
                   variant,
                   asChild = false,
                   ...props
               }: React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'span';
    // Map of icons
    const icons: Record<string, JSX.Element> = {
        published: <CheckBadgeIcon />,
        draft: <PencilIcon />,
        archived: <ArchiveBoxIcon />,
        deleted: <TrashIcon />,
    };
    let Element = icons[variant ?? 'draft'].type.render as keyof JSX.IntrinsicElements;

    return (

        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        >
            <Element className="-mt-0.25" /> {capitalize(variant ?? 'draft')}
        </Comp>
    );
}

export { Badge, badgeVariants };
