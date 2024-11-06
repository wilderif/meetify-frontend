import type { Meta, StoryObj } from "@storybook/react";
import LoginModal from "./LoginModal";

const meta = {
  title: "Feature/login/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    onClose: { action: "clicked" },
  },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "로그인",
    onClose: () => {},
  },
};
