import React from "react";

function About() {
  return (
    <div className="text-gray-dark h-screen flex flex-col items-center justify-center">
      <section className="px-6 md:px-12 text-center max-w-3xl">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <br />
          <p className="text-lg md:text-xl leading-relaxed text-clip">
            Welcome to our blog! We are passionate about sharing insights,
            stories, and ideas that inspire and inform. Our mission is to create
            a space where readers can explore diverse topics, engage with
            meaningful content, and connect with a like-minded community.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Whether you're here to learn, discover, or simply enjoy great reads,
            we're glad you stopped by. Stay tuned for exciting updates and
            articles. Happy reading!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
