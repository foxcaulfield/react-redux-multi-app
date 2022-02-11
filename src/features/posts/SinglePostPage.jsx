import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { useParams } from 'react-router-dom';
import QueryNavLink from "../../components/QueryNavLink";

const SinglePostPage = (props) => {
  let params = useParams();
  const { postId } = params;

  const post = useSelector(selectPostById(postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <QueryNavLink to={`/editPost/${postId}`} className="button">Edit Post</QueryNavLink>
        <QueryNavLink to={`/posts`} className="button">Return to Posts page</QueryNavLink>
      </article>
    </section>
  );
};

export default SinglePostPage;
