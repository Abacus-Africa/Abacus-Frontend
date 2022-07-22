import React, { useState } from "react";
import "./Mainpage.css";
import MainLeftNav from "../../components/mainpagenav/MainLeftNav";
import { Outlet } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "../../components/mainpagenavSlide/NavSlide";

const Mainpage = () => {
  const [openNav, setOpenNav] = useState(false);
  function closeSideNav() {
    setOpenNav(false);
  }
  function openSideNav() {
    setOpenNav(true);
  }
  return (
    <div className="mainpage">
      <MainLeftNav />
      <Box
        className="mainpage-outlet"
        sx={{ width: { xs: "100%", md: "80%" } }}
      >
        <IconButton
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } , marginLeft:'20px'}}
          onClick={openSideNav}
        >
          <MenuIcon />
        </IconButton>
        <Outlet />
      </Box>
      <NavSlide openSideNav={openNav} closeSideNav={closeSideNav} />
    </div>
  );
};

export default Mainpage;
