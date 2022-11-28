import classes from "./comment-list.module.css";

function CommentList(props) {
  const { comments } = props;

  return (
    <div>
      <ul className={classes.comments}>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
