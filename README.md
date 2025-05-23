# 🎥 Cinemix

## 🚀 [Deploy](https://movie-library-cinemix.netlify.app/)

## 📝 Description

Movie Library is a modern and responsive web application that allows users to discover, search, and explore a variety of movies. With a clean UI and smooth user experience, it showcases trending content dynamically and ensures accessibility across all devices.

This project uses a free public movie API (TMDB) and therefore full movie playback is not available. Users can view movie descriptions, posters, and trailers.

Designed as a lightweight and efficient tool for discovering new movies, managing favorites, and watching trailers.

## ✨ Key features:

- [x] **Browse All Movies and Series**
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

- [x] **Search Movies and Series**
      Quickly find specific movies by title using an intuitive search bar.

- [x] **Trending Media Integration**  
       Displays trending movies and series fetched from an external API based on popularity.

- [x] **Responsive Trending Slider with Manual Navigation**  
       A responsive carousel that allows users to manually scroll through trending movies using navigation buttons.  
       The layout adapts to different screen sizes, ensuring an optimal viewing experience across devices.

- [x] **Hero Banner Featuring Trending Movies**
      Displays 3 random trending movies in a stylish hero banner.

- [x] **Media Category Switching**

      - The project includes functionality to show media content by category (e.g., Movies, Series, Anime, etc.).
      - Users can select a category from a grid of category cards.
      - On category selection, the app fetches media data from the TMDB API based on the chosen type.
      - The selected category is reflected in the URL query parameters, enabling consistent browser navigation (back/forward).
      - When switching categories, the pagination resets to the first page to avoid inconsistencies.

- [x] **Seamless URL State Synchronization**

      - *Persistent State Across Navigation*
      The app synchronizes key UI states (category, page, and search query) with the browser URL using useSearchParams.
      This ensures deep linking, smooth back/forward navigation, and proper state restoration on reload.

      - *Smart Search Behavior*
      When performing a search, the current page is saved in sessionStorage; Pagination resets to page 1 for search results;
      Category switches to all; Other categories are temporarily disabled to avoid mixing search and category filtering.
      A scroll-to-section animation brings results into view.

      - *Upon clearing the search*: The app restores the previously selected category and page;
      The search query is removed from the URL; Category buttons are re-enabled.

      - *Deep Linking & Restoration*
      On direct URL entry (e.g., ?category=drama&page=5), the correct category and page load automatically.
      On return from the movie details page, scroll position, category, and page are restored for a seamless experience.

- [x] **Details Page with Trailers**
      Access detailed movie pages with full descriptions, ratings, genres, release dates, and integrated trailers for a quick preview.

-[] 🎬 Actor Page

- On each movie’s details page, users will see a list of main actors.
- Clicking on an actor opens a dedicated **Actor Details Page**.
- The Actor Details Page shows:

  - Actor’s profile info (name, photo, biography, birthdate, etc.).
  - A list of movies in which the actor has appeared.

- [] **Advanced Filtering**
  Filter movies by release year, genre, or even exclude unwanted genres (e.g., include "comedy" but exclude "thriller").

- [x] **Sorting Functionality**
      Sort movies by release year, rating, popularity, vote count in asc and desc order.

- [] **Dark/Light Mode**
  Use a theme toggle to switch between dark and light modes based on user preference.

- [x] **Scroll to Top Button**  
       A "Scroll to Top" button that appears when the user scrolls down the page.  
       This button allows users to quickly return to the top of the page for easier navigation, especially when browsing long lists of movies.  
       It fades in when the user scrolls down and fades out when the user is at the top of the page.

- [] **User Authentication (Login/Signup)**
  Allow users to create accounts to save their favorites and personalize their experience.

- [] **Favorites Management**
  Add and remove movies from your personal favorites list for quick access to your preferred titles.

- [] **Internationalization (i18n)**
  Support multiple languages to reach a broader audience.

- [x] **Modern UI/UX**
      A clean, modern, and user-friendly interface focused on great user experience and smooth navigation.

- [x] **Responsive Design**
      Fully responsive layout down to 320px screen width, ensuring a seamless experience across mobile, tablet, and desktop devices.

- [] **Error Handling and Loading States**
  Proper error messages and loading indicators provide clear feedback to users during interactions. (Error boundary)

## 🛠 Technology stack

- Language: [**TypeScript**](https://www.typescriptlang.org/)
- Main library: [**React**](https://react.dev/)
- Linters: [**ESLint**](https://eslint.org/), [**Prettier**](https://prettier.io/)
- Styling: [**TailwindCSS**](https://tailwindcss.com/)
- Builder: [**Vite**](https://vitejs.dev/)
- Routing: [**React Router**](https://reactrouter.com/en/main)
- Hosting: [**Netlify**](https://www.netlify.com/)
- Backend: [**Appwrite**](https://cloud.appwrite.io/console/onboarding)
- External API: [**The Movie Database (TMDB)**](https://developer.themoviedb.org/docs)

### 🌐 API Endpoints Used (TMDB)

- `GET /genre/movie/list` — fetch movie genres
- `GET /movie/{movie_id}` — fetch full movie details
- `GET /movie/{movie_id}/videos` — fetch trailers
- `GET /trending/movie/day` — fetch trending movies
- `GET /search/movie` — search movies by keyword

- `GET /discover/movie` — discover movies (e.g., by popularity)
- `GET /movie/{movie_id}/credits` — fetch movie cast
- `GET /person/{person_id}` — fetch actor details
- `GET /person/{person_id}/movie_credits` — fetch actor's filmography

## 🖼️ Visuals

# ⚙️ Installation

Follow these steps to set up the project locally on your machine.

### 🔧 Prerequisites

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

## 🆘 Support

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

## 🧾 Scripts available

### 🧱 Build

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
