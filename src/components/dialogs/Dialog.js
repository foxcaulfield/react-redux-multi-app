import React from "react";
import { useParams } from "react-router-dom";
// import { getUser } from "./../data";
import { useSelector } from "react-redux";
import { selectUser } from "./dialogsSlice";

const Dialog = (props) => {
  let params = useParams();

  // let user = getUser(parseInt(params.dialogId, 10));
  let user = useSelector(selectUser(parseInt(params.dialogId, 10)));
  console.log("user", user);

  let messages = user.messages;
  return (
    <div>
      <div>
        <h2>
          {user.title}
          {/* dialog #{params.dialogId} */}
        </h2>
      </div>
      <div>
        {messages.map((message, index) => (
          <p key={index + "ab"}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default Dialog;
