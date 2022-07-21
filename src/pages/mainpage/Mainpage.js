import React from "react";
import "./Mainpage.css";
import MainLeftNav from "../../components/mainpagenav/MainLeftNav";
import { Outlet } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <MainLeftNav />
      <Box
        className="mainpage-outlet"
        sx={{ width: { sm: "100%", md: "85%" } }}
      >
        <IconButton
          aria-label="menu"
          sx={{ display: { sm: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Outlet />
      </Box>
    </div>
  );
};

export default Mainpage;
