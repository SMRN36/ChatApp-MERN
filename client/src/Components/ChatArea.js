import React, {useState } from 'react'
import "./myStyles.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from "react-redux";

function ChatArea({ props }) {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);
  var props = conversations[0];
  const lightTheme = useSelector((state) => state.themeKey);
  return (
      <div className={"chatArea-container" + (lightTheme ? "" : " dark")}>
        <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
          <div className={"header-text" + (lightTheme ? "" : " dark")}>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>{props.name}</p>
            <p className="con-timeStamp">{props.timeStamp}</p> 
          </div>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={"messages-container" + (lightTheme ? "" : " dark")}>
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
        </div>
        <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
        <input
            placeholder="Type a Message"
            className={"search-box" + (lightTheme ? "" : " dark")}
        />
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SendIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default ChatArea