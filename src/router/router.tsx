import { Layout } from '@/components/Layout';
import { MainPage } from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // // errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      // 	{
      // 		path: '/otherPath',
      // 		element: <Page />,
      // 	},
      // 	{
      // 		path: '/details/:id',
      // 		element: <Details />,
      // 	},
    ],
  },
]);
export default router;
