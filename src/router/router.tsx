import { Layout } from '@/components/Layout';
import { MainPage } from '@/pages/MainPage';
import { MovieDetailsPage } from '@/pages/MovieDetailsPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/:mediaType/:id',
        element: <MovieDetailsPage />,
      },
    ],
  },
]);
export default router;
