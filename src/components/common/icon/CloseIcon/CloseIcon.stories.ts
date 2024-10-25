import type { Meta, StoryObj } from "@storybook/react";
import CloseIcon from "./CloseIcon";

const meta = {
  title: "Common/Icon/CloseIcon",
  component: CloseIcon,
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
