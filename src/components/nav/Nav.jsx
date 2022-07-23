import { Box, IconButton } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./Nav-slide/NavSlide";

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
              ["Pricing", "/pricing"],
            ].map(([title, url], index) => (
              <a href={url} key={index} className='hover:border-b-2'>
                {title}
              </a>
            ))}
          </nav>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <div className="flex space-x-4 font-medium text-center p-3" >
            {[
              [
                "Log In",
                "/login",
                "text-pblue border font-semibold border-pblue rounded-lg w-20 py-2",
              ],
              [
                "Sign Up",
                "/signup",
                "text-pviolet border font-semibold border-pviolet rounded-lg w-32 py-2",
              ],
            ].map(([title, url, style], index) => (
              <a href={url} className={style} key={index} >
                {title}
              </a>
            ))}
          </div>
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton
            aria-label="menu dropdown"
            size="large"
            onClick={handleOpen}
            
          >
            <MenuIcon fontSize="inherit" className="text-pblue" />
          </IconButton>
        </Box>
      </div>
      <NavSlide openDialogValue={open} closeDialog={Close} />

    </>
  );
};

export default Nav;