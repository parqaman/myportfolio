import React from 'react';
import { Navigate, Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import { MainPage } from './src/MainPage'

export type RouteConfig = RouteProps;

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <MainPage />,
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
