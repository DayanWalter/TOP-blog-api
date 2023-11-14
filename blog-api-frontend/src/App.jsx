import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [daten, setDaten] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api', {
  //         mode: 'cors',
  //       });
  //       const data = await response.json();
  //       setDaten(data);
  //     } catch (error) {
  //       console.error('Fehler beim Abrufen der Daten:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // console.log(formData);
    const formData = {
      username: 'Admin',
      password: '123',
    };

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
        console.log(json); // Hier ist die JSON-Antwort nach dem Einreichen des Formulars
      } else {
        console.error('Fehler beim Anmelden');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to the Authors Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
