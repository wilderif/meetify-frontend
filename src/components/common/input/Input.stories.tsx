import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Common/Input/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
