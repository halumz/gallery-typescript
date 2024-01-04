import { HStack, Text } from '@chakra-ui/react';

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
  const fetchedGamesCount = formatNumber(
    data?.pages?.reduce((total, page) => total + page?.results?.length, 0)
  );

  const text = [
    selectedPlatform?.name || '',
    selectedGenre?.name || '',
    'Games ',
  ].join(' ');
  return (
    <HStack paddingBottom="1rem">
      <Text fontWeight="bold" fontSize="2xl">
        {text}
      </Text>
      <Text
        color="gray-500"
        fontSize="2xl"
      >{`(Showing ${fetchedGamesCount} of ${totalGamesCount})`}</Text>
    </HStack>
  );
};

export default SearchHeader;
