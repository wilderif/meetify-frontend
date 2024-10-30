import type { Meta, StoryObj } from "@storybook/react";
import TechIcon from "./TechIcon";

const meta = {
  title: "Common/card/elements/TechIconContainer/TechIcon",
  component: TechIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "기술스택을 나타내는 아이콘 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof TechIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    techStack: "TYPESCRIPT",
  },
};
