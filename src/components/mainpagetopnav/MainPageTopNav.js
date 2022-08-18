import { Box, IconButton } from "@mui/material";
import React from "react";
import search from "./../../assets/icons/search.svg";
import notification from "./../../assets/icons/notification.svg";
import user from "./../../assets/icons/User.svg";
import "./MainPageTopNav.scss";

const MainPageTopNav = (props) => {
  return (
    <div>
      <Box className="dashboard-top">
        <Box className="dashboard-top-greeting">
          <Box className="greeting-name">{props.name}</Box>
        </Box>
        <Box className="dashboard-top-icons">
          <IconButton>
            <img src={search} alt="search" />
          </IconButton>
          <IconButton>
            <img src={notification} alt="notification" />
          </IconButton>
          <IconButton>
            <img src={user} alt="user" />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default MainPageTopNav;
