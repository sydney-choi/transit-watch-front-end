import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '@/components/search/Dropdown';

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        arsId: '00001',
        stationName: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
        nextStationName: '용산우체국',
        crowding: 'EASYGOING',
        xlatitude: 33.450705,
        ylongitude: 126.570677,
      },
      {
        arsId: '00002',
        stationName: '역명2',
        nextStationName: '종로2가사거리',
        crowding: 'EASYGOING',
        xlatitude: 33.450936,
        ylongitude: 126.569477,
      },
      {
        arsId: '00003',
        stationName: '역명3',
        nextStationName: '광화문역',
        crowding: 'EASYGOING',
        xlatitude: 33.450879,
        ylongitude: 126.56994,
      },
    ],
  },
};

export const NoData: Story = {
  args: {
    options: [],
  },
};
