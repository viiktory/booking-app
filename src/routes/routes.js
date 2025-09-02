import { Home, AboutUs, Hotel, HotelDetails, Blog, BlogDetails, Contact, Error } from '../pages';
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
        path: PATHS.ABOUT_PAGE,
        element: <AboutUs />,
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
        path: PATHS.BLOG.blog,
        element: <Blog />,
      },
      {
        path: PATHS.BLOG.details,
        element: <BlogDetails />,
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
