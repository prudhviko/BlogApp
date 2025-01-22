import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-4 mb-4">
          <h1 className="text-2xl font-bold">BlogApp</h1>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">Follow us on:</p>
            <ul className="flex space-x-4 mt-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400">Subscribe to our newsletter:</p>
            <form className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gray-light text-gray-dark font-semibold rounded-r-md hover:bg-gray-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
