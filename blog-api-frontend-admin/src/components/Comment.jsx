import styles from './Comment.module.css';

export default function Comment({ text, user, timestamp, commentid, post }) {
  return (
    <>
      <div className={styles.comment}>
        <p>{user} said:</p>
        <p>{text}</p>
        <p>{timestamp}</p>
        <p>{commentid}</p>
        <p>Post:{post.title}</p>
      </div>
    </>
  );
}
