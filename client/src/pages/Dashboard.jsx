import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import RightSideBar from "../components/Sidebar/RightSideBar";
import Card from "../components/Dashboard/Card";
import CardForm from "../components/Dashboard/CardForm";
import BasicLayout from "../components/BasicLayout";
import useFetch from "../hook/useFetch";
import axios from "axios";
import IncomeChart from "../components/Dashboard/IncomeChart";
import Expenses from "../components/Summary/Expenses";
function Dashboard() {
  // console.log("///", primaryCard);

  return (
    <BasicLayout>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        md={12}
      >
        {/* <Grid
          item
          md={4}
          style={{
            marginTop: "8vh",

            backgroundColor: "white",
            boxShadow: "10px 10px 18px rgba(60, 64, 67, 0.4)",
            borderRadius: "8%",
          }}
        >
          {loading ? (
            <div>Please wait for data</div>
          ) : (
            <Card
              number={primaryCard.number}
              name={primaryCard.name}
              expiry={primaryCard.expiry}
              cvc={primaryCard.cvc}
              // preview={false}
            />
          )}
        </Grid> */}
        {/* <Grid item md={2}></Grid> */}
        <Grid
          item
          md={10}
          justifyContent="center"
          style={{
            marginTop: "8vh",
            // border: "1px solid black",
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
            // border: "1px solid black",
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
        {/* <CardForm /> */}
      </Grid>
    </BasicLayout>
  );
}

export default Dashboard;
