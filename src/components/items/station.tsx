import { List } from '@chakra-ui/react';
import { Item } from '@/components/items/stationItem';

interface ItemsProps {
  items: StationItem[];
  onSelect?: (name: StationItem) => void; // onSelect를 선택적으로 설정합니다.
}

const Items = ({ items, onSelect }: ItemsProps) => {
  const handleItemClick = (item: StationItem) => {
    onSelect?.(item);
  };
  return (
    <List>
      {items.map((item) => (
        <Item
          key={item.stationId}
          item={item}
          onClick={
            onSelect
              ? () => {
                  handleItemClick(item);
                }
              : undefined
          }
        />
      ))}
    </List>
  );
};

export default Items;
