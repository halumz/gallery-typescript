import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ApiClient, { FetchResponse } from './api-client';
import { AxiosError, AxiosRequestConfig } from 'axios';

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

  getAllUseQuery = (queryKey: any[], config?: AxiosRequestConfig) =>
    useQuery<FetchResponse<T>, AxiosError>({
      queryKey,
      queryFn: () => this.apiClient.getAll(config),
      staleTime: this.staleTime,
      initialData: this.initialData,
    });

  getAllInfinityUseQuery = (queryKey: any[], config?: AxiosRequestConfig) =>
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
