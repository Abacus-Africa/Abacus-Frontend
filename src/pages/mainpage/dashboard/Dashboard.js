import { Box, Grid, Typography } from "@mui/material";
import React from "react";
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

const Dashboard = () => {
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
                  +25%
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
                  +25%
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
                  -1.5%
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

          <Grid item xs={4} md={3}>
            <Box className="wrapper">
              <Box className="reports-top">
                <Typography variant="p" className="reports-text">
                  Analytics
                </Typography>
                <img src={dot} alt="dot" />
              </Box>
              <Box className='pie'>
                <img src={piechart} alt='piechart' />
                <img src={pieframe} alt='pieframe' />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
