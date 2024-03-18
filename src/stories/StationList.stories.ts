import type { Meta, StoryObj } from '@storybook/react';

import StationList from '@/components/items/station';

const meta = {
  title: 'Example/StationList',
  component: StationList,
} satisfies Meta<typeof StationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        stationId: '1',
        name: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
        direction: '용산우체국',
        stationNumber: ['00001'],
        hasBookmark: true,
      },
      {
        stationId: '2',
        name: '역명2',
        direction: '종로2가사거리',
        stationNumber: ['00002', '4213'],
        hasBookmark: false,
      },
      { stationId: '3', name: '역명3', direction: '광화문역', stationNumber: ['00003'], hasBookmark: false },
    ],
  },
};
