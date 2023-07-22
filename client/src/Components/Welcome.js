import React from "react";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";


function Welcome() {
    const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;