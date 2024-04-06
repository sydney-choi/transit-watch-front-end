export interface Station {
  arsId: string;
  stationName: string;
  nextStationName: string;
  crowding: string;
  xlatitude: number;
  ylongitude: number;
}

export interface Bus {
  busId: string;
  busName: string;
  busOrder: number;
  direction: string;
  firstArrivalBusTime: number;
  secondArrivalBusTime: number;
  firstArrivalBusCrowding: string;
  secondArrivalBusCrowding: string;
  firstArrivalTimeBefore: string;
  secondArrivalTimeBefore: string;
}

export interface GetStationsNearbyRequest {
  xlatitude: number;
  ylongitude: number;
  radius: number;
}

export interface GetStationsNearbyResponse {
  success: boolean;
  result: Station[];
}

export interface GetStationDetailResponse {
  success: boolean;
  result: StationDetail;
}

export interface StationDetail {
  station: Station;
  busList: Bus[];
}

export type UIType = 'search' | 'bookmark';
