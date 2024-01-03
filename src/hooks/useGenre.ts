import useGenres from './useGenres';

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.results?.find((Genre) => Genre.id === id);
};

export default useGenre;
