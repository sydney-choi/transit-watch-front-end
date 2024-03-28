'use client';

import { useEffect } from 'react';

export const MSWInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        (async () => {
          const { worker } = await import('@/mocks/browser');
          worker.start();
        })();
      }
    }
  }, []);

  return null;
};
