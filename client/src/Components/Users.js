import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";

function Users() {
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className="list-container">
          <div className={"ug-header" + (lightTheme ? "" : " dark")}>
            <img
              src={logo}
              style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            />
            <p className={"ug-title" + (lightTheme ? "" : " dark")}>Available Users</p>
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
          <div className="ug-list">
              <div className="list-tem">
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}> Test User </p>
              </div>
              <div className="list-tem">
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}> Test User </p>
              </div>
              <div className="list-tem">
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}> Test User </p>
              </div>
          </div>
      </div>
    );
  }

export default Users;