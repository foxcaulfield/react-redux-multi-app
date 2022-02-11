import React from 'react';
import { useSelector } from 'react-redux';
import QueryNavLink from '../../components/QueryNavLink';
import PostAuthor from './PostAuthor';
import { selectPostsList } from './postsSlice';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(selectPostsList);

  const orederedPosts = posts.slice().sort((a, b) => {
    return b.date.localeCompare(a.date);
  });

  let renderedPosts = orederedPosts.map((post) => {
    console.log('post', post);
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">
          {post.content.substring(0, 100) +
            (post.content.length > 100 ? '...' : '')}
        </p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date}></TimeAgo>
        <ReactionButtons post={post}></ReactionButtons>
        <QueryNavLink
          to={`/readPost/${post.id}`}
          className="button muted-button"
        >
          View Post
        </QueryNavLink>
        <QueryNavLink to={`/editPost/${post.id}`}>Edit Post</QueryNavLink>
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
