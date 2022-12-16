import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  getTransactions,
  reset,
} from "../features/transactions/transactionSlice";
import RightSideBar from "../components/Sidebar/RightSideBar";
import Card from "../components/Dashboard/Card";
import CardForm from "../components/Dashboard/CardForm";
import BasicLayout from "../components/BasicLayout";

import axios from "axios";
import IncomeChart from "../components/Dashboard/IncomeChart";
import Expenses from "../components/Summary/Expenses";
function Dashboard() {
  const { transactions, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.transactions
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getTransactions());
  }, [isError, message, dispatch]);
  return (
    <BasicLayout>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        md={12}
      >
        <Grid
          item
          md={10}
          justifyContent="center"
          style={{
            marginTop: "8vh",

            backgroundColor: "white",
            boxShadow: "10px 10px 18px rgba(60, 64, 67, 0.4)",
            borderRadius: "40px",
            padding: "0.5rem",
          }}
        >
          <Grid
            item
            style={{
              fontSize: "1.7rem",
              fontWeight: "600",
              margin: "1rem",
              color: "#290c64",
            }}
          >
            Account Details
          </Grid>
          <IncomeChart />
        </Grid>
        <Grid
          container
          item
          md={10}
          style={{
            marginTop: "8vh",

            height: "27vh",
            backgroundColor: "white",
            boxShadow: "10px 10px 18px rgba(60, 64, 67, 0.4)",
            borderRadius: "40px",
            padding: "0.5rem",
          }}
        >
          <Grid
            item
            style={{
              fontSize: "1.7rem",
              fontWeight: "600",
              margin: "1rem",
              color: "#290c64",
            }}
          >
            Expenses Summary
          </Grid>
          <Expenses />
        </Grid>
      </Grid>
    </BasicLayout>
  );
}

export default Dashboard;
