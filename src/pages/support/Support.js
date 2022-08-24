import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Support.scss";
import Footer from "../../components/footer";

const Support = () => {
  const [faqFirstData] = useState([
    {
      question: "What is Abacus?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why should I use Abacus?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How long does it take to get the abacus accounting software set up?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Will I lose my data if Abacus servers go down?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "Is the Abacus software free?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Is abacus accounting software safe and secure?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Do I have to be a techie to handle the software?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Can I export my data to back it up or share it with my accountant?",
      answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "And what about those pesky hackers and thieves?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "What kind of support do I get?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What if the company is located outside Nigeria? Do I still receive support?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
   
  ]);

  const [faqSecondData] = useState([
    {
      question: "Can I manage my payroll using the software?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Do I need to install software to do my accounting online?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Can I access my accounting using a mobile device?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Do I get customer support?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "Do I need to be an accountant or bookkeeper to use the Abacus software?",
      answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Can I use the accounting software in collaboration with my bookkeeper?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Can I give access to people other than my accountant/bookkeeper to use my account?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Will online accounting software take away my dislike for bookkeeping?",
      answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What are the main features of Abacus?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "Is the support 24/7?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
   
   
  ]);
  return (
    <>
      <Nav />
      <Box className="support-body">
        <Box className="faq-top">
          <Typography variant="h5" className="faq-text-one">
            FAQs
          </Typography>
          <Typography variant="p" className="faq-text-two">
            Do you have any questions about Abacus? Have a look at a list of our
            frequently asked questions below.
            <Typography className="faq-text-two">
              {" "}
              If your questions are not listed here, please{" "}
              <Link to="/contact">Contact Us</Link>{" "}
            </Typography>
          </Typography>
          <Box className="faq-search">
            <IconButton className="icon">
              <SearchIcon />
            </IconButton>
            <input
              class="input-field"
              type="text"
              placeHolder="Search Using Keyword"
            />
          </Box>
        </Box>

        <Box className="faq-body">
          <Box className="faq-body-top">Frequently Asked Questions</Box>
          <Grid container className="faq-body-box-container" columnSpacing={2}>
            <Grid item xs={12} md={6} className="faq-body-box">
              {faqFirstData.map((item, index) => {
                return (
                  <Box className="faq-list">
                    {" "}
                    <Accordion
                      className="faq-list-item"
                      sx={{
                        ".css-i4bv87-MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography variant="p"> {item.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>{" "}
                  </Box>
                );
              })}
            </Grid>

            <Grid item xs={12} md={6} className="faq-body-box">
              {faqSecondData.map((item, index) => {
                return (
                  <Box className="faq-list">
                    {" "}
                    <Accordion
                      className="faq-list-item"
                      sx={{
                        ".css-i4bv87-MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography variant="p"> {item.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>{" "}
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Support;
