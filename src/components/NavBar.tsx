import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../assets/react.svg';
import SearchInput from './SearchInput';

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="1rem">
      <Link to="/">
        <Image src={logo} alt="logo" boxSize="2rem" />
      </Link>
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
