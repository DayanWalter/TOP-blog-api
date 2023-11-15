import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';
export default function Root() {
  return (
    <div className={styles.main}>
      <header>The Maritime Wonders of the 15th Century</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer © Content</footer>
    </div>
  );
}
