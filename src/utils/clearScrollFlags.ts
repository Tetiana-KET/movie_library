export const clearScrollFlags = () => {
  sessionStorage.removeItem('SCROLL_FLAGS');
  sessionStorage.removeItem('WAS_POP');
};
