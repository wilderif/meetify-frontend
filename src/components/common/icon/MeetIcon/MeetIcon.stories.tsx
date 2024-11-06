import type { Meta, StoryObj } from "@storybook/react";
import MeetIcon from "./MeetIcon";

const meta = {
  title: "Common/Icon/MeetIcon",
  component: MeetIcon,
} satisfies Meta<typeof MeetIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MeetIcon />,
};
