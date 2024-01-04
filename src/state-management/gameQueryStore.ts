import { create } from 'zustand';
import GameQuery from '../models/GameQuery';

type State = {
  gameQuery: GameQuery;
  setSearchQuery: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrder: (ordering: string) => void;
};

const useGameQueryStore = create<State>((set) => ({
  gameQuery: {},
  setSearchQuery: (search) => set(() => ({ gameQuery: { search } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrder: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
}));

export default useGameQueryStore;
