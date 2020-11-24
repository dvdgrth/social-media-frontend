import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function DeletePost(props) {
  const [redirect, setRedirect] = useState(false);

  async function deletePost(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/posts/" + props.post,
        {
          method: "DELETE",
        }
      );
      const responseJSON = await response.json();
      console.log(responseJSON);
      setRedirect(true);
    } catch (error) {}
  }

  if (redirect) {
    return <Redirect to="/" />;
  } else {
    return (
      <div id="delete">
        <button onClick={deletePost}>delete this post</button>
      </div>
    );
  }
}

export default DeletePost;
