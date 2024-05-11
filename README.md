# transit watch (front-end)

https://transit-watch.vercel.app/

---

### 붐비는건 딱 질색! 내 주변 버스 정류장 혼잡도 알리미🗣

출퇴근 시간, 매번 붐비는 사람들에 치여 다니고 계신가요?

혼잡도 알리미를 통해 쾌적한 출퇴근길이 될 수 있도록 도와드릴게요!

## 프로젝트 소개

공공 데이터를 이용한 서울시 정류장의 혼잡도를 조회하는 서비스에요.

## 프로젝트 기능

정류장 이름을 검색하거나, 위치 정보를 켜시면 해당 정류장을 포함한 주변 버스 정류장의 혼잡도를 실시간으로 알 수 있어요.

원하는 정류장은 즐겨찾기에 등록해 편리하게 조회하실 수 있어요.

## 프로젝트 상세 설명

### 1. 정류장 검색 기능

- 정류장을 자동완성을 통해 검색할 수 있어요.

### 2. 위치기반 근처 정류장 조회 기능

- 위치 정보를 켜면 반경 1km의 정류장 정보를 확인할 수 있어요. (켜지 않았을 경우 서울 시청을 중심으로 반경 1km 정류장이 표시되요)

### 3. 정류장 혼잡도 조회 기능

- 팝업창을 통해 정류장 혼잡도와 버스 안 혼잡도를 확인할 수 있어요.

### 4. 북마크 기능

- `localstorage`를 사용하여 북마크가 조회/등록 될 수 있게 했어요.

## 프로젝트 구조

<img src="https://camo.githubusercontent.com/0fbbdfc9d7ccd04e1c60654a80b1e7f4030453b75d1729528c77aa4bbd1cefc7/68747470733a2f2f692e696d6775722e636f6d2f593866613156312e706e67"/>

## **Documentation**

[UI/UX design](https://www.figma.com/file/eCzr0mvNCHssfsZ9rMMR2K/Untitled?type=design&node-id=0%3A1&mode=design&t=psICH6i9a6dVgMI1-1)

**[커밋 컨벤션](https://github.com/sydney-choi/transit-watch-front-end/wiki/%E2%9C%85-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)**

[코딩 컨벤션](https://github.com/sydney-choi/transit-watch-front-end/wiki/%E2%9C%85-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)

## Teck Stack

- 메인 : React, Next.js, Typescript
- 상태관리 : Zustand, React-Query
- 스타일링: Chakra UI
- UI : Figma
- 배포 : Vercel
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Slack, Notion, Zep
- Back-end : 서울시 공공 데이터 API 사용

## **How to run**

```bash
git clone https://github.com/sydney-choi/transit-watch-front-end.git
cd transit-watch-front-end
pnpm i
pnpm dev
```

## Contributor

front-end: @sydney-choi

back-end: @yeyounglim
