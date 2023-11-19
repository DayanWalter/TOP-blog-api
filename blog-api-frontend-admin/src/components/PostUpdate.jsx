import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './PostCreate.module.css';

// import Comment from './Comment';
import { useEffect, useState } from 'react';

export default function PostUpdate() {
  const navigate = useNavigate();

  const loaderData = useLoaderData();
  const postid = loaderData.postid;

  const token = localStorage.getItem('jwtoken');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/${postid}`, {
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
      // setFormData after successfully fetched
      setFormData({
        title: actualData.post.title,
        text: actualData.post.text,
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
        `http://localhost:3000/api/post/${postid}/update`,
        {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        navigate('/posts');
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
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="text">Text:</label>
            <textarea
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
            <br />
            <fieldset className={styles.fieldset}>
              <legend>Post directly?</legend>
              <div className={styles.radio}>
                <label htmlFor="visible_true">
                  Post
                  <input
                    type="radio"
                    name="visible"
                    id="visible_true"
                    value={true}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="visible_false">
                  Draft
                  <input
                    type="radio"
                    name="visible"
                    id="visible_false"
                    value={false}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </fieldset>

            <button type="submit">Add Post</button>
          </form>
        </div>
      )}
    </>
  );
}
