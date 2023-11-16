import CardPost from './CardPost';
import Comment from './Comment';
import DataFetch from './DataFetch';

export default function Posts() {
  const token = localStorage.getItem('jwtoken');

  const { loading, data, error } = DataFetch(
    'http://localhost:3000/api/comments',
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
          {data.allComments
            .reverse()
            .map(({ user, text, timestamp, _id, post }) => (
              <li key={_id}>
                <Comment
                  user={user}
                  text={text}
                  timestamp={timestamp}
                  commentid={_id}
                  post={post}
                />
              </li>
            ))}
        </>
      )}
    </>
  );
}
