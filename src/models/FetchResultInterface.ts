import { MovieInterface } from './MovieInterface';

export interface FetchResultInterface {
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}
