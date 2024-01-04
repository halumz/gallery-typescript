import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../state-management/gameQueryStore';

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

  const { data, isLoading, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (isLoading || error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
