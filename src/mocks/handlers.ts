import { http, HttpResponse } from 'msw';

const stations = [
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
  { stationId: '4', stationName: '역명4', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '5', stationName: '역명5', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '6', stationName: '역명6', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '7', stationName: '역명7', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '8', stationName: '역명8', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '9', stationName: '역명9', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '10', stationName: '역명10', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '11', stationName: '역명11', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '12', stationName: '역명12', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '13', stationName: '역명13', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '14', stationName: '역명14', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '15', stationName: '역명15', nextStationName: '광화문역', arsId: ['00003'] },
  { stationId: '16', stationName: '역명16', nextStationName: '광화문역', arsId: ['00003'] },
];

export const handlers = [
  http.get('/api/stations', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    const regex = new RegExp(`^${query}`);
    const filteredStatons = stations.filter((item) => item.stationName.match(regex));

    return HttpResponse.json(filteredStatons);
  }),
];
