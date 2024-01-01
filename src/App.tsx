import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import useGameQuery from './hooks/useGameQuery';

function App() {
  const { gameQuery, setGenre, setPlatform, setOrder, setSearchQuery } =
    useGameQuery();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar onSearchQuery={setSearchQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            updateSelectedGenre={setGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft=".2rem" paddingBottom="1rem" gap="1rem">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            updateSelectedPlatform={setPlatform}
          />
          <SortSelector
            selectedOrder={gameQuery.ordering}
            updateSelectedOrder={setOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
