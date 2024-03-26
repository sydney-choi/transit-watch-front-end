'use client';

import { Text, HStack, Box } from '@chakra-ui/react';
import { Station, UIType } from '@/types/common';
import BookMarkButton from '@/components/common/button/BookmarkButton';
import useBookmarksStore from '@/stores/useBookmarkStore';

interface StationItemProps {
  item: Station;
  type: UIType;
  onClick?: () => void;
}

const StationItem = ({ type, item, onClick }: StationItemProps) => {
  const { deleteBookmark } = useBookmarksStore();
  const isBookmark = type === 'bookmark';

  const handleBookmark = () => {
    // todo: localstorage -> server optimistic update
    deleteBookmark(item.stationId);
  };

  return (
    <HStack
      key={item.stationId}
      boxSizing="border-box"
      p={1}
      cursor={isBookmark ? 'default' : 'pointer'}
      gap={0}
      _hover={isBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
      onClick={onClick}
    >
      {isBookmark && <BookMarkButton onClick={handleBookmark} />}
      <Box ml="0.5rem">
        <Text fontSize="20px" fontWeight="bold">
          {item.stationName}
        </Text>
        <Text fontSize="14px" color="grey">
          {item.nextStationName}방향({item.arsId.join(',')})
        </Text>
      </Box>
    </HStack>
  );
};

export default StationItem;
