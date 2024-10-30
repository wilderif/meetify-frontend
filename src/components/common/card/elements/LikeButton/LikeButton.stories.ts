import type { Meta, StoryObj } from "@storybook/react";
import LikeButton from "./LikeButton";

const meta = {
  title: "Common/card/elements/LikeButton",
  component: LikeButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "관심글 상태를 나타내는 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLiked: false,
  },
};

export const Liked: Story = {
  args: {
    isLiked: true,
  },
};
