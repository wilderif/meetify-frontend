import type { Meta, StoryObj } from "@storybook/react";
import ListIcon from "./ListIcon";

const meta = {
  title: "Common/Icon/ListIcon",
  component: ListIcon,
} satisfies Meta<typeof ListIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
