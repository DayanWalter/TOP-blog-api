import DataFetch from './DataFetch';
import Comment from './Comment';
export default function Comments({ postid }) {
  const { loading, data, error } = DataFetch(
    'http://localhost:3000/api/comments'
  );
  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div>
          <ul>
            <p>Comments:</p>
            {data.allComments.map(
              ({ text, user, _id, post }) =>
                post._id === postid && (
                  <li key={_id}>
                    {console.log(`PostId in Comment${post._id} ${postid}`)}
                    <Comment text={text} user={user} />
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  );
}
