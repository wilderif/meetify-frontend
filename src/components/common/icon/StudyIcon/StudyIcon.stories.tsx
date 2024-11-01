import type { Meta, StoryObj } from "@storybook/react";
import StudyIcon from "./StudyIcon";

const meta = {
  title: "Common/Icon/StudyIcon",
  component: StudyIcon,
} satisfies Meta<typeof StudyIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <StudyIcon />,
};
