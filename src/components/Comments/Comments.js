import React from "react";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import "./Comments.css";

function Comments(props) {
  return (
    <div className="comments">
      <h3>Comments</h3>
      <div className="comments-grid">
        {props.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CreateComment post={props.post} />
    </div>
  );
}

export default Comments;
