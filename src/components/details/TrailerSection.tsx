/* eslint-disable react-dom/no-unsafe-iframe-sandbox */
import { getImagePath } from '@/utils/getImagePath';

interface TrailerProps {
  youtubeKey: string | undefined;
  trailerName: string | undefined;
  backdropPath: string | null | undefined;
  posterPath: string | null | undefined;
}

export const TrailerSection = ({ youtubeKey, trailerName, backdropPath, posterPath }: TrailerProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-10">
      <div className="rounded-2xl overflow-hidden basis-1/3 aspect-square">
        <img className="w-full h-full object-cover" src={getImagePath(posterPath)} alt="poster for movie" />
      </div>
      <div className="w-full rounded-2xl overflow-hidden basis-2/3 aspect-video">
        {youtubeKey ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            allowFullScreen
            title={trailerName}
            sandbox="allow-scripts allow-same-origin allow-presentation"
          />
        ) : (
          <div className="relative">
            <img
              className="w-full h-full rounded-2xl overflow-hidden basis-2/3 aspect-video"
              src={getImagePath(backdropPath)}
              alt="poster for movie"
            />
            <span className="absolute bottom-[20px] left-[20px] bg-dark-100/50 p-5 rounded-md text-3xl text-white font-semibold">
              Trailer is not available
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
