import { Box } from '@chakra-ui/react';

interface GameCardContainerProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => (
  <Box
    _hover={{
      transform: 'scale(1.03)',
      transition: 'transform 0.2s ease-in-out',
    }}
    borderRadius={10}
    overflow="hidden"
  >
    {children}
  </Box>
);

export default GameCardContainer;
