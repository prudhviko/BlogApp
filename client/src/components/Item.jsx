import React from "react";
import { Link } from "react-router-dom";

const Item = ({ post }) => {
  return (
    <div
      key={post._id}
      className="bg-gray-dark rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img
        src={`http://localhost:8000${post.image}`}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
        <p className="text-white text-sm mb-4">
          {post.content.length > 100
            ? post.content.slice(0, 100) + "..."
            : post.content}
        </p>
        <Link
          to={`/post/${post._id}`}
          className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-indigo-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Item;
