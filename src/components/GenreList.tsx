import {
  Button,
  HStack,
  Text,
  Image,
  List,
  Spinner,
  Card,
  Heading,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import Genre from '../models/Genre';

interface GenreListProps {
  selectedGenre: Genre | null;
  updateSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, updateSelectedGenre }: GenreListProps) => {
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
        {data.map((genre) => (
          <HStack key={genre.id} gap="1rem" paddingY=".5rem">
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={genre.image_background}
              alt={genre.name}
              objectFit="cover"
            />

            <Button variant="link" onClick={() => updateSelectedGenre(genre)}>
              <Text
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
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
