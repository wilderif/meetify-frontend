import type { Meta, StoryObj } from "@storybook/react";
import ProfileProposal from "./ProfileProposal";

const meta = {
  title: "Feature/register/ProfileProposal",
  component: ProfileProposal,
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof ProfileProposal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
