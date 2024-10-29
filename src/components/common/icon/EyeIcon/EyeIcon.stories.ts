import type { Meta, StoryObj } from "@storybook/react";
import EyeIcon from "./EyeIcon";

const meta = {
  title: "Common/Icon/EyeIcon",
  component: EyeIcon,
} satisfies Meta<typeof EyeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
