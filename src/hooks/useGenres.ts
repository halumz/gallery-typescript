import Genre from '../entities/Genre.ts';
import ReactQueryClient from '../services/react-query-client';
import defaultGenres from '../data/genres.ts';

const useGenres = () =>
  new ReactQueryClient<Genre>('genres', defaultGenres).getAllUseQuery([
    'genres',
  ]);

export default useGenres;
