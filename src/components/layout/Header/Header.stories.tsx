import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

// prop이 아니고 상태로 관리되는 변수들은 args에서 처리가 안 되는 것 같아서
// 상태관리 기능 구현 되면 다시 확인해보겠습니다.

const meta = {
  title: "Layout/header/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    // isLogin: {
    //   control: "boolean",
    //   description: "로그인 상태를 설정합니다.",
    // },
    // chatNotificationCount: {
    //   control: "number",
    //   description: "채팅 알림 개수를 설정합니다.",
    // },
    // notificationCount: {
    //   control: "number",
    //   description: "알림 개수를 설정합니다.",
    // },
  },
  args: {
    // isLogin: false,
    // chatNotificationCount: 0,
    // notificationCount: 0,
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   // args: {
//   //   isLogin: true,
//   // },
// };

// export const LoggedOut: Story = {
//   // args: {
//   //   isLogin: false,
//   // },
// };

export const Default: Story = {};
