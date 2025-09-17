// puck.config.tsx
import { Config, DropZone } from '@measured/puck';

type Props = {
    HeadingBlock: { title: string };
    Grid: { content: [] }; // No props needed for the grid itself
    Card: {
        title: string;
        description: string;
        padding: number;
    };
};

export const config: Config<Props> = {
    components: {
        HeadingBlock: {
            fields: {
                title: {
                    type: 'text'
                }
            },
            render: ({ title }) => (
                // Replace the inline styles to make the text bigger and bold
                <div className="text-4xl font-bold p-8">
                    <h1>{title}</h1>
                </div>
            )
        },
        Grid: {
            fields: {
                content: {
                    type: 'slot'
                }
            },
            render: ({ content: Content }) => (
                <Content
                    style={{
                        // Use CSS grid in this slot
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gap: 16
                    }}
                />
            )
        },
        Card: {
            // Add the fields for the title, description and padding
            fields: {
                title: { type: 'text' },
                description: { type: 'textarea' },
                padding: { type: 'number', min: 4, max: 64 }
            },
            // Add default values for each field
            defaultProps: {
                title: 'Topic Title',
                description: 'Topic description...',
                padding: 16
            },
            render: ({ title, description, padding }) => {
                // Render the card using the values from its fields
                return (
                    <article style={{ padding }}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                );
            }
        }
    }
};

export default config;
