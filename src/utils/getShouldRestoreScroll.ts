import { ScrollFlags } from './saveScrollPosition';

export const getShouldRestoreScroll = () => {
  const raw = sessionStorage.getItem('SCROLL_FLAGS');
  if (!raw) return false;

  try {
    const data = JSON.parse(raw) as ScrollFlags;
    return data.shouldRestoreScroll === true;
  } catch {
    return false;
  }
};
