import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = Array.from({ length: 15 }, (_, i) => i);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <Box key="loader" width="100%" padding="1rem" textAlign="center">
          <Spinner />
        </Box>
      }
    >
      <SimpleGrid spacing={10} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages?.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
export default GameGrid;
