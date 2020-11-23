import "./App.css";
import { useEffect, useState } from "react";
import PostFeed from "../PostFeed/PostFeed";
import Post from "../Post/Post";
import CreatePost from "../CreatePost/CreatePost";
import { BrowserRouter as Router, Route } from "react-router-dom";

// fetch all posts
// display all posts
// create new post

function App() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch("http://localhost:4000/api/posts");
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <div className="app-grid">
          <Route
            exact={true}
            path="/"
            render={() => <PostFeed data={data} />}
          />
          {status === "fetched" && (
            <Route
              exact={true}
              path="/:postId"
              render={(props) => {
                const post = data.find((post) => {
                  return post._id === props.match.params.postId;
                });
                return <Post postData={post} />;
              }}
            />
          )}
          <CreatePost />
        </div>
      </div>
    </Router>
  );
}

export default App;
