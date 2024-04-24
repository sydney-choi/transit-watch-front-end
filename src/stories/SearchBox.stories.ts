import type { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from '@/components/search';

const meta = {
  title: 'Example/SearchBox',
  component: SearchBox,
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { arsId: '123', stationName: '정류장', nextStationName: '을왕리', xlongitude: 33.450701, ylatitude: 126.570667 },
      {
        arsId: '456',
        stationName: '정류장1',
        nextStationName: '을왕리메인거리',
        xlongitude: 33.450701,
        ylatitude: 126.570667,
      },
    ],
  },
};
