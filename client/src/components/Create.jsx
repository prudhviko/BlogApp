import React, { useState, useRef } from "react";
import { addPostApi } from "../api/postApi";
import { showToast } from "../utils/toast";
import { Editor } from "@tinymce/tinymce-react";

function Create() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    if (formData.image) {
      data.append("image", formData.image);
    }
    try {
      setLoading(true);
      await addPostApi(data);
      showToast.success("Post Added Succesfully");
      setFormData({ title: "", content: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter post title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Content
            </label>

            <Editor
              apiKey="jtiil8pxj85bpkgsmwece5kt0fjzrqeh8eacl66qvdp5m6x4"
              initialValue="<p>Write your content here...</p>"
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              }}
              name="content"
              value={formData.content}
              onEditorChange={(content) =>
                setFormData({ ...formData, content })
              }
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-dark text-white font-semibold py-2 rounded-md hover:bg-gray-700"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Post"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Create;
