import useData from './useData';

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: number | undefined) =>
  useData<Game>('games', { params: { genres: selectedGenre } }, [
    selectedGenre,
  ]);

export default useGames;

export { Game, Platform };
