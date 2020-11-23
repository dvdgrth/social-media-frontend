import React from "react";
import "./Post.css";
import { Link, withRouter, useHistory } from "react-router-dom";
import Comments from "../Comments/Comments";

const PostTile = (props) => {
  if (!props.postData) {
    return <div>No post data.</div>;
  }

  return (
    <div className="post-container">
      <h1 id="title">{props.postData.title}</h1>
      <div id="author">{props.postData.author}</div>
      <div id="date">{new Date(props.postData.date).toLocaleString()}</div>
      <div id="body">{props.postData.body}</div>
      <Comments comments={props.postData.comments} post={props.postData._id} />
    </div>
  );
};

export default PostTile;
