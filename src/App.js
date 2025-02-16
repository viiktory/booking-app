import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { hotelsLoader } from './utils/hotelsLoader';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Hotels from './pages/HotelsPage';
import Blog from './pages/BlogPage';
import Contact from './pages/ContactPage';
import { useSelector } from 'react-redux';
import './styles/global/reset.scss';
import './styles/global/theme.scss';

const Layout = () => {
    const theme = useSelector((state) => state.theme.mode);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>Something went wrong!</div>,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/hotels', element: <Hotels />, loader: hotelsLoader },
            { path: '/blog', element: <Blog /> },
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
