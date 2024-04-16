import { forwardRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { STATUS_COLOR, STATUS_KR } from '@/constants/status';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { getCurrentTime } from '@/lib/utils';
import { BusItem } from '@/components/items/busItem';
import { BookmarkButton } from '@/components/common/buttons/bookmark';
import { CloseButton } from '@/components/common/buttons/close';
import { RefreshButton } from '@/components/common/buttons/refresh';
import { useGetStationDetail } from '@/hooks/useGetQueries';

interface StationCardProps {
  arsId: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const StationCard = forwardRef<HTMLDivElement | null, StationCardProps>(({ arsId, onClick }, ref) => {
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarksStore();
  const [isSavedbookmark, setIsSavedBookmark] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const { data, isLoading, isFetching, refetch, isSuccess } = useGetStationDetail(arsId);

  const handleBookmarkClick = () => {
    const bookmark = bookmarks.find((target) => target.arsId === arsId);
    // TODO optimistic update로 구현
    if (bookmark) {
      setIsSavedBookmark(false);
      deleteBookmark(bookmark.arsId);
    } else {
      setIsSavedBookmark(true);
      if (data) {
        addBookmark(data.result.station);
      }
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
      <Box
        position="relative"
        w="240px"
        maxH="calc(-4px + 50vh)"
        transform="translateX(-50%)"
        ref={ref}
        backgroundColor="#fff"
        boxShadow="lg"
      >
        <CloseButton style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} onClick={onClick} />
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
              <Text fontSize="sm" color="#929292" marginRight={1}>
                데이터 갱신중..
              </Text>
            ) : (
              <Text fontSize="sm" color="#929292" marginRight={1}>
                {currentTime}
              </Text>
            )}
            <RefreshButton onClick={handleRefreshClick} />
          </Flex>
        </Flex>
        <Box p={1} position="relative">
          <BookmarkButton
            style={{ position: 'absolute', top: '-5rem', right: '1rem' }}
            onClick={handleBookmarkClick}
            isSavedBookmark={isSavedbookmark}
          />
          <Box maxH="230px" overflowY="auto">
            {data.result.busList.map((bus) => (
              <BusItem key={bus.busId} item={bus} />
            ))}
          </Box>
        </Box>
      </Box>
    )
  );
});
