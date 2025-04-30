export interface VideoInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string; // YouTube video ID
  site: 'YouTube' | 'Vimeo' | string;
  size: 360 | 480 | 720 | 1080 | 2160 | number;
  type:
    | 'Trailer'
    | 'Teaser'
    | 'Clip'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Bloopers'
    | 'Opening Credits'
    | 'Recap'
    | 'Interview'
    | string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface VideoResponse {
  id: number;
  results: VideoInterface[];
}
