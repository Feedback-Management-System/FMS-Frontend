import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AdminHomePage } from 'pages/admin';

import { Sidebar } from 'components';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    Link,
    BrowserRouter,
    Outlet,
} from 'react-router-dom';

import { LandingPage, LoginPage } from 'pages';

const AppLayout = () => (
    <>
        <Sidebar />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/admin',
                element: <AdminHomePage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
