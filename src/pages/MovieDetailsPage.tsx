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
    <div className="px-5 max-w-[1440px] mx-auto text-light-100 relative z-1">
      {movieDetails?.title}
      {trailer?.key}
    </div>
  );
};
