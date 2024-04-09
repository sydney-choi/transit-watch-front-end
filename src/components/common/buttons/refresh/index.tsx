import { RefreshIcon } from '@/components/icons';
import { CSSProperties } from 'react';

interface RefreshButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const RefreshButton = ({ style, onClick }: RefreshButtonProps) => (
  <button type="button" style={style} onClick={onClick}>
    <RefreshIcon alt="refresh" sizes="100vw" />
  </button>
);
