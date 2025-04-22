'use client';
import React, { useState, useEffect } from "react";
import Nav from "../components/nav";

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post. It's a great post!",
      date: "2025-04-01",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post. It's even better!",
      date: "2025-04-11",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the content of the third blog post. You won't want to miss this!",
      date: "2025-04-20",
    },
  ]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogPosts(storedBlogs);
  }, []);

  const [showForm, setShowForm] = useState(false); // State to toggle the form
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  const handleAddBlog = () => {
    const blog = {
      id: blogPosts.length + 1, // Generate a unique ID for the blog
      ...newBlog,
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };
    const updatedBlogs = [blog, ...blogPosts];
    setBlogPosts(updatedBlogs); // Add the new blog to the top of the list
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save blogs to localStorage
    setShowForm(false); // Hide the form after submission
    setNewBlog({ title: "", content: "" }); // Reset the form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteBlog = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      const updatedBlogs = blogPosts.filter((post) => post.id !== id); // Remove the blog with the given ID
      setBlogPosts(updatedBlogs); // Update the state
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save the updated list to localStorage
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <Nav />
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Blog Posts</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Add Blog
          </button>
        </div>

        {/* Blog Form */}
        {showForm && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create New Blog</h2>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Blog Title</label>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Blog Content</label>
              <textarea
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your blog content here..."
                rows="6"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddBlog}
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 mr-4"
              >
                Submit
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div id="blog-posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-200 hover:border-blue-500"
            >
              <a
                href={`/blogs/${post.id}`} // Dynamic link for each blog
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
              </a>
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteBlog(post.id)}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-300 opacity-0 group-hover:opacity-100"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}