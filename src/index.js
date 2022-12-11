import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

// eslint-disable-next-line import/order, import/extensions
import LoginProtected from './components/LoginProtected.jsx';
// eslint-disable-next-line import/extensions
import Protected from './components/Protected.jsx';


const AppLayout = () => (
    <>
        <Sidebar />
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
        />
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
                element: <LoginProtected component={LoginPage} />,
            },
            {
                path: '/admin',
                element: <Protected component={AdminHomePage} />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
