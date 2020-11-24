import React from "react";
import "./PostTile.css";
import { useHistory } from "react-router-dom";

const PostTile = (props) => {
  let history = useHistory();

  function clickHandler(e) {
    history.push(`/${props.postData._id}`);
  }

  if (!props.postData) {
    return <div>No post data.</div>;
  }

  return (
    <div className="post-tile-container" onClick={clickHandler}>
      <div>{props.postData.title}</div>
      <div>{props.postData.author.name}</div>
      <div>{new Date(props.postData.date).toLocaleDateString()}</div>
      {/* <div>{props.postData.body}</div> */}
    </div>
  );
};

export default PostTile;
