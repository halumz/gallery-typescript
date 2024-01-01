import { HStack, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import logo from '../assets/react.svg';

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="1rem" justifyContent="space-between">
      <Image src={logo} alt="logo" boxSize="2rem" />
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
