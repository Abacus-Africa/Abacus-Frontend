import React from "react";
import "./Signup.css";
import girl from "../../assets/images/girl.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import google from './../../assets/icons/Google Icon.svg'
import apple from './../../assets/icons/Apple Icon.svg'
import Nav from "../../components/nav/Nav";

const Signup = () => {
  return (
    <>
    <Nav />
      <div className="signup_wrapper">
        <div className="signup_side_image">
          
          <img src={girl} alt="girl" />
          <div>
            <span>Abacus</span>, the Accounting Software to manage your
            S.M.B
          </div>
        </div>

        <div className="sign_up_form_wrapper">
          <div className="sign_up_form">
            <div className="text-center fw-bolder text-white">Sign Up</div>

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
                name: Yup.string().required("name is required"),
                email: Yup.string()
                  .required("email is required")
                  .email("invalid email address"),
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
                  <div className="signup_input_wrapper">
                    <label htmlFor="name"> Name </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.name && errors.name ? "info-error" : null
                      }
                      placeholder="Enter your name"
                    />
                    {errors.name && touched.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>

                  <div className="signup_input_wrapper">
                    <label htmlFor="email"> Email Address </label>
                    <input
                      type="email"
                      id="email"
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? "info-error" : null
                      }
                      placeholder="Enter your email address"
                    />
                     {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="signup_input_wrapper">
                    <label htmlFor="password"> Password </label>
                    <input
                      type="password"
                      id="password"
                      name='password'
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
                  </div>

                  <div className="signup_input_wrapper">
                    <label htmlFor="confirm-password"> Confirm password </label>
                    <input
                      type="password"
                      id="confirmpassword"
                      name='confirmpassword'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                      className={
                        touched.confirmpassword && errors.confirmpassword ? "info-error" : null
                      }
                      placeholder="Re-enter your password"
                    />
                     {errors.confirmpassword && touched.confirmpassword && (
                      <span className="error">{errors.confirmpassword}</span>
                    )}
                  </div>

                  <Box className="form_check">
                    <FormControlLabel
                      control={<Checkbox color="secondary" />}
                      label="By clicking continue , I agree to the company's terms of service"
                      sx={{ color: "white" }}
                    />
                  </Box>

                  <Box className="btn-wrapper ">
                   <Link to='/mainpage/dashboard'> <Button variant="outlined" type='submit'>Sign Up</Button> </Link>
                    <Typography variant="h6">Or</Typography>
                    <Box>
                      <Button variant="contained">
                        {" "}
                        <img src={google} alt='google'/>
                        Sign up with Google
                      </Button>
                      <Button variant="contained">
                      {" "}
                        <img src={apple} alt='apple'/>
                        Sign up with Apple
                      </Button>
                    </Box>
                    <Typography className="login_link">
                      Already have an account?{" "}
                      <span>
                        <Link to="/login">Login</Link>
                      </span>
                    </Typography>
                  </Box>
                </form>
              )}
            </Formik>
          </div>

          <footer>
            <Box>
              <Typography>Abacus</Typography>
              <Typography>As easy as it gets</Typography>
            </Box>
            <hr></hr>
            <Box>
              <LinkedInIcon />
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Signup;
