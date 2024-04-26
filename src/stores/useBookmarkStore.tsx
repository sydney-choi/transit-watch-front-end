import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Station } from '@/types/common';

interface BookmarkState {
  bookmarks: Station[] | null;
  isLoading: boolean;
  loadBookmarks: () => void;
  addBookmark: (bookmark: Station) => void;
  deleteBookmark: (id: string) => void;
}

export const useBookmarksStore = create(
  persist<BookmarkState>(
    (set, get) => ({
      bookmarks: null,
      isLoading: true,
      addBookmark: (bookmark) => set(() => ({ bookmarks: [...(get().bookmarks ?? []), bookmark] })),
      deleteBookmark: (id) =>
        set(() => ({
          bookmarks: get().bookmarks?.filter((bookmark) => bookmark.arsId !== id),
        })),
      loadBookmarks: () => {
        const { bookmarks } = get();
        set({
          bookmarks,
          isLoading: false,
        });
      },
    }),
    {
      name: 'bookmarks-storage',
    },
  ),
);
