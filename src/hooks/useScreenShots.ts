import Screenshot from '../entities/Screenshot';
import ReactQueryClient from '../services/react-query-client';

const useScreenshot = (id: number) =>
  new ReactQueryClient<Screenshot>(`games/${id}/screenshots`).getSingleUseQuery(
    ['screenshots', id]
  );

export default useScreenshot;
