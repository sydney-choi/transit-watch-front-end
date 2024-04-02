import { Suspense } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';

const Page = () => (
  <Flex>
    <Box w="20rem" minW="384px">
      <Main />
    </Box>
    <Box flex="1">
      <Suspense fallback={<p>로딩중..</p>}>
        <MapContainer />
      </Suspense>
    </Box>
  </Flex>
);

export default Page;
