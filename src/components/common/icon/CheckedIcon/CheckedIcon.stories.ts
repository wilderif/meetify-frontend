import type { Meta, StoryObj } from '@storybook/react';
import CheckedIcon from './CheckedIcon';

const meta = {
  title: 'Common/Icon/CheckedIcon',
  component: CheckedIcon,
} satisfies Meta<typeof CheckedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
