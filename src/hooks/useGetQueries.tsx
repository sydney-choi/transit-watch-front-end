import { useQuery } from '@tanstack/react-query';
import client from '@/lib/fetcher';
import { Station, GetStationsNearbyRequest, GetStationsNearbyResponse } from '@/types/common';

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
    staleTime: Infinity, // 임시설정
  });
