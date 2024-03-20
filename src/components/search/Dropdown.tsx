'use client';

import { forwardRef } from 'react';
import { Box, List } from '@chakra-ui/react';
import StationItem from '@/components/items/stationItem';

interface DropdownProps {
  options: StationItem[];
  onSelect?: (option: StationItem) => void;
}

const Dropdown = forwardRef<HTMLDivElement | null, DropdownProps>(({ options, onSelect }, ref) => {
  const handleOptionClick = (option: StationItem) => {
    onSelect?.(option);
  };
  return (
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
      <List>
        {options.map((option) => (
          <StationItem
            key={option.stationId}
            item={option}
            onClick={
              onSelect
                ? () => {
                    handleOptionClick(option);
                  }
                : undefined
            }
          />
        ))}
      </List>
    </Box>
  );
});

export default Dropdown;
