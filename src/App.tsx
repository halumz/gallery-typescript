import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main aside"`,
        }}
      >
        <GridItem bg="coral" area="nav">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem bg="gold" area="aside">
            Aside
          </GridItem>
        </Show>
        <GridItem bg="dodgerblue" area="main">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
