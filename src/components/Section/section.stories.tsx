import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from ".";
import { Header } from "../Header";
import { Paragraph } from "../Paragraph";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>
    <Header>Hello comrade</Header>
    <Paragraph>Surround yourself with people who make you happy. People who make you laugh, who help you when you’re in need. People who genuinely care. They are the ones worth keeping in your life. Everyone else is just passing through.</Paragraph>
    </>
  },
};
