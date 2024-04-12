'use client';

import Link from 'next/link';
import { HomeIcon } from '@/components/icons';
import { Badge, Box, Flex, Stack, Text, Heading, List } from '@chakra-ui/react';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { Station } from '@/types/common';
import { SearchBox } from '@/components/search';
import { StationItem } from '@/components/items/stationItem';
import { useStationStore } from '@/stores/useStationStore';

export const Main = () => {
  const bookmarks = useBookmarksStore((state) => state.bookmarks);
  const { setStation } = useStationStore();
  const handleItemClick = (target: Station) => {
    setStation(target);
  };

  return (
    <Stack backgroundColor="white" w="100%" h="100%">
      <Flex bgColor="#ff9900" p="20px">
        <Link href="/">
          <Box bgColor="#e3e3e3" minW="40px" p="8px" borderRadius="lg" mr="8px">
            <HomeIcon />
          </Box>
        </Link>
        <Box flex="1">
          <SearchBox />
        </Box>
      </Flex>
      <Box p="0 0.5rem">
        <Heading as="h1" size="md">
          즐겨찾는 정류장
        </Heading>
        <Box minH="120px" border="1px solid gray" borderRadius="5px">
          {bookmarks.length > 0 ? (
            <List>
              {bookmarks.map((bookmark) => (
                <StationItem
                  key={bookmark.arsId}
                  type="bookmark"
                  item={bookmark}
                  onClick={() => handleItemClick(bookmark)}
                />
              ))}
            </List>
          ) : (
            <Text>즐겨찾는 정류장을 등록하세요</Text>
          )}
        </Box>
      </Box>
      <Box p="8px">
        <Text>혼잡도 판단기준은 다음과 같습니다.</Text>
        <Text>판단기준(승강장면적, 사람수)</Text>
        <Text>
          <Badge colorScheme="green">여유</Badge> : 1m2당 0.5명 이하
        </Text>
        <Text>
          <Badge colorScheme="blue">보통</Badge> : 1m2당 0.5명 초과 1.1명 이하
        </Text>
        <Text>
          <Badge colorScheme="red">혼잡</Badge> : 1m2당 1.1명 초과
        </Text>
      </Box>
    </Stack>
  );
};
