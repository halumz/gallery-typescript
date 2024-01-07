import Platform from './Platform';

export default interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: { name: string; id: number }[];
  publishers: { name: string; id: number }[];
  metacritic: number;
  rating: number;
}
