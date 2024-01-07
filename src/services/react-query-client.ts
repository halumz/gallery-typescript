import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';

import FetchResponse from '../models/FetchResponse';
import GameQuery from '../models/GameQuery';
import ApiClient from './api-client';

class ReactQueryClient<T> {
  apiClient: ApiClient<T>;
  initialData?: FetchResponse<T>;
  staleTime?: number;

  constructor(
    endpoint: string,
    initialData?: FetchResponse<T>,
    staleTime: number = 1000 * 60 * 60 * 24
  ) {
    this.apiClient = new ApiClient<T>(endpoint);
    this.initialData = initialData;
    this.staleTime = staleTime;
  }

  getAllUseQuery = (
    queryKey: (string | GameQuery)[],
    config?: AxiosRequestConfig
  ) =>
    useQuery<FetchResponse<T>, AxiosError>({
      queryKey,
      queryFn: () => this.apiClient.getAll(config),
      staleTime: this.staleTime,
      initialData: this.initialData,
    });

  getSingleUseQuery = (
    queryKey: (string | number)[],
    config?: AxiosRequestConfig
  ) =>
    useQuery<T, AxiosError>({
      queryKey,
      queryFn: () => this.apiClient.get(config),
      staleTime: this.staleTime,
    });

  getAllInfinityUseQuery = (
    queryKey: (string | GameQuery)[],
    config?: AxiosRequestConfig
  ) =>
    useInfiniteQuery<FetchResponse<T>, AxiosError>({
      queryKey,
      queryFn: ({ pageParam }) => {
        if (config?.params) {
          config.params.page = pageParam;
        }
        return this.apiClient.getAll(config);
      },
      getNextPageParam: (lastPage, allPages = []) =>
        lastPage.next && allPages.length + 1,
      initialPageParam: 1,
      staleTime: this.staleTime,
    });
}

export default ReactQueryClient;
