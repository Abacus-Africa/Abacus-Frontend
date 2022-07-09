import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
// import Nav from "../../components/nav/Nav";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="forgot-password-wrapper">
        <Card
          sx={{  minWidth: { sm:350 , md:450 },  background: "#160051", padding: "40px 40px" }}
          className="forgot-password-card"
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="forgot-password-card-content"
          >
            <Typography
              sx={{ fontSize: 27, fontWeight: 500 }}
              variant="h2"
              color="text.secondary"
              gutterBottom
            >
              Forgot Password
            </Typography>

            <Typography sx={{ mb: 1.5, fontSize: 10 }} color="text.secondary">
              please enter your email and we will send you a resend password
              link
            </Typography>
          </CardContent>
          <CardActions>
            <form>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
              ></input>

              <Box>
               <Link to='/resetpassword'>
                <Button variant="outlined">continue</Button>
               </Link>
              </Box>
            </form>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;