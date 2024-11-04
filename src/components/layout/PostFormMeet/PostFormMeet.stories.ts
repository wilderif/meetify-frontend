import type { Meta, StoryObj } from "@storybook/react";
import PostForm from "./PostFormMeet";

const meta: Meta<typeof PostForm> = {
  title: "layout/PostFormMeet/PostFormMeet",
  component: PostForm,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "어떤 유형인지 나타냄.",
      defaultValue: "Meet",
    },
    onSubmit: { action: "submitted" },
    onCancel: { action: "canceled" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Meet",
  },
};
