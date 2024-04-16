import { useEffect, useState } from 'react';
import { CustomOverlayMap, CustomOverlayMapProps, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { StationCard } from '@/components/map/StationCard';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useStationStore } from '@/stores/useStationStore';

interface MapMarkerContainerProps {
  position: CustomOverlayMapProps['position'];
  arsId: string;
}

export const MapMarkerContainer = ({ position, arsId }: MapMarkerContainerProps) => {
  const map = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const { station } = useStationStore();

  useEffect(() => {
    if (station.arsId === arsId) {
      setIsOpen(true);
    }
  }, [station.arsId, arsId]);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleMarkerClick = (marker: kakao.maps.Marker) => {
    map.panTo(marker.getPosition());
    setIsOpen(true);
  };

  return (
    <>
      <MapMarker position={position} onClick={handleMarkerClick} />
      {isOpen && (
        <CustomOverlayMap xAnchor={0} yAnchor={0} position={position}>
          <StationCard ref={ref} arsId={arsId} onClick={() => setIsOpen(false)} />
        </CustomOverlayMap>
      )}
    </>
  );
};
