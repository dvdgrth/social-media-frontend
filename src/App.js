import "./App.css";
import { useEffect, useState } from "react";
import PostFeed from "./components/PostFeed";
import CreatePost from "./components/CreatePost";

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
    <div>
      <div className="app-grid">
        <PostFeed data={data} />
        <CreatePost />
      </div>
    </div>
  );
}

export default App;
