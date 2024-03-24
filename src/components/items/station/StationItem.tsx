'use client';

import { ListItem, Text, HStack, Box } from '@chakra-ui/react';
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
    <ListItem onClick={onClick}>
      <HStack
        boxSizing="border-box"
        p="0.5rem"
        cursor={isBookmark ? 'default' : 'pointer'}
        gap={0}
        h="100%"
        w="100%"
        _hover={isBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
      >
        {isBookmark && <BookMarkButton onClick={handleBookmark} />}
        <Box ml="0.5rem">
          <Text fontSize="20px" fontWeight="bold">
            {item.name}
          </Text>
          <Text fontSize="14px" color="grey">
            {item.direction}방향({item.stationNumber})
          </Text>
        </Box>
      </HStack>
    </ListItem>
  );
};

export default StationItem;
