import Game from '../models/Game';
import GameQuery from '../models/GameQuery';
import ReactQueryClient from '../services/react-query-client';

const useGames = (gameQuery: GameQuery) =>
  new ReactQueryClient<Game>('games').getAllUseQuery(['games', gameQuery], {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      search: gameQuery.search,
      ordering: gameQuery.ordering,
    },
  });

export default useGames;
