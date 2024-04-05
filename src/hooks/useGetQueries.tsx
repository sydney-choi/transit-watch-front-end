import { useQuery } from '@tanstack/react-query';
import client from '@/lib/fetcher';
import { Station, GetStationsNearbyRequest, GetStationsNearbyResponse, GetStationDetailResponse } from '@/types/common';

export const useSearchStations = (searchText: string = '') =>
  useQuery<Station[]>({
    queryKey: ['searchStations', searchText],
    queryFn: async () => (await client.get(`/stations?q=${searchText}`)).data,
    enabled: !!searchText.length,
    staleTime: Infinity,
  });

export const useGetStationsNearby = (request: GetStationsNearbyRequest) =>
  useQuery<GetStationsNearbyResponse>({
    queryKey: ['getStationsNearby', request],
    queryFn: async () =>
      (
        await client.get(
          `/v1/bus-stops/near?tmX=${request.xlatitude}&tmY=${request.ylongitude}&radius=${request.radius}`,
        )
      ).data,
    staleTime: Infinity, // TODO: 임시설정, 배포 전 staleTime 변경하기
  });

export const useGetStationDetail = (arsId: string) =>
  useQuery<GetStationDetailResponse>({
    queryKey: ['getStationDetail', arsId],
    queryFn: async () => (await client.get(`/v1/bus-stops/detail/${arsId}`)).data,
    staleTime: Infinity,
  });
