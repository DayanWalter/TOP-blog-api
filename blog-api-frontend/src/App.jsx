import Home from './Home';
import styles from './App.module.css';
import Post from './Post';
export default function App() {
  return (
    <div className={styles.main}>
      <header>The Maritime Wonders of the 15th Century</header>
      <main>
        <Home />
        {/* <Post /> */}
      </main>
      <footer>Footer © Content</footer>
    </div>
  );
}
