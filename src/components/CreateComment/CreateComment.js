import React, { useState } from "react";
import "./CreateComment.css";

function CreateComment(props) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function submitNewComment(e) {
    const formData = { post: props.post, author: author, body: body };
    console.log(formData);
    postData("http://localhost:4000/api/posts/comments", formData).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    );
    e.preventDefault();
  }

  function authorChanged(e) {
    setAuthor(e.currentTarget.value);
    console.log(author);
  }
  function bodyChanged(e) {
    setBody(e.currentTarget.value);
    console.log(body);
  }

  return (
    <div>
      <h4>Create new comment</h4>
      <form onSubmit={submitNewComment} className="comment-form-grid">
        <label htmlFor="comment-author">Author:</label>
        <input
          type="text"
          id="comment-author"
          name="comment-author"
          onChange={authorChanged}
          value={author}
        />

        <label htmlFor="comment-body">Body:</label>
        <textarea
          id="comment-body"
          name="comment-body"
          onChange={bodyChanged}
          value={body}
        />

        <div></div>
        <input type="submit" id="comment-submit" name="comment-submit" />
      </form>
    </div>
  );
}

export default CreateComment;
