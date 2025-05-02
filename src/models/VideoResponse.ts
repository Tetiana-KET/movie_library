export interface VideoInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string; // YouTube video ID
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface VideoResponse {
  id: number;
  results: VideoInterface[];
}
