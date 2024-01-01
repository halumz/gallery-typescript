import { Badge } from '@chakra-ui/react';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const bg = score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red';
  return (
    <Badge colorScheme={bg} fontSize=".75rem" padding=".3rem .8rem">
      {score}
    </Badge>
  );
};

export default CriticScore;
