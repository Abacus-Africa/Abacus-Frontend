import React from "react";
import Dialog from '@mui/material/Dialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const navSlide = () => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-container": {
            display: "flex",
            justifyContent: "flex-end",
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "568px",
            },
          },
          background: "rgba(229,229,229,0.4)",
        }}
      >
        
      </Dialog>
    </div>
  );
};

export default navSlide;
