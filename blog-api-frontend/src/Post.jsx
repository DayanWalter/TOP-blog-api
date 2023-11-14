import Comments from './Comments';
import styles from './Post.module.css';
export default function Post({ title, text, postid }) {
  return (
    <>
      <div className={styles.post}>
        <h1>{title}</h1>
        <p>{text}</p>

        <Comments postid={postid} />
      </div>
    </>
  );
}
