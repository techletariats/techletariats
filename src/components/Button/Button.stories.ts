import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from ".";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Hello Comrade"
    }
};
