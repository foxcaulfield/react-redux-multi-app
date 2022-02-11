import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QueryNavLink from '../../components/QueryNavLink';
import PostAuthor from './PostAuthor';
import {
  fetchPosts,
  selectPostsList,
  selectPostsStatus,
  selectPostsError,
} from './postsSlice';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';
import { Spinner } from '../../components/Spinner';

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date}></TimeAgo>
      </div>
      <p className="post-content">
        {post.content.substring(0, 100) +
          (post.content.length > 100 ? '...' : '')}
      </p>
      <ReactionButtons post={post}></ReactionButtons>
      <QueryNavLink to={`/readPost/${post.id}`} className="button muted-button">
        View Post
      </QueryNavLink>
      <QueryNavLink to={`/editPost/${post.id}`}>Edit Post</QueryNavLink>
    </article>
  );
};

const PostsList = () => {
  let dispatch = useDispatch();

  const posts = useSelector(selectPostsList);
  const postsStatus = useSelector(selectPostsStatus);
  const postsError = useSelector(selectPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
    // return () => {
    // }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === 'loading') {
    content = <Spinner text="Loading..." />;
  } else if (postsStatus === 'succeeded') {
    const orederedPosts = posts.slice().sort((a, b) => {
      return b.date.localeCompare(a.date);
    });

    content = orederedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === 'failed') {
    content = <div>{postsError}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {/* status:{postsStatus} */}
      {content}
    </section>
  );
};

export default PostsList;
