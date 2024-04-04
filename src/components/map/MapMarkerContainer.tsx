import { useState } from 'react';
import { MapMarker, MapMarkerProps, useMap } from 'react-kakao-maps-sdk';
import { StationCard } from '@/components/map/StationCard';
import { useGetStationDetail } from '@/hooks/useGetQueries';
import { Station } from '@/types/common';

interface MapMarkerContainerProps {
  position: MapMarkerProps['position'];
  item: Station;
}

export const MapMarkerContainer = ({ position, item }: MapMarkerContainerProps) => {
  const map = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetStationDetail(item.arsId);

  const handleOnClick = (marker: kakao.maps.Marker) => {
    map.panTo(marker.getPosition());
    if (data) {
      setIsOpen(true);
    }
  };

  return (
    <MapMarker position={position} onClick={handleOnClick}>
      {isOpen && data && <StationCard key={item.arsId} item={data.result} />}
    </MapMarker>
  );
};
