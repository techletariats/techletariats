import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography } from ".";

const meta = {
    title: "Components/Typography",
    component: Typography,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: "p",
        children: "Workers of the world unite!"
    }
};
