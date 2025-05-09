import { MovieDetails, SeriesDetailsInterface } from '@/models/MovieDetails';
import { VideoInterface } from '@/models/VideoResponse';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';
import { fetchMovieTrailer } from '@/services/fetchMovieTrailer';
import { getTrailer } from '@/utils/getTrailer';
import { useEffect, useState } from 'react';

export const useDetailsLoader = (mediaType: string | undefined, movieId: string | undefined) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetails | SeriesDetailsInterface | null>(null);
  const [trailer, setTrailer] = useState<VideoInterface | null>(null);

  const isMovie = mediaType === 'movie';
  const isTv = mediaType === 'tv';

  const detailsHeaderProps =
    movieDetails && isMovie
      ? {
          title: (movieDetails as MovieDetails).title,
          name: movieDetails.production_companies,
          voteAverage: movieDetails.vote_average,
          voteCount: movieDetails.vote_count,
          releaseDate: (movieDetails as MovieDetails).release_date,
          genres: movieDetails.genres,
          runtime: (movieDetails as MovieDetails).runtime,
          adult: movieDetails.adult,
        }
      : movieDetails && isTv
        ? {
            title: (movieDetails as SeriesDetailsInterface).name,
            voteAverage: movieDetails.vote_average,
            voteCount: movieDetails.vote_count,
            releaseDate: (movieDetails as SeriesDetailsInterface).first_air_date,
            genres: movieDetails.genres,
            runtime: (movieDetails as SeriesDetailsInterface).episode_run_time[0] || NaN,
            adult: movieDetails.adult,
            seasonsNumber: (movieDetails as SeriesDetailsInterface).number_of_seasons,
          }
        : null;

  const movieInfoProps = movieDetails
    ? {
        genres: movieDetails.genres,
        overview: movieDetails.overview,
        releaseDate: (movieDetails as MovieDetails).release_date,
        countries: movieDetails.production_countries,
        status: movieDetails.status,
        language: movieDetails.spoken_languages,
        budget: (movieDetails as MovieDetails).budget,
        revenue: (movieDetails as MovieDetails).revenue,
        tagline: movieDetails.tagline,
        productionCompanies: movieDetails.production_companies,
      }
    : null;

  useEffect(() => {
    if (!movieId || !mediaType) return;

    const fetchData = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const [detailsRes, trailerRes] = await Promise.all([
          fetchMovieDetails(mediaType, movieId),
          fetchMovieTrailer(mediaType, movieId),
        ]);
        setMovieDetails(detailsRes);

        const bestTrailer = getTrailer(trailerRes.results);
        setTrailer(bestTrailer);
      } catch (err: unknown) {
        setErrorMessage(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };
    void fetchData();
  }, [movieId]);
  console.log(movieDetails);

  return { errorMessage, isLoading, trailer, detailsHeaderProps, movieInfoProps, movieDetails };
};
