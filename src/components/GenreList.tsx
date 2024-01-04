import {
  Button,
  Card,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
  Text,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../state-management/gameQueryStore';

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  const { data, isLoading, error } = useGenres();
  if (isLoading) {
    return (
      <Card
        width="100%"
        height="70vh"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner />
      </Card>
    );
  }

  if (error) {
    return null;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom="1rem">
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <HStack key={genre.id} gap="1rem" paddingY=".5rem">
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={genre.image_background}
              alt={genre.name}
              objectFit="cover"
            />

            <Button variant="link" onClick={() => setGenreId(genre.id)}>
              <Text
                textAlign="left"
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                whiteSpace="wrap"
              >
                {genre.name}
              </Text>
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
