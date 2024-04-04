import React from 'react';
import { List } from '@chakra-ui/react';
import { BusItem } from '@/components/items/busItem';
import { Bus } from '@/types/common';

export default {
  title: 'Example/buses',
  component: BusItem,
};

const items: Bus[] = [
  {
    direction: 'KT광화문지사',
    firstArrivalBusTime: 446,
    secondArrivalBusTime: 911,
    firstArrivalBusCrowding: 'EASYGOING',
    secondArrivalBusCrowding: 'EASYGOING',
    firstArrivalTimeBefore: '4번째 전',
    secondArrivalTimeBefore: '6번째 전',
    busId: '100100001',
    busName: '01A',
    busOrder: 15,
  },
  {
    direction: '종로1가',
    firstArrivalBusTime: 109,
    secondArrivalBusTime: 608,
    firstArrivalBusCrowding: 'EASYGOING',
    secondArrivalBusCrowding: 'EASYGOING',
    firstArrivalTimeBefore: 'NODATA',
    secondArrivalTimeBefore: '3번째 전',
    busId: '100100077',
    busName: '501',
    busOrder: 26,
  },
  {
    direction: 'KT광화문지사',
    firstArrivalBusTime: 260,
    secondArrivalBusTime: 1067,
    firstArrivalBusCrowding: 'EASYGOING',
    secondArrivalBusCrowding: 'EASYGOING',
    firstArrivalTimeBefore: '1번째 전',
    secondArrivalTimeBefore: '7번째 전',
    busId: '123000011',
    busName: '708',
    busOrder: 32,
  },
  {
    direction: 'KT광화문지사',
    firstArrivalBusTime: 0,
    secondArrivalBusTime: 0,
    firstArrivalBusCrowding: 'NODATA',
    secondArrivalBusCrowding: 'NODATA',
    firstArrivalTimeBefore: 'NODATA',
    secondArrivalTimeBefore: 'NODATA',
    busId: '117000002',
    busName: 'N51',
    busOrder: 40,
  },
  {
    direction: '종로1가',
    firstArrivalBusTime: 302,
    secondArrivalBusTime: 944,
    firstArrivalBusCrowding: 'EASYGOING',
    secondArrivalBusCrowding: 'EASYGOING',
    firstArrivalTimeBefore: '1번째 전',
    secondArrivalTimeBefore: '6번째 전',
    busId: '100100006',
    busName: '101',
    busOrder: 44,
  },
];

export const Default = () => (
  <List>
    {items.map((item) => (
      <BusItem item={item} />
    ))}
  </List>
);
