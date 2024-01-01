import { HStack, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import logo from '../assets/react.svg';
import SearchInput from './SearchInput';

interface NavBarProps {
  onSearchQuery: (search: string) => void;
}

const NavBar = ({ onSearchQuery }: NavBarProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="1rem">
      <Image src={logo} alt="logo" boxSize="2rem" />
      <SearchInput onSearchQuery={onSearchQuery} />
      <IconButton
        aria-label={colorMode}
        onClick={toggleColorMode}
        background="transparent !important"
        icon={
          colorMode === 'light' ? (
            <MoonIcon boxSize="1.5rem" />
          ) : (
            <SunIcon boxSize="1.5rem" />
          )
        }
      />
    </HStack>
  );
};

export default NavBar;
