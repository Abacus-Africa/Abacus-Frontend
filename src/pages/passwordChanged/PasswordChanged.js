import React from 'react'
import CheckIcon from "./../../assets/icons/checkIcon.svg"
import {
    Box,
    Card,
    CardContent,
    Divider,
  } from "@mui/material";
  
  import Nav from "../../components/nav/Nav";
  import "./passwordChanged.scss"

const PasswordChanged = () => {
  return (
    <>
    <Nav />
    <div className="forgot-password-wrapper">
      <Card
        sx={{
          // minWidth: { sm: 350, md: 450 },
          background: "#160051",
          padding: "40px 10px",
        }}
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
            <Box component="img" src={CheckIcon} className="password-check"></Box>
            <Box className="password-text">Password Changed</Box>
            <Divider />
            <Box className="congrats-text">Congratulations! You have successfully updated your password Kindly review your profile to make updates</Box>

          
        </CardContent>
        
      </Card>
    </div>
  </>
  )
}

export default PasswordChanged