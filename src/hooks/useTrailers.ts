import Trailer from '../entities/Trailer';
import ReactQueryClient from '../services/react-query-client';

const useTrailers = (id: number) =>
  new ReactQueryClient<Trailer>(`games/${id}/movies`).getSingleUseQuery([
    'trailers',
    id,
  ]);

export default useTrailers;
