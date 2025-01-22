import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light">
      <div className="w-16 h-16 border-4 border-gray-dark border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
