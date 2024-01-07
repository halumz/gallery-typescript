import Game from '../models/Game';
import ReactQueryClient from '../services/react-query-client';

const useGame = (slug: string) =>
  new ReactQueryClient<Game>(`games/${slug}`).getSingleUseQuery([
    'games',
    slug,
  ]);

export default useGame;
