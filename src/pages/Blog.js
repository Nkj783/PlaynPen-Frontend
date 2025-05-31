import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'Introduction to React', content: '# React\nReact is a JavaScript library...' },
  { id: '2', title: 'Understanding State and Props', content: '# State and Props\nThese are core concepts...' },
];

function Blog() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Blog Posts</h2>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
