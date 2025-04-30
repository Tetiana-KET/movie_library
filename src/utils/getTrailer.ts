import { VideoInterface } from '@/models/VideoResponse';

export const getTrailer = (videos: VideoInterface[]): VideoInterface | null => {
  if (!videos.length) return null;
  const officialTrailer = videos.find(
    (video) => video.site === 'YouTube' && video.official && video.type === 'Trailer',
  );
  if (officialTrailer) return officialTrailer;

  const teaser = videos.find((video) => video.site === 'YouTube' && video.type === 'Teaser');
  if (teaser) return teaser;

  return videos.find((video) => video.site === 'YouTube') ?? null;
};
