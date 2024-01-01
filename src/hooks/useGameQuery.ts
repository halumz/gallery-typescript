import { useState } from 'react';
import GameQuery from '../models/GameQuery';
import Genre from '../models/Genre';
import Platform from '../models/Platform';

const useGameQuery = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const setGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const setPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const setOrder = (ordering: string) => {
    setGameQuery({ ...gameQuery, ordering });
  };

  return { gameQuery, setGenre, setPlatform, setOrder };
};

export default useGameQuery;
