import { Box, FormControl, Grid, IconButton, MenuItem, Pagination, Select, Typography } from "@mui/material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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

const Dashboard = () => {
  const [transaction, setTransaction] = React.useState('All Transactions');

  const handleChangeTransaction = (event) => {
    setTransaction(event.target.value);
  };
  const [tableData] = useState([
    {
      date: "Jun 1st",
      id: "#344333",
      value: "$30,000",
      status: "Completed",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#324343",
      value: "$30,000",
      status: "Pending",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#346343",
      value: "$30,000",
      status: "Pending",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#344743",
      value: "$30,000",
      status: "Completed",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#348343",
      value: "$30,000",
      status: "Cancelled",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#349343",
      value: "$30,000",
      status: "Pending",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#344303",
      value: "$30,000",
      status: "Pending",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#254433",
      value: "$30,000",
      status: "Pending",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#144343",
      value: "$30,000",
      status: "Completed",
      description: "Personal Payment",
    },
    {
      date: "Jun 1st",
      id: "#340143",
      value: "$30,000",
      status: "Completed",
      description: "Personal Payment",
    },
  ]);
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
          <IconButton>
            <img src={search} alt="search" />
          </IconButton>
          <IconButton>
            <img src={notification} alt="notification" />
          </IconButton>
          <IconButton>
            <img src={user} alt="user" />
          </IconButton>
        </Box>
      </Box>

      <Box className="dashboard-card">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
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

          <Grid item xs={12} md={4}>
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

          <Grid item xs={12} md={4}>
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

          <Grid item xs={12} md={3}>
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

      <Box className="transaction-table">
        <TableContainer component={Paper}>
          <Box className="table-heading">
            <p className="heading-title">Transactions</p>
            <Box className="heading-select">
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={transaction}
                  onChange={handleChangeTransaction}
                >
                  <MenuItem >All Transactions</MenuItem>
                  <MenuItem >...</MenuItem>
                  <MenuItem >...</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={transaction}
                  onChange={handleChangeTransaction}
                >
                  <MenuItem >All Transactions</MenuItem>
                  <MenuItem >...</MenuItem>
                  <MenuItem >...</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-head">Date</TableCell>
                <TableCell className="table-head">ID</TableCell>
                <TableCell className="table-head">Value</TableCell>
                <TableCell className="table-head">Status</TableCell>
                <TableCell className="table-head">Description</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="table-values">{row.date}</TableCell>
                  <TableCell className="table-values">{row.id}</TableCell>
                  <TableCell className="table-values">{row.value}</TableCell>
                  <TableCell
                    className="table-status"
                    sx={{
                      background:
                        row.status === "Completed"
                          ? "#15803D"
                          : row.status === "Pending"
                          ? "#F38A20"
                          : "#DC2626",
                      color: "#F0FDF4",
                      borderRadius: "20px",
                      padding: "6px 6px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell className="table-values">
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="pagination">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          size="small"
        />
        <Typography variant="p" className="pagination-text">
          Showing 10 items out of 95
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
