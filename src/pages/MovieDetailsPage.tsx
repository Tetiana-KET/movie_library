import { DetailsHeader } from '@/components/details/DetailsHeader';
import { TrailerSection } from '@/components/details/TrailerSection';
import { MovieDetails } from '@/models/MovieDetails';
import { VideoInterface } from '@/models/VideoResponse';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';
import { fetchMovieTrailer } from '@/services/fetchMovieTrailer';
import { getTrailer } from '@/utils/getTrailer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '@/styles/details.css';
import { MovieInfo } from '@/components/details/MovieInfo';

export const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.id!;

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [trailer, setTrailer] = useState<VideoInterface | null>(null);

  const detailsHeaderProps = movieDetails
    ? {
        title: movieDetails.title,
        vote_average: movieDetails.vote_average,
        vote_count: movieDetails.vote_count,
        release_date: movieDetails.release_date,
        genres: movieDetails.genres,
        runtime: movieDetails.runtime,
        adult: movieDetails.adult,
      }
    : null;

  const movieInfoProps = movieDetails
    ? {
        genres: movieDetails.genres,
        overview: movieDetails.overview,
        release_date: movieDetails.release_date,
        countries: movieDetails.production_countries,
        status: movieDetails.status,
        language: movieDetails.spoken_languages,
        budget: movieDetails.budget,
        revenue: movieDetails.revenue,
        tagline: movieDetails.tagline,
        production_Companies: movieDetails.production_companies,
      }
    : null;

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        const [detailsRes, trailerRes] = await Promise.all([fetchMovieDetails(movieId), fetchMovieTrailer(movieId)]);
        setMovieDetails(detailsRes);

        const bestTrailer = getTrailer(trailerRes.results);
        setTrailer(bestTrailer);
      } catch (err) {
        console.error(err);
      }
    };
    void fetchData();
  }, [movieId]);

  return (
    <div className="details-wrap">
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
