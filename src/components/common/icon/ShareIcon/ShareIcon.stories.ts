import type { Meta, StoryObj } from '@storybook/react';
import ShareIcon from './ShareIcon';

const meta = {
  title: 'Common/Icon/ShareIcon',
  component: ShareIcon,
} satisfies Meta<typeof ShareIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
