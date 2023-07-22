import React from 'react'
import "./myStyles.css";
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function MainContainer() {
  
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"main-container" + (lightTheme ? "" : " dark")}>
      <Sidebar/>
      <Outlet />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
        
    </div>
  )
}

export default MainContainer