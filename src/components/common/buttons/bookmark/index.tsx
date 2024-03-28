import { ActiveBookmarkIcon } from '@/components/icons';

type BookmarkButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const BookmarkButton = ({ onClick }: BookmarkButtonProps) => (
  <button type="button" onClick={onClick}>
    <ActiveBookmarkIcon alt="bookmark" sizes="100vw" />
  </button>
);
