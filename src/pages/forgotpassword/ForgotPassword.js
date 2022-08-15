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
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
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
            <Typography className="forgot-password-card-content-top">
              Forgot Password
            </Typography>

            <Typography className="forgot-password-card-content-detail">
              please enter your email and we will send you a resend password
              link
            </Typography>
          </CardContent>
          <CardActions>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .required("email is required")
                  .email("invalid email address"),
              })}

              // onSubmit={async (values) =>{
              //   const body ={
              //     email:values.email,
              //     password:values.password
              //   }
              //   alert(JSON.stringify(body))
              // }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? "pass-error" : null
                    }
                    placeholder="Enter your email address"
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}

                  <Box>
                    <Link to="/resetpassword">
                      <Button variant="outlined">continue</Button>
                    </Link>
                  </Box>
                </form>
              )}
            </Formik>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
