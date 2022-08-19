import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MainPageTopNav from "../../../components/mainpagetopnav/MainPageTopNav";
import "./Customers.scss";
import UserIcon from "./../../../assets/icons/userIcon.svg";
import plusIcon from "./../../../assets/icons/plusIcon.svg";

const Customers = () => {
  const [tableHead] = useState([
    { title: "Name" },
    { title: "Email Address" },
    { title: "Number" },
    { title: "Status" },
  ]);

  const [tableData, ] = useState([
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Not Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Not Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Not Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Not Active",
    },
    {
      name: "Mujhiz West",
      email: "Forbesguy@gmail.com",
      number: "+234 803 123 4567",
      status: "Not Active",
    },
  ]);

  return (
    <div className="customer">
      <MainPageTopNav name="Customers" />
      <Box className="customers-table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customer table">
            <TableHead>
              <TableRow>
                {tableHead.map((item) => (
                  <TableCell className="table-head-title">{item.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="table-body-values" scope="row">
                    <Box 
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={UserIcon}
                        alt="user"
                        sx={{
                          width:"30px",
                          marginRight: "8px",
                        }}
                      />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell className="table-body-values" align="right">{row.email}</TableCell>
                  <TableCell className="table-body-values" align="right">{row.number}</TableCell>
                  <TableCell className="table-body-values" align="right">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "8px 16px",
                        // width: "78.9px",
                        height: " 36px",
                        background:
                          row.status === "Active" ? "#15803D" : "#DC2626",
                        borderRadius: "6px",
                        color: "#ffffff",
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="add-customer">
        <Button className="add-customer-btn">
          <Box component="img" src={plusIcon} /> Add Customer
        </Button>
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

export default Customers;
