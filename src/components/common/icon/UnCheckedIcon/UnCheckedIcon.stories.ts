import type { Meta, StoryObj } from '@storybook/react';
import UnCheckedIcon from './UnCheckedIcon';

const meta = {
  title: 'Common/Icon/UnCheckedIcon',
  component: UnCheckedIcon,
} satisfies Meta<typeof UnCheckedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
