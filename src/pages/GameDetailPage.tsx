import {
  Card,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshot from '../components/GameScreenshot';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGame(slug!);
  if (isLoading || isError || !data) {
    return (
      <Card
        width="100%"
        height="85vh"
        justifyContent="center"
        alignItems="center"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Heading paddingBottom="1rem">OOps ...</Heading>
            <Text fontSize="2rem">Something went wrong</Text>
          </>
        )}
      </Card>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} as="dl">
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer id={data.id} />
        <GameScreenshot id={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
