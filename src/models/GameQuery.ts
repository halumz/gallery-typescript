export default interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string | null;
  search?: string | null;
}
