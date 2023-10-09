import React from 'react';
import blogdata from './blogdata.json';

export default function BlogPost({ postId }) {
  // Finde den Blogeintrag mit der passenden ID
  const blogEntry = blogdata.find(entry => entry.id === postId);

  return (
    <div>
      <h1>{blogEntry.title}</h1>
      <p>{blogEntry.autor}</p>
      <p>{blogEntry.content}</p>
    </div>
  );
}
