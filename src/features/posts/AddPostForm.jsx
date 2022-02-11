import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { /*postAdded,*/ addNewPost } from './postsSlice';
import { selectUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('second');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        await dispatch(addNewPost({title, content, user:userId})).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error("Failed to save the post: ", err)
      } finally {
        setAddRequestStatus("idle")
      }
    }
    // if (title && content) {
    //   dispatch(addNewPost(title, content, userId));
    //   setTitle('');
    //   setContent('');
    // }
  };

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

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
          <option value=""></option>
          {usersOptions}
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
