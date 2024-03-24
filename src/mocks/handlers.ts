import { http, HttpResponse } from 'msw';

const stations = [
  {
    stationId: '1',
    name: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
    direction: '용산우체국',
    stationNumber: ['00001'],
  },
  {
    stationId: '2',
    name: '역명2',
    direction: '종로2가사거리',
    stationNumber: ['00002', '4213'],
  },
  { stationId: '3', name: '역명3', direction: '광화문역', stationNumber: ['00003'] },
];

export const handlers = [
  http.get('/api/stations', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    const regex = new RegExp(`^${query}`);
    const filteredStatons = stations.filter((item) => item.name.match(regex));

    return HttpResponse.json(filteredStatons);
  }),
];
