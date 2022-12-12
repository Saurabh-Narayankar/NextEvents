import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (showComments) {
      fetch(`/api/events/${eventId}`).then((res) => res.json()).then((data) => {
        const comments = data.eventDetail.comments
        setComments(comments)
      })
    }}, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

  }

  function addCommentHandler(commentData) {
    const commentObj = commentData

    fetch(`http://localhost:3000/api/events/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => console.log(data))

  }


  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
