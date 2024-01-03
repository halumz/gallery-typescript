import { useQuery } from '@tanstack/react-query';
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
}

export default ReactQueryClient;
