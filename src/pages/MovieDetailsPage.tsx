import { DetailsHeader } from '@/components/details/DetailsHeader';
import { TrailerSection } from '@/components/details/TrailerSection';
import { MovieInfo } from '@/components/details/MovieInfo';
import { Spinner } from '@/components/ui/Spinner';
import { useDetailsLoader } from '@/hooks/useDetailsLoader';
import { useParams } from 'react-router';

export const MovieDetailsPage = () => {
  const { mediaType, id } = useParams();

  const { errorMessage, isLoading, trailer, detailsHeaderProps, movieInfoProps, movieDetails } = useDetailsLoader(
    mediaType,
    id,
  );

  return (
    <div className="max-w-[1620px] mx-auto mb-16 text-light-100 relative z-1 bg-dark-100 p-3 xs:p-10 rounded-2xl shadow-details">
      {isLoading && <Spinner />}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {detailsHeaderProps && <DetailsHeader {...detailsHeaderProps} />}
      <TrailerSection
        youtubeKey={trailer?.key}
        trailerName={trailer?.name}
        backdropPath={movieDetails?.backdrop_path}
        posterPath={movieDetails?.poster_path}
      />
      {movieInfoProps && <MovieInfo {...movieInfoProps} />}
    </div>
  );
};
