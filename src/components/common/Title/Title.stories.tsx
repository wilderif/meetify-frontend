import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Common/Title/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectInfo: Story = {
  args: {
    text: '프로젝트 기본 정보를 입력해주세요.',
    stepNumber: 1,
  },
};

export const ProjectIntro: Story = {
  args: {
    text: '프로젝트에 대해 소개해주세요.',
    stepNumber: 2,
  },
};
