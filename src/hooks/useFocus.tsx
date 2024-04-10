import { useEffect, useRef } from 'react';

export const useFocus = () => {
  const element = useRef<HTMLInputElement>(null);

  useEffect(() => {
    element.current?.focus();
  }, []);

  return element;
};
