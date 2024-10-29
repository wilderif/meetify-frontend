import type { Meta, StoryObj } from "@storybook/react";
import PrevIcon from "./PrevIcon";

const meta = {
  title: "Common/Icon/PrevIcon",
  component: PrevIcon,
} satisfies Meta<typeof PrevIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
