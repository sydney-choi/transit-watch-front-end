export interface Station {
  stationId: string;
  arsId: string;
  stationName: string;
  nextStationName: string;
  crowding: string;
  xlongitude: number;
  ylatitude: number;
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

export interface GetSearchStationsRequest {
  searchText: string;
  xlongitude: number;
  ylatitude: number;
}

export interface GetSearchStationsResponse {
  success: boolean;
  result: Station[];
}

export interface GetStationsNearbyRequest {
  xlongitude: number;
  ylatitude: number;
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
