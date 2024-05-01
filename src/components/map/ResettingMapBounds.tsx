import { useMap } from 'react-kakao-maps-sdk';
import { MapFocusButton } from '@/components/common/buttons/map';
import { Coordinates } from '@/types/location';

interface ResettingMapBoundsProps {
  position: Coordinates;
}

export const ResettingMapBounds = ({ position }: ResettingMapBoundsProps) => {
  const map = useMap();

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
      onClick={() => map.setCenter(new kakao.maps.LatLng(position.lat, position.lng))}
    />
  );
};
