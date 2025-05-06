import { useEffect, useRef, useState } from 'react';

export const useCarousel = (itemsLength: number) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const slideRef = useRef<HTMLLIElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderTrackRef = useRef<HTMLUListElement | null>(null);

  const maxIndex = Math.max(0, itemsLength - visibleCount);

  useEffect(() => {
    const updateSizes = () => {
      const slideW = slideRef.current?.offsetWidth ?? 0;
      const containerW = containerRef.current?.offsetWidth ?? 0;

      setSlideWidth(slideW);
      setVisibleCount(Math.floor(containerW / slideW) || 1);
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  useEffect(() => {
    if (sliderTrackRef.current && slideWidth) {
      sliderTrackRef.current.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  }, [slideIndex, slideWidth]);

  const nextSlide = () => {
    setSlideIndex((prev) => Math.min(prev + visibleCount, maxIndex));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  return { slideIndex, maxIndex, containerRef, slideRef, sliderTrackRef, nextSlide, prevSlide };
};
