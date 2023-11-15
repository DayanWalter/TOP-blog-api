import DataFetch from './DataFetch';
import styles from './Comments.module.css';

import Comment from './Comment';
import { useState } from 'react';

export default function Comments({ postid }) {
  const { loading, data, error, refetch } = DataFetch(
    'http://localhost:3000/api/comments'
  );

  // Save input from form
  const [formData, setFormData] = useState({
    user: '',
    text: '',
    post: '',
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
      const response = await fetch(
        `http://localhost:3000/api/post/${postid}/comment/create`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        // Clear the form
        setFormData({
          user: '',
          text: '',
          post: '',
        });

        // Refetch data for direct display
        refetch();
      } else {
        console.error('Failed to comment');
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
        <div className={styles.comments}>
          <p>Add comment:</p>
          <form onSubmit={handleSubmit} action="/">
            <input
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Text"
            />
            <br />
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="Name"
            />
            <br />
            <button type="submit">Send</button>
          </form>
          <p>Comments:</p>

          <ul>
            {data.allComments.map(
              ({ text, user, _id, post }) =>
                post._id === postid && (
                  <li key={_id}>
                    <Comment text={text} user={user} />
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  );
}
