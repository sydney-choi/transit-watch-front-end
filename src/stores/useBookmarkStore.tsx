import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Station } from '@/types/common';

interface BookmarkState {
  bookmarks: Station[];
  addBookmark: (bookmark: Station) => void;
  deleteBookmark: (id: string) => void;
}

export const useBookmarksStore = create(
  persist<BookmarkState>(
    (set) => ({
      bookmarks: [
        {
          arsId: '00001',
          stationName: '경기도인재개발원.연구원.평생교육진흥원.여성가족재단',
          nextStationName: '용산우체국',
          crowding: 'EASYGOING',
          xlatitude: 33.450701,
          ylongitude: 126.570667,
        },
        {
          arsId: '00002',
          stationName: '역명2',
          nextStationName: '종로2가사거리',
          crowding: 'EASYGOING',
          xlatitude: 37.499590490909185,
          ylongitude: 127.0263723554437,
        },
        {
          arsId: '00003',
          stationName: '역명3',
          nextStationName: '광화문역',
          crowding: 'EASYGOING',
          xlatitude: 37.499590490909185,
          ylongitude: 127.0263723554437,
        },
      ],

      addBookmark: (bookmark) => set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),

      deleteBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmark) => bookmark.arsId !== id),
        })),
    }),
    {
      name: 'bookmarks-storage',
    },
  ),
);
