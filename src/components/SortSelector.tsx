import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface SortSelectorProps {
  selectedOrder: string | null;
  updateSelectedOrder: (platform: string) => void;
}

const orderOptions = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date Added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release Date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average Rating' },
];

const SortSelector = ({
  selectedOrder,
  updateSelectedOrder,
}: SortSelectorProps) => {
  const selectedMenuLabel =
    orderOptions.find((order) => order.value === selectedOrder)?.label ||
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
            onClick={() => updateSelectedOrder(orderOption.value)}
          >
            {orderOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
