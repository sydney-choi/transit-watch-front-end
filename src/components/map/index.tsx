'use client';

import { Suspense, useEffect, useState } from 'react';
import { AspectRatio } from '@chakra-ui/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useFindMyLocation } from '@/hooks/useFindMyLocation';
import { useGetStationsNearby } from '@/hooks/useGetQueries';
import { Coordinates } from '@/types/location';
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_RADIUS } from '@/constants/location';
import { GetStationsNearbyRequest } from '@/types/common';

export const MapContainer = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
  // 위치정보 허용했을 때
  // {"loaded":true,"coordinates":{"lat":35.1709466,"lng":126.9080878}}
  // 허용 안했을 때
  // {"loaded":true,"error":{}}
  const location = useFindMyLocation();
  useEffect(() => {
    if (location.coordinates) {
      const { lat, lng } = location.coordinates;
      setCoordinates({
        lat,
        lng,
      });
    } else {
      setCoordinates({
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG,
      });
    }
  }, [location]);

  const request: GetStationsNearbyRequest = {
    xlatitude: coordinates.lat,
    ylongitude: coordinates.lng,
    radius: DEFAULT_RADIUS,
  };
  const { data } = useGetStationsNearby(request);

  return (
    <AspectRatio ratio={16 / 9}>
      <Suspense fallback={<p>로딩중..</p>}>
        {location.loaded && data && (
          <Map center={coordinates} isPanto style={{ width: '100%', height: '100%' }} level={4}>
            {data.result.map((item) => {
              const { stationId, xlatitude, ylongitude, stationName } = item;
              return (
                <MapMarker
                  key={stationId}
                  position={{ lat: xlatitude, lng: ylongitude }} // 마커를 표시할 위치
                  image={{
                    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                    size: {
                      width: 24,
                      height: 35,
                    }, // 마커이미지의 크기입니다
                  }}
                  title={stationName} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                />
              );
            })}
          </Map>
        )}
      </Suspense>
    </AspectRatio>
  );
};
