import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [daten, setDaten] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api', {
          mode: 'cors',
        });
        const data = await response.json();
        setDaten(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>{console.log(daten)}</div>
    </>
  );
}

export default App;
