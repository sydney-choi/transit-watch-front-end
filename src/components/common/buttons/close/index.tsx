import { CloseIcon } from '@/components/icons';
import { CSSProperties } from 'react';

interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style: CSSProperties;
}

export const CloseButton = ({ style, onClick }: CloseButtonProps) => (
  <button type="button" style={style} onClick={onClick}>
    <CloseIcon alt="close" sizes="100vw" />
  </button>
);
