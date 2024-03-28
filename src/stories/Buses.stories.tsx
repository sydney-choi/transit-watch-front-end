import React from 'react';
import { List } from '@chakra-ui/react';
import { BusItem } from '@/components/items/busItem';

export default {
  title: 'Example/buses',
  component: BusItem,
};

const items = [
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
];

export const Default = () => (
  <List>
    {items.map((item) => (
      <BusItem item={item} />
    ))}
  </List>
);
