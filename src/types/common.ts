export type Station = {
  stationId: string;
  name: string;
  direction: string;
  stationNumber: string[];
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
