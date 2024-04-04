import React from 'react';
import { List } from '@chakra-ui/react';
import { StationItem } from '@/components/items/stationItem';

export default {
  title: 'Example/stations',
  component: StationItem,
};

const items = [
  {
    arsId: '00001',
    stationName: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
    nextStationName: '용산우체국',
    crowding: 'EASYGOING',
    xlatitude: 33.450701,
    ylongitude: 126.570667,
  },
  {
    arsId: '00002',
    stationName: '역명2',
    nextStationName: '종로2가사거리',
    crowding: 'EASYGOING',
    xlatitude: 33.450701,
    ylongitude: 126.570667,
  },
  {
    arsId: '00003',
    stationName: '역명3',
    nextStationName: '광화문역',
    crowding: 'EASYGOING',
    xlatitude: 33.450701,
    ylongitude: 126.570667,
  },
];

const type = 'bookmark';

export const Default = () => (
  <List>
    {items.map((item) => (
      <StationItem item={item} type={type} />
    ))}
  </List>
);
