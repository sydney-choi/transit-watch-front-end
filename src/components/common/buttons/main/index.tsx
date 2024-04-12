import { HomeIcon } from '@/components/icons';
import { CSSProperties } from 'react';

interface HomeButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const HomeButton = ({ style, onClick }: HomeButtonProps) => (
  <button type="button" style={style} onClick={onClick}>
    <HomeIcon alt="home" sizes="100vw" />
  </button>
);
