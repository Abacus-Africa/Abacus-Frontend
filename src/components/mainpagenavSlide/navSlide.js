import React from "react";
import Dialog from "@mui/material/Dialog";
import { AppBar, Box, IconButton, Slide, Toolbar } from "@mui/material";
import "./navSlide.scss";
import { NavLink } from "react-router-dom";
import customer from "../../assets/icons/customer.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import inventory from "../../assets/icons/inventory.svg";
import profile from "../../assets/icons/profile.svg";
import reports from "../../assets/icons/reports.svg";
import settings from "../../assets/icons/settings.svg";
import wallet from "../../assets/icons/wallet.svg";
import invoice from "../../assets/icons/invoice.svg";
import logout from "../../assets/icons/logout.svg";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavSlide = (props) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.openSideNav}
        onClose={props.closeSideNav}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-container": {
            display: "flex",
            justifyContent: "flex-end",
            "& .MuiPaper-root": {
              width: "60%",
              maxWidth: "568px",
            },
          },
          background: "rgba(229,229,229,0.4)",
          display: { md: "none" },
        }}
      >
        <div className="nav-slide">
          <div className="links">
            <Box
              color="default"
              elevation={1}
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems:'center' }}
            >
              <Box className="mainpage-logo">
                <img src={Logo} alt="logo" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton aria-label="close" onClick={props.closeSideNav}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            <NavLink to="dashboard">
              {" "}
              <img src={dashboard} alt="dashboard" />
              Dashboard
            </NavLink>
            <NavLink to="invoices">
              {" "}
              <img src={invoice} alt="invoices" />
              Invoices
            </NavLink>
            <NavLink to="inventory">
              <img src={inventory} alt="inventory" />
              Inventory
            </NavLink>
            <NavLink to="customer">
              <img src={customer} alt="customer" />
              Customer
            </NavLink>
            <NavLink to="financial-reports">
              <img src={reports} alt="finance" />
              Financial reports
            </NavLink>
            <NavLink to="wallet">
              <img src={wallet} alt="wallet" />
              Wallet
            </NavLink>
            <NavLink to="profile">
              <img src={profile} alt="profile" />
              Profile
            </NavLink>
            <NavLink to="settings">
              <img src={settings} alt="settings" />
              Settings
            </NavLink>
          </div>

          <div className="logout">
            <NavLink to="/">
              <img src={logout} alt="logout" />
              Logout
            </NavLink>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NavSlide;
