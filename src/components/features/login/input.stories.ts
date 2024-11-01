import type { Meta, StoryObj } from "@storybook/react";
import InputWithIcon from "./Input";

const meta = {
  title: "Feature/login/Input",
  component: InputWithIcon,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
    iconType: { control: "select", options: ["password", undefined] },
  },
} satisfies Meta<typeof InputWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "기본 입력",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호 입력",
    iconType: "password",
  },
};
