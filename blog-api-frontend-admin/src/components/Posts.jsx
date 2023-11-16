import CardPost from './CardPost';
import DataFetch from './DataFetch';

export default function Posts() {
  const token = localStorage.getItem('jwtoken');
  const { loading, data, error } = DataFetch(
    'http://localhost:3000/api/posts',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

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
              <CardPost title={title} text={text} postid={_id} />
            </li>
          ))}
        </>
      )}
    </>
  );
}
