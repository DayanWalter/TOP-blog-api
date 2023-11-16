import CardPost from './CardPost';
import DataFetch from './DataFetch';

export default function Posts() {
  const token = localStorage.getItem('jwtoken');

  const { loading, data, error } = DataFetch(
    'http://localhost:3000/api/posts',
    token
  );

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <>
          {data.allPosts.map(({ title, _id, timestamp, user }) => (
            <li key={_id}>
              <CardPost
                title={title}
                postid={_id}
                timestamp={timestamp}
                user={user}
              />
            </li>
          ))}
        </>
      )}
    </>
  );
}
