import { CloseIcon } from '@/components/icons';

interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button type="button" onClick={onClick}>
    <CloseIcon alt="close" sizes="100vw" />
  </button>
);
