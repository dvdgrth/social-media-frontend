import React from "react";
import "./Post.css";

const Post = (props) => {
  function clickHandler(e) {
    alert("clicked");
    console.log(e);
  }

  return (
    <div className="post-container" onClick={clickHandler}>
      <h4>{props.postData.title}</h4>
      <div>{props.postData.author}</div>
      <div>{props.postData.date}</div>
      <div>{props.postData.body}</div>
    </div>
  );
};

export default Post;
