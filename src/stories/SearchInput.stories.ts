import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from '@/components/Search';

const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
