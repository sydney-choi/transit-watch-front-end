/* eslint-disable react/prop-types */

'use client';

import { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Station } from '@/types/common';
import { FixedSizeList as List } from 'react-window';
import StationItem from '@/components/items/station/StationItem';

interface DropdownProps {
  options: Station[];
  onSelect?: (option: Station) => void;
}

const Item = ({ index, data }) => {
  const { options, type, onSelect } = data;
  const option = options[index];
  const handleClick = (item) => {
    onSelect(item);
  };

  return <StationItem type={type} item={option} onClick={handleClick} />;
};

const Dropdown = forwardRef<HTMLDivElement | null, DropdownProps>(({ options, onSelect }, ref) => (
  // const handleOptionClick = (option: Station) => {
  //   onSelect?.(option);
  // };
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
    <List itemSize={100} height={200} itemData={{ options, type: 'search', onSelect }} itemCount={options.length}>
      {Item}
    </List>
  </Box>
));

export default Dropdown;
