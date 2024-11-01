import type { Meta, StoryObj } from "@storybook/react";
import ProjectIcon from "./ProjectIcon";

const meta = {
  title: "Common/Icon/ProjectIcon",
  component: ProjectIcon,
} satisfies Meta<typeof ProjectIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProjectIcon />,
};
