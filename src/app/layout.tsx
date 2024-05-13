import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { UIProvider, DataProvider } from '@/components/provider';
// import '@/assets/css/main.scss';

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
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.MAP_API_KEY}&libraries=services,clusterer&autoload=false`}
        async
      />
      <UIProvider>
        <DataProvider>{children}</DataProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
