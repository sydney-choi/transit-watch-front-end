import { CloseIcon } from '@/components/icons';

type CloseButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button type="button" onClick={onClick}>
    <CloseIcon alt="close" sizes="100vw" />
  </button>
);
