import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from ".";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello Comrade",
    href: "#",
  },
};
