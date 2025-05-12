export const MEDIA_CATEGORIES = [
  { type: 'movie', key: 'movie', label: 'Movies', path: '/movies.webp', genreId: null, excludedGenres: [16] },
  {
    type: 'tv',
    key: 'tv',
    label: 'Series',
    path: '/tv.webp',
    genreId: null,
    excludedGenres: [10762, 10763, 10764, 10767], // Kids, News, Reality, Talk
  },
  { type: 'movie', key: 'animation', label: 'Animation', path: '/animation.webp', genreId: 16 },
  { type: 'movie', key: 'documentaries', label: 'Documentaries', path: '/documentaries.webp', genreId: 99 },
];
