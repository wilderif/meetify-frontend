import { Meta, StoryObj } from "@storybook/react";
import ProfileDropdown from "./ProfileDropdown";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Feature/profileDropdown/ProfileDropdown",
  component: ProfileDropdown,
  tags: ["autodocs"],
  argTypes: {
    isVisible: {
      control: "boolean",
      description: "프로필 드롭다운의 표시 여부를 설정합니다.",
    },
    closeDropdown: {
      description: "드롭다운 닫기 함수",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ProfileDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    closeDropdown: () => {},
  },
};
