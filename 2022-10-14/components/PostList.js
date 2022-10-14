import React from 'react';

function PostList({ posts, onOpenPost }) {
  return (
    <ul>
      {posts.map(post => (
        <li onClick={() => onOpenPost(post.id)} key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
