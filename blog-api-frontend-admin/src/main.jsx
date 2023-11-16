import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root.jsx';
import Posts from './components/Posts.jsx';

import ErrorPage from './components/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Comments from './components/Comments.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/comments',
        element: <Comments />,
      },

      // {
      //   path: '/post/:postid',
      //   element: <Post />,
      //   loader({ params }) {
      //     return params;
      //   },
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
