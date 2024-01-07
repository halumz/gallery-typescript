import { Box, Card, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
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
    <Box>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </Box>
  );
};

export default GameDetailPage;
