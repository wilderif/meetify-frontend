import type { Meta, StoryObj } from "@storybook/react";
import UpIcon from "./UpIcon";

const meta = {
  title: "Common/Icon/UpIcon",
  component: UpIcon,
} satisfies Meta<typeof UpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
