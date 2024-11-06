import type { Meta, StoryObj } from "@storybook/react";
import PostForm from "./PostForm";

const meta: Meta<typeof PostForm> = {
  title: "layout/PostForm/PostForm",
  component: PostForm,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "어떤 유형인지 나타냄.",
      defaultValue: "프로젝트",
    },
    onSubmit: { action: "submitted" },
    onCancel: { action: "canceled" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "프로젝트",
  },
};
