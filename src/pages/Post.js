import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const posts = {
  '1': '# React\nReact is a **JavaScript library** for building user interfaces.',
  '2': '# State and Props\nThese are the core **React** features to manage data.',
};

function Post() {
  const { id } = useParams();
  const content = posts[id];

  return (
    <div className="p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || 'Post not found'}</ReactMarkdown>
    </div>
  );
}

export default Post;