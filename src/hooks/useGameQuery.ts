import { useState } from 'react';
import GameQuery from '../models/GameQuery';

const useGameQuery = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const setGenreId = (genreId: number) => {
    setGameQuery({ ...gameQuery, genreId });
  };

  const setPlatformId = (platformId: number) => {
    setGameQuery({ ...gameQuery, platformId });
  };

  const setOrder = (ordering: string) => {
    setGameQuery({ ...gameQuery, ordering });
  };

  const setSearchQuery = (search: string) => {
    setGameQuery({ ...gameQuery, search });
  };

  return { gameQuery, setGenreId, setPlatformId, setOrder, setSearchQuery };
};

export default useGameQuery;
