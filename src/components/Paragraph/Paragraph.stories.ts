import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Paragraph } from ".";

const meta = {
    title: "Components/Paragraph",
    component: Paragraph,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Hello Comrade"
    }
};
