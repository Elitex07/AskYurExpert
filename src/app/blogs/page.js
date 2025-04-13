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
  ];

  return (
    <div>
      <Nav />
      <div id="blog-posts" className="space-y-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}