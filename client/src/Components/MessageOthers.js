import React from 'react';
import "./myStyles.css";
import { useDispatch, useSelector } from "react-redux";

function MessageOthers() {
    var props1 = {name: "RandomUser", message: "This is a sample message"}
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
        <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props1.name[0]}</p>
        </div>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>{props1.name}</p>
          <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>{props1.lastMessage}</p>
            <p className='con-timeStamp'>12:00pm</p>
        </div>
    </div>
  )
}

export default MessageOthers