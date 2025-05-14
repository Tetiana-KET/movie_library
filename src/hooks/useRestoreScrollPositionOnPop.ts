import { useEffect, useRef } from 'react';
import { NavigationType, useNavigationType } from 'react-router-dom';

export const useRestoreScrollPositionOnPop = (moviesLength: number, isLoading: boolean) => {
  const navigationType = useNavigationType();

  const wasPopRef = useRef(false);
  const hasRestored = useRef(false);

  useEffect(() => {
    if (navigationType === NavigationType.Pop) {
      wasPopRef.current = true;
    }
  }, [navigationType]);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (wasPopRef.current && moviesLength > 0 && !isLoading && !hasRestored.current && savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      hasRestored.current = true;
      sessionStorage.removeItem('scrollPosition');
    }
  }, [moviesLength, isLoading]);
};
