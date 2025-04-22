'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog post data based on the ID
    const fetchBlog = async () => {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const foundBlog = storedBlogs.find((post) => post.id === parseInt(id));
      setBlog(foundBlog);
    };

    if (id) fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center mt-10 text-gray-600">Loading blog...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{blog.title}</h1>
          <p className="text-gray-500 text-sm mb-4">Published on: {blog.date}</p>
          <hr className="border-gray-300 mb-6" />
          <p className="text-gray-700 leading-relaxed text-lg">{blog.content}</p>
        </div>
        <div className="mt-8">
          <a
            href="/blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
}