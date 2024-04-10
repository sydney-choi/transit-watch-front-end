'use client';

import { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { Station } from '@/types/common';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchStations } from '@/hooks/useGetQueries';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useFocus } from '@/hooks/useFocus';
import { Dropdown } from '@/components/search/Dropdown';
import { useStationStore } from '@/stores/useStationStore';
import { SearchIcon } from '@/components/icons';

export const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>('');
  const inputRef = useFocus();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { setStation } = useStationStore();
  const debouncedValue = useDebounce(searchText);
  const { data: searchData } = useSearchStations(debouncedValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleOptionClick = (option: Station) => {
    setStation(option);
    setSearchText(option.stationName);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = () => {
    setIsDropdownOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box position="relative">
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          ref={inputRef}
          type="text"
          placeholder="정류장으로 혼잡도를 검색해요"
          value={searchText}
          onChange={onChange}
          onClick={toggleDropdown}
          bgColor="white"
          boxShadow="0 2px 1px 0 rgba(0,0,0,.15)"
          _focus={{ boxShadow: 'none' }}
        />
      </InputGroup>
      {isDropdownOpen && searchData && <Dropdown ref={ref} options={searchData} onSelect={handleOptionClick} />}
    </Box>
  );
};
