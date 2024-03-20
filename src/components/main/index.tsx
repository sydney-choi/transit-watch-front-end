import { Badge, Box, Flex, Stack, Text, Heading, List } from '@chakra-ui/react';
import MainIcon from '@/components/icons/MainIcon';
import SearchInput from '@/components/search';
import StationItem from '@/components/items/station/StationItem';

const Main = () => {
  const options = [
    {
      stationId: '12345',
      name: '네이버정문',
      direction: '을왕리',
      stationNumber: ['12312', '23423'],
      hasBookmark: true,
    },
  ];

  return (
    <Stack backgroundColor="white" w="100%" h="100%">
      <Flex bgColor="#ff9900" p="20px">
        <Box bgColor="#e3e3e3" minW="40px" p="8px" borderRadius="lg" mr="8px">
          <MainIcon />
        </Box>
        <Box flex="1">
          <SearchInput />
        </Box>
      </Flex>
      <Box p="0 0.5rem">
        <Heading as="h1" size="md">
          즐겨찾는 정류장
        </Heading>
        <Box minH="120px" border="1px solid gray" borderRadius="5px">
          {options ? (
            <List>
              {options.map((option) => (
                <StationItem key={option.stationId} item={option} onClick={undefined} />
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

export default Main;
