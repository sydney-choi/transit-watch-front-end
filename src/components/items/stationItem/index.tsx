'use client';

import { CSSProperties } from 'react';
import { Text, HStack, Box } from '@chakra-ui/react';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { Station, UIType } from '@/types/common';
import { BookmarkButton } from '@/components/common/buttons/bookmark';

interface StationItemProps {
  item: Station;
  type: UIType;
  style?: CSSProperties;
  onClick?: () => void;
}

export const StationItem = ({ type, style, item, onClick }: StationItemProps) => {
  const { deleteBookmark } = useBookmarksStore();
  const isBookmark = type === 'bookmark';

  const handleBookmarkClick = () => {
    // todo: localstorage -> server optimistic update
    deleteBookmark(item.arsId);
  };

  return (
    <HStack
      style={style}
      boxSizing="border-box"
      p="0.5rem"
      cursor="pointer"
      gap={0}
      w="100%"
      _hover={isBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
      onClick={onClick}
    >
      {isBookmark && <BookmarkButton onClick={handleBookmarkClick} isSavedBookmark />}
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
