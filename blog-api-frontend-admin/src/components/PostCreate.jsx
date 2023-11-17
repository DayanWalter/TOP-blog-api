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
    visible: true,
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
        <div className={styles.comments}>
          <p>Add Post:</p>
          <form onSubmit={handleSubmit} action="/">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <br />
            <input
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Text"
            />
            <br />
            {/* <input
              type="text"
              id="user"
              name="user"
              value={foundUser._id}
              readOnly={true}
            /> */}
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
