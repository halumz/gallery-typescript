import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Image, useColorMode } from '@chakra-ui/react';

import logo from '../assets/react.svg';
import SearchInput from './SearchInput';

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="1rem">
      <Image src={logo} alt="logo" boxSize="2rem" />
      <SearchInput />
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
