'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { HomeIcon } from '@/components/icons';
import { Badge, Box, Flex, Stack, Text, Heading, List } from '@chakra-ui/react';
import { useBookmarksStore } from '@/stores/useBookmarkStore';
import { Station } from '@/types/common';
import { SearchBox } from '@/components/search';
import { StationItem } from '@/components/items/stationItem';
import { useStationStore } from '@/stores/useStationStore';

export const Main = () => {
  // TODO bookmark서버에서 가지고 오기
  const { bookmarks, loadBookmarks, isLoading } = useBookmarksStore();
  const { setStation } = useStationStore();

  useEffect(() => {
    loadBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemClick = (target: Station) => {
    setStation(target);
  };

  const renderBookmarks = () => {
    if (isLoading) return <Text>로딩 중...</Text>;
    if (!bookmarks || bookmarks.length === 0) return <Text>자주 사용하는 정류장을 등록해주세요!</Text>;
    return (
      <List>
        {bookmarks.map((bookmark) => (
          <StationItem key={bookmark.arsId} type="bookmark" item={bookmark} onClick={() => handleItemClick(bookmark)} />
        ))}
      </List>
    );
  };

  return (
    <Stack backgroundColor="white" w="100%" h="100%" position="relative">
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
      <Box p="0 1rem">
        <Heading as="h1" size="md" lineHeight={2}>
          즐겨찾는 정류장
        </Heading>
        <Box minH="120px" border="1px solid #a8a8a8" borderRadius="10px">
          {renderBookmarks()}
        </Box>
      </Box>
      <Box position="absolute" bottom="1rem" ml="1rem" fontSize="14px" color="#808080">
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
