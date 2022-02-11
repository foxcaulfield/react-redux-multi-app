import React, { useRef } from "react";
import Welcome from "../Welcome";
import Clock from "../Clock";
import LasersActivator from "../LasersActivator";
import List from "../List";
import { useSelector, useDispatch } from "react-redux";
import { selectPostsData, selectTextAreaValue, updatePostTextarea, addPost } from "./profileSlice";

const Post = ({ likesCount, text }) => {
  return (
    <div>
      {text}, likes:{likesCount}
    </div>
  );
};

const MyPosts = ({ postsData, textAreaValue }) => {
  let dispatch = useDispatch();

  let sendPost = () => {
    // addPost();
    dispatch(addPost());
  };

  let sendButtonRef = useRef();
  let textareaRef = useRef();

  let onPostChange = () => {
    dispatch(updatePostTextarea(textareaRef.current.value));
  };
  return (
    <div>
      <textarea ref={textareaRef} value={textAreaValue} onChange={onPostChange} />
      <button ref={sendButtonRef} onClick={sendPost}>
        Send
      </button>
      <div>
        {postsData.map(({ text, id, likesCount }) => (
          <Post key={id} text={text} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};

const Profile = (props) => {
  // let postsData = profilePageState.postsData;
  // let textAreaValue = profilePageState.textAreaValue;
  let postsData = useSelector(selectPostsData);
  let textAreaValue = useSelector(selectTextAreaValue);

  return (
    <div>
      <Welcome name="Max" />
      <Clock date={new Date()} />
      <LasersActivator text={`activate me`} />
      <List numbers={[1, 2, 4]} />
      <MyPosts postsData={postsData} textAreaValue={textAreaValue} />
    </div>
  );
};

export default Profile;
