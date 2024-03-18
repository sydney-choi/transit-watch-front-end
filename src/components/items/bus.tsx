import { List } from '@chakra-ui/react';
import Item from './busItem';

const Items = ({ items }: { items: BusItem[] }) => (
  <List>
    {items.map((item) => (
      <Item item={item} />
    ))}
  </List>
);

export default Items;
