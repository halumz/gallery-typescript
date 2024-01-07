import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshot from '../hooks/useScreenShots';

interface GameScreenshotProps {
  id: number;
}

const GameScreenshot = ({ id }: GameScreenshotProps) => {
  const { data, isLoading, isRefetchError } = useScreenshot(id);
  if (isLoading || isRefetchError || !data) {
    return null;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} as="dl">
      {data.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
