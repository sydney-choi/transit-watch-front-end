import { ListItem, Text, HStack, Box, Flex, Badge, VStack } from '@chakra-ui/react';
import { convertSecToMinText } from '@/app/lib/utils';
import { StatusColor, StatusColorKr } from '@/app/lib/constant';

const Item = ({ item }: { item: BusItem }) => (
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
          <Badge colorScheme={StatusColor[item.firstArrivalBusCrowding]}>
            {StatusColorKr[item.firstArrivalBusCrowding]}
          </Badge>
          <Badge colorScheme={StatusColor[item.secondArrivalBusCrowding]}>
            {StatusColorKr[item.secondArrivalBusCrowding]}
          </Badge>
        </VStack>
      </Flex>
    </HStack>
  </ListItem>
);

export default Item;
