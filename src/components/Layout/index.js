// src/components/Layout.jsx
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header';

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

export default Layout;
