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
import { Formik } from "formik";
import * as Yup from "yup";
import "./Resetpassword.css";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <Nav />
      <div className="reset-password-wrapper">
        <Card
          sx={{
            // minWidth: { sm: 350, md: 450 },
            background: "#160051",
            padding: "40px 40px",
          }}
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
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
              }}
              // onSubmit={async (values) => {
              //   const body = {
              //     name: values.name,
              //     email: values.email,
              //   };

              // alert(JSON.stringify(body));
              // }}
              validationSchema={Yup.object({
                password: Yup.string().required("password is required"),
                confirmpassword: Yup.string()
                  .required("you need to renter your password")
                  .oneOf([Yup.ref("password"), null], "Passwords must match"),
              })}
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
                  <label>create new password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      touched.password && errors.password ? "info-error" : null
                    }
                    placeholder="Enter your password"
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}

                  <label>confirm password</label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                    className={
                      touched.confirmpassword && errors.confirmpassword
                        ? "info-error"
                        : null
                    }
                    placeholder="Re-enter your password"
                  />
                  {errors.confirmpassword && touched.confirmpassword && (
                    <span className="error">{errors.confirmpassword}</span>
                  )}

                  <Box>
                  <Link to="/passwordchanged">
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

export default Resetpassword;
