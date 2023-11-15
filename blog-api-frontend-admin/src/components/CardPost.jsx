import { Link } from 'react-router-dom';
import styles from './CardPost.module.css';
export default function CardPost({ title, text, postid }) {
  return (
    <>
      <Link to={`/post/${postid}`}>
        <div className={styles.post}>
          <h1>{title}</h1>
          <br />
          <hr />
          <br />
          <p>{text}</p>
          {/* <Comments postid={postid} /> */}
        </div>
      </Link>
    </>
  );
}
