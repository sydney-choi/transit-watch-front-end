import { CSSProperties } from 'react';

interface ButtonProps {
  /** [필수] 버튼 클릭시 이벤트 */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /** [선택] 버튼 스타일 */
  style?: CSSProperties;
  /** [선택] 버튼 안 컨텐츠 */
  children: React.ReactNode;
}

/**
 * svg icon을 등록하고 해당 아이콘의 이름을 사용해 Icon 컴포넌트를 생성합니다.
 *
 * - onClick 클릭 이벤트를 설정합니다.
 * - style 객체로 버튼 스타일을 설정합니다.
 * - children 버튼 안 컨텐츠를 설정합니다.
 */
export const Button = ({ onClick, style, children }: ButtonProps) => (
  <button type="button" style={style} onClick={onClick} aria-label="button">
    {children}
  </button>
);
