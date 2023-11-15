import styles from './Post.module.css';
export default function Post() {
  return (
    <>
      <div className={styles.left}>
        <h1>Ahoy!</h1>
        <br />
        <hr />
        <br />
        <h2>
          Welcome to our blog exploring the maritime wonders of the 15th
          century! Join us on a voyage through time as we delve into the
          fascinating world of ancient ships, unraveling their stories, designs,
          and the adventures they undertook. Set sail with us as we navigate the
          seas of history and uncover the mysteries of these bygone vessels
        </h2>
      </div>
      <div className={styles.middle}>MiddleSegment</div>
      <div className={styles.right}>
        <h2>
          Meet our passionate team of maritime enthusiasts! As dedicated
          historians and ship aficionados, we are committed to bringing the rich
          tales of 15th-century vessels to life. With backgrounds in both
          vanilla JavaScript and React development, we embark on this digital
          journey using our coding prowess to enhance your exploration of
          maritime history. Join us in uncovering the stories behind the sails,
          as we navigate the seas of the past with a blend of technical
          expertise and historical curiosity.
        </h2>
      </div>
    </>
  );
}
