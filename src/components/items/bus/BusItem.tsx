import { ListItem, Text, HStack, Box, Flex, Badge, VStack } from '@chakra-ui/react';
import { Bus } from '@/types/common';
import { convertSecToMinText } from '@/lib/utils';
import { STATUS_COLOR_KR, STATUS_COLOR } from '@/lib/constant';

const BusItem = ({ item }: { item: Bus }) => (
  <ListItem key={item.busNumber}>
    <HStack boxSizing="border-box" p="0.5rem" h="100%" w="100%">
      <Box w="30%" whiteSpace="wrap">
        <Text fontSize="20px" fontWeight="bold">
          {item.busNumber}
        </Text>
        <Text fontSize="14px" color="grey">
          {item.direction}방향
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="space-between" lineHeight="1.0rem" gap="1">
        <VStack alignItems="flex-end" justifyContent="center" minW="50px">
          <Text>{convertSecToMinText(item.firstArrivalTime)}</Text>
          <Text>{convertSecToMinText(item.secondArrivalTime)}</Text>
        </VStack>
        <VStack alignItems="flex-end" justifyContent="center">
          <Badge colorScheme={STATUS_COLOR[item.firstArrivalBusCrowding]}>
            {STATUS_COLOR_KR[item.firstArrivalBusCrowding]}
          </Badge>
          <Badge colorScheme={STATUS_COLOR[item.secondArrivalBusCrowding]}>
            {STATUS_COLOR_KR[item.secondArrivalBusCrowding]}
          </Badge>
        </VStack>
      </Flex>
    </HStack>
  </ListItem>
);

export default BusItem;
