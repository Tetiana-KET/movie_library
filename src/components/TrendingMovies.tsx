import { TrendingInterface } from '@/models/MovieInterface';
import React from 'react';
import { MiniArrowIcon } from './ui/MiniArrowIcon';
import TrendingCard from './TrendingCard';
import { useCarousel } from '@/hooks/useCarousel';

interface TrendingMoviesProps {
  trendingMovies: TrendingInterface[];
}

const TrendingMovies = ({ trendingMovies }: TrendingMoviesProps) => {
  const { slideIndex, maxIndex, containerRef, slideRef, sliderTrackRef, nextSlide, prevSlide } = useCarousel(
    trendingMovies.length,
  );

  return (
    <section className="trending">
      <h2>Popular now</h2>
      <div className="carousel_container">
        <div className={`carousel_button-wrap prev ${slideIndex === 0 ? 'hidden' : ''}`}>
          <button onClick={prevSlide}>
            <MiniArrowIcon />
          </button>
        </div>
        <div className="track-wrap" ref={containerRef}>
          {trendingMovies.length && (
            <ul className="flex transition-transform duration-500 ease-in-out" ref={sliderTrackRef}>
              {trendingMovies.map((movie, index) => (
                <TrendingCard key={movie.id} movie={movie} index={index} slideRef={slideRef} />
              ))}
            </ul>
          )}
        </div>
        <div className={`carousel_button-wrap next ${slideIndex === maxIndex ? 'hidden' : ''}`}>
          <button onClick={nextSlide}>
            <MiniArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrendingMovies);
