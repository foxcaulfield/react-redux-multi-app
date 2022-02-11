import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QueryNavLink from '../../components/QueryNavLink';
import { selectPostsList } from './postsSlice';

const PostsList = () => {
  const posts = useSelector(selectPostsList);

  let renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        {post.content.substring(0, 100) +
          (post.content.length > 100 ? '...' : '')}
      </p>
      <QueryNavLink to={`/readPost/${post.id}`} className="button muted-button">
        View Post
      </QueryNavLink>
      <QueryNavLink to={`/editPost/${post.id}`}>
        Edit Post
      </QueryNavLink>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
