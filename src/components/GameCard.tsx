import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import PlatformList from './Platforms';
import CriticScore from './CriticScore';
import { cropImage } from '../services/image-url';
import Game from '../models/Game';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={cropImage(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game?.parent_platforms.map(({ platform }) => platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
