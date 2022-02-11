import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('second');
  // const [isInvalidWarnShow, setIsInvalidWarnShow] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector(selectUsers());

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
    // setIsInvalidWarnShow(false);
  };

  const onContentChanged = (e) => {
    setContent(e.target.value);
    // setIsInvalidWarnShow(false);
  };

  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    } 
    // else {
      // setIsInvalidWarnShow(true);
    // }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      {/* {isInvalidWarnShow && <strong>Invalid form!</strong>} */}
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select name="postAuthor" id="postAuthor" onChange={onAuthorChanged}>
          <option value="">{usersOptions}</option>
        </select>
        <label htmlFor="postContent">Post content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          {' '}
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;