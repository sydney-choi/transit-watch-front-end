import client from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';

export const useSearchStations = (searchText: string = '') =>
  useQuery<StationItem[]>({
    queryKey: ['search', searchText],
    queryFn: async () => (await client.get(`/stations?q=${searchText}`)).data,
    staleTime: 1000 * 60,
    enabled: !!searchText.length,
  });
