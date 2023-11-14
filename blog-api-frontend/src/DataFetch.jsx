import { useEffect, useState } from 'react';

export default function DataFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`This is an HTTP error`);
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}
