import { useQuery } from '@tanstack/react-query';
import client from '@/lib/fetcher';
import {
  GetSearchStationsRequest,
  GetStationsNearbyRequest,
  GetStationsNearbyResponse,
  GetStationDetailResponse,
  GetSearchStationsResponse,
} from '@/types/common';

export const useSearchStations = (request: GetSearchStationsRequest) =>
  useQuery<GetSearchStationsResponse>({
    queryKey: ['searchStations', request],
    queryFn: async () =>
      (
        await client.get(
          `/v1/bus-stops/autocomplete?keyword=${request.searchText}&xLongitude=${request.xlongitude}&yLatitude=${request.ylatitude}`,
        )
      ).data,
    enabled: !!request.searchText.length,
    staleTime: Infinity,
  });

export const useGetStationsNearby = (request: GetStationsNearbyRequest) =>
  useQuery<GetStationsNearbyResponse>({
    queryKey: ['getStationsNearby', request],
    queryFn: async () =>
      (
        await client.get(
          `/v1/bus-stops/near?tmX=${request.xlongitude}&tmY=${request.ylatitude}&radius=${request.radius}`,
        )
      ).data,
    enabled: !!request.xlongitude || !!request.ylatitude,
    staleTime: Infinity, // TODO: 임시설정, 배포 전 staleTime 변경하기
  });

export const useGetStationDetail = (arsId: string) =>
  useQuery<GetStationDetailResponse>({
    queryKey: ['getStationDetail', arsId],
    queryFn: async () => (await client.get(`/v1/bus-stops/detail/${arsId}`)).data,
    staleTime: Infinity,
  });
