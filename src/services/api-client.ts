import axios, { AxiosRequestConfig } from 'axios';
import FetchResponse from '../models/FetchResponse';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e214a4a8b90a4887a5190b1eeeef8f88',
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);

  get = (id: string | number, config?: AxiosRequestConfig) =>
    axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((response) => response.data);
}

export default ApiClient;
