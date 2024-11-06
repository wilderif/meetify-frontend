import type { Meta, StoryObj } from "@storybook/react";
import NextIcon from "./NextIcon";

const meta = {
  title: "Common/Icon/NextIcon",
  component: NextIcon,
} satisfies Meta<typeof NextIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
