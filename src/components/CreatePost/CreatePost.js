import React, { useState } from "react";
import "./CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
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

  function submitNewPost(e) {
    const formData = { title: title, author: author, body: body };
    console.log(formData);
    postData("http://localhost:4000/api/posts", formData).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    e.preventDefault();
  }

  function titleChanged(e) {
    setTitle(e.currentTarget.value);
    console.log(title);
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
      <h1>Create new post</h1>
      <form onSubmit={submitNewPost} className="form-grid">
        <label htmlFor="post-title">Title:</label>
        <input
          type="text"
          id="post-title"
          name="post-title"
          onChange={titleChanged}
          value={title}
        />

        <label htmlFor="post-author">Author:</label>
        <input
          type="text"
          id="post-author"
          name="post-author"
          onChange={authorChanged}
          value={author}
        />

        <label htmlFor="post-body">Body:</label>
        <textarea
          id="post-body"
          name="post-body"
          onChange={bodyChanged}
          value={body}
        />

        <div></div>
        <input type="submit" id="post-submit" name="post-submit" />
      </form>
    </div>
  );
}

export default CreatePost;
