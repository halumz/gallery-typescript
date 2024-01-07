import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => (
  <Box marginY="1rem">
    <Heading as="dt" fontSize="md" color="gray.600">
      {term}
    </Heading>
    {children}
  </Box>
);

export default DefinitionItem;
