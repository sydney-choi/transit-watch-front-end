import { useMap } from 'react-kakao-maps-sdk';
import { MapFocusButton } from '@/components/common/buttons/map';
import { Coordinates } from '@/types/location';
import { useCoordinatesStore } from '@/stores/useCoordinatesStore';

interface ResettingMapCenterProps {
  position: Coordinates;
}

export const ResettingMapCenter = ({ position }: ResettingMapCenterProps) => {
  const map = useMap();
  const { setCoordinates } = useCoordinatesStore();
  const { lat, lng } = position;

  const handleOnClick = () => {
    map.setCenter(new kakao.maps.LatLng(lat, lng));
    setCoordinates({
      lng,
      lat,
    });
  };

  return (
    <MapFocusButton
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '10',
        top: '2rem',
        right: '2rem',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 1px 0 rgba(0,0,0,0.1), 0 0 3px 0 rgba(0,0,0,0.32)',
      }}
      onClick={handleOnClick}
    />
  );
};
