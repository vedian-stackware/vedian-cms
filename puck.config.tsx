// puck.config.tsx
import { Config, DropZone } from '@measured/puck';
import { JSX } from 'react';

type Props = {
    pageTitle: { title: string, variant: string, tag: string };
    // Grid: { content: [] }; // No props needed for the grid itself
    // Card: {
    //     title: string;
    //     description: string;
    //     padding: number;
    // };
};

export const config: Config<Props> = {
    components: {
        pageTitle: {
            fields: {
                title: {
                    type: 'text'
                },
                variant: {
                    type: 'select',
                    options: [
                        {
                            value: 'ext-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight',
                            label: 'Floating'
                        },
                        {
                            value: 'ext-2xl/12 font-bold text-white sm:truncate sm:text-2xl sm:tracking-tight',
                            label: 'Outlined'
                        }
                    ]
                },
                tag: {
                    type: 'select',
                    options: [
                        { value: 'h1', label: 'Heading 1' },
                        { value: 'h2', label: 'Heading 2' },
                        { value: 'h3', label: 'Heading 3' },
                        { value: 'h4', label: 'Heading 4' },
                        { value: 'h5', label: 'Heading 5' },
                        { value: 'h6', label: 'Heading 6' }
                    ]
                }

            },
            render: ({ title, variant, tag }) => {
                const Tag = tag as keyof JSX.IntrinsicElements ?? 'h1';

                return (
                    // Replace the inline styles to make the text bigger and bold
                    <div className="min-w-0 flex-1">
                        <Tag className={variant}>{title}</Tag>
                    </div>
                );
            }
        }
    }
};

export default config;
