import { useState } from 'react';
import styles from './Comment.module.css';
import { useLoaderData } from 'react-router-dom';

export default function Comment({ text, user }) {
  const loaderData = useLoaderData();
  const postid = loaderData.postid;

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
    console.log(formData);
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
        const json = await response.json();
        console.log(json);
      } else {
        console.error('Failed to comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className={styles.comment}>
        <p>{user} said:</p>
        <p>{text}</p>
      </div>
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Text"
        />
        <input
          type="text"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Name"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
