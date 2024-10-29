import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextEditor from './TextEditor';

const meta: Meta<typeof TextEditor> = {
  title: 'Common/TextEditor/TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '내용을 작성하세요...',
  },
  decorators: [
    (Story) => {
      const [content, setContent] = useState('');
      return (
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Story
            args={{
              onChange: (value: string) => setContent(value),
            }}
          />
          <p>ToolBar 기능별 태그 확인하기:</p>
          <div
            style={{
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            {content || '아직 내용 없음'}
          </div>
        </div>
      );
    },
  ],
};
