import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import PlatformList from './Platforms';
import CriticScore from './CriticScore';
import { cropImage } from '../services/image-url';
import Game from '../models/Game';
import Emojis from './Emoji';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={cropImage(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game?.parent_platforms.map(({ platform }) => platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
        <Heading fontSize="1xl" marginTop="1rem">
          {game.name}
        </Heading>
        <Emojis rating={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
