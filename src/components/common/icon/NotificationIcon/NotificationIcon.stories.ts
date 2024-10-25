import type { Meta, StoryObj } from "@storybook/react";
import NotificationIcon from "./NotificationIcon";

const meta = {
  title: "Common/Icon/NotificationIcon",
  component: NotificationIcon,
} satisfies Meta<typeof NotificationIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
