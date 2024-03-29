export default interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}
