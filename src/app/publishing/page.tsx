import { Suspense } from 'react';
import { Image, Input, Box, Flex, Button, List, ListItem, Tooltip } from '@chakra-ui/react';
// import { Main } from '@/components/main';
import { MapContainer } from '@/components/map';
// import { SearchIcon } from '@/components/icons';

const Page = () => (
  <Flex>
    <Box w="20rem" minW="486px" className="action-box">
      {/* <Main /> */}
      {/* 서치박스 */}
      <Box className="search-bar">
        <Button className="logo" _hover={{ background: 'transparant' }}>
          <Image src="/images/logo_bus.svg" alt="정류장 혼잡도" />
        </Button>
        <Box className="search-ipt">
          <Input type="text" placeholder="정류장 검색" className="text" />
          <Button className="btn-search">검색</Button>
        </Box>
      </Box>
      {/* 서치박스 끝 */}

      <Box className="bookmark-cont">
        <h2 className="home-tit">즐겨찾는 정류장</h2>
        <List className="mark-list">
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <p className="stop-name">영통.랜드마크호텔(공항버스)</p>
              <p className="sub-text">
                <span className="num">02157</span>
                <span className="direct">시청, 서소문청사 방면</span>
              </p>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <p className="stop-name">버스 정류장 이름이 길땐 말줄임으로 처리된다 버스 정류장 이름이</p>
              <p className="sub-text">
                <span className="num">02157</span>
                <span className="direct">시청, 서소문청사 방면</span>
              </p>
            </Box>
          </ListItem>
          <ListItem className="active">
            <Box>
              <Button className="icon-mark">즐겨찾기</Button>
              <p className="stop-name">선택했을 때 진한 라인</p>
              <p className="sub-text">
                <span className="num">02157</span>
                <span className="direct">시청, 서소문청사 방면</span>
              </p>
            </Box>
          </ListItem>
        </List>
      </Box>

      <Tooltip className="info-tooltip" label="내용이 긴데 우짤끼니" hasArrow arrowSize={15}>
        <Button>물음표</Button>
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
