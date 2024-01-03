import Platform from '../models/Platform';
import ReactQueryClient from '../services/react-query-client';
import defaultPlatforms from '../data/platforms.ts';

const usePlatforms = () =>
  new ReactQueryClient<Platform>(
    'platforms/lists/parents',
    defaultPlatforms
  ).getAllUseQuery(['platforms']);

export default usePlatforms;
