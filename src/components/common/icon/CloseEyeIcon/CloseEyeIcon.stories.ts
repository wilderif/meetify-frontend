import type { Meta, StoryObj } from "@storybook/react";
import CloseEyeIcon from "./CloseEyeIcon";

const meta = {
  title: "Common/Icon/CloseEyeIcon",
  component: CloseEyeIcon,
} satisfies Meta<typeof CloseEyeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
