import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './PostCreate.module.css';

// import Comment from './Comment';
import { useEffect, useState } from 'react';

export default function CommentUpdate() {
  const navigate = useNavigate();

  const loaderData = useLoaderData();
  const postid = loaderData.postid;
  const commentid = loaderData.commentid;

  const token = localStorage.getItem('jwtoken');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    user: '',
    text: '',
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/post/${postid}/comment/${commentid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        if (token === null) {
          throw new Error(`Unauthorized`);
        }
        throw new Error(`This is an HTTP error.`);
      }
      let actualData = await response.json();
      setData(actualData);
      // setFormData after successfully fetched
      setFormData({
        text: actualData.comment.text,
        user: actualData.comment.user,
      });
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
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value || '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/post/${postid}/comment/${commentid}/update`,
        {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        navigate('/comments');
      } else {
        console.error('Failed to post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.post}>
          <form
            className={styles.createForm}
            onSubmit={handleSubmit}
            action="/"
          >
            <label htmlFor="text">Text:</label>
            <textarea
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
            <br />

            <button type="submit">Change Comment</button>
          </form>
        </div>
      )}
    </>
  );
}
