export interface ScrollFlags {
  scrollY: number;
  shouldRestoreScroll: boolean;
}

export const saveScrollPosition = () => {
  sessionStorage.setItem(
    'SCROLL_FLAGS',
    JSON.stringify({
      scrollY: window.scrollY,
      shouldRestoreScroll: true,
    }),
  );
};
