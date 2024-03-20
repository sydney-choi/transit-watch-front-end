'use client';

import { useState, useEffect } from 'react';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import useDebounce from '@/hooks/useDebounce';
import useOutsideClick from '@/hooks/useOutsideClick';
import SearchIcon from '@/components/icons/SearchIcon';
import Dropdown from '@/components/search/Dropdown';

const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // const [selectedOption, setSelectedOption] = useState<string>('');
  const debouncedValue = useDebounce(searchText);
  const options: StationItem[] = [
    { stationId: '123', name: '정류장', direction: '을왕리', stationNumber: ['12312'], hasBookmark: false },
    { stationId: '456', name: '정류장1', direction: '을왕리메인거리', stationNumber: ['123178'], hasBookmark: false },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleOptionClick = (option: StationItem) => {
    // setSelectedOption(option.stationId);
    setSearchText(option.name);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = () => {
    setIsDropdownOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (searchText) {
      // TODO api를 호출합니다
    }
  }, [debouncedValue, searchText]);

  return (
    <Box position="relative">
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="정류장으로 혼잡도를 검색해요"
          value={searchText}
          onChange={onChange}
          onClick={toggleDropdown}
          bgColor="white"
          boxShadow="0 2px 1px 0 rgba(0,0,0,.15)"
        />
      </InputGroup>
      {isDropdownOpen && <Dropdown ref={ref} options={options} onSelect={handleOptionClick} />}
    </Box>
  );
};

export default SearchInput;
