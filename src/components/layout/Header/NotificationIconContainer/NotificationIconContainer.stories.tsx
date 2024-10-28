import { Meta, StoryObj } from "@storybook/react";
import NotificationIconContainer from "./NotificationIconContainer";
import NotificationIcon from "../../../common/icon/NotificationIcon/NotificationIcon";
import ContactIcon from "../../../common/icon/ContactIcon/ContactIcon";

const meta = {
  title: "Layout/header/notificationIconContainer/NotificationIconContainer",
  component: NotificationIconContainer,
  argTypes: {
    icon: {},
    notificationCount: {
      control: "number",
    },
  },
  args: {
    notificationCount: 1,
  },
} satisfies Meta<typeof NotificationIconContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Chat: Story = {
  args: {
    icon: <ContactIcon />,
  },
};

export const Notification: Story = {
  args: {
    icon: <NotificationIcon />,
  },
};
