import type { Meta, StoryObj } from '@storybook/react';
import FillHeartIcon from './FillHeartIcon';

const meta = {
  title: 'Common/Icon/FillHeartIcon',
  component: FillHeartIcon,
} satisfies Meta<typeof FillHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
