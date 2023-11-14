import styles from './Comment.module.css';

export default function Comment({ text, user }) {
  return (
    <>
      <div className={styles.comment}>
        <p>{text}</p>
        <p>{user}</p>
      </div>
    </>
  );
}
