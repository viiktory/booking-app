import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { hotelsLoader } from './utils/hotelsLoader';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Hotels from './pages/HotelsPage';
import HotelsDetailsPage from './pages/HotelsDetailsPage';
import Blog from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import Contact from './pages/ContactPage';
import Layout from './components/Layout';
import './styles/global/reset.scss';
import './styles/global/theme.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>Something went wrong!</div>,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/hotels', element: <Hotels />, loader: hotelsLoader },
            { path: '/hotels/:id', element: <HotelsDetailsPage /> },
            { path: '/blog', element: <Blog /> },
            { path: '/blog/:title', element: <BlogDetailsPage /> },
            { path: '/contact', element: <Contact /> },
            { path: '*', element: <div>404 - not found</div> },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
