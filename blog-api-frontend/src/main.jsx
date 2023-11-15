import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.jsx';
import './index.css';
import Posts from './Posts.jsx';
import Home from './Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Home />
    {/* <Posts /> */}
  </React.StrictMode>
);
