import { Box } from '@chakra-ui/react';

interface GameCardContainerProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => (
  <Box borderRadius={10} overflow="hidden">
    {children}
  </Box>
);

export default GameCardContainer;
