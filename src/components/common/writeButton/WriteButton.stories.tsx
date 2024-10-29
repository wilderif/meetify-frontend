import type { Meta, StoryObj } from "@storybook/react";
import WriteButton from "./WriteButton";

const meta = {
  title: "Common/button/WriteButton",
  component: WriteButton,
  argTypes: {
    label: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof WriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "+",
  },
};
