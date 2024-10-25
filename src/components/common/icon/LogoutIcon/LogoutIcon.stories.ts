import type { Meta, StoryObj } from "@storybook/react";
import LogoutIcon from "./LogoutIcon";

const meta = {
  title: "Common/Icon/LogoutIcon",
  component: LogoutIcon,
} satisfies Meta<typeof LogoutIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
