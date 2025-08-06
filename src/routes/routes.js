import { Home, Hotel, Contact } from '../pages';
import { Layout } from '../components';
import { PATHS } from '../paths';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.HOTELS,
        element: <Hotel />,
      },
      {
        path: PATHS.CONTACTS,
        element: <Contact />,
      },
    ],
  },
];
