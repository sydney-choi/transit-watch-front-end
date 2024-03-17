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

export const StatusColor: { [key: string]: string } = {
  CROWD: 'red',
  NORMAL: 'blue',
  EASYGOING: 'green',
};

export const StatusColorKr: { [key: string]: string } = {
  CROWD: '혼잡',
  NORMAL: '보통',
  EASYGOING: '여유',
};
