import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Common/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '라벨 텍스트' },
    placeholder: { control: 'text', description: '플레이스홀더 텍스트' },
    value: { control: 'text', description: '입력 값' },
    onChange: { action: 'changed', description: '값 변경 핸들러' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    label: '기본 인풋',
    placeholder: '텍스트를 입력하세요',
  },
  decorators: [
    (Story) => {
      const [value, setValue] = useState('');
      return (
        <Story
          args={{
            value,
            onChange: (e) => setValue(e.target.value),
          }}
        />
      );
    },
  ],
};
