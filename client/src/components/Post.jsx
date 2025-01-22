import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Loader from "../utils/Loader";
import { getPost } from "../api/postApi";
import { addCommentApi } from "../api/commentApi";
import { showToast } from "../utils/toast";

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await getPost(id);
        setPost(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCommentApi(id, {
        commentText,
      });
      setCommentText("");
      showToast.success("Comment Send Succesfully");
    } catch (e) {
      console.log("Error", e);
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-dark">{post?.title}</h1>
          <p className="text-lg text-gray-dark mb-4 text-right mb-4">
            {post?.postedBy?.name}
          </p>
          <img
            src={`http://localhost:8000${post?.image}`}
            alt={post?.title}
            className="mb-4"
          />
          <div
            className="text-lg text-gray-dark"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post?.content),
            }}
          ></div>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-dark mb-4">Comments</h2>
            {post?.comments?.length > 0 ? (
              post.comments.map((comment) => (
                <div key={comment._id} className="mb-4">
                  <p className="text-lg text-gray-dark">
                    {comment.commentText}
                  </p>
                  <p className="text-sm text-gray-dark text-right">
                    - {comment.commentedBy.name}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-dark">No comments yet.</p>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-dark mb-4">
              Add a Comment
            </h2>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows="4"
                placeholder="Write your comment here..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
