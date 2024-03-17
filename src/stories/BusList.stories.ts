import type { Meta, StoryObj } from '@storybook/react';
import BusList from '@/components/items/bus';

const meta = {
  title: 'Example/BusList',
  component: BusList,
} satisfies Meta<typeof BusList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        busNumber: '1',
        direction: '용산우체국',
        firstArrivalTime: '20',
        secondArrivalTime: '160',
        firstArrivalBusCrowding: 'CROWD',
        secondArrivalBusCrowding: 'EASYGOING',
      },
      {
        busNumber: '2',
        direction: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
        firstArrivalTime: '300',
        secondArrivalTime: '234',
        firstArrivalBusCrowding: 'CROWD',
        secondArrivalBusCrowding: 'NORMAL',
      },
      {
        busNumber: '3',
        direction: '광화문역',
        firstArrivalTime: '103',
        secondArrivalTime: '257',
        firstArrivalBusCrowding: 'EASYGOING',
        secondArrivalBusCrowding: 'EASYGOING',
      },
    ],
  },
};
