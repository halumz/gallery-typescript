import { Heading } from '@chakra-ui/react';

import GameQuery from '../models/GameQuery';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface SearchHeaderProps {
  gameQuery: GameQuery;
}
const SearchHeader = ({ gameQuery }: SearchHeaderProps) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const text = [
    selectedPlatform?.name || '',
    selectedGenre?.name || '',
    'Games',
  ].join(' ');

  return (
    <Heading as="h1" paddingBottom="1rem" fontSize="5xl">
      {text}
    </Heading>
  );
};

export default SearchHeader;
