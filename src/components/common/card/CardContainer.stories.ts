import type { Meta, StoryObj } from "@storybook/react";
import CardContainer from "./CardContainer";

const meta = {
  title: "Common/Card/CardContainer",
  component: CardContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "게시글 카드 컨테이너 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 임시 더미 데이터
const cards = Array(8).fill({
  isLiked: false,
  postType: "PROJECT",
  date: new Date(),
  title: "프로젝트 제목",
  positionList: ["FRONTEND", "BACKEND", "PM"],
  techStackList: ["REACT_JS", "MONGO_DB", "TYPESCRIPT"],
  author: "아이디",
});

export const Default: Story = {
  args: {
    cards,
  },
};
