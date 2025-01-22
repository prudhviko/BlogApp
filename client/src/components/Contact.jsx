import React from "react";

function Contact() {
  return (
    <div className="bg-gray-light text-gray-dark min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md container mx-auto px-6 max-w-3xl py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-dark text-white font-semibold rounded-md hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
