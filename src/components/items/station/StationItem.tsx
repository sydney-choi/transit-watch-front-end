'use client';

import { CSSProperties } from 'react';
import { Text, HStack, Box } from '@chakra-ui/react';
import { Station, UIType } from '@/types/common';
import BookMarkButton from '@/components/common/button/BookmarkButton';
import useBookmarksStore from '@/stores/useBookmarkStore';

interface StationItemProps {
  item: Station;
  type: UIType;
  style: CSSProperties;
  onClick?: () => void;
}

const StationItem = ({ type, style, item, onClick }: StationItemProps) => {
  const { deleteBookmark } = useBookmarksStore();
  const isBookmark = type === 'bookmark';

  const handleBookmark = () => {
    // todo: localstorage -> server optimistic update
    deleteBookmark(item.stationId);
  };

  return (
    <HStack
      style={style}
      boxSizing="border-box"
      p="0.5rem"
      cursor={isBookmark ? 'default' : 'pointer'}
      gap={0}
      w="100%"
      _hover={isBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
      onClick={onClick}
    >
      {isBookmark && <BookMarkButton onClick={handleBookmark} />}
      <Box ml="0.5rem">
        <Text fontSize="20px" fontWeight="bold">
          {item.stationName}
        </Text>
        <Text fontSize="14px" color="grey">
          {item.nextStationName}방향({item.arsId})
        </Text>
      </Box>
    </HStack>
  );
};

export default StationItem;
