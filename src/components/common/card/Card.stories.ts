import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Common/Card/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "게시글 카드 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLiked: false,
    postType: "PROJECT",
    date: new Date(),
    title: "프로젝트 제목",
    positionList: ["FRONTEND", "BACKEND", "PM"],
    techStackList: ["REACT_JS", "MONGO_DB", "TYPESCRIPT"],
    author: "아이디",
  },
};
