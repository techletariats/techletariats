import type { Preview } from "@storybook/nextjs-vite";

// @ts-expect-error css import
import "../src/styles/globals.css";
// @ts-expect-error css import
import "./storybook.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "var(--color-background)" }]
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo"
        }
    }
};

export default preview;
