import { Suspense } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
// import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';
// import { SearchIcon } from '@/components/icons';

const Page = () => (
  <Flex>
    <Box w="20rem" minW="384px">
      {/* <Main /> */}
      {/* 서치박스 */}
      <div className="search-bar">
        <div>
          <Button className="logo">
            <img src="/images/logo_bus.svg" alt="정류장 혼잡도123" />
          </Button>
        </div>
      </div>
      {/* 서치박스 끝 */}
    </Box>
    <Box flex="1">
      <Suspense fallback={<p>로딩중..</p>}>
        <MapContainer />
      </Suspense>
    </Box>
  </Flex>
);

export default Page;
