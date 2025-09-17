// puck.config.tsx
import { Config, DropZone } from '@measured/puck';
import { JSX } from 'react';

type Props = {
    pageTitle: { title: string, tag: string };
    CallToAction: { callToAction: string };
};

export const config: Config<Props> = {
    components: {
        pageTitle: {
            fields: {
                title: {
                    type: 'text'
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
            render: ({ title, tag }) => {
                const Tag = tag as keyof JSX.IntrinsicElements ?? 'h1';
                const cn = tag as keyof JSX.IntrinsicElements;
                const classNames: Record<string, string> = {
                    h1: 'text-3xl',
                    h2: 'text-2xl',
                    h3: 'text-xl',
                    h4: 'text-lg',
                    h5: 'text-md',
                    h6: 'text-xs'
                };

                return (
                    // Replace the inline styles to make the text bigger and bold
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="min-w-0 flex-1">
                            <Tag className={classNames[tag] ?? classNames.h1}>{title}</Tag>
                        </div>
                    </div>
                );
            }
        },
        CallToAction: {
            render:() => (
                <div className="bg-violet-500">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Boost your productivity. Start using our app today.</h2>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get started</a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-300 hover:text-white">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default config;
