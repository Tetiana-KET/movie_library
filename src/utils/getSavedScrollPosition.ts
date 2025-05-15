import { ScrollFlags } from './saveScrollPosition';

export const getSavedScrollPosition = () => {
  const raw = sessionStorage.getItem('SCROLL_FLAGS');
  if (!raw) return 0;

  try {
    const data = JSON.parse(raw) as ScrollFlags;
    return data.scrollY;
  } catch {
    return 0;
  }
};
