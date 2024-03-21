import { Box, Flex } from '@chakra-ui/react';
import Main from '@/components/main';
import MapContainer from '@/components/map';

const Page = () => (
  <Flex>
    <Box w="32%">
      <Main />
    </Box>
    <Box flex="1">
      <MapContainer />
    </Box>
  </Flex>
);

export default Page;
