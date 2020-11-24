import "./App.css";
import { useEffect, useState } from "react";
import PostFeed from "../PostFeed/PostFeed";
import Post from "../Post/Post";
import CreatePost from "../CreatePost/CreatePost";
import { Route } from "react-router-dom";

function App() {
  const [status, setStatus] = useState("reload");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("INSIDE USE EFFEKT");
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/posts");
      const data = await response.json();
      setStatus("fetched");
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="app-grid">
        <Route exact={true} path="/" render={() => <PostFeed data={data} />} />
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
  );
}

export default App;
