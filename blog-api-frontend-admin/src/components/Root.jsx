import styles from './Root.module.css';
import { Link, Outlet } from 'react-router-dom';
export default function Root() {
  return (
    <div className={styles.main}>
      <header>The Maritime Wonders of the 15th Century(ADMIN EDITION™)</header>
      <main>
        <div className={styles.left}>
          <h1>Ahoy!</h1>
          <br />
          <hr />
          <br />
          <h1>Create</h1>
          <h2>
            <Link to={'/post/create'}>New Post</Link>
          </h2>
          <br />
          <hr />
          <br />
          <h1>Read/Update/Delete</h1>
          <h2>
            <Link to={'/posts'}>Posts</Link>
          </h2>
          <h2>
            <Link to={'/comments'}>Comments</Link>
          </h2>
          <h2>
            <Link to={'/users'}>User</Link>
          </h2>
          <br />
          <hr />
          <br />
          <h1>Login/Logout</h1>
          <h2>
            <Link to={'/login'}>Login</Link>
          </h2>
          <h2>
            <Link to={'/logout'}>Logout</Link>
          </h2>
        </div>
        <div className={styles.middle}>
          <Outlet />
        </div>
        <div className={styles.right}>
          <h2>
            Ahoy there, hearty author of the blog! Welcome to yer dashboard,
            where the treasures of creation await ye. On yer left, ye'll spy the
            navigational compass, guidin' ye to the creation of new posts ('New
            Post'). Navigate through the vast sea of posts, comments, and users
            – read 'em, update 'em, or send 'em to Davy Jones' locker ('Read,
            Update, Delete'). And when yer done plunderin' and pillagin', don't
            forget to log out and sail off into the digital sunset. Fair winds
            on yer blogging journey, and may yer code be as sturdy as a
            well-rigged ship! Fairwell, and may the code gods watch over ye!
          </h2>
        </div>
      </main>
      <footer>Footer © Content</footer>
    </div>
  );
}
