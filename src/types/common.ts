import { STATUS_COLOR_KR } from '@/lib/constant';

export interface Station {
  stationId: string;
  stationName: string;
  nextStationName: string;
  arsId: string[];
  crowding?: typeof STATUS_COLOR_KR;
  xlatitude: number;
  ylongitude: number;
}

export interface Bus {
  busNumber: string;
  direction: string;
  firstArrivalBusTime: string;
  secondArrivalBusTime: string;
  firstArrivalBusCrowding: string;
  secondArrivalBusCrowding: string;
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

export interface StationDetail {
  station: Station;
  busList: Bus[];
}

export type UIType = 'search' | 'bookmark';
