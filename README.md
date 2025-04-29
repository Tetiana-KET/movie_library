# Cinemix

## [Deploy](https://movie-library-cinemix.netlify.app/)

## [Figma Design](https://www.figma.com/design/kdu6x1bqzyCMbzezudt6s2/Movie-App-w--React?node-id=2-2&p=f&t=Du6vBbRR82WDrjAC-0)

## Description

Movie Library is a modern and responsive web application that allows users to discover, search, and explore a variety of movies. With a clean UI and smooth user experience, it showcases trending content dynamically and ensures accessibility across all devices.

This project uses a free public movie API (TMDB) and therefore full movie playback is not available. Users can view movie descriptions, posters, and trailers.

Designed as a lightweight and efficient tool for discovering new movies, managing favorites, and watching trailers.

## Key features:

- [x] **Browse All Movies**
      Explore a wide range of movies across different genres, with easy navigation through detailed movie listings.
      **Note:** Only the first 10,000 results (500 pages) are available due to limitations of the _free_ API tier.

- [x] **Pagination**
      Navigate efficiently through movie results with advanced pagination.  
       Includes:

      - Navigation arrows to move forward and backward one page at a time.
      - Display of the first and last page for quick access.
      - Current page highlighted with two adjacent page numbers before and after it.
      - Ellipsis (`...`) to represent skipped page ranges for cleaner UI on large datasets.
      - Responsive adjustments to reduce visible buttons on smaller screens.
      - Maximum of 500 pages displayed due to limitations of the free API.

- [x] **Search Movies**
      Quickly find specific movies by title using an intuitive search bar.

- [x] **Trending Movies Algorithm**
      A dynamic system that highlights trending movies based on user searches and popularity.

- [] **Hero Banner Featuring Trending Movies**
  The homepage features a dynamic hero banner showcasing the most popular movies.

- [] **User Authentication (Login/Signup)**
  Allow users to create accounts to save their favorites and personalize their experience.

- [] **Favorites Management**
  Add and remove movies from your personal favorites list for quick access to your preferred titles.

- [] **Details Page with Trailers**
  Access detailed movie pages with full descriptions, ratings, genres, release dates, and integrated trailers for a quick preview.

- [] **Advanced Filtering**
  Filter movies by release year, genre, or even exclude unwanted genres (e.g., include "comedy" but exclude "thriller").

- [] **Sorting Functionality**
  Sort movies by release year, rating, popularity, or other available fields for a more personalized browsing experience.

- [] **Dark/Light Mode**
  Use a theme toggle to switch between dark and light modes based on user preference.

- [] **Internationalization (i18n)**
  Support multiple languages to reach a broader audience.

- [x] **Modern UI/UX**
      A clean, modern, and user-friendly interface focused on great user experience and smooth navigation.

- [x] **Responsive Design**
      Fully responsive layout down to 320px screen width, ensuring a seamless experience across mobile, tablet, and desktop devices.

- [] **Error Handling and Loading States**
  Proper error messages and loading indicators provide clear feedback to users during interactions.

## Technology stack

- Language: [**TypeScript**](https://www.typescriptlang.org/)
- Main library: [**React**](https://react.dev/)
- Linters: [**ESLint**](https://eslint.org/), [**Prettier**](https://prettier.io/)
- Styling: [**TailwindCSS**](https://tailwindcss.com/)
- Builder: [**Vite**](https://vitejs.dev/)
- Routing: [**React Router**](https://reactrouter.com/en/main)
- Hosting: [**Netlify**](https://www.netlify.com/)
- Backend: [**Appwrite**](https://cloud.appwrite.io/console/onboarding)

## Visuals

# Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have node.js installed on your machine before proceeding with the setup or installation process.
To check if Node.js is installed, you can use the following command:

```
node -v
```

Make sure nmp is installed by running

```
npm -v
```

## To get started with this project, follow the steps below:

1. Clone the repository:

```
git clone `url`
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

This will start the application at http://localhost:5173 (or another available port).

## Usage

## Support

For any issues or questions, feel free to open an issue or reach out in any way that is comfortable for you.

<div id="badges">
 <a href="https://t.me/Tatiana_1000_Dribnyz" target="_blank">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="telegram"/>
 </a>
 <a href="mailto:belangelphone@gmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="mail"/>
 </a>
 <a href="https://discordapp.com/users/674720964143218723" target="_blank">
  <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="discord"/>
 </a>
 <a href="https://www.linkedin.com/in/tatiana-ket/" target="_blank">
  <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>
 </a>
 <a href="tel:+380507368706" target="_blank">
    <img src="https://img.shields.io/badge/Phone-%2300B0D8.svg?style=for-the-badge&logo=phone&logoColor=white" alt="phone"/>
  </a>
</div>

## Scripts available

### Build

To build the project run

```
npm run build
```

This will transpile the TypeScript files with tsc and then build the project using vite. The build will be stored in the dist/ directory.

### To check for code style and potential errors in the `src/` directory run Linting Commands:

_For JavaScript linting:_

```
npm run lint
```

_For CSS linting:_

```
npm run lint:css
```

_To run both linters at once:_

```
npm run lint:all
```

### ESLint fix issues

To automatically fixe ESLint errors and code style issues in the `src/` directory run:

```
npm run lint:fix
```

This will fix all fixable issues in your code (like formatting or minor rule violations) in the src/ directory.

### Check the production build

To check if the production build looks OK in your local environment use:

```
npm run build
npm run preview
```

This command uses vite preview to serve the production build locally. _Note: vite preview is intended for previewing the build locally, not as a production server._

**Or use a one-liner:**

```
npm run preview:build
```

### Prettier check

To check if your files in the `src/` directory are formatted run

```
npm run prettier
```

This will output a human-friendly message and a list of unformatted files, if any.
It will run `prettier --check --ignore-unknown src/`, that is set to ignore unknown file types. Prettier will not attempt to check files with extensions that it does not recognize.

### Prettier fix issues

To fix code formatting issues in the `src/` directory using Prettier run:

```
npm run prettier:fix
```

This will run Prettier and format all unformatted files in the src/ directory. It also uses the `--ignore-unknown` flag to avoid formatting files with extensions Prettier doesn't recognize.

## Technical Requirements

## Roadmap

## TODO:
