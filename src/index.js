import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  AdminHomePage, 
} from 'pages/admin';

import {
  Sidebar,
} from 'components';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import { LandingPage } from 'pages';

const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <AdminHomePage />
        ),
      },
      {
        path: "land",
        element: <LandingPage />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


