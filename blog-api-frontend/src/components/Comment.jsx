import styles from './Comment.module.css';

export default function Comment({ text, user }) {
  return (
    <>
      <div className={styles.comment}>
        <p>{user} said:</p>
        <p>{text}</p>
      </div>
    </>
  );
}
