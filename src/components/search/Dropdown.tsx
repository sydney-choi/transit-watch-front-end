'use client';

import { forwardRef, memo } from 'react';
import { Box } from '@chakra-ui/react';
import { Station } from '@/types/common';
import { FixedSizeList as List, ListChildComponentProps, areEqual } from 'react-window';
import StationItem from '@/components/items/station/StationItem';

interface DropdownProps {
  options: Station[];
  onSelect: (option: Station) => void;
}

const Item = memo(({ index, style, data }: ListChildComponentProps) => {
  const { options, type, onSelect } = data;
  const option = options[index];

  const handleClick = (item: Station) => {
    onSelect(item);
  };

  return <StationItem style={style} type={type} item={option} onClick={() => handleClick(option)} />;
}, areEqual);

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
    <List
      itemSize={80}
      width={290}
      height={200}
      itemData={{ options, type: 'search', onSelect }}
      itemCount={options.length}
    >
      {Item}
    </List>
  </Box>
));

export default Dropdown;
