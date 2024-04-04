import { StationDetail } from '@/types/common';
import { Card, Box, CardBody, Text, List } from '@chakra-ui/react';
import { STATUS_COLOR, STATUS_KR } from '@/constants/status';
import { BusItem } from '@/components/items/busItem';

interface StationCardProps {
  item: StationDetail;
}

export const StationCard = ({ item }: StationCardProps) => {
  const { station, busList } = item;

  return (
    <Card w="100%">
      <CardBody>
        <Box backgroundColor="#eaeaea" minH={1} textAlign="center">
          <Text color="#616161" fontSize="sm">
            {station.arsId}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {station.stationName}
          </Text>
          <Text color="#616161" fontSize="sm">
            {station.nextStationName}방향
          </Text>
          <Text fontSize="md" fontWeight="bold" color={STATUS_COLOR[station.crowding]}>
            {STATUS_KR[station.crowding]}
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="md" lineHeight={2}>
            실시간 버스 정보
          </Text>
          <List>
            {busList.map((bus) => (
              <BusItem key={bus.busId} item={bus} />
            ))}
          </List>
        </Box>
      </CardBody>
    </Card>
  );
};
