import { ListItem, Text, HStack, Box } from '@chakra-ui/react';
import BookmarkIcon from '@/components/icons/BookmarkIcon';

interface StationItemProps {
  item: StationItem;
  onClick?: () => void;
}

const StationItem = ({ item, onClick }: StationItemProps) => (
  <ListItem onClick={onClick}>
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
);

export default StationItem;
