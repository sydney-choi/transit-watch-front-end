import { CSSProperties } from 'react';
import { MapFocusIcon } from '@/components/icons';

interface MapFocusButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style: CSSProperties;
}

export const MapFocusButton = ({ style, onClick }: MapFocusButtonProps) => (
  <button type="button" style={style} onClick={onClick}>
    <MapFocusIcon alt="home" sizes="100vw" />
  </button>
);
