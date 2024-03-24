import React from 'react';
import { List } from '@chakra-ui/react';
import StationItem from '@/components/items/station/StationItem';

export default {
  title: 'Example/stations',
  component: StationItem,
};

const items = [
  {
    stationId: '1',
    stationName: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
    nextStationName: '용산우체국',
    arsId: ['00001'],
  },
  {
    stationId: '2',
    stationName: '역명2',
    nextStationName: '종로2가사거리',
    arsId: ['00002', '4213'],
  },
  { stationId: '3', stationName: '역명3', nextStationName: '광화문역', arsId: ['00003'] },
];

const type = 'bookmark';

export const Default = () => (
  <List>
    {items.map((item) => (
      <StationItem item={item} type={type} />
    ))}
  </List>
);
