import type { Meta, StoryObj } from "@storybook/react";
import MyPageIcon from "./MyPageIcon";

const meta = {
  title: "Common/Icon/MyPageIcon",
  component: MyPageIcon,
} satisfies Meta<typeof MyPageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
