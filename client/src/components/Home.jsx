import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";
import Item from "./Item";
import { fetchPostsApi } from "../api/postApi";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetchPostsApi();
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          posts.map((post) => <Item post={post} />)
        )}
      </div>
    </div>
  );
}

export default Home;
