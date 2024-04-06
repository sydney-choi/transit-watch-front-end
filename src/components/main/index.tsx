'use client';

import { Badge, Box, Flex, Stack, Text, Heading, List } from '@chakra-ui/react';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { MainIcon } from '@/components/icons';
import { SearchBox } from '@/components/search';
import { StationItem } from '@/components/items/stationItem';

export const Main = () => {
  const bookmarks = useBookmarksStore((state) => state.bookmarks);

  return (
    <Stack backgroundColor="white" w="100%" h="100%">
      <Flex bgColor="#ff9900" p="20px">
        <Box bgColor="#e3e3e3" minW="40px" p="8px" borderRadius="lg" mr="8px">
          <MainIcon />
        </Box>
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
                  style={undefined}
                  onClick={undefined}
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
