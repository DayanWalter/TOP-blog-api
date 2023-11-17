import { useLoaderData } from 'react-router-dom';

export default function PostDelete() {
  const loaderData = useLoaderData();
  const postid = loaderData.postid;

  const handleSubmit = async (event) => {
    event.preventDefault;

    const response = await fetch(
      `http://localhost:3000/api/post/${postid}/delete`,
      {
        method: 'DELETE',
        body: JSON.stringify({ id: postid }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log('Successful Deleted', json);
    }
  };
  return (
    <>
      <h1>Do you want to delete {postid}?</h1>
      <form action="/posts">
        <button onClick={handleSubmit}>Delete</button>
      </form>
    </>
  );
}
