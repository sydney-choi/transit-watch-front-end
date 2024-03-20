import { List } from '@chakra-ui/react';
import StationItem from './StationItem';

type Props = {
  items: TStationItem[];
};
const StationList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <StationItem item={item} />
    ))}
  </List>
);
export default StationList;
