export interface Station {
  stationId: string;
  stationName: string;
  nextStationName: string;
  arsId: string[];
}

export interface Bus {
  busNumber: string;
  direction: string;
  firstArrivalTime: string;
  secondArrivalTime: string;
  firstArrivalBusCrowding: string;
  secondArrivalBusCrowding: string;
}

export type UIType = 'search' | 'bookmark';
