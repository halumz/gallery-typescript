import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SearchHeader from '../components/SearchHeader';
import SortSelector from '../components/SortSelector';

const HomePage = () => (
  <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr',
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX="5px">
        <GenreList />
      </GridItem>
    </Show>

    <GridItem area="main" paddingLeft="1rem">
      <SearchHeader />
      <HStack paddingBottom="1rem" gap="1rem">
        <PlatformSelector />
        <SortSelector />
      </HStack>
      <GameGrid />
    </GridItem>
  </Grid>
);
export default HomePage;
