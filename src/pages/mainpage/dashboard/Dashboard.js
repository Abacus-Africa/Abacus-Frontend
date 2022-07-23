import {
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Dashboard.scss";
import search from "./../../../assets/icons/search.svg";
import notification from "./../../../assets/icons/notification.svg";
import user from "./../../../assets/icons/User.svg";
import uparrow from "./../../../assets/icons/upArrow.svg";
import downarrow from "./../../../assets/icons/downArrow.svg";
import dot from "./../../../assets/icons/dot.svg";
import chart from "./../../../assets/images/Chart.png";
import piechart from "./../../../assets/images/piechart.png";
import pieframe from "./../../../assets/images/pieframe.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dashboard = () => {
  const [transactions, setTransactions] = useState("");
  const [days, setDays] = useState("");
  const [ transactionDates ] = useState([
    "Jun 1st", "Jun 3rd", "Jun 5th", "Jun 6th", "Jun 7th", "Jun 8th", "Jun 9th",
    "Jun 10th", "Jun 11th", "Jun 12th",
  ]);
  const [ transactionId ] = useState([
    "#345678","#345678","#345678","#345678","#345678","#345678","#345678",
    "#345678","#345678","#345678",
  ]);
  const [ transactionValue ] = useState([
    "$30,000","$30,000","$30,000","$30,000","$30,000","$30,000","$30,000",
    "$30,000","$30,000","$30,000",
  ])
  const [ transactionStatus ] = useState([
    "Completed","Pending","Pending","Completed","Cancelled","Pending","Pending",
    "Pending","Completed","Cancelled",
  ])
  const [ transactionDescription] = useState([
    "Personal payment","Shopping","Personal payment","Tuition","Shopping","Personal payment",
    "Tuition","Shopping","Personal payment","Tuition",
  ])
  

  const handleTransactionsChange = (event) => {
    setTransactions(event.target.value);
  };
  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };
  return (
    <div className="dashboard">
      <Box className="dashboard-top">
        <Box className="dashboard-top-greeting">
          <Box className="greeting-name">Hi, Lummie</Box>
          <Box className="greeting-text">
            Welcome back it's nice to see you again
          </Box>
        </Box>
        <Box className="dashboard-top-icons">
          <img src={search} alt="search" />
          <img src={notification} alt="notification" />
          <img src={user} alt="user" />
        </Box>
      </Box>

      <Box className="dashboard-card">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Box className="card-wrapper">
              <Typography variant="p" className="card-title">
                Balance
              </Typography>
              <Box className="card-value">
                <Typography variant="p" className="card-cash">
                  $27632
                </Typography>
                <Typography variant="p" className="increase">
                  +25% <img src={uparrow} alt="uparrow" />
                </Typography>
              </Box>
              <Typography variant="p" className="card-comparison">
                Compared to ($21340 last year){" "}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box className="card-wrapper">
              <Typography variant="p" className="card-title">
                Profit
              </Typography>
              <Box className="card-value">
                <Typography variant="p" className="card-cash">
                  $27632
                </Typography>
                <Typography variant="p" className="increase">
                  +25% <img src={uparrow} alt="uparrow" />
                </Typography>
              </Box>
              <Typography variant="p" className="card-comparison">
                Compared to ($21340 last year){" "}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box className="card-wrapper">
              <Typography variant="p" className="card-title">
                Loss
              </Typography>
              <Box className="card-value">
                <Typography variant="p" className="card-cash">
                  $110
                </Typography>
                <Typography variant="p" className="decrease">
                  -1.5% <img src={downarrow} alt="downarrow" />
                </Typography>
              </Box>
              <Typography variant="p" className="card-comparison">
                Compared to ($165 last year){" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="dashboard-reports-analytics">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Box className="wrapper">
              <Box className="reports-top">
                <Typography variant="p" className="reports-text">
                  Report
                </Typography>
                <img src={dot} alt="dot" />
              </Box>
              <Box className="reports-chart">
                <img src={chart} alt="chart" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box className="wrapper">
              <Box className="reports-top">
                <Typography variant="p" className="reports-text">
                  Analytics
                </Typography>
                <img src={dot} alt="dot" />
              </Box>
              <Box className="pie">
                <img src={piechart} alt="piechart" />
                <img src={pieframe} alt="pieframe" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="transactions">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="transactions-wrapper">
              <Grid container className="transactions-top">
                <Grid item xs={5} className="transactions-title">
                  Transactions
                </Grid>
                <Grid item xs={4} className="transactions-drop-downs">
                  <FormControl className="drops">
                    <Select
                      value={transactions}
                      onChange={handleTransactionsChange}
                      displayEmpty
                      inputProps={{ "aria-label": "transactions" }}
                      // sx={{
                      //   "& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input" : {
                      //     padding: '5px 5px'
                      //   }
                      // }}
                    >
                      <MenuItem value="">All Transaction</MenuItem>
                      <MenuItem value="...">...</MenuItem>
                      <MenuItem value="...">...</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className="drops">
                    <Select
                      value={days}
                      onChange={handleDaysChange}
                      displayEmpty
                      inputProps={{ "aria-label": "days" }}
                    >
                      <MenuItem value="">Last 30 days</MenuItem>
                      <MenuItem value="...">...</MenuItem>
                      <MenuItem value="...">...</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container className="transactions-heading">
                <Grid item xs={3} md={2} sx={{display:'flex'}} className="transactions-heading-title">
                  Date <KeyboardArrowDownIcon />
                </Grid>
                <Grid item xs={3} md={2} sx={{display:'flex'}} className="transactions-heading-title">
                  ID <KeyboardArrowDownIcon />
                </Grid>
                <Grid item xs={3} md={2} sx={{display:'flex'}} className="transactions-heading-title">
                  Value <KeyboardArrowDownIcon />
                </Grid>
                <Grid item xs={3} md={2} sx={{display:'flex'}} className="transactions-heading-title">
                  Status <KeyboardArrowDownIcon />
                </Grid>
                <Grid item  md={2} sx={{display: {xs:'none', md:'flex'} }} className="transactions-heading-title">
                  Description <KeyboardArrowDownIcon />
                </Grid>
              </Grid>
              <Box className='divider'>
                <Divider />
              </Box>
              <Grid container className='transaction-values'>
                <Grid item xs={3} md={2} className='transaction-values-details' sx={{display:'flex'}}>
                  { transactionDates.map((item)=>{
                    return (
                      <Typography variant='p' className='details-value'>{item}</Typography>
                    )
                  }) }
                </Grid>

                <Grid item xs={3} md={2} className='transaction-values-details' sx={{display:'flex'}}>
                  { transactionId.map((item)=>{
                    return (
                      <Typography variant='p' className='details-value'>{item}</Typography>
                    )
                  }) }
                </Grid>

                <Grid item xs={3} md={2} className='transaction-values-details' sx={{display:'flex'}}>
                  { transactionValue.map((item)=>{
                    return (
                      <Typography variant='p' className='details-value'>{item}</Typography>
                    )
                  }) }
                </Grid>

                <Grid item xs={3} md={2} className='transaction-values-details'>
                  { transactionStatus.map((item)=>{
                    return (
                      <Typography variant='p' className='details-status' sx={{
                        background : item === 'Completed' ? "#15803D" : item === "Pending" ? "#F38A20" : "#DC2626" , display:'flex'
                      }}>{item}</Typography>
                    )
                  }) }
                </Grid>

                <Grid item  md={4} className='transaction-values-details' sx={{display: {xs:'none', md:'flex'} }} >
                  { transactionDescription.map((item)=>{
                    return (
                      <Typography variant='p' className='details-value'>{item}</Typography>
                    )
                  }) }
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
              <Box className='pagination'>
              <Pagination count={10} variant="outlined" shape="rounded" size='small' />
              <Typography variant='p' className='pagination-text'>Showing 10 items out of 95</Typography>
              </Box>
    </div>
  );
};

export default Dashboard;
