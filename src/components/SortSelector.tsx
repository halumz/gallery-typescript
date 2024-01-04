import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../state-management/gameQueryStore';

const orderOptions = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date Added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release Date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average Rating' },
];

const SortSelector = () => {
  const ordering = useGameQueryStore((state) => state.gameQuery.ordering);
  const setOrder = useGameQueryStore((state) => state.setOrder);

  const selectedMenuLabel =
    orderOptions.find((order) => order.value === ordering)?.label ||
    'Relevance';

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedMenuLabel}
      </MenuButton>
      <MenuList>
        {orderOptions.map((orderOption) => (
          <MenuItem
            key={orderOption.value}
            onClick={() => setOrder(orderOption.value)}
          >
            {orderOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
