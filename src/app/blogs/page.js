'use client';
import React from "react";
import Nav from "../components/nav";

export default function Blogs() {
  const blogPosts = [
    {
      title: "First Blog Post",
      content: "This is the content of the first blog post. It's a great post!",
      date: "2023-10-01",
    },
    {
      title: "Second Blog Post",
      content: "This is the content of the second blog post. It's even better!",
      date: "2023-10-02",
    },
    {
      title: "Third Blog Post",
      content: "This is the content of the third blog post. You won't want to miss this!",
      date: "2023-10-03",
    },
    {
      title: "Fourth Blog Post",
      content: "This is the content of the fourth blog post. It's amazing!",
      date: "2023-10-04",
    },
    {
      title: "Fifth Blog Post",
      content: "This is the content of the fifth blog post. Don't miss it!",
      date: "2023-10-05",
    },
    {
      title: "Sixth Blog Post",
      content: "This is the content of the sixth blog post. It's insightful!",
      date: "2023-10-06",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Blog Posts</h1>
        <div id="blog-posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-600">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}