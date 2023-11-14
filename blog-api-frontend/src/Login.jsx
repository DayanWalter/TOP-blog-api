import DataFetch from './DataFetch';
import { useState } from 'react';
import './Login.css';

function Login() {
  // Save input from form
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const json = await response.json();
        // save jwt in localstorage
        localStorage.setItem('jwtoken', json.token);
        console.log('Successful login', json);
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to the Authors Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
