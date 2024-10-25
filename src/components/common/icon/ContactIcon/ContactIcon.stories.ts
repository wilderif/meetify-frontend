import type { Meta, StoryObj } from '@storybook/react';
import ContactIcon from './ContactIcon';

const meta = {
  title: 'Common/Icon/ContactIcon',
  component: ContactIcon,
} satisfies Meta<typeof ContactIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
