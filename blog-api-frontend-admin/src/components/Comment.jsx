import DataFetch from './DataFetch';
import { Link, useLoaderData } from 'react-router-dom';

import styles from './Comment.module.css';
// import Comments from './Comments';
export default function Comment() {
  const loaderData = useLoaderData();
  const commentid = loaderData.commentid;
  const postid = loaderData.postid;

  const { loading, data, error } = DataFetch(
    `http://localhost:3000/api/post/${postid}/comment/${commentid}`
  );
  console.log(data);
  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <>
          <div className={styles.comment}>
            <p>{data.comment.text}</p>
            <p>{data.comment.timestamp}</p>

            <p>{data.comment.user}</p>
            <p>{data.comment._id}</p>
            <p>{data.comment.post.title}</p>

            {/* <p>{data.post.text}</p>
            <p>written by:</p>
            <p>{data.post.user.username}</p>
            <p>written at:</p>
            <p>{data.post.timestamp}</p> */}
            {/* <Comments postid={postid} /> */}
          </div>
          <Link to={`/comment/${commentid}/update`}> Update </Link>
          <Link to={`/comment/${commentid}/delete`}> Delete </Link>
        </>
      )}
    </>
  );
}
