import DataFetch from './DataFetch';
import styles from './PostCreate.module.css';

// import Comment from './Comment';
import { useState } from 'react';

export default function PostCreate() {
  const token = localStorage.getItem('jwtoken');
  const { loading, data, error } = DataFetch(
    'http://localhost:3000/api/users',
    token
  );
  // Split the payload of the jwt and convert the username-part
  const payload = JSON.parse(atob(token.split('.')[1]));
  // Define the Username you are looking for
  const searchedUsername = payload.username;
  // Use find method to find the object with the name in the data.allUser array of objects

  const foundUser =
    data && data.allUser.find((objekt) => objekt.username === searchedUsername);

  console.log(foundUser);

  // Save input from form
  const [formData, setFormData] = useState({
    user: '',
    title: '',
    text: '',
    visible: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      user: foundUser._id,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/post/create`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Clear the form
        setFormData({
          title: '',
          text: '',
          visible: '',
        });
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
