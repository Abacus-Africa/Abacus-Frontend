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
        " Abacus is an online accounting solution. It is a cloud-based software created to handle lawful and traceable accounting processes like invoicing, billing, estimating, expense and time tracking, projecting, and lots more on the internet. This software does not take up valuable space on your hard drive as it runs in the cloud and works perfectly in the web browser.With Abacus, your accounting work is stored in a secure online environment and is accessible to you anywhere at any given time.",
    },
    {
      question: "Why should I use Abacus?",
      answer:
        " Not only is it easier to use than Excel spreadsheets and paper-based accounting, but it is also a perfect alternative to the now obsolete and time-consuming traditional accounting.Your data is always backed up to a safe server, you can access your account anytime, from anywhere, you're only required to pay a monthly subscription fee for what you use and this can be canceled at anytime.Add to this the benefits of using the mobile apps while on the road and integrating other software and online services into your online accounting software, and you might even start to love accounting! (Mobile applications are coming soon)",
    },
    {
      question: "How long does it take to get the abacus accounting software set up?",
      answer:
        "Getting registered on Abacus usually takes a few minute.If you happen to run into any issue while registering, please do not hesitate to reach out to our Customer support." 
    },
    {
      question: "Will I lose my data if Abacus servers go down?",
      answer:
        "Losing your data due to server failure is virtually impossible.Abacus has multiple servers running at the same time, therefore if one of them goes down another one takes its place.Our servers are placed at different physical locations, so in the event of any natural disasters, there ae backups.Remember: you lose data if you, and only you, delete it.",
    },
    {
      question:
        "Is the Abacus software free?",
      answer:
        " We offer a free trial for 21 days, after which you will need to subscribe to one of our plans to continue enjoying our services.",
    },
    {
      question: "Is abacus accounting software safe and secure?",
      answer:
        " Yes, Abacus is perfectly safe and secure. Storing your data in the cloud is even safer than having them on your computer where they can be lost forever due to a system crash or external damage. Furthermore, your data is constantly backed up at the end of each day, and they are encrypted in the same sophisticated way as online banking data.To find out more about this topic, check out this article.",
    },
    {
      question: "Do I have to be a techie to handle the software?",
      answer:
        "You don’t need to be a tech genius to handle Abacus, because we have developed it to be as intuitive as possible.",
    },
    {
      question: "Can I export my data to back it up or share it with my accountant?",
      answer:" Of course! You can save your data in CSV format on your computer and you can send keep as a backup, or send complete with all of your data, to your accountant.Although you also have the option of inviting your accountant to your account as a collaborator.",
    },
    {
      question: "And what about those pesky hackers and thieves?",
      answer:
        "Good luck to them in jail.The bank-level encryption of every account and the continuous monitoring of network traffic ensures that nobody, aside from you and the authorized personnel, can see your data.",
    },
    {
      question:
        "What kind of support do I get?",
      answer:
        " Asides from the usual support – like email, live chat, and phone support – you can read and watch tutorials, ask a question in the community forums, attend events and webinars organized by the abacus, or read a FAQ (like the one you are currently reading).",
    },
    {
      question: "What if the company is located outside Nigeria? Do I still receive support?",
      answer:
        " No matter on which side of the planet you are, you get support from us.",
    },
   
  ]);

  const [faqSecondData] = useState([
    {
      question: "Can I manage my payroll using the software?",
      answer:
        "Yes. You can add a limited amount of employees, but they can log their own work time and get paid accordingly either by check or by direct deposit.As mentioned before, tax preparation is completely automated, therefore your only concern is filing those tax papers in time.",
    },
    {
      question: "Do I need to install software to do my accounting online?",
      answer:
        "No, you only need a browser and internet connection to handle your accounting. There is no software to be downloaded or settings on your computer to be changed whatsoever. You simply need to type in www.xyz.com (cue for the Abacus website) and off you go.",
    },
    {
      question: "Can I access my accounting using a mobile device?",
      answer:
        "Certainly! Abacus accounting solutions can be accessed from your mobile browser from anywhere.We have plans to provide a mobile application free of charge for iOS and Android platforms. With the apps, you can access most of the features of the desktop version of the software, like creating invoices, recording expenses, managing clients, and more.",
    },
    {
      question: "Do I get customer support?",
      answer:
        "Yes, you get all the help you need – whether you just started using the software or you are already a pro.",
    },
    {
      question:
        "Do I need to be an accountant or bookkeeper to use the Abacus software?",
      answer:"If you are an accountant or bookkeeper then yes. 🙂 Jokes aside, the answer is No.As we mentioned before, this software was developed with non-accountants in mind, so using it shouldn’t be a problem at all.",
    },
    {
      question: "Can I use the accounting software in collaboration with my bookkeeper?",
      answer:
        " Yes, you can, just give him/her access to your accounts by inviting them as a collaborator.With this, you can speed up the work even more.",
    },
    {
      question: "Can I give access to people other than my accountant/bookkeeper to use my account?",
      answer:
        "Yes, you can give access to other people to use your account. You can determine whether you give them limited or full access.FHowever, be careful to only give access to people you trust to avoid data theft!",
    },
    {
      question: "Will online accounting software take away my dislike for bookkeeping?",
      answer:" It is hard to answer this question because it entirely depends on you. However, it is guaranteed that using our accounting solution will significantly decrease your dislike towards bookkeeping. And who knows: in the end, you might end up looking at bookkeeping as an easy and quick chore.",
    },
    {
      question: "What are the main features of Abacus?",
      answer:
        "There are different features, but the most important are:Recurring multi-currency invoicing, billing, estimating, tracking and recording expenses Creating projects Time tracking Inventory Check to print Bank-feed auto syncing Auto-generated business reports.",
    },
    {
      question:
        "Is the support 24/7?",
      answer:
        "Yes, you get 24/7 support at Abacus.",
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
