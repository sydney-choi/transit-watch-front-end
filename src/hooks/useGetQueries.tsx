import { useQuery } from '@tanstack/react-query';
import client from '@/lib/fetcher';
import { Station } from '@/types/common';

export const useSearchStations = (searchText: string = '') =>
  useQuery<Station[]>({
    queryKey: ['searchStations', searchText],
    queryFn: async () => (await client.get(`/stations?q=${searchText}`)).data,
    enabled: !!searchText.length,
  });
