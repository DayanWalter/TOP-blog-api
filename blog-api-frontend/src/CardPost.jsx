import styles from './CardPost.module.css';
export default function Post({ title, text, postid }) {
  return (
    <>
      <div className={styles.post}>
        <h1>{title}</h1>
        <br />
        <hr />
        <br />
        <p>{text}</p>
        {/* <Comments postid={postid} /> */}
      </div>
    </>
  );
}
