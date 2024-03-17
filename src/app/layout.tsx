import type { Metadata } from 'next';
import { UIProvider } from '@/components/provider/UIProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '정류장 혼잡도',
  description: '내 주위의 정류장 혼잡도를 확인해보자!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <UIProvider>{children}</UIProvider>
    </body>
  </html>
);

export default RootLayout;
