import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDialogsData, selectMessagesData } from "./messagesSlice";

const MessageItem = (props) => {
  return (
    <div>
      <NavLink to={`${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const TextItem = (props) => {
  return <div>{props.text}</div>;
};

const Messages = (props) => {
  let dialogsData = useSelector(selectDialogsData);
  let messagesData = useSelector(selectMessagesData);

  return (
    <>
      {dialogsData.map((dialog) => (
        <MessageItem name={dialog.name} id={dialog.id} key={dialog.id} />
      ))}
      {messagesData.map(({ text, id }) => (
        <TextItem text={text} id={id} key={id} />
      ))}
    </>
  );
};

export default Messages;
