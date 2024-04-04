import { forwardRef } from 'react';
import { StationDetail } from '@/types/common';
import { Box, Text, CloseButton } from '@chakra-ui/react';
import { STATUS_COLOR, STATUS_KR } from '@/constants/status';
import { BusItem } from '@/components/items/busItem';

interface StationCardProps {
  item: StationDetail;
}

export const StationCard = forwardRef<HTMLDivElement | null, StationCardProps>(({ item }, ref) => {
  const { station, busList } = item;

  return (
    <Box w="100%" maxH="496px" position="relative" ref={ref}>
      <CloseButton type="button" position="absolute" top={1} right={1} />
      <Box p={3} backgroundColor="#eaeaea" minH={1} textAlign="center">
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
      <Box p={2}>
        <Text align="left" fontWeight="bold" fontSize="md" lineHeight={2}>
          실시간 버스 정보
        </Text>
        <Box maxH="300px" overflowY="auto">
          {busList.map((bus) => (
            <BusItem key={bus.busId} item={bus} />
          ))}
        </Box>
      </Box>
    </Box>
  );
});
