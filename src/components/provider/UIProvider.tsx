'use client';

import { ChakraProvider } from '@chakra-ui/react';

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => <ChakraProvider resetCSS>{children}</ChakraProvider>;

export default UIProvider;
