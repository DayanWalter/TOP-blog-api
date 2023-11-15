import DataFetch from './DataFetch';
import { useLoaderData } from 'react-router-dom';

import styles from './Post.module.css';
import Comments from './Comments';
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
          <div className={styles.left}>
            <h1>Ahoy!</h1>
            <br />
            <hr />
            <br />
            <h2>
              Welcome to our blog exploring the maritime wonders of the 15th
              century! Join us on a voyage through time as we delve into the
              fascinating world of ancient ships, unraveling their stories,
              designs, and the adventures they undertook. Set sail with us as we
              navigate the seas of history and uncover the mysteries of these
              bygone vessels
            </h2>
          </div>
          <div className={styles.middle}>
            <h1>{data.post.title}</h1>

            <h3>{data.post.text}</h3>
          </div>
          <div className={styles.right}>
            <p>written by:</p>
            <p>{data.post.user.username}</p>
            <br />
            <hr />
            <br />
            <p>written at:</p>
            <p>{data.post.timestamp}</p>
            <br />
            <hr />
            <br />
            <Comments postid={postid} />
          </div>
        </>
      )}
    </>
  );
}
