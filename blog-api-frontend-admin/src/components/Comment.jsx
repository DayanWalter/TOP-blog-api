import { Link } from 'react-router-dom';
import styles from './Comment.module.css';

export default function Comment({ text, user, timestamp, commentid, post }) {
  return (
    <>
      <Link to={`/comment/${commentid}`} className={styles.link}>
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
            <p>{post.title}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
