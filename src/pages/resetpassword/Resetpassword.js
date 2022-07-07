import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Nav from "../../components/nav/Nav";
import './Resetpassword.css'

const Resetpassword = () => {
  return (
    <>
    <Nav />
    <div className="reset-password-wrapper">
      <Card
        sx={{  minWidth: { sm:350 , md:450 },  background: "#160051", padding: "40px 40px" }}
        className="reset-password-card"
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="reset-password-card-content"
        >
          <Typography
            sx={{ fontSize: 27, fontWeight: 500 }}
            variant="h2"
            color="text.secondary"
            gutterBottom
          >
            Reset Password
          </Typography>

        </CardContent>
        <CardActions>
          <form>
            <label>create new password</label>
            <input
              type="password"
              placeholder="Enter new password"
            ></input>

            <label>confirm password</label>
            <input
              type="password"
              placeholder="Re-enter new password"
            ></input>

            <Box>
              <Button variant="outlined">continue</Button>
            </Box>
          </form>
        </CardActions>
      </Card>
    </div>
  </>
  )
}

export default Resetpassword