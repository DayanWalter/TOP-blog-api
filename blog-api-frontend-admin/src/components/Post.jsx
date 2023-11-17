import DataFetch from './DataFetch';
import { useLoaderData } from 'react-router-dom';

import styles from './Post.module.css';
// import Comments from './Comments';
export default function Post() {
  const loaderData = useLoaderData();
  const postid = loaderData.postid;

  const { loading, data, error } = DataFetch(
    `http://localhost:3000/api/post/${postid}`
  );

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <>
          <div className={styles.post}>
            <p>{data.post.title}</p>
            <p>{data.post.text}</p>
            <p>written by:</p>
            <p>{data.post.user.username}</p>
            <p>written at:</p>
            <p>{data.post.timestamp}</p>
            {/* <Comments postid={postid} /> */}
          </div>
        </>
      )}
    </>
  );
}
