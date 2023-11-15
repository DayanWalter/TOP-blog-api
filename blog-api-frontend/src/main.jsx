import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root.jsx';
import ErrorPage from './components/ErrorPage';

import Home from './components/Home.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Post from './components/Post.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },

      {
        path: '/post/:postid',
        element: <Post />,
        loader({ params }) {
          return params;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
