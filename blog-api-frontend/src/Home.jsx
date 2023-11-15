import styles from './Home.module.css';
import Posts from './Posts';
export default function Home() {
  return (
    <div className={styles.home}>
      <header>HeaderContent</header>
      <main>
        <Posts />
      </main>
      <footer>Footer © Content</footer>
    </div>
  );
}
