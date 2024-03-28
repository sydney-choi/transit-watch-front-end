export type Station = {
  stationId: string;
  stationName: string;
  nextStationName: string;
  arsId: string[];
};

export type Bus = {
  busNumber: string;
  direction: string;
  firstArrivalTime: string;
  secondArrivalTime: string;
  firstArrivalBusCrowding: string;
  secondArrivalBusCrowding: string;
};

export type UIType = 'search' | 'bookmark';
