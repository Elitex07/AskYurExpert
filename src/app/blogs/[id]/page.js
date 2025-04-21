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
    return <p className="text-center mt-10">Loading blog...</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <p className="text-gray-700 mb-6">{blog.content}</p>
    </div>
  );
}