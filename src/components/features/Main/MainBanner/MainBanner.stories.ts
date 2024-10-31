import { Meta, StoryObj } from "@storybook/react";
import MainBanner from "./MainBanner";

const meta = {
  title: "Feature/Main/MainBanner",
  component: MainBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof MainBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
