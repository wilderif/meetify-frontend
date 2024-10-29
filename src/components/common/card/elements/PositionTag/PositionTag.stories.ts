import type { Meta, StoryObj } from "@storybook/react";
import PositionTag from "./PositionTag";

const meta = {
  title: "Common/card/elements/PositionTag",
  component: PositionTag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모집포지션을 나타내는 태그 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof PositionTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "FRONTEND",
  },
};
