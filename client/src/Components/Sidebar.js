import React, { useState } from 'react'
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

function Sidebar() {
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton 
          onClick={() => {
            nav("/app/welcome");
          }}>
                <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}>
                <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
              <IconButton
                onClick={() => {
                  navigate("groups");
                }}>
                <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}>
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}>
              {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton>
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} key={conversation.name} />
        })}
      </div>
    </div>
  );
}

export default Sidebar