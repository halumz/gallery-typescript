import { Heading } from '@chakra-ui/react';

import GameQuery from '../models/GameQuery';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGames from '../hooks/useGames';

interface SearchHeaderProps {
  gameQuery: GameQuery;
}

const formatNumber = (num: number = 0) => new Intl.NumberFormat().format(num);

const SearchHeader = ({ gameQuery }: SearchHeaderProps) => {
  const { data } = useGames(gameQuery);
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const totalGamesCount = formatNumber(data?.pages?.[0]?.count);

  const text = [
    totalGamesCount,
    selectedPlatform?.name || '',
    selectedGenre?.name || '',
    'Games ',
  ].join(' ');
  return (
    <Heading as="h1" paddingBottom="1rem" fontSize="3xl">
      {text}
    </Heading>
  );
};

export default SearchHeader;
