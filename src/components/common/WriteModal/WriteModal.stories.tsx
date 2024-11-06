import type { Meta, StoryObj } from "@storybook/react";
import WriteModal from "./WriteModal";

const meta = {
  title: "Common/features/WriteModal",
  component: WriteModal,
} satisfies Meta<typeof WriteModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <WriteModal onClick={() => console.log("Modal closed")} />,
};
