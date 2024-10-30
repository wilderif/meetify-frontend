import type { Meta, StoryObj } from "@storybook/react";
import TechIconContainer from "./TechIconContainer";

const meta = {
  title: "Common/card/elements/TechIconContainer",
  component: TechIconContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "기술스택 아이콘 컨테이너 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof TechIconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    techStackList: ["TYPESCRIPT", "JAVASCRIPT", "SWIFT", "AWS", "VUE"],
  },
};
