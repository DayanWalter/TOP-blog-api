import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Save input from form
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Save jwt token
  const [jwtToken, setJwtToken] = useState(null);

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
        setJwtToken(json.token); // Speichere den Token im Zustand
        console.log('Successful login', json); // Hier ist die JSON-Antwort nach dem Einreichen des Formulars
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

export default App;
