import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from ".";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello Comrade",
    as: 'h1'
  },
};
