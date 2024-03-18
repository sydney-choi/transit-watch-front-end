import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from '@/components/search';

const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { stationId: '123', name: '정류장', direction: '을왕리', stationNumber: ['12312'], hasBookmark: false },
      { stationId: '456', name: '정류장1', direction: '을왕리메인거리', stationNumber: ['123178'], hasBookmark: false },
    ],
  },
};
