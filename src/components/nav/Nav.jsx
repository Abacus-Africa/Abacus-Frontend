import { Box, IconButton } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./Nav-slide/NavSlide";
import './Nav.css'

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  
     function handleOpen() {
      setOpen(true);
    }
    
      function Close() {
        setOpen(false);
      }

  return (
    <>
      <div className="flex justify-between items-center mt-8 md:mt-5 ml-10 md:ml-32 md:mr-10 nav-heading text-pblue">
        <div>
          <a href="/">
            <img src={Logo} alt="abacus logo"></img>
          </a>
        </div>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <nav className="flex p-3 space-x-6 font-medium" style={{alignItems:'center'}}>
            {[
              ["Home", "/"],
              ["Support", "/"],
              ["Blog", "https://abacusafrica.hashnode.dev/"],
              ["Pricing", "/"],
            ].map(([title, url], index) => (
              <a href={url} key={index} className='hover:border-b-2'>
                {title}
              </a>
            ))}
            
            {[
              [
                "Log In",
                "/login",
                "text-slate-700 border border-black rounded  w-20 py-2 buttons",
              ],
              [
                "Sign Up",
                "/signup",
                "text-pviolet border border-pviolet rounded w-32 py-2 buttons",
              ],
            ].map(([title, url, style], index) => (
              <a href={url} className={style} key={index} style={{display:'flex',justifyContent:'center'}}>
                {title}
              </a>
            ))}
          </nav>

          <div className="flex space-x-4 font-medium text-center p-3">
           
          </div>
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
          className='icon'
        >
          <IconButton
            aria-label="menu dropdown"
            size="large"
            onClick={handleOpen}
          >
            <MenuIcon fontSize="inherit" color='rgb(0,0,0)' />
          </IconButton>
        </Box>
      </div>
      <NavSlide openDialogValue={open} closeDialog={Close} />

    </>
  );
};

export default Nav;