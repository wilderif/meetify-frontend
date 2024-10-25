import type { Meta, StoryObj } from "@storybook/react";
import MyPostIcon from "./MyPostIcon";

const meta = {
  title: "Common/Icon/MyPostIcon",
  component: MyPostIcon,
} satisfies Meta<typeof MyPostIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
