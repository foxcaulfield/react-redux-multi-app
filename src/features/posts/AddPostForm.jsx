import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('second');
  const [isInvalidWarnShow, setIsInvalidWarnShow] = useState(false);

  const dispatch = useDispatch();

  

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
    setIsInvalidWarnShow(false);
  };

  const onContentChanged = (e) => {
    setContent(e.target.value);
    setIsInvalidWarnShow(false);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle('');
      setContent('');
    } else {
      setIsInvalidWarnShow(true);
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      {isInvalidWarnShow && <strong>Invalid form!</strong>}
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          {' '}
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
