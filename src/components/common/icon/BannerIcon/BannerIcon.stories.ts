import type { Meta, StoryObj } from "@storybook/react";
import BannerIcon from "./BannerIcon";

const meta = {
  title: "Common/Icon/BannerIcon",
  component: BannerIcon,
} satisfies Meta<typeof BannerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
