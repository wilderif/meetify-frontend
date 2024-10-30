import type { Meta, StoryObj } from "@storybook/react";
import NewTag from "./NewTag";

const meta = {
  title: "Common/card/elements/NewTag",
  component: NewTag,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "새 글 상태를 나타내는 태그 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof NewTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
