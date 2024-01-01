import Game from '../models/Game';
import GameQuery from '../models/GameQuery';
import useData from './useData';

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    'games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.ordering]
  );

export default useGames;
