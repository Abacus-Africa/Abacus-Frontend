import React from "react";
import "./Login.css";
import girl from "../../assets/images/girl.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Nav from "../../components/nav/Nav";
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


const Login = () => {
  return (
    <>
      <Nav />
      <div className="login_wrapper">
        <div className="login_side_image">
          <img src={girl} alt="girl" />
          <div>
            <span>Abacus</span>, the Accounting Software to manage your
            S.M.B
          </div>
        </div>

        <div className="log_in_form_wrapper">
          <div className="log_in_form">
            <div className="text-center fw-bolder text-white">Log In</div>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}


              validationSchema={Yup.object({
                email: Yup.string()
                  .required("email is required")
                  .email("invalid email address"),
                  password: Yup.string().required("password is required"),
              })}

              onSubmit={async (values) =>{
                const body ={
                  email:values.email,
                  password:values.password
                }
                // alert(JSON.stringify(body))
              }}
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
                  <div className="login_input_wrapper">
                    <label htmlFor="email"> Email Address </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
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

                  <div className="login_input_wrapper">
                    <label htmlFor="password"> Password </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password
                          ? "info-error"
                          : null
                      }
                      placeholder="Enter your password"
                    />
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>

                  <Box className="form_check">
                    <FormControlLabel
                      control={<Checkbox color="secondary" />}
                      label="Remember me"
                      sx={{ color: "white" }}
                    />
                    <Typography>
                      <Link to="/forgotpassword">Forgot password?</Link>
                    </Typography>
                  </Box>

                  <Box className="btn-wrapper ">
                    <Button variant="outlined" type='submit'>Log In</Button>
                    <Typography variant="h6">Or</Typography>
                    <Box>
                      <Button variant="contained">
                        {" "}
                        <img src={google} />
                        Login with Google
                      </Button>
                      <Button variant="contained">
                      <img src={apple} />
                        Login with Apple
                      </Button>
                    </Box>
                    <Typography className="login_link">
                      Don't have an account?{" "}
                      <span>
                        <Link to="/signup">Sign Up</Link>
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

export default Login;
