import type { Meta, StoryObj } from "@storybook/react";
import PostTag from "./PostTag";

const meta = {
  title: "Common/card/elements/PostTag",
  component: PostTag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모집유형을 나타내는 태그 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof PostTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Project: Story = {
  args: {
    postType: "PROJECT",
  },
};

export const Study: Story = {
  args: {
    postType: "STUDY",
  },
};

export const Meet: Story = {
  args: {
    postType: "MEET",
  },
};
