'use client';

import { ChakraProvider } from '@chakra-ui/react';

const UIProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider resetCSS>{children}</ChakraProvider>
);

export default UIProvider;
