import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta = {
  title: "Common/SearchBar/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "검색창에 표시될 placeholder를 설정합니다.",
    },
    onSearch: {
      action: "search",
      description: "검색 이벤트 콜백을 설정합니다.",
    },
  },
  args: {
    placeholder: "제목, 글 내용을 검색해보세요",
    onSearch: (searchValue: string) => {
      console.log("search:", searchValue);
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
