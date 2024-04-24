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
      bookmarks: [],

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
