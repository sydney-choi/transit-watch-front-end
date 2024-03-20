import { List } from '@chakra-ui/react';
import BusItem from './BusItem';

type Props = {
  items: BusItem[];
};
const BusList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <BusItem item={item} />
    ))}
  </List>
);
export default BusList;
