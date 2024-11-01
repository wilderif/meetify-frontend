import type { Meta, StoryObj } from "@storybook/react";
import RegisterModal from "./RegisterModal";

const meta = {
  title: "Feature/register/RegisterModal",
  component: RegisterModal,
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof RegisterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
