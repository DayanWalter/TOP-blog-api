import Comments from './Comments';

export default function Post({ title, text, postid }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>

        <Comments postid={postid} />
      </div>
    </>
  );
}
