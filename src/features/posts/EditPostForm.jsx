import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
// useHistory ??
import { postUpdated, selectPostById } from './postsSlice';


const EditPostForm = () => {
  let navigate = useNavigate();
  console.log(`navigate`, navigate)
  let params = useParams();
  let postId = params.postId;
console.log(`postId`, postId)
  let post = useSelector(selectPostById(postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  // const history = useHistory(); ???
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      // some kind of reidrect ???
      // navigate(`/posts/${postId}`,{ replace: true })
      navigate(`/posts`,{ replace: true })
    }
  };

  return (
    <section>
      <h2>Edit post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>Save Post</button>
        <button type="button" onClick={() => navigate(`/posts`, { replace: true })}>Cancel</button>
      </form>
    </section>
  );
};

export default EditPostForm;
