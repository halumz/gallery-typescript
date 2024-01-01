import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import Platform from '../models/Platform';

interface PlatformSelectorProps {
  selectedPlatform: Platform | null;
  updateSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({
  selectedPlatform,
  updateSelectedPlatform,
}: PlatformSelectorProps) => {
  const { data, isLoading, error } = usePlatforms();

  if (isLoading || error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => updateSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
