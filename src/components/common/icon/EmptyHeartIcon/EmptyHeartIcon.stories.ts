import type { Meta, StoryObj } from '@storybook/react';
import EmptyHeartIcon from './EmptyHeartIcon';

const meta = {
  title: 'Common/Icon/EmptyHeartIcon',
  component: EmptyHeartIcon,
} satisfies Meta<typeof EmptyHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
