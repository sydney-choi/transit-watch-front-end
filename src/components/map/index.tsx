'use client';

import { Suspense, useEffect, useState } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useFindMyLocation } from '@/hooks/useFindMyLocation';
import { useGetStationsNearby } from '@/hooks/useGetQueries';
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_RADIUS } from '@/constants/location';
import { GetStationsNearbyRequest, Station } from '@/types/common';
import { useStationStore } from '@/stores/useStationStore';
import { useCoordinatesStore } from '@/stores/useCoordinatesStore';
import { MapMarkerContainer } from '@/components/map/MapMarkerContainer';
import { ResettingMapCenter } from '@/components/map/ResettingMapCenter';
import { Coordinates } from '@/types/location';

export const MapContainer = () => {
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { station } = useStationStore();
  const [stationsNearby, setStationsNearby] = useState<Station[]>();
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({ lng: 0, lat: 0 });
  const location = useFindMyLocation();
  const request: GetStationsNearbyRequest = {
    xlongitude: coordinates.lng,
    ylatitude: coordinates.lat,
    radius: DEFAULT_RADIUS,
  };

  const { data } = useGetStationsNearby(request);

  useEffect(() => {
    if (station.arsId) {
      // 검색창에서 아이템을 선택한 경우
      const { xlongitude, ylatitude } = station;
      setCoordinates({
        lng: xlongitude,
        lat: ylatitude,
      });
    } else if (location.coordinates && location.coordinates.lat > 0) {
      // 위치 정보를 허용한 경우
      const { lng, lat } = location.coordinates;
      setCoordinates({
        lng,
        lat,
      });
    } else {
      // 위치 정보를 허용하지 않은 경우
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

  useEffect(() => {
    if (location.coordinates && location.coordinates.lat > 0) {
      // 위치 정보를 허용한 경우
      const { lng, lat } = location.coordinates;
      setCurrentCoordinates({
        lng,
        lat,
      });
    } else {
      // 위치 정보를 허용하지 않은 경우
      setCurrentCoordinates({
        lng: DEFAULT_LNG,
        lat: DEFAULT_LAT,
      });
    }
  }, [location.coordinates]);

  return (
    <Box h="100vh" w="100%" overflow="hidden">
      <Suspense fallback={<p>로딩중..</p>}>
        {location.loaded && (
          <Map center={coordinates} style={{ position: 'relative', width: '100%', height: '100%' }} level={4} isPanto>
            {location.coordinates && (
              <MapMarker
                position={{ lng: location.coordinates.lng, lat: location.coordinates.lat }}
                image={{
                  src: '/RedMarker.png',
                  size: {
                    width: 30,
                    height: 30,
                  },
                }}
              />
            )}
            {stationsNearby?.map((item) => {
              const { stationId, arsId, xlongitude, ylatitude } = item;
              return (
                <MapMarkerContainer key={stationId} position={{ lng: xlongitude, lat: ylatitude }} arsId={arsId} />
              );
            })}
            <ResettingMapCenter position={currentCoordinates} />
          </Map>
        )}
      </Suspense>
      {/* 새로운 스테이션 카드 */}
      <Box className="station-card" style={{ position: 'absolute', top: '200px', left: '800px' }}>
        <Button className="star">즐겨찾기</Button>
        <Button className="btn-close">닫기</Button>
        <Box className="top-cont">
          <Box>
            <p className="station-name">동대문디자인플라자.동대문시장 여기는 길면 두줄로 노출이 됩니다</p>
            <p className="station-sub-text">
              <span className="num">02157</span>
              <span className="direct">시청, 서소문청사 방면 여기도 내용이 길면 자동으로 말줄임 처리가 됩니다</span>
            </p>
            <p className="now-stat red">혼잡(외 컬러필요)</p>
          </Box>
        </Box>
        <Box className="head">
          <p className="tit">실시간 버스정보</p>
          <Box className="right">
            <p className="date">
              <span>5/11</span>
              <span>16:08</span>
            </p>
            <Button className="refresh">새로고침</Button>
          </Box>
        </Box>
        <List className="bus-list-box">
          {/* 버스 컬러 간선 blue / 지선 green / 광역 red / 순환 yellow / 심야 navy */}
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge blue">간선</span>
                <span className="bus-num">05</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">곧도착</span>
                </Box>
                <Box>
                  <span className="color green">여유</span>
                  <span className="time">곧도착</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge green">지선</span>
                <span className="bus-num">11-1</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">19분전</span>
                </Box>
                <Box>
                  <span className="color green">여유</span>
                  <span className="time">정보없음</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge red">광역</span>
                <span className="bus-num">1550-1</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">19분전</span>
                </Box>
                <Box>
                  <span className="color green">여유</span>
                  <span className="time">정보없음</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge yellow">순환</span>
                <span className="bus-num">17-1</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">19분전</span>
                </Box>
                <Box>
                  <span className="color green">여유</span>
                  <span className="time">정보없음</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge navy">심야</span>
                <span className="bus-num">N7</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">19분전</span>
                </Box>
                <Box>
                  <span className="color gray">미정</span>
                  <span className="time">회차대기지연</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="bus-wrap">
              <Box className="left">
                <span className="badge navy">심야</span>
                <span className="bus-num">스크롤테스트</span>
              </Box>
              <Box className="right">
                <Box>
                  <span className="color red">혼잡</span>
                  <span className="time">19분전</span>
                </Box>
                <Box>
                  <span className="color gray">미정</span>
                  <span className="time">회차대기지연</span>
                </Box>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
