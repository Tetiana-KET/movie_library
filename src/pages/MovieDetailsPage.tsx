import { DetailsHeader } from '@/components/details/DetailsHeader';
import { TrailerSection } from '@/components/details/TrailerSection';
import { MovieInfo } from '@/components/details/MovieInfo';
import { Spinner } from '@/components/ui/Spinner';
import { MovieDetails } from '@/models/MovieDetails';
import { VideoInterface } from '@/models/VideoResponse';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';
import { fetchMovieTrailer } from '@/services/fetchMovieTrailer';
import { getTrailer } from '@/utils/getTrailer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '@/styles/details.css';

export const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.id;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [trailer, setTrailer] = useState<VideoInterface | null>(null);

  const detailsHeaderProps = movieDetails
    ? {
        title: movieDetails.title,
        voteAverage: movieDetails.vote_average,
        voteCount: movieDetails.vote_count,
        releaseDate: movieDetails.release_date,
        genres: movieDetails.genres,
        runtime: movieDetails.runtime,
        adult: movieDetails.adult,
      }
    : null;

  const movieInfoProps = movieDetails
    ? {
        genres: movieDetails.genres,
        overview: movieDetails.overview,
        releaseDate: movieDetails.release_date,
        countries: movieDetails.production_countries,
        status: movieDetails.status,
        language: movieDetails.spoken_languages,
        budget: movieDetails.budget,
        revenue: movieDetails.revenue,
        tagline: movieDetails.tagline,
        productionCompanies: movieDetails.production_companies,
      }
    : null;

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const [detailsRes, trailerRes] = await Promise.all([fetchMovieDetails(movieId), fetchMovieTrailer(movieId)]);
        setMovieDetails(detailsRes);

        const bestTrailer = getTrailer(trailerRes.results);
        setTrailer(bestTrailer);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        }
        setErrorMessage('Unknown error');
      } finally {
        setIsLoading(false);
      }
    };
    void fetchData();
  }, [movieId]);

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
