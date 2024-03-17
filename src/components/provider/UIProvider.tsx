'use client';

import { ChakraProvider } from '@chakra-ui/react';

export const UIProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider resetCSS>{children}</ChakraProvider>
);
