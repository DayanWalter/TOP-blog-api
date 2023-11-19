import { Link } from 'react-router-dom';
import styles from './CardComment.module.css';

export default function CardComment({
  text,
  user,
  timestamp,
  commentid,
  post,
}) {
  return (
    <>
      <Link
        to={`/post/${post._id}/comment/${commentid}`}
        className={styles.link}
      >
        <div className={styles.comment}>
          <div className={styles.left}>
            <p>Text:</p>
            <p>Timestamp:</p>
            <p>User:</p>
            <p>Commentid:</p>
            <p>Post:</p>
          </div>
          <div className={styles.right}>
            <p>{text}</p>
            <p>{timestamp}</p>
            <p>{user}</p>
            <p>{commentid}</p>
            {/* {post.title === null && <p>Post doenst exist</p>} */}
            {/* {post.title !== null && <p>{post.title}</p>} */}
          </div>
        </div>
      </Link>
    </>
  );
}
