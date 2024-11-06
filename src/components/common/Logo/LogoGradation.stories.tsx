import { Meta, StoryObj } from "@storybook/react";
import LogoGradation from "./LogoGradation";

const meta = {
  title: "Common/logo/LogoGradation",
  component: LogoGradation,
} satisfies Meta<typeof LogoGradation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
