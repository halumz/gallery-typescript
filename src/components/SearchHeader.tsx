import { Heading } from '@chakra-ui/react';

import GameQuery from '../models/GameQuery';

interface SearchHeaderProps {
  gameQuery: GameQuery;
}
const SearchHeader = ({ gameQuery }: SearchHeaderProps) => {
  const text = [
    gameQuery.platform?.name || '',
    gameQuery.genre?.name || '',
    'Games',
  ].join(' ');

  return (
    <Heading as="h1" paddingBottom="1rem" fontSize="5xl">
      {text}
    </Heading>
  );
};

export default SearchHeader;
