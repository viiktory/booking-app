import { Home, Hotel, Contact, Error, HotelDetails } from '../pages';
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
        path: PATHS.HOTELS.hotels,
        element: <Hotel />,
      },
      {
        path: PATHS.HOTELS.details,
        element: <HotelDetails />,
      },
      {
        path: PATHS.CONTACTS,
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
];
