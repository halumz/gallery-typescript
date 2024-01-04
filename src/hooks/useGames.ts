import Game from '../models/Game';
import ReactQueryClient from '../services/react-query-client';
import useGameQueryStore from '../state-management/gameQueryStore';

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return new ReactQueryClient<Game>('games').getAllInfinityUseQuery(
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
};
export default useGames;
