const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-100': 'var(--color-light-100)',
        'light-200': 'var(--color-light-200)',
        'gray-100': 'var(--color-gray-100)',
        'dark-100': 'var(--color-dark-100)',
        primary: 'var(--color-primary)',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
