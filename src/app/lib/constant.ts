export type StationItem = {
  stationId: string;
  name: string;
  direction: string;
  stationNumber: Array<string>;
  hasBookmark: boolean;
};

export type BusItem = {
  busNumber: string;
  direction: string;
  firstArrivalTime: string;
  secondArrivalTime: string;
  firstArrivalBusCrowding: string;
  secondArrivalBusCrowding: string;
};

export const STATUS_COLOR: { [key: string]: string } = {
  CROWD: 'red',
  NORMAL: 'blue',
  EASYGOING: 'green',
};

export const STATUS_COLOR_KR: { [key: string]: string } = {
  CROWD: '혼잡',
  NORMAL: '보통',
  EASYGOING: '여유',
};
