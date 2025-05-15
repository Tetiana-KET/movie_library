import { clearScrollFlags } from '@/utils/clearScrollFlags';
import { getSavedScrollPosition } from '@/utils/getSavedScrollPosition';
import { getShouldRestoreScroll } from '@/utils/getShouldRestoreScroll';
import { useEffect, useRef } from 'react';
import { NavigationType, useNavigationType } from 'react-router-dom';

export const useRestoreScrollPosition = ({ moviesLength, isLoading }: { moviesLength: number; isLoading: boolean }) => {
  const navigationType = useNavigationType();

  const wasPopRef = useRef(false);
  const hasRestored = useRef(false);

  useEffect(() => {
    if (navigationType === NavigationType.Pop) {
      wasPopRef.current = true;
    }
  }, [navigationType]);

  useEffect(() => {
    const savedPosition = getSavedScrollPosition();
    const shouldRestoreScroll = getShouldRestoreScroll();

    if (
      wasPopRef.current &&
      shouldRestoreScroll &&
      moviesLength > 0 &&
      !isLoading &&
      !hasRestored.current &&
      savedPosition
    ) {
      window.scrollTo(0, savedPosition);
      hasRestored.current = true;
      clearScrollFlags();
    }
  }, [moviesLength, isLoading]);
};
