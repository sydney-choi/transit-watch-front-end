import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import UIProvider from '@/components/provider/UIProvider';
import MSWInit from '@/components/MSWInit';
import DataProvider from '@/components/provider/DataProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '정류장 혼잡도',
  description: '내 주위의 정류장 혼잡도를 확인해보자!',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <MSWInit />
      <UIProvider>
        <DataProvider>{children}</DataProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
