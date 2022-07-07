import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Slide, Toolbar } from "@mui/material";
import "./NavSlide.css";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavSlide = (props) => {
  const handleClose = () => {
    props.closeDialog();
  };
  return (
    <>
      <Dialog
        fullScreen
        open={props.openDialogValue}
        onClose={handleClose}
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
          background: "rgba(0,0,0,0.5)",
        }}
        className="nav-dialog"
      >
        <Toolbar className="close">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>

        <Box className="nav-slide-links">
          {[
            ["Home", "/"],
            ["Support", "/"],
            ["Blog", "https://abacusafrica.hashnode.dev/"],
            ["Pricing", "/"],
            ["Login", "/login"],
            ["Signup", "/signup"],
          ].map(([title, url], index) => (
            <Link to={url} key={index}>
              {title}
            </Link>
          ))}
        </Box>
      </Dialog>
    </>
  );
};

export default NavSlide;
