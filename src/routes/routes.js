import { HomePage } from '../pages';
import { Layout } from '../components';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
