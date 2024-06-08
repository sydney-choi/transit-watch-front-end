import Icons from '@/components/icons';

export type IconType = keyof typeof Icons;
export const iconTypes = Object.keys(Icons) as IconType[];

export interface IconProps {
  /** [필수] 사용 할 아이콘 타입(이름) */
  icon: IconType;
  /** [선택] 아이콘 색상 */
  color?: string;
  /** [선택] 아이콘 크기 */
  size?: string;
}

/**
 * svg icon을 등록하고 해당 아이콘의 이름을 사용해 Icon 컴포넌트를 생성합니다.
 *
 * - size는 string으로 사이즈를 지정할 수 있습니다.
 * - color는 rgb또는 코드를 입력하여 색상을 설정합니다.
 */
export const Icon = ({ icon, color, size }: IconProps) => {
  const SVGIcon = Icons[icon];
  return <SVGIcon fill={color} width={size} />;
};
