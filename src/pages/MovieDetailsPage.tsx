import { DetailsHeader } from '@/components/details/DetailsHeader';
import { TrailerSection } from '@/components/details/TrailerSection';
import { MovieInfo } from '@/components/details/MovieInfo';
import { Spinner } from '@/components/ui/Spinner';
import { useDetailsLoader } from '@/hooks/useDetailsLoader';
import { useParams } from 'react-router';
import '@/styles/details.css';

export const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.id;

  const { errorMessage, isLoading, trailer, detailsHeaderProps, movieInfoProps, movieDetails } =
    useDetailsLoader(movieId);

  return (
    <div className="details-wrap">
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
