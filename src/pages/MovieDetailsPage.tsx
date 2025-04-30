import { DetailsHeader } from '@/components/details/DetailsHeader';
import { TrailerSection } from '@/components/details/TrailerSection';
import { MovieDetails } from '@/models/MovieDetails';
import { VideoInterface } from '@/models/VideoResponse';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';
import { fetchMovieTrailer } from '@/services/fetchMovieTrailer';
import { getTrailer } from '@/utils/getTrailer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    fetchData();
  }, [movieId]);

  return (
    <div className="max-w-[1620px] mx-auto text-light-100 relative z-1 bg-dark-100 p-3 xs:p-10 rounded-2xl shadow-details ">
      {detailsHeaderProps && <DetailsHeader {...detailsHeaderProps} />}
      <TrailerSection
        youtubeKey={trailer?.key}
        trailerName={trailer?.name}
        backdropPath={movieDetails?.backdrop_path}
        posterPath={movieDetails?.poster_path}
      />
    </div>
  );
};
