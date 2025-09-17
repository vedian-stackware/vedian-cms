// puck.config.tsx
import { Config, Content } from '@measured/puck';
import { JSX } from 'react';

type Props = {
    Headings: {
        title: string,
        size: string
    };
    CallToAction: {
        title: string,
        actionButtonText: string,
        actionButtonHref: string,
        readMoreButtonText: string,
        readMoreButtonHref: string
    };
    HeroSectionSimple: {
        title: string,
        superScript: string,
        description: string,
        buttonText: string,
        href: string,
        buttonReadMore: string,
        buttonLearnMore: string,
    };
    Grid: {
        content: Content;
    }
};

export const config: Config<Props> = {
    categories: {
        typography: {
            components: ['Headings']
        },
        actionSections: {
            components: ['CallToAction', 'HeroSectionSimple'],
            defaultExpanded: false
        }
    },
    root: {
        fields: {
            title: { type: 'text' },
            description: { type: 'textarea' },
            status: {
                type: 'select', options: [
                    { value: 'draft', label: 'Draft' },
                    { value: 'published', label: 'Publish' },
                    { value: 'archived', label: 'Archive' },
                    { value: 'deleted', label: 'Trash' }
                ]
            }
        },
        defaultProps: {
            title: 'Hello, world',
            description: 'Lorem ipsum'
        },
        render: ({ children, title, description }) => {
            return (
                <div>
                    {/*<h1>{title}</h1>*/}
                    {/*<p>{description}</p>*/}
                    {children}
                </div>
            );
        }
    },
    components: {
        Grid: {
            fields: {
                content: {
                    type: 'slot'
                }
            },
            render: ({ content: Content }) => {
                return <Content
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gridTemplateRows: '1fr 1fr 1fr 1fr',
                        gap: 16
                    }}
                />;
            }
        },
        Headings: {
            fields: {
                title: {
                    type: 'text'
                },
                size: {
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
            defaultProps: {
                title: 'Think of a nice title',
                size: 'h1'
            },
            render: ({ title, size }) => {
                const Element = size as keyof JSX.IntrinsicElements;
                const classNames: Record<string, string> = {
                    h1: 'text-base font-semibold text-3xl',
                    h2: 'text-base font-semibold text-2xl',
                    h3: 'text-base font-semibold text-xl',
                    h4: 'text-base font-semibold text-lg',
                    h5: 'text-base font-semibold text-md',
                    h6: 'text-base font-semibold text-xs'
                };

                return (
                    // Replace the inline styles to make the text bigger and bold
                    <div className="border-b border-white/10 pb-5">
                        <Element className={classNames[Element] ?? classNames.h1}>{title}</Element>
                    </div>

                );
            }
        },
        HeroSectionSimple: {
            fields: {
                title: {
                    type: 'text'
                },
                superScript: {
                    type: 'text'
                },
                description: {
                    type: 'text'
                },
                buttonText: {
                    type: 'text'
                },
                buttonReadMore: {
                    type: 'text'
                },
                href: {
                    type: 'text'
                },
                buttonLearnMore: {
                    type: 'text'
                }
            },
            defaultProps: {
                title: 'Data to enrich your online business',
                superScript: 'Announcing our next round of funding. ',
                description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
                buttonText: 'Get started',
                href: 'https://www.linkedin.com/in/announcing-our next/',
                buttonReadMore: 'Read more',
                buttonLearnMore: 'Learn more'
            },
            render: ({ title, superScript, description, buttonText, href, buttonReadMore, buttonLearnMore }) => {
                return (
                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div aria-hidden="true"
                             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                            <div
                                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
                        </div>
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div
                                    className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                    {superScript}
                                    <a href={href}
                                       className="font-semibold text-indigo-400"><span
                                        aria-hidden="true" className="absolute inset-0"></span>{buttonReadMore}<span
                                        aria-hidden="true">&rarr;</span></a>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">{title}</h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                                    {description}
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="#"
                                       className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                        {buttonText}
                                    </a>
                                    <a href="#" className="text-sm/6 font-semibold text-white">{buttonLearnMore}<span
                                        aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true"
                             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <div
                                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
                        </div>
                    </div>
                );
            }
        },
        CallToAction: {
            fields: {
                title: {
                    type: 'text'
                },
                actionButtonText: {
                    type: 'text'
                },
                actionButtonHref: {
                    type: 'text'
                },
                readMoreButtonText: {
                    type: 'text'
                },
                readMoreButtonHref: {
                    type: 'text'
                }
            },
            defaultProps: {
                title: 'Boost your productivity. Start using our app today.',
                actionButtonText: 'Get started',
                actionButtonHref: '#',
                readMoreButtonText: 'Read more',
                readMoreButtonHref: '#'

            },
            render: ({ title, actionButtonText, actionButtonHref, readMoreButtonText, readMoreButtonHref }) => (
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">{title}</h2>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href={actionButtonHref}
                           className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            {actionButtonText}
                        </a>
                        <a href={readMoreButtonHref} className="text-sm/6 font-semibold text-gray-300 hover:text-white">
                            {readMoreButtonText}
                            <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            )
        }
    }
};
