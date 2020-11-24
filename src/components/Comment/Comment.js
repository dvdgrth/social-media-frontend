import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div className="comment-grid">
      <div id="author">{props.comment.author.name}</div>
      <div id="date">{new Date(props.comment.date).toLocaleString()}</div>
      <div id="body">{props.comment.body}</div>
    </div>
  );
}

export default Comment;
