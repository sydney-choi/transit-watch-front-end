'use client';

import { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Box, Text } from '@chakra-ui/react';
import { GetSearchStationsRequest, Station } from '@/types/common';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchStations } from '@/hooks/useGetQueries';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useFocus } from '@/hooks/useFocus';
import { Dropdown } from '@/components/search/Dropdown';
import { useStationStore } from '@/stores/useStationStore';
import { Icon } from '@/components/common/icon';
import { useCoordinatesStore } from '@/stores/useCoordinatesStore';

export const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>('');
  const inputRef = useFocus();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { setStation } = useStationStore();
  const debouncedValue = useDebounce(searchText);
  const { coordinates } = useCoordinatesStore();
  // TODO :get이 앞에 오면 동사형이므로 명사형으로 변경
  const searchStationsRequest: GetSearchStationsRequest = {
    searchText: debouncedValue,
    xlongitude: coordinates.lng,
    ylatitude: coordinates.lat,
  };
  const { data, isLoading } = useSearchStations(searchStationsRequest);

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
          <Icon icon="Search" size="32" />
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
      {isLoading ? (
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
          p={2}
        >
          <Text>검색중..🔮</Text>
        </Box>
      ) : (
        isDropdownOpen && data?.result && <Dropdown ref={ref} options={data.result} onSelect={handleOptionClick} />
      )}
    </Box>
  );
};
