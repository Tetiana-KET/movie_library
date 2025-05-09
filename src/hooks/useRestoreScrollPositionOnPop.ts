import { useEffect } from 'react';
import { NavigationType, useNavigationType } from 'react-router-dom';

export const useRestoreScrollPositionOnPop = (moviesLength: number) => {
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === NavigationType.Pop) {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition && moviesLength) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }, 0);
        sessionStorage.removeItem('scrollPosition');
      }
    }
  }, [navigationType, moviesLength]);
};
