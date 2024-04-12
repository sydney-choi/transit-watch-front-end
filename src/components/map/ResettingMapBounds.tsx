import { useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';
import { Station } from '@/types/common';
import { MapFocusButton } from '@/components/common/buttons/map';

interface ResettingMapBoundsProps {
  points: Station[];
}

export const ResettingMapBounds = ({ points }: ResettingMapBoundsProps) => {
  const map = useMap();
  const bounds = useMemo(() => {
    const latlngBounds = new kakao.maps.LatLngBounds();

    points.forEach((point) => {
      latlngBounds.extend(new kakao.maps.LatLng(point.xlatitude, point.ylongitude));
    });
    return latlngBounds;
  }, [points]);

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
      onClick={() => map.setBounds(bounds, 50, 50, 50, 50)}
    />
  );
};
