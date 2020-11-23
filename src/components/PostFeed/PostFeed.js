import React from "react";
import PostTile from "../PostTile/PostTile";
import "./PostFeed.css";

function PostFeed(props) {
  return (
    <div>
      <h1>All Posts:</h1>
      <div className="post-feed-grid">
        {props.data.map((item) => {
          return <PostTile key={item._id} postData={item} />;
        })}
      </div>
    </div>
  );
}

export default PostFeed;
