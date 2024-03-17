'use client';

import { Box } from '@chakra-ui/react';
import Items from '@/components/items/station';
import { StationItem } from '@/app/lib/constant';
import { forwardRef } from 'react';

interface DropdownProps {
  options: Array<StationItem>;
  onSelect: (option: StationItem) => void;
}

const Dropdown = forwardRef<HTMLDivElement | null, DropdownProps>(({ options, onSelect }, ref) => (
    <Box
      position="absolute"
      top="100%"
      left="0"
      right="0"
      zIndex="1"
      border="1px"
      borderColor="gray.200"
      borderRadius="5px"
      boxShadow="md"
      bg="white"
      ref={ref}
    >
      <Items items={options} onSelect={onSelect} />
    </Box>
  ));

export default Dropdown;
