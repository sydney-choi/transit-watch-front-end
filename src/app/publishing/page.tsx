'use client';

import { Suspense } from 'react';
import { Image, Input, Box, Flex, Button, List, ListItem, Tooltip } from '@chakra-ui/react';
// import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';
// import { SearchIcon } from '@/components/icons';

const Page = () => (
  <Flex>
    <Box w="486px" className="action-box">
      {/* <Main /> */}
      {/* 서치박스 */}
      <Box className="search-bar">
        <Button className="logo" _hover={{ background: 'transparant' }}>
          <Image src="/images/logo_bus.svg" alt="정류장 혼잡도" />
        </Button>
        <Box className="search-ipt">
          <Input type="text" placeholder="정류장 검색" className="text" />
          <Button className="btn-search">검색</Button>

          <List className="result-list">
            <ListItem>
              <Box className="inner">
                <p className="stop-name">
                  방죽공원.영통힐스테이트.내용이길어지면두줄까지노출됩니다 영통 홈플러스 말줄임 테스트 길어진다 길어져용
                </p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면 여기도 내용이 길면 자동으로 말줄임 처리가 됩니다</span>
                </p>
                <Button className="btn-close">닫기</Button>
              </Box>
            </ListItem>
            <ListItem>
              <Box className="inner">
                <p className="stop-name">방죽공원</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
                <Button className="btn-close">닫기</Button>
              </Box>
            </ListItem>
            <ListItem>
              <Box className="inner">
                <p className="stop-name">방죽공원</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
                <Button className="btn-close">닫기</Button>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* 서치박스 끝 */}

      <Box className="bookmark-cont">
        <h2 className="home-tit">즐겨찾는 정류장</h2>
        <List className="mark-list">
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">버스 정류장 이름이 길땐 말줄임으로 처리된다 버스 정류장 이름이</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box active">
                <p className="stop-name">선택했을 때 진한 라인</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">시청, 서소문청사 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <Button className="box">
                <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
                <p className="station-sub-text">
                  <span className="num">02157</span>
                  <span className="direct">영일중학교.수원출입국외국인청 길어지는 내용 방면</span>
                </p>
              </Button>
            </Box>
          </ListItem>
        </List>

        {/* 즐겨찾기 내용이 없을 때 */}
        {/* <Box className="empty-box">
          <Image src="/images/img_click.svg" alt="클릭 이미지" />
          <p className="text">원하시는 정류장을 클릭해주세요</p>
        </Box> */}
      </Box>

      <Tooltip
        className="info-tooltip"
        hasArrow
        arrowSize={10}
        bgColor="white"
        placement="left-start"
        label={
          <Box>
            <p className="main-txt">판단기준 (승강장면적, 사람수)</p>
            <p className="desc">혼잡도 판단기준은 다음과 같습니다</p>
            <p className="info green">여유 : 1m²당 0.5명 이하</p>
            <p className="info blue">보통 : 1m²당 0.5명 초과 1.1명 이하</p>
            <p className="info red">혼잡 : 1m²당 1.1명 초과</p>
          </Box>
        }
      >
        <Button className="float-q-mark">?</Button>
      </Tooltip>
    </Box>
    <Box flex="1">
      <Suspense fallback={<p>로딩중..</p>}>
        <MapContainer />
      </Suspense>
    </Box>
  </Flex>
);

export default Page;
