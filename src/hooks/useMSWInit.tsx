'use client';

import { useEffect } from 'react';

export const useMSWInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        (async () => {
          const { worker } = await import('@/mocks/browser');
          // 모든 api를 mock으로 하지 않았더라도 (일부는 실제 api일 수 있기 때문) server/worker가 통과시키도록 합니다.
          worker.start({ onUnhandledRequest: 'bypass' });
        })();
      }
    }
  }, []);
};
