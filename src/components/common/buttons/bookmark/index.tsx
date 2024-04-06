import { ActiveBookmarkIcon, InactiveBookmarkIcon } from '@/components/icons';

interface BookmarkButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isSavedBookmark: boolean;
}

export const BookmarkButton = ({ onClick, isSavedBookmark }: BookmarkButtonProps) => (
  <button type="button" onClick={onClick}>
    {isSavedBookmark ? (
      <ActiveBookmarkIcon alt="bookmark" sizes="100vw" />
    ) : (
      <InactiveBookmarkIcon alt="bookmark" sizes="100vw" />
    )}
  </button>
);
