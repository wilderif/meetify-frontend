import type { Meta, StoryObj } from "@storybook/react";
import BackIcon from "./BackIcon";

const meta = {
  title: "Common/Icon/BackIcon",
  component: BackIcon,
} satisfies Meta<typeof BackIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
