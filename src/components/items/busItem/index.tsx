import { ListItem, Text, HStack, Box, Flex, Badge, VStack } from '@chakra-ui/react';
import { Bus } from '@/types/common';
import { convertSecToMinText } from '@/lib/utils';
import { STATUS_COLOR_KR, STATUS_COLOR } from '@/lib/constant';

export const BusItem = ({ item }: { item: Bus }) => (
  <ListItem key={item.busId}>
    <HStack boxSizing="border-box" p="0.5rem" h="100%" w="100%">
      <Box w="30%" whiteSpace="wrap">
        <Text fontSize="lg" fontWeight="bold">
          {item.busName}
        </Text>
        <Text fontSize="sm" color="grey">
          {item.direction}방향
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="space-between" lineHeight="1.0rem" gap="1">
        <VStack alignItems="flex-end" justifyContent="center" minW="50px">
          <Text fontSize="md">{convertSecToMinText(item.firstArrivalBusTime)}</Text>
          <Text fontSize="md">{convertSecToMinText(item.secondArrivalBusTime)}</Text>
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
