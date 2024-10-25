import type { Meta, StoryObj } from "@storybook/react";
import CalendarIcon from "./CalendarIcon";

const meta = {
  title: "Common/Icon/CalendarIcon",
  component: CalendarIcon,
} satisfies Meta<typeof CalendarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
