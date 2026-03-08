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
    children: "Surround yourself with people who make you happy. People who make you laugh, who help you when you’re in need. People who genuinely care. They are the ones worth keeping in your life. Everyone else is just passing through.",
  },
};
