import type { Meta, StoryObj } from "@storybook/react";
import PositionTagContainer from "./PositionTagContainer";

const meta = {
  title: "Common/Card/elements/PositionTagContainer",
  component: PositionTagContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모집포지션 태그 컨테이너 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof PositionTagContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    positionList: ["FRONTEND", "BACKEND", "PM"],
  },
};
