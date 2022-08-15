import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Nav from "../../components/nav/Nav";
import * as Yup from "yup";
import { Formik } from "formik";
import "./ContactUs.scss";
import { Link } from "react-router-dom";
import SendIcon from "./../../assets/icons/sendIcon.svg";
import mailIcon from "./../../assets/icons/mailIcon.svg";
import messageIcon from "./../../assets/icons/messageIcon.svg";
import locationIcon from "./../../assets/icons/locationIcon.svg";
import cmailIcon from "./../../assets/icons/cmailIcon.svg";
import phoneIcon from "./../../assets/icons/phoneIcon.svg";

const ContactUs = () => {
  return (
    <>
      <Nav />

      <Box className="contactus-wrapper">
        <Box className="contactus-form-wrapper">
          <Typography className="contactus-form-textone">
            Have any questions or concerns?
          </Typography>
          <Typography className="contactus-form-texttwo">
            Contact us by filling the form below. Don’t forget to also check out
            our{" "}
            <Link to="/support" className="support-link">
              {" "}
              FAQ{" "}
            </Link>{" "}
            Page!
          </Typography>

          <Formik
            initialValues={{
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("email is required")
                .email("invalid email address"),
              message: Yup.string().required("please type a message"),
            })}
            onSubmit={async (values) => {
              const body = {
                email: values.email,
              };
              alert(JSON.stringify(body));
            }}
            className="form"
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
                  <Box component="img" src={mailIcon} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholeder="Email Address"
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
                  <Box
                    component="img"
                    src={messageIcon}
                    className="input-icon"
                  />
                  <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholeder="message Address"
                    className={
                      touched.message && errors.message ? "info-error" : null
                    }
                    placeholder="Type a message"
                  />
                  {errors.message && touched.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>

                <Button className="contactus-send-btn">
                  <Box component="img" alt="send" src={SendIcon} />
                  Send
                </Button>
              </form>
            )}
          </Formik>
        </Box>
        <Box className="contactus-details">
          <Typography className="contact-details-top">
            Contact Us:
            </Typography>
          <Typography className="contact-details-text">
           <Box component="img" src={locationIcon} /> Lagos, Nigeria
          </Typography>
          <Typography className="contact-details-text">
          <Box component="img" src={cmailIcon} />  useabacus@gmail.com
          </Typography>
          <Typography className="contact-details-text">
          <Box component="img" src={phoneIcon} />  +234-811-234-5678
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
