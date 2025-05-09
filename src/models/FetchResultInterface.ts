import { MediaInterface } from './MovieInterface';

export interface FetchResultInterface {
  page: number;
  results: MediaInterface[];
  total_pages: number;
  total_results: number;
}
