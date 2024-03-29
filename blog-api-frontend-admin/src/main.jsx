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
import Post from './components/Post.jsx';
import PostCreate from './components/PostCreate.jsx';
import PostDelete from './components/PostDelete.jsx';
import PostUpdate from './components/PostUpdate.jsx';
import Comment from './components/Comment.jsx';
import CommentDelete from './components/CommentDelete.jsx';
import CommentUpdate from './components/CommentUpdate.jsx';
// import Comment from './components/Comment.jsx';

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
      {
        path: '/post/create',
        element: <PostCreate />,
      },

      {
        path: '/post/:postid',
        element: <Post />,
        loader({ params }) {
          return params;
        },
      },
      {
        path: '/post/:postid/delete',
        element: <PostDelete />,
        loader({ params }) {
          return params;
        },
      },
      {
        path: '/post/:postid/update',
        element: <PostUpdate />,
        loader({ params }) {
          return params;
        },
      },
      {
        path: '/post/:postid/comment/:commentid',
        element: <Comment />,
        loader({ params }) {
          return params;
        },
      },
      {
        path: '/post/:postid/comment/:commentid/delete',
        element: <CommentDelete />,
        loader({ params }) {
          return params;
        },
      },
      {
        path: '/post/:postid/comment/:commentid/update',
        element: <CommentUpdate />,
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
