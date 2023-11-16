import { useEffect, useState } from 'react';

export default function DataFetch(url, token) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        if (token === null) {
          throw new Error(`Unauthorized`);
        }
        throw new Error(`This is an HTTP error.`);
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
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
}
