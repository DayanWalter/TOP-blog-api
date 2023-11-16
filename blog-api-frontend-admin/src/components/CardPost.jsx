import { Link } from 'react-router-dom';
import styles from './CardPost.module.css';
export default function CardPost({ title, postid, timestamp, user }) {
  return (
    <>
      <Link to={`/post/${postid}`} className={styles.link}>
        <div className={styles.post}>
          <div className={styles.left}>
            <p>Title:</p>
            <p>Timestamp:</p>
            <p>Author:</p>
            <p>Postid:</p>
          </div>
          <div className={styles.right}>
            <p>{title}</p>
            <p>{timestamp}</p>
            <p>{user.username}</p>
            <p>{postid}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
