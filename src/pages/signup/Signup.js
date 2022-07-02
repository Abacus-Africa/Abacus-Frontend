import React, { useState } from "react";
import "./Signup.css";
import girl from "../../assets/images/girl.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Nav from "../../components/nav/Nav";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }

  return (
    <>
      <Nav />
      <div className="signup_wrapper">
        <div className="signup_side_image">
          <img src={girl} alt="girl" />
          <div>
            <span>Abacus</span>, the Accounting<br></br> Software to manage your
            S.M.B
          </div>
        </div>
        <div className="sign_up_form_wrapper">
          <div className="sign_up_form">
            <div className="text-center fw-bolder text-white">Sign Up</div>

            <div className="signup_input_wrapper">
              <label for="name"> Name </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
              ></input>
            </div>
            <div className="signup_input_wrapper">
              <label for="email"> Email Address </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
              ></input>
            </div>
            <div className="signup_input_wrapper">
              <label for="password"> Password </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              ></input>
            </div>
            <div className="signup_input_wrapper">
              <label for="confirm-password"> Confirm password </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Re-enter Your password"
              ></input>
            </div>
            <Box className="form_check">
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="By clicking continue , I agree to the company's terms of service"
                sx={{ color: "white" }}
              />
            </Box>

            <Box className="btn-wrapper ">
              {/* <Button variant="outlined" >Sign Up</Button> */}
              <LoadingButton
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                variant="outlined"
              >
                Save
              </LoadingButton>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
