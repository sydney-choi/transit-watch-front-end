import { forwardRef, useState } from 'react';
import { StationDetail } from '@/types/common';
import { Box, Text, CloseButton } from '@chakra-ui/react';
import { STATUS_COLOR, STATUS_KR } from '@/constants/status';
import { BusItem } from '@/components/items/busItem';
import { BookmarkButton } from '@/components/common/buttons/bookmark';
import { useBookmarksStore } from '@/stores/useBookmarkStore';

interface StationCardProps {
  item: StationDetail;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const StationCard = forwardRef<HTMLDivElement | null, StationCardProps>(({ item, onClick }, ref) => {
  const { station, busList } = item;
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarksStore();
  const [isSavedbookmark, setIsSavedBookmark] = useState<boolean>(false);

  const handleBookmarkClick = () => {
    const bookmark = bookmarks.find((target) => target.arsId === station.arsId);
    // TODO optimistic update로 구현
    if (bookmark) {
      setIsSavedBookmark(false);
      deleteBookmark(bookmark.arsId);
    } else {
      setIsSavedBookmark(true);
      addBookmark(station);
    }
  };

  return (
    <Box w="100%" maxH="496px" position="relative" ref={ref}>
      <CloseButton position="absolute" top={1} right={1} onClick={onClick} />
      <Box p={3} backgroundColor="#eaeaea" minH={1} textAlign="center">
        <Text color="#616161" fontSize="sm">
          {station.arsId}
        </Text>
        <Text fontWeight="bold" fontSize="lg">
          {station.stationName}
        </Text>
        <Text color="#616161" fontSize="sm">
          {station.nextStationName}방향
        </Text>
        <Text fontSize="md" fontWeight="bold" color={STATUS_COLOR[station.crowding]}>
          {STATUS_KR[station.crowding]}
        </Text>
        <BookmarkButton
          //  position="absolute" FIXME: style적용안됨
          // bottom={1}
          // right={1}
          onClick={handleBookmarkClick}
          isSavedBookmark={isSavedbookmark}
        />
      </Box>
      <Box p={2}>
        <Text align="left" fontWeight="bold" fontSize="md" lineHeight={2}>
          실시간 버스 정보
        </Text>
        <Box maxH="300px" overflowY="auto">
          {busList.map((bus) => (
            <BusItem key={bus.busId} item={bus} />
          ))}
        </Box>
      </Box>
    </Box>
  );
});
