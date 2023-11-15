import DataFetch from './DataFetch';
import Post from './Post';
export default function Posts() {
  const { loading, data, error } = DataFetch('http://localhost:3000/api/posts');

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <>
          {data.allPosts.map(({ title, text, _id }) => (
            <li key={_id}>
              {console.log(`Post:${_id}`)}
              <Post title={title} text={text} postid={_id} />
            </li>
          ))}
        </>
      )}
    </>
  );
}
