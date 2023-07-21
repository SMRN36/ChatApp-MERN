import React from 'react'
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
                <AccountCircleIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
                <PersonAddIcon/>
          </IconButton>
              <IconButton>
                <GroupAddIcon/>
          </IconButton>
          <IconButton>
            <AddCircleIcon/>
          </IconButton>

          <IconButton>
              <NightlightIcon/>
          </IconButton>
          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className="search-box"
        />
      </div>
      <div className="sb-conversations"></div>
    </div>
  )
}

export default Sidebar