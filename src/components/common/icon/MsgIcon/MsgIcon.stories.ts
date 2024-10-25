import type { Meta, StoryObj } from "@storybook/react";
import MsgIcon from "./MsgIcon";

const meta = {
  title: "Common/Icon/MsgIcon",
  component: MsgIcon,
} satisfies Meta<typeof MsgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
