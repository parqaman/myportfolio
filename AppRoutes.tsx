import React from 'react';
import { Navigate, Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './src/pages/HomePage'

export type RouteConfig = RouteProps & { path: string; isPrivate?: boolean };

export const routes: RouteConfig[] = [
  {
    path: '/home',
    isPrivate: true,
    element: <HomePage />,
  },
  {
    path: '/',
    isPrivate: true,
    element: <Navigate to={'/home'} replace />,
    index: true,
  },
];

export type AuthRequiredProps = {
  children: React.ReactNode;
  to?: string;
};

export const AppRoutes = () => {
  return <Routes>{routes.map((route) => (
    <Route key={route.path} element={route.element} {...route} />
  ))}</Routes>;
};