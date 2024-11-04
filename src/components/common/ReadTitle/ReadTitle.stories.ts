import type { Meta, StoryObj } from "@storybook/react";
import ReadTitle from "./ReadTitle";

const meta: Meta<typeof ReadTitle> = {
  title: "Common/ReadTitle/ReadTitle",
  component: ReadTitle,
  tags: ["autodocs"],
} satisfies Meta<typeof ReadTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// 아이디가 있는 버전의 스토리
export const WithAuthor: Story = {
  args: {
    text: "간단한 사이드 프로젝트 포폴 만들어 가실 UI 디자이너분!",
    author: "아이디",
    createdAt: "2024-10-20",
  },
};

// 아이디가 없는 버전의 스토리
export const WithoutAuthor: Story = {
  args: {
    text: "간단한 사이드 프로젝트 포폴 만들어 가실 UI 디자이너분!",
  },
};
