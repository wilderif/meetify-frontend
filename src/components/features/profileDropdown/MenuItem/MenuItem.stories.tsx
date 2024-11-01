import { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";
import MyPageIcon from "../../../common/icon/MyPageIcon/MyPageIcon";
import EmptyHeartIcon from "../../../common/icon/EmptyHeartIcon/EmptyHeartIcon";
import MyPostIcon from "../../../common/icon/MyPostIcon/MyPostIcon";
import LogoutIcon from "../../../common/icon/LogoutIcon/LogoutIcon";

const meta = {
  title: "Feature/profileDropdown/menuItem/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["My Page", "My Like", "My Posts", "Log Out"],
      description: "아이콘 컴포넌트",
    },
    label: {
      control: "text",
      description: "라벨 텍스트",
    },
    onClick: {
      description: "클릭 이벤트",
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyPage: Story = {
  args: {
    icon: <MyPageIcon />,
    label: "마이 페이지",
    onClick: () => {},
  },
};

export const MyLike: Story = {
  args: {
    icon: <EmptyHeartIcon />,
    label: "내 관심글 목록",
    onClick: () => {},
  },
};

export const MyPosts: Story = {
  args: {
    icon: <MyPostIcon />,
    label: "내 작성글 목록",
    onClick: () => {},
  },
};

export const LogOut: Story = {
  args: {
    icon: <LogoutIcon />,
    label: "Sign Out",
    onClick: () => {},
  },
};
