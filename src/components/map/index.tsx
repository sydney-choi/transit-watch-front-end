'use client';

import { Suspense, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useFindMyLocation } from '@/hooks/useFindMyLocation';
import { useGetStationsNearby } from '@/hooks/useGetQueries';
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_RADIUS } from '@/constants/location';
import { GetStationsNearbyRequest, Station } from '@/types/common';
import { useStationStore } from '@/stores/useStationStore';
import { useCoordinatesStore } from '@/stores/useCoordinatesStore';
import { MapMarkerContainer } from '@/components/map/MapMarkerContainer';
import { ResettingMapBounds } from '@/components/map/ResettingMapBounds';

export const MapContainer = () => {
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { station } = useStationStore();
  const [stationsNearby, setStationsNearby] = useState<Station[]>();
  const location = useFindMyLocation();
  const request: GetStationsNearbyRequest = {
    xlongitude: coordinates.lng,
    ylatitude: coordinates.lat,
    radius: DEFAULT_RADIUS,
  };

  const { data } = useGetStationsNearby(request);

  useEffect(() => {
    // 위치 정보를 허용한 경우
    if (location.coordinates) {
      const { lng, lat } = location.coordinates;
      setCoordinates({
        lng,
        lat,
      });
      // 검색창에서 아이템을 선택한 경우
    } else if (station.arsId) {
      const { xlongitude, ylatitude } = station;
      setCoordinates({
        lng: xlongitude,
        lat: ylatitude,
      });
      // 위치 정보를 허용하지 않은 경우
    } else {
      setCoordinates({
        lng: DEFAULT_LNG,
        lat: DEFAULT_LAT,
      });
    }
  }, [location, setCoordinates, station]);

  useEffect(() => {
    if (data) {
      setStationsNearby(data.result);
    }
  }, [data]);

  return (
    <Box h="100vh" w="100%" overflow="hidden">
      <Suspense fallback={<p>로딩중..</p>}>
        {location.loaded && stationsNearby && (
          <Map center={coordinates} style={{ position: 'relative', width: '100%', height: '100%' }} level={4} isPanto>
            {location.coordinates && (
              <MapMarker
                position={coordinates}
                image={{
                  src: '/RedMarker.png',
                  size: {
                    width: 30,
                    height: 30,
                  },
                }}
              />
            )}
            {stationsNearby.map((item) => {
              const { stationId, arsId, xlongitude, ylatitude } = item;
              return (
                <MapMarkerContainer key={stationId} position={{ lng: xlongitude, lat: ylatitude }} arsId={arsId} />
              );
            })}
            <ResettingMapBounds points={stationsNearby} />
          </Map>
        )}
      </Suspense>
    </Box>
  );
};
