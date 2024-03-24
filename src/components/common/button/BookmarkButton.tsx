import ActiveBookmarkIcon from '@/components/icons/ActiveBookmarkIcon.png';
import Image from 'next/image';

type BookMarkButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const BookMarkButton = ({ onClick }: BookMarkButtonProps) => (
  <button type="button" onClick={onClick}>
    <Image alt="bookmark" src={ActiveBookmarkIcon} />
  </button>
);

export default BookMarkButton;
