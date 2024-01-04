import Game from '../models/Game';
import GameQuery from '../models/GameQuery';
import ReactQueryClient from '../services/react-query-client';

const useGames = (gameQuery: GameQuery) =>
  new ReactQueryClient<Game>('games').getAllInfinityUseQuery(
    ['games', gameQuery],
    {
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        search: gameQuery.search,
        ordering: gameQuery.ordering,
        page_size: 24,
      },
    }
  );

export default useGames;
