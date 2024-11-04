import type { Meta, StoryObj } from "@storybook/react";
import ReadInput from "./ReadInput";

const meta: Meta<typeof ReadInput> = {
  title: "Common/ReadInput/ReadInput",
  component: ReadInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// label이 있는 경우
export const WithLabel: Story = {
  args: {
    label: "진행 방식",
    value: "온라인",
  },
};

// label이 없는 경우
export const WithoutLabel: Story = {
  args: {
    value: "온라인",
  },
};
