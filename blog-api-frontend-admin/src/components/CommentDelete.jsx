import { useLoaderData } from 'react-router-dom';

export default function CommentDelete() {
  const loaderData = useLoaderData();
  const commentid = loaderData.commentid;
  const postid = loaderData.postid;

  const handleSubmit = async (event) => {
    event.preventDefault;

    const response = await fetch(
      `http://localhost:3000/api/post/${postid}/comment/${commentid}/delete`,
      {
        method: 'DELETE',
        body: JSON.stringify({ id: commentid }),
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
      <h1>Do you want to delete {commentid}?</h1>
      <form action="/comments">
        <button onClick={handleSubmit}>Delete</button>
      </form>
    </>
  );
}
