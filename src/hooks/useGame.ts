import Game from '../models/Game';
import ReactQueryClient from '../services/react-query-client';

const useGame = (slug: string) =>
  new ReactQueryClient<Game>('games').getSingleUseQuery(['games', slug], slug);

export default useGame;
