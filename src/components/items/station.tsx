'use client';

import { List, ListItem, Text, HStack, Box } from '@chakra-ui/react';
import BookmarkIcon from '@/components/icons/bookmark';
import { StationItem } from '@/app/lib/constant';

interface ItemsProps {
  items: StationItem[];
  onSelect?: (name: StationItem) => void; // onSelect를 선택적으로 설정합니다.
}

const Items = ({ items, onSelect }: ItemsProps) => {
  const handleItemClick = (item: StationItem) => {
    onSelect?.(item);
  };
  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.stationId}
          onClick={
            onSelect
              ? () => {
                  handleItemClick(item);
                }
              : undefined
          }
        >
          <HStack
            boxSizing="border-box"
            p="0.5rem"
            cursor={item.hasBookmark ? 'default' : 'pointer'}
            gap={0}
            h="100%"
            w="100%"
            _hover={item.hasBookmark ? { bgColor: 'inherit' } : { bgColor: '#e6e6e6' }}
          >
            {item.hasBookmark === true && <BookmarkIcon />}
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
      ))}
    </List>
  );
};

export default Items;
