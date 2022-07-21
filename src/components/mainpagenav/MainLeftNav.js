import React from "react";
import "./MainLeftNav.scss";
import Logo from "../../assets/images/logo.png";
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
import { Box } from "@mui/material";

const MainLeftNav = () => {
  return (
    <Box sx={{ display: { sm: "none", md: "flex" } }} className="mainpage-nav">
      <div>
        <div className="mainpage-logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="links">
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
      </div>

      <div className="logout">
        <NavLink to="/">
          <img src={logout} alt="logout" />
          Logout
        </NavLink>
      </div>
    </Box>
  );
};

export default MainLeftNav;
