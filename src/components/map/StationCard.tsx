import { forwardRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { STATUS_COLOR, STATUS_KR } from '@/constants/status';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { useGetStationDetail } from '@/hooks/useGetQueries';
import { getCurrentTime } from '@/lib/utils';
import { Icon } from '@/components/common/icon';
import { Button } from '@/components/common/button';
import { BusItem } from '@/components/items/busItem';

interface StationCardProps {
  arsId: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const StationCard = forwardRef<HTMLDivElement | null, StationCardProps>(({ arsId, onClick }, ref) => {
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarksStore();
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const { data, isLoading, isFetching, refetch, isSuccess } = useGetStationDetail(arsId);
  const hasBookmark = !!bookmarks?.find((target) => target.arsId === arsId);

  const handleBookmarkClick = () => {
    // TODO optimistic update로 구현
    if (hasBookmark) {
      deleteBookmark(arsId);
    } else if (data) {
      addBookmark(data.result.station);
    }
  };

  const handleRefreshClick = () => {
    refetch();
    if (isSuccess) setCurrentTime(getCurrentTime());
    else setCurrentTime('');
  };

  return (
    !isLoading &&
    isSuccess && (
      <Box position="relative" w="240px" transform="translateX(-50%)" ref={ref} backgroundColor="#fff" boxShadow="lg">
        <Button style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} onClick={onClick}>
          <Icon icon="Close" size="18" />
        </Button>
        <Box p={3} backgroundColor="#eaeaea" minH={1} textAlign="center">
          <Text color="#616161" fontSize="sm">
            {data.result.station.arsId}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {data.result.station.stationName}
          </Text>
          <Text color="#616161" fontSize="sm">
            {data.result.station.nextStationName}방향
          </Text>
          <Text fontSize="md" fontWeight="bold" color={STATUS_COLOR[data.result.station.crowding]}>
            {STATUS_KR[data.result.station.crowding]}
          </Text>
        </Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          border="solid 1px #eaeaea"
          paddingLeft={1}
          paddingRight={1}
        >
          <Text align="left" fontWeight="bold" fontSize="sm" lineHeight={2}>
            실시간 버스 정보
          </Text>
          <Flex alignItems="center">
            {isFetching ? (
              <Text fontSize="sm" color="#929292">
                데이터 갱신중..
              </Text>
            ) : (
              <Text fontSize="sm" color="#929292">
                {currentTime}
              </Text>
            )}
            <Button onClick={handleRefreshClick}>
              <Icon icon="Refresh" size="28" />
            </Button>
          </Flex>
        </Flex>
        <Box p={1} position="relative">
          <Button style={{ position: 'absolute', top: '-4rem', right: '1rem' }} onClick={handleBookmarkClick}>
            {hasBookmark ? (
              <Icon icon="Bookmark" color="#FFDA19" size="22" />
            ) : (
              <Icon icon="Bookmark" color="#D9D9D9" size="22" />
            )}
          </Button>
          <Box maxH="230px" overflowY="auto">
            {data.result.busList.map((bus) => (
              <BusItem item={bus} key={bus.busId} />
            ))}
          </Box>
        </Box>
      </Box>
    )
  );
});
