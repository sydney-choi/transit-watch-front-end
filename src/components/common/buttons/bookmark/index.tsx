import { CSSProperties } from 'react';
import { ActiveBookmarkIcon, InactiveBookmarkIcon } from '@/components/icons';

interface BookmarkButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style: CSSProperties;
  isSavedBookmark: boolean;
}

export const BookmarkButton = ({ onClick, style, isSavedBookmark }: BookmarkButtonProps) => (
  <button type="button" style={style} onClick={onClick}>
    {isSavedBookmark ? (
      <ActiveBookmarkIcon alt="bookmark" sizes="100vw" />
    ) : (
      <InactiveBookmarkIcon alt="bookmark" sizes="100vw" />
    )}
  </button>
);
