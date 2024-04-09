import { forwardRef, useEffect, useState } from 'react';
import { StationDetail } from '@/types/common';
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
  item: StationDetail;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const StationCard = forwardRef<HTMLDivElement | null, StationCardProps>(({ item, onClick }, ref) => {
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarksStore();
  const [stationDetail, setStationDetail] = useState<StationDetail>(item);
  const [isSavedbookmark, setIsSavedBookmark] = useState<boolean>(false);
  const { data, refetch } = useGetStationDetail(item.station.arsId);
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    if (data?.result) {
      setStationDetail(data.result);
    }
  }, [data]);

  const handleBookmarkClick = () => {
    const bookmark = bookmarks.find((target) => target.arsId === stationDetail.station.arsId);
    // TODO optimistic update로 구현
    if (bookmark) {
      setIsSavedBookmark(false);
      deleteBookmark(bookmark.arsId);
    } else {
      setIsSavedBookmark(true);
      addBookmark(stationDetail.station);
    }
  };

  const handleRefreshClick = () => {
    refetch();
    setCurrentTime(getCurrentTime());
  };

  return (
    <Box w="100%" maxH="496px" position="relative" ref={ref}>
      <CloseButton style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} onClick={onClick} />
      <Box p={3} backgroundColor="#eaeaea" minH={1} textAlign="center">
        <Text color="#616161" fontSize="sm">
          {stationDetail.station.arsId}
        </Text>
        <Text fontWeight="bold" fontSize="lg">
          {stationDetail.station.stationName}
        </Text>
        <Text color="#616161" fontSize="sm">
          {stationDetail.station.nextStationName}방향
        </Text>
        <Text fontSize="md" fontWeight="bold" color={STATUS_COLOR[stationDetail.station.crowding]}>
          {STATUS_KR[stationDetail.station.crowding]}
        </Text>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" border="solid 1px #eaeaea">
        <Text align="left" fontWeight="bold" fontSize="md" lineHeight={2}>
          실시간 버스 정보
        </Text>
        <Flex>
          <Text fontSize="sm" color="#929292">
            {currentTime}
          </Text>
          <RefreshButton onClick={handleRefreshClick} />
        </Flex>
      </Flex>
      <Box p={1} position="relative">
        <BookmarkButton
          style={{ position: 'absolute', top: '-5rem', right: '1rem' }}
          onClick={handleBookmarkClick}
          isSavedBookmark={isSavedbookmark}
        />

        <Box maxH="300px" overflowY="auto">
          {stationDetail.busList.map((bus) => (
            <BusItem key={bus.busId} item={bus} />
          ))}
        </Box>
      </Box>
    </Box>
  );
});
