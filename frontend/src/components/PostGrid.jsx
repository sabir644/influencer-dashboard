// src/components/PostGrid.jsx

import React from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-400">No posts to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;