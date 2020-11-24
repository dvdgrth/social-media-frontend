import React from "react";
import "./Post.css";
import DeletePost from "../DeletePost/DeletePost";
import Comments from "../Comments/Comments";

const PostTile = (props) => {
  if (!props.postData) {
    return <div>No post data.</div>;
  }

  return (
    <div className="post-container">
      <h1 id="title">{props.postData.title}</h1>
      <div id="author">{props.postData.author.name}</div>
      <div id="date">{new Date(props.postData.date).toLocaleString()}</div>
      <div id="body">{props.postData.body}</div>
      <DeletePost post={props.postData._id} />
      <Comments comments={props.postData.comments} post={props.postData._id} />
    </div>
  );
};

export default PostTile;
